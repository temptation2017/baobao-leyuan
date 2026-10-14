const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { chromium } = require('playwright');

const root = path.resolve(__dirname, '..');
let browser, server, baseUrl;
before(async () => {
  server = http.createServer((req, res) => {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
      res.writeHead(404).end(); return;
    }
    const type = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
      '.css': 'text/css; charset=utf-8', '.webp': 'image/webp', '.png': 'image/png', '.mp3': 'audio/mpeg' }[path.extname(file)];
    res.setHeader('Content-Type', type || 'application/octet-stream');
    fs.createReadStream(file).pipe(res);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  baseUrl = 'http://127.0.0.1:' + server.address().port;
  browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
});
after(async () => {
  if (browser) await browser.close();
  if (server) await new Promise(resolve => server.close(resolve));
});

async function openPage(t, init) {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.clock.install();
  await page.addInitScript(() => {
    window.alert = () => {};
    // 明确控制音频结束时机，避免设备编解码和自动播放策略影响状态测试。
    window.Audio = class {
      constructor(src) { this.src = src; this.onended = null; this.onerror = null; this.paused = true; }
      play() { this.paused = false; return Promise.resolve(); }
      pause() { this.paused = true; }
    };
  });
  if (init) await page.addInitScript(init);
  t.after(async () => { await context.close(); assert.deepEqual(errors, [], '不应出现页面脚本异常'); });
  await page.goto(baseUrl, { waitUntil: 'load' });
  return page;
}

test('首页不提前创建内容卡片，进入后内容完整，重复进入不会叠加', async t => {
  const page = await openPage(t);
  assert.ok((await page.locator('#wDailyImg').getAttribute('src')).startsWith('assets/animals/'));
  await page.locator('#wDaily').click();
  assert.equal(await page.locator('.screen.active').getAttribute('id'), 'zoodetail');
  await page.locator('#zoodetail .backbtn').click();
  assert.equal(await page.locator('.screen.active').getAttribute('id'), 'zoo');
  assert.ok(await page.locator('#zooTabs > *').count() > 0);
  await page.evaluate(() => go('home'));
  const lists = [['animals', 'acar', 'ANIMALS'], ['shapes', 'shapeGrid', 'SHAPES'],
    ['colors', 'colorGrid', 'COLORS'], ['candy', 'candyGrid', 'CANDIES'],
    ['hanzipic', 'hzcar', 'HANZI'], ['storylist', 'slist', 'STORIES']];
  for (const [screen, id, data] of lists) {
    assert.equal(await page.locator('#' + id + ' > *').count(), 0);
    const expected = await page.evaluate(data + '.length');
    await page.evaluate(id => go(id), screen);
    assert.equal(await page.locator('#' + id + ' > *').count(), expected);
    await page.evaluate(() => go('home'));
    await page.evaluate(id => go(id), screen);
    assert.equal(await page.locator('#' + id + ' > *').count(), expected);
  }
  await page.evaluate(() => go('animals'));
  assert.match(await page.locator('#acount').textContent(), /^1 \/ \d+$/);
  await page.evaluate(() => go('hanzipic'));
  assert.match(await page.locator('#hzcount').textContent(), /^1 \/ \d+$/);
});

test('连续点击正确答案只加一颗星，返回首页后不会被下一题拉回', async t => {
  const page = await openPage(t);
  const cases = [
    ['startFind()', '#findGrid .fopt', 'findTarget.n || findTarget.name', true],
    ['startCount()', '#countOpts .copt', 'String(countN)'],
    ['startShapeQuiz()', '#shapeOpts .shapeopt', 'shapeTarget.n'],
    ['startColorQuiz()', '#colorOpts .coloropt', 'colorTarget.n'],
    ['startCandyQuiz()', '#candyOpts .candyopt', 'candyTarget.n'],
    ['startHanziQuiz()', '#hzOpts .hzopt', 'hzTarget.c']
  ];
  for (const [start, selector, answer, image] of cases) {
    await page.evaluate(start);
    const expected = await page.evaluate(answer);
    const before = await page.evaluate(() => stars);
    await page.locator(selector).evaluateAll((elements, { expected, image }) => {
      const button = elements.find(el => (image ? el.querySelector('img').alt : el.getAttribute('aria-label') || el.textContent) === expected);
      if (!button) throw new Error('缺少正确选项：' + expected);
      button.click(); button.click(); button.click();
    }, { expected, image });
    assert.equal(await page.evaluate(() => stars), before + 1);
    await page.evaluate(() => go('home'));
    await page.clock.runFor(2200);
    assert.equal(await page.locator('.screen.active').getAttribute('id'), 'home');
  }
});

test('动物世界考一考的后续题目仍来自已选择的分类', async t => {
  const page = await openPage(t);
  const category = await page.evaluate(() => {
    const pool = ANIMALS_ALL.filter(a => a.img && a.c === ANIMAL_CATS[0]);
    startFind(pool); return pool[0].c;
  });
  const name = await page.evaluate(() => findTarget.n);
  await page.locator('#findGrid .fopt').evaluateAll((elements, name) => elements.find(el => el.querySelector('img').alt === name).click(), name);
  await page.clock.runFor(1900);
  assert.equal(await page.evaluate(() => findTarget.c), category);
});

