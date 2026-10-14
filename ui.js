/* Presentation and interaction system. Gameplay remains in app.js. */
const SCREEN_DESIGN = {
  animals:['认识世界','点图片听名字，也可以左右滑动，认识下一位朋友。'],
  zoo:['认识世界','选一个分类，点小动物看看它的故事。'],
  zoodetail:['认识世界','认识这位朋友，再听听它的名字和小知识。'],
  findit:['认识世界','听一听名字，点你找到的那位朋友。'],
  shapes:['认识世界','点一点图形，听听它叫什么。'],
  shapequiz:['认识世界','看看形状，点你找到的答案。'],
  colors:['认识世界','点一点色块，认识每一种颜色。'],
  colorquiz:['认识世界','看看颜色，选你找到的那一种。'],
  candy:['认识世界','看看糖果的形状和颜色，点一点听名字。'],
  candyquiz:['认识世界','看看糖果，找到题目里的那一种。'],
  count:['认识世界','点着数一数，再选一个答案。'],
  hanzi:['故事与阅读','先从看图识字开始，也可以找一个熟悉的字。'],
  hanzipic:['故事与阅读','点图片听讲解，左右滑动认识更多汉字。'],
  hzgrid:['故事与阅读','点一个汉字，听听读音。'],
  hanziquiz:['故事与阅读','听听读音，找到那个汉字。'],
  storylist:['故事与阅读','选一本喜欢的故事，和想象一起出发。'],
  reader:['故事与阅读',''], poems:['故事与阅读','选一首小诗，和大人一起听听。'],
  poemview:['故事与阅读',''], studio:['故事与阅读','大人可以把熟悉的声音，留在宝宝的故事里。'],
  coloring:['动手创作','选一个喜欢的主题，准备当小画家。'],
  colorgrid:['动手创作','点一张画纸，涂上自己的颜色。'],
  colorpad:['动手创作','先选颜色，再点画里的空白地方。'],
  trace:['动手创作','选一个数字，沿着线条用手指描一描。'],
  band:['动手创作','选一件乐器，敲出自己的小节奏。'],
  mixlab:['动手创作','选两种颜色，看看搅拌后有什么新发现。'],
  puzzle:['益智游戏','点空格旁边的一块，把图片慢慢拼完整。'],
  bubbles:['益智游戏','轻轻点一下泡泡，听心里的小小“啵”。'],
  memory:['益智游戏','翻开两张卡，找到相同的朋友。'],
  shadow:['益智游戏','先点一个影子，再找到它的朋友。'],
  diffs:['益智游戏','对比两幅图，找到三个不一样的地方。'],
  habits:['生活小事','每完成一件小事，就点一下做个记录。'],
  emotion:['生活小事','认识自己的心情，也读懂朋友的表情。'],
  hygiene:['生活小事','按顺序点卡片，一起学会刷牙和洗手。'],
  feed:['生活小事','小动物饿了，选一份它喜欢的食物吧。'],
  vehicle:['认识世界','点车车听声音，也可以玩一局猜声音。'],
  weather:['生活小事','看看天气，想想今天穿什么。'],
  safety:['生活小事','认识红绿灯，和大人一起学安全。'],
  goodnight:['生活小事','做好睡前准备，让今天慢慢安静下来。']
};
const CATEGORY_LABELS = {featured:'从喜欢的开始',know:'认识大大的世界',reading:'让想象慢慢长大',create:'动动小手，创造一点',games:'小脑袋，想一想',life:'一起练习生活的小事'};
let selectedCategory = 'featured', toastTimer = null;
const overlayFocus = new Map();