test('故事保留自动翻页，旧音频和手动翻页不会重复触发翻页', async t => {
  const page = await openPage(t);
  await page.evaluate(() => { openReader(0); curAudio.onended(); });
  await page.clock.runFor(750);
  assert.equal(await page.evaluate(() => cur), 1);
  await page.evaluate(() => { curAudio.onended(); rGo(2); });
  await page.clock.runFor(750);
  assert.equal(await page.evaluate(() => cur), 2);
  await page.evaluate(() => {
    const oldEnd = curAudio.onended;
    openReader(1); oldEnd();
  });
  await page.clock.runFor(750);
  assert.equal(await page.evaluate(() => cur), 0);
  await page.evaluate(() => { curAudio.onended(); go('home'); });
  await page.clock.runFor(750);
  assert.equal(await page.locator('.screen.active').getAttribute('id'), 'home');
});

test('离开页面后迟到的家人录音不会播放，录音 URL 用完会释放', async t => {
  const page = await openPage(t);
  await page.evaluate(async () => {
    let resolve;
    idbGet = () => new Promise(r => { resolve = r; });
    const pending = playDad('test');
    go('home'); resolve(new Blob(['audio'])); await pending;
    if (curAudio !== null) throw new Error('离开页面后仍播放录音');
    idbGet = async () => new Blob(['audio']);
    await playDad('test');
    if (!curAudioUrl || !curAudioUrl.startsWith('blob:')) throw new Error('录音 URL 无效');
    let revoked = false;
    const revoke = URL.revokeObjectURL;
    URL.revokeObjectURL = url => { revoked = url === curAudioUrl; revoke.call(URL, url); };
    stopAll();
    if (!revoked || curAudioUrl !== null) throw new Error('录音 URL 未释放');
  });
});

test('离开浏览器页面时停止声音并使旧播放回调失效', async t => {
  const page = await openPage(t);
  await page.evaluate(() => {
    openReader(0);
    const audio = curAudio, oldEnd = audio.onended;
    window.dispatchEvent(new Event('pagehide'));
    if (!audio.paused || curAudio !== null) throw new Error('离开页面后声音未停止');
    oldEnd();
  });
  await page.clock.runFor(750);
  assert.equal(await page.evaluate(() => cur), 0);
});

test('存储禁用或记录损坏时仍能打开游戏和累计星星', async t => {
  const blocked = await openPage(t, () => Object.defineProperty(window, 'localStorage', { get() { throw new Error('storage disabled'); } }));
  await blocked.evaluate(() => { startCount(); addStar(); addStar(); openHabits(); toggleTheme(); });
  assert.equal(await blocked.evaluate(() => stars), 2);
  const corrupt = await openPage(t, () => {
    localStorage.setItem('park_stars', 'invalid'); localStorage.setItem('dad_keys', '{}');
    localStorage.setItem('park_mix_found', 'null');
  });
  assert.equal(await corrupt.evaluate(() => stars), 0);
  await corrupt.evaluate(() => { openStudioHome(); openMixlab(); });
});

test('家长选择的时长刷新后保留，休息提醒在新一节仍会出现', async t => {
  const page = await openPage(t);
  await page.evaluate(() => setRest(10));
  await page.reload({ waitUntil: 'load' });
  assert.equal(await page.evaluate(() => restMin), 10);
  await page.clock.runFor(10 * 60 * 1000 + 1);
  assert.equal(await page.locator('#restModal').evaluate(el => el.classList.contains('show')), true);
  await page.evaluate(() => closeRest());
  assert.equal(await page.locator('.screen.active').getAttribute('id'), 'home');
  await page.clock.runFor(10 * 60 * 1000 + 1);
  assert.equal(await page.locator('#restModal').evaluate(el => el.classList.contains('show')), true);
});

test('所有主页功能可以打开，离开泡泡后停止产生泡泡', async t => {
  const page = await openPage(t);
  const actions = await page.locator('.appcard').evaluateAll(elements => elements.map(el => el.getAttribute('onclick')));
  for (const action of actions) {
    await page.evaluate(action);
    assert.notEqual(await page.locator('.screen.active').getAttribute('id'), 'home', action);
    await page.evaluate(() => go('home'));
  }
  await page.evaluate(() => openBubbles());
  await page.clock.runFor(850);
  assert.ok(await page.locator('#bubWrap > *').count() > 0);
  await page.evaluate(() => go('home'));
  assert.equal(await page.evaluate(() => bubTimer), null);
});

test('首页精选与分类保留全部功能，分类支持键盘切换', async t => {
  const page = await openPage(t);
  assert.equal(await page.locator('.appcard:visible').count(), 8);
  const visited = new Set();
  for(const name of ['认识世界','故事与阅读','动手创作','益智游戏','生活小事']){
    await page.getByRole('tab',{name,exact:true}).click();
    const entries=await page.locator('.appcard:visible').evaluateAll(elements=>elements.map(el=>el.getAttribute('onclick')));
    assert.ok(entries.length>0);
    entries.forEach(entry=>visited.add(entry));
  }
  assert.equal(visited.size,27);
  await page.getByRole('tab',{name:'精选',exact:true}).click();
  await page.getByRole('tab',{name:'精选',exact:true}).press('ArrowRight');
  assert.equal(await page.getByRole('tab',{name:'认识世界',exact:true}).getAttribute('aria-selected'),'true');
});

test('卡片有明确翻页按钮，边界不可继续翻页', async t => {
  const page=await openPage(t);
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.evaluate(()=>go('animals'));
  assert.equal(await page.locator('[data-carousel="acar"][data-step="-1"]').isDisabled(),true);
  await page.locator('[data-carousel="acar"][data-step="1"]').click();
  await page.clock.runFor(100);
  assert.match(await page.locator('#acount').textContent(),/^2 \/ /);
  assert.equal(await page.locator('[data-carousel="acar"][data-step="-1"]').isDisabled(),false);
});

test('故事可以暂停再继续，页码和播放位置不会重置',async t=>{
  const page=await openPage(t);
  await page.evaluate(()=>{openReader(0);rGo(2);});
  await page.locator('#readerPlay').click();
  assert.equal(await page.evaluate(()=>curAudio.paused),true);
  assert.match(await page.locator('#readerPlay').textContent(),/听一听/);
  await page.locator('#readerPlay').click();
  assert.equal(await page.evaluate(()=>curAudio.paused),false);
  assert.equal(await page.evaluate(()=>cur),2);
  assert.match(await page.locator('#readerProgress').textContent(),/第 3 页/);
});

test('家长验证可删除输入，弹窗管理焦点，设置具有明确选中态',async t=>{
  const page=await openPage(t);
  await page.locator('.parentlink').click();
  await page.keyboard.type('12');await page.keyboard.press('Backspace');
  assert.equal(await page.locator('#gateA').textContent(),'1');
  await page.getByRole('button',{name:'清空',exact:true}).click();
  const answer=await page.evaluate(()=>String(gA+gB));
  await page.keyboard.type(answer);await page.keyboard.press('Enter');
  assert.equal(await page.locator('#gateDur').isVisible(),true);
  await page.getByRole('button',{name:'10 分钟',exact:true}).click();
  assert.equal(await page.locator('[data-duration="10"]').getAttribute('aria-pressed'),'true');
  assert.equal(await page.locator('#app').evaluate(el=>el.inert),true);
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('#app').evaluate(el=>el.inert),false);
  assert.equal(await page.locator('.parentlink').evaluate(el=>el===document.activeElement),true);
});

test('外观只改变界面，色彩学习保留真实颜色，阅读配色保持可读',async t=>{
  const page=await openPage(t);
  await page.evaluate(()=>go('colors'));
  const color=await page.locator('.cdot').first().evaluate(el=>getComputedStyle(el).backgroundColor);
  for(const theme of ['paper','ink']){
    await page.evaluate(theme=>applyTheme(theme),theme);
    assert.equal(await page.locator('.cdot').first().evaluate(el=>getComputedStyle(el).backgroundColor),color);
    await page.evaluate(()=>openReader(0));
    const bg=await page.locator('#reader').evaluate(el=>getComputedStyle(el).backgroundColor);
    assert.ok(bg!=='rgb(31, 53, 48)');
    await page.evaluate(()=>go('colors'));
  }
});

test('天气插图正确编码，重新选择内部标签不保留旧任务',async t=>{
  const page=await openPage(t);
  await page.evaluate(()=>{openWeather();setWthTab(1);setWthTab(0);});
  await page.clock.runFor(500);
  assert.doesNotMatch(await page.locator('#wthStage').textContent(),/U0001F/);
  assert.equal(await page.locator('#weather').evaluate(el=>el.scrollWidth<=el.clientWidth+2),true);
});

test('画纸失败时有明确提示，尚未加载时不能领取完成奖励',async t=>{
  const page=await openPage(t);
  await page.route('**/assets/coloring/**',route=>route.abort());
  await page.evaluate(()=>openPad(COLORING_TPL[0]));
  await page.waitForFunction(()=>document.getElementById('padFb').textContent.includes('暂时'));
  assert.equal(await page.locator('#padDoneBtn').isDisabled(),true);
  assert.match(await page.locator('#padFb').textContent(),/换一张/);
});

test('汉字搜索可打开并关闭详情，返回后保留可操作的搜索结果',async t=>{
  const page=await openPage(t);
  await page.evaluate(()=>go('hanzi'));
  await page.locator('#hzSearchInput').fill('日月');
  await page.locator('#hzSearchBtn').click();
  await page.locator('#hzSearchRes .hztile').first().click();
  assert.equal(await page.locator('#hzDetail').getAttribute('aria-hidden'),'false');
  assert.equal(await page.locator('#app').evaluate(el=>el.inert),true);
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('#hzDetail').getAttribute('aria-hidden'),'true');
  assert.equal(await page.locator('#hzTiles .hztile').count(),2);
  assert.equal(await page.locator('#app').evaluate(el=>el.inert),false);
});