function selectActivityCategory(category, button){
  if(!CATEGORY_LABELS[category]) return;
  selectedCategory = category;
  document.querySelectorAll('.category-tab').forEach(tab=>{
    const selected = tab.dataset.filter === category;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  let count = 0;
  document.querySelectorAll('.appcard').forEach(card=>{
    const show = category === 'featured' ? card.dataset.featured === 'true' : card.dataset.category === category;
    card.hidden = !show;
    if(show) count++;
  });
  document.getElementById('activityHeading').textContent = CATEGORY_LABELS[category];
  document.getElementById('activitySummary').textContent = count+' 个小乐园，等你来探索';
  document.getElementById('activityGrid').setAttribute('aria-label',CATEGORY_LABELS[category]);
  if(button) button.scrollIntoView({block:'nearest',inline:'nearest'});
}

function localAnimalPool(){
  return ANIMALS.filter(a=>a.img && a.img.startsWith('assets/')).map(a=>({
    n:a.name, name:a.name, e:a.emoji, c:'动物朋友', s:a.sound, f:a.fact, img:a.img, en:a.en, audio:a.audio
  }));
}
function moveCarousel(id, direction){
  const element = document.getElementById(id);
  if(!element || !element.clientWidth) return;
  const index = Math.min(element.children.length-1,Math.max(0,Math.round(element.scrollLeft/element.clientWidth)+direction));
  element.scrollTo({left:index*element.clientWidth,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
}
function syncCarousel(id){
  const element = document.getElementById(id);
  if(!element || !element.clientWidth) return;
  const index = Math.round(element.scrollLeft/element.clientWidth);
  document.querySelectorAll('[data-carousel="'+id+'"]').forEach(button=>{
    button.disabled = Number(button.dataset.step)<0 ? index<=0 : index>=element.children.length-1;
  });
}
function syncSettings(){
  markNarrator();
  document.querySelectorAll('[data-duration]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.duration)===restMin)));
  document.querySelectorAll('[data-theme]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.theme===curTheme())));
}
function syncThemeUI(){
  syncSettings();
  const label = {color:'柔和彩色',paper:'暖暖纸感',ink:'简洁专注'}[curTheme()];
  const button = document.getElementById('themeBtn');
  if(button){button.setAttribute('aria-label','当前外观：'+label+'，点击切换');button.title = label+' · 点击切换';}
  document.querySelector('meta[name="theme-color"]').content = getComputedStyle(document.body).getPropertyValue('--canvas').trim();
}
function showToast(message){
  const element = document.getElementById('uiToast');
  element.textContent = message; element.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(()=>element.classList.remove('show'),2800);
}
function gateInput(key){
  if(key === 'clear') gInput = '';
  else if(key === 'backspace') gInput = gInput.slice(0,-1);
  else if(gInput.length<2 && /^\d$/.test(String(key))) gInput += key;
  document.getElementById('gateA').textContent = gInput;
  document.getElementById('gateMsg').textContent = '';
}
function showHzSearchResults(found, index){
  hzCurList = found;
  const grid = document.getElementById('hzTiles');
  grid.innerHTML = '';
  found.forEach((entry,i)=>{
    const tile = document.createElement('button'); tile.className='hztile'; tile.dataset.i=i;
    const char=document.createElement('span');char.className='hzc';char.textContent=entry[0];
    const pinyin=document.createElement('span');pinyin.className='hzp';pinyin.textContent=entry[1];
    tile.append(char,pinyin);grid.appendChild(tile);
  });
  document.getElementById('hzGridTitle').textContent='查找结果';
  go('hzgrid');openHzDetail(index);
}
function showOverlay(id){
  const overlay = document.getElementById(id);
  if(!overlay) return;
  stopAll();
  overlayFocus.set(id,document.activeElement);
  document.querySelectorAll('.modal.show').forEach(other=>{ if(other!==overlay){other.classList.remove('show');other.setAttribute('aria-hidden','true');} });
  overlay.classList.add('show'); overlay.setAttribute('aria-hidden','false');
  document.getElementById('app').inert = true;
  document.getElementById('app').setAttribute('aria-hidden','true');
  enhanceRoot(overlay);
  queueMicrotask(()=>overlay.querySelector('button:not(:disabled)')?.focus({preventScroll:true}));
}
function closeOverlay(id){
  const overlay = document.getElementById(id);
  if(!overlay) return;
  overlay.classList.remove('show'); overlay.setAttribute('aria-hidden','true');
  if(!document.querySelector('.modal.show')){
    document.getElementById('app').inert = false;
    document.getElementById('app').removeAttribute('aria-hidden');
  }
  const previous = overlayFocus.get(id);
  if(previous?.isConnected && previous.getClientRects().length && !previous.closest('.modal')) previous.focus({preventScroll:true});
  else document.querySelector('.screen.active .backbtn,.screen.active button')?.focus({preventScroll:true});
  overlayFocus.delete(id);
}
function syncPlayback(){
  const button = document.getElementById('readerPlay');
  if(!button) return;
  const playing = Boolean(curAudio && !curAudio.paused && !curAudio.ended);
  button.innerHTML = uiIcon(playing?'pause':'play')+'<span>'+(playing?'暂停一下':'听一听')+'</span>';
  button.setAttribute('aria-label',playing?'暂停故事':'播放故事');
}
function toggleReaderPlayback(){
  if(curAudio && !curAudio.paused){curAudio.pause();audioRequest++;syncPlayback();return;}
  if(curAudio && curAudio.paused && !curAudio.ended){curAudio.play().then(syncPlayback).catch(()=>showToast('点“听一听”再试一次'));return;}
  rSpeak();
}
function enhanceScreen(screen){
  if(!screen) return;
  const design = SCREEN_DESIGN[screen.id];
  const heading = screen.querySelector('.toptitle');
  if(heading){
    heading.setAttribute('role','heading'); heading.setAttribute('aria-level','1');
    if(design) heading.dataset.section = design[0];
    screen.setAttribute('aria-label',heading.textContent.trim());
    document.title = heading.textContent.trim()+' · 宝宝乐园';
  }else if(screen.id==='home') document.title = '宝宝乐园 · 一起发现大世界';
  if(design?.[1] && !screen.querySelector('.activity-hint')){
    const hint = document.createElement('p'); hint.className = 'activity-hint'; hint.textContent = design[1];
    screen.querySelector('.topbar').after(hint);
  }
  enhanceRoot(screen);
  for(const id of ['acar','hzcar','zdcar']) if(screen.querySelector('#'+id)) syncCarousel(id);
  screen.scrollTop = 0;
  const focusHeading=heading || screen.querySelector('h1');
  if(focusHeading && !screen.contains(document.activeElement)){focusHeading.tabIndex=-1;focusHeading.focus({preventScroll:true});}
}
function enhanceRoot(root){
  const nodes = selector => [...(root.matches?.(selector)?[root]:[]),...root.querySelectorAll(selector)];
  nodes('img.starico,img.btnico,img.lockico,.micbtn img,.enspk img,.enbtn img').forEach(img=>{
    const holder = document.createElement('span'); holder.className = img.className;
    if(img.id) holder.id = img.id;
    const icon = img.classList.contains('starico')?'star':img.classList.contains('lockico')?'lock':img.closest('.micbtn')?'mic':img.closest('.enbtn,.enspk')?'sound':'search';
    holder.dataset.icon = icon; img.replaceWith(holder);
  });
  nodes('[data-icon]:not([data-icon-ready])').forEach(holder=>{
    holder.dataset.iconReady = 'true';
    holder.innerHTML = uiIcon(holder.dataset.icon,holder.classList.contains('card-arrow-slot')?'card-arrow':'');
  });
  const oldIcons = {spk:'sound',play:'play',prev:'back',next:'next',dice:'dice',redo:'redo',bulb:'bulb'};
  nodes('.ic:not([data-icon-ready])').forEach(holder=>{
    const key = [...holder.classList].find(name=>name.startsWith('ic-'))?.slice(3);
    holder.dataset.iconReady = 'true'; holder.innerHTML = uiIcon(oldIcons[key]||'sparkle');
  });
  nodes('.backbtn:not([data-control-ready]),.hzdx:not([data-control-ready])').forEach(button=>{
    button.dataset.controlReady='true';button.innerHTML=uiIcon(button.classList.contains('hzdx')?'close':'back');
    if(!button.hasAttribute('aria-label')) button.setAttribute('aria-label',button.classList.contains('hzdx')?'关闭汉字详情':button.getAttribute('onclick')?.includes("'home'")?'返回首页':'返回上一页');
  });
  nodes('[onclick],.fopt,.shapeitem,.colorcard,.candyitem,.poemcard,.groupcard,.hubcard,.tplcard,.hztile,.zcard,.hitem,.stutoggle,.acard>img,.hzimg,.enspk').forEach(element=>{
    if(element instanceof SVGElement || /^(BUTTON|A|INPUT|SELECT|TEXTAREA)$/.test(element.tagName)) return;
    if(!element.hasAttribute('role')) element.setAttribute('role','button');
    if(!element.hasAttribute('tabindex')) element.tabIndex=0;
    if(element.tagName==='IMG') element.setAttribute('aria-label','听听'+element.alt);
    if(element.classList.contains('stutoggle')){element.setAttribute('role','switch');element.setAttribute('aria-checked',String(dadOn));}
  });
  nodes('.ztab,.chip,.cptab,.hygtab,.padtool,.sw').forEach(control=>{
    if(!control.hasAttribute('type')) control.type='button';
    control.setAttribute('aria-pressed',String(control.classList.contains('on')));
  });
  nodes('.enspk').forEach(control=>control.setAttribute('aria-label','听听英文名字'));
  nodes('.diffzone').forEach((zone,index)=>{
    zone.setAttribute('role','button');zone.setAttribute('tabindex','0');zone.setAttribute('aria-label','检查图中的第 '+(index+1)+' 处位置');
    const matrix=zone.getScreenCTM();
    if(matrix && zone.tagName.toLowerCase()==='circle'){
      const scale=Math.min(Math.hypot(matrix.a,matrix.b),Math.hypot(matrix.c,matrix.d));
      if(scale>0) zone.setAttribute('r',String(Math.max(Number(zone.getAttribute('r')),22.1/scale)));
    }
  });
  nodes('.xbar').forEach(key=>{
    const rgb=getComputedStyle(key).backgroundColor.match(/[\d.]+/g);
    if(!rgb || rgb.length<3) return;
    const luminance=rgb.slice(0,3).map(Number).map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4;}).reduce((n,v,i)=>n+v*[.2126,.7152,.0722][i],0);
    key.style.color=1.05/(luminance+.05)>(luminance+.05)/.074?'#FFFFFF':'#1E2E24';
  });
  nodes('.findfb,.countfb,.puzfb,.memfb,.eqfb,.shdfb,.mixfb,.hygfb,.feedfb,.tracefb,.vehfb,.wthfb,.safefb,.bandfb,#padFb').forEach(element=>{
    element.setAttribute('role','status');element.setAttribute('aria-live','polite');
  });
  nodes('button').forEach(button=>{if(!button.hasAttribute('type')) button.type='button';});
  nodes('img').forEach(img=>{if(img.complete && img.naturalWidth===0 && img.getAttribute('src')) fallbackImage(img);});
}
function fallbackImage(img){
  if(!img.isConnected || img.dataset.imageFallback || !img.getAttribute('src')) return;
  img.dataset.imageFallback='true';
  const body = UI_ICONS[img.closest('.scard')?'book':'paw'];
  const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160"><rect width="160" height="160" rx="20" fill="#EFF3ED"/><svg x="54" y="42" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#64796A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">'+body+'</svg><text x="80" y="124" text-anchor="middle" font-size="12" fill="#64796A" font-family="sans-serif">图片暂未加载</text></svg>';
  img.src = 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
  img.title = img.alt+' · 图片暂未加载';
}

document.addEventListener('error',event=>{if(event.target instanceof HTMLImageElement) fallbackImage(event.target);},true);
document.addEventListener('keydown',event=>{
  const overlay = document.querySelector('.modal.show');
  if(overlay){
    if(event.key==='Escape' && overlay.id!=='restModal'){event.preventDefault();closeOverlay(overlay.id);return;}
    if(overlay.id==='gateModal' && document.getElementById('gateDur').style.display==='none'){
      if(/^\d$/.test(event.key)){event.preventDefault();gateInput(event.key);return;}
      if(event.key==='Backspace'){event.preventDefault();gateInput('backspace');return;}
      if(event.key==='Enter'){event.preventDefault();gateCheck();return;}
    }
    if(event.key==='Tab'){
      const controls=[...overlay.querySelectorAll('button:not(:disabled),input,[tabindex="0"]')].filter(el=>el.getClientRects().length);
      const first=controls[0],last=controls.at(-1);
      if(event.shiftKey && document.activeElement===first){event.preventDefault();last?.focus();}
      else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first?.focus();}
    }
  }
  const tab=event.target.closest('.category-tab');
  if(tab && ['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){
    event.preventDefault();const tabs=[...document.querySelectorAll('.category-tab')],index=tabs.indexOf(tab);
    const next=event.key==='Home'?0:event.key==='End'?tabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
    selectActivityCategory(tabs[next].dataset.filter,tabs[next]);tabs[next].focus();return;
  }
  if(['Enter',' '].includes(event.key) && event.target.matches('[role="button"],[role="switch"]') && event.target.tagName!=='BUTTON'){
    event.preventDefault();event.target.dispatchEvent(new MouseEvent('click',{bubbles:true}));
  }
});
for(const id of ['acar','hzcar','zdcar']) document.getElementById(id).addEventListener('scroll',()=>syncCarousel(id),{passive:true});
window.addEventListener('resize',()=>{for(const id of ['acar','hzcar','zdcar']) syncCarousel(id);});

// Newly rendered game content uses the same icon and accessibility conventions.
let enhancementPending=false;
const observer = new MutationObserver(records=>{
  if(records.every(record=>record.type==='attributes')){
    for(const record of records){const el=record.target;if(el.matches('.ztab,.chip,.cptab,.hygtab,.padtool,.sw')) el.setAttribute('aria-pressed',String(el.classList.contains('on')));}
    return;
  }
  if(enhancementPending) return;
  enhancementPending=true;
  requestAnimationFrame(()=>{enhancementPending=false;const screen=document.querySelector('.screen.active');if(screen) enhanceRoot(screen);});
});
observer.observe(document.getElementById('app'),{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
const hanziDialog = document.getElementById('hzDetail');
hanziDialog.classList.add('modal');hanziDialog.style.removeProperty('display');hanziDialog.setAttribute('role','dialog');hanziDialog.setAttribute('aria-modal','true');hanziDialog.setAttribute('aria-labelledby','hzdChar');document.body.appendChild(hanziDialog);
document.querySelectorAll('.modal').forEach(overlay=>overlay.setAttribute('aria-hidden','true'));
document.querySelectorAll('.toptitle').forEach(heading=>{const design=SCREEN_DESIGN[heading.closest('.screen').id];if(design) heading.dataset.section=design[0];});
selectActivityCategory('featured');
enhanceRoot(document);
enhanceScreen(document.getElementById('home'));
syncThemeUI();syncPlayback();
