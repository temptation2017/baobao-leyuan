const fs=require('node:fs'),path=require('node:path'),http=require('node:http');
const {chromium}=require('playwright');
const root=path.resolve(__dirname,'..'),output=path.join(root,'test-results/design');
const cases=[
 ['home',"go('home')"],['animals',"go('animals')"],['findit','startFind(localAnimalPool())'],
 ['storylist',"go('storylist')"],['poems','openPoems()'],['poemview','openPoem(0)'],['reader','openReader(0)'],
 ['coloring',"go('coloring')"],['colorgrid','openColorCat(COLORING_TPL[0].c)'],['colorpad','openPad(COLORING_TPL[0])'],
 ['count','startCount()'],['shapes',"go('shapes')"],['shapequiz','startShapeQuiz()'],['colors',"go('colors')"],
 ['colorquiz','startColorQuiz()'],['candy',"go('candy')"],['candyquiz','startCandyQuiz()'],['hanzi',"go('hanzi')"],
 ['hanzipic',"go('hanzipic')"],['hzgrid','openHzGroup(0)'],['hanziquiz','startHanziQuiz()'],['habits','openHabits()'],
 ['studio','openStudioHome()'],['puzzle','startPuzzle()'],['bubbles','openBubbles()'],['memory','openMemory()'],
 ['band','openBand()'],['band-drum','openBand(); setBandTab(1)'],['band-shaker','openBand(); setBandTab(2)'],
 ['emotion','openEmotion()'],['emotion-quiz','openEmotion(); setEmotionTab(1)'],['shadow','openShadow()'],
 ['shadow-easy','openShadow(); setShdDiff(2)'],['shadow-hard','openShadow(); setShdDiff(4)'],
 ['memory-easy','openMemory(); setMemDiff(3)'],['memory-hard','openMemory(); setMemDiff(8)'],
 ['mixlab','openMixlab()'],['hygiene','openHygiene()'],['hygiene-wash','openHygiene(); setHygTab(1)'],['feed','openFeed()'],['trace','openTrace()'],
 ['vehicle','openVehicle()'],['vehicle-quiz','openVehicle(); setVehTab(1)'],['weather','openWeather()'],
 ['weather-quiz','openWeather(); setWthTab(1)'],['safety','openSafety()'],['safety-quiz','openSafety(); setSafeTab(1)'],
 ['diffs','openDiffs()'],['diffs-kitchen','openDiffs(); setDiffTab(1)'],['diffs-ocean','openDiffs(); setDiffTab(2)'],
 ['goodnight','openNight()'],['goodnight-breath','openNight(); setNightTab(1)'],
 ['zoo','openZoo()'],['zoodetail',"document.getElementById('wDaily').click()"],
 ['hanzi-dialog','openHzGroup(0); openHzDetail(0)'],['parent-gate','openGate()'],
 ['parent-settings','openGate(); gInput=String(gA+gB); gateCheck()']
];
async function main(){
 fs.mkdirSync(output,{recursive:true});
 const server=http.createServer((req,res)=>{
  const u=decodeURIComponent(new URL(req.url,'http://localhost').pathname),file=path.resolve(root,'.'+(u==='/'?'/index.html':u));
  if(!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404).end();return;}
  res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.webp':'image/webp','.mp3':'audio/mpeg'})[path.extname(file)]||'application/octet-stream');fs.createReadStream(file).pipe(res);
 });
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 const findings=[];const errors=[];
 try{
  for(const viewport of [{width:360,height:780},{width:390,height:844},{width:768,height:1024},{width:844,height:390}].filter(v=>!process.env.PARK_AUDIT_WIDTHS || process.env.PARK_AUDIT_WIDTHS.split(',').includes(String(v.width)))){
   const context=await browser.newContext({viewport,isMobile:true,hasTouch:true,reducedMotion:'reduce'});
   const page=await context.newPage();page.on('pageerror',error=>errors.push(viewport.width+': '+error.message));
   await page.route(/^https:\/\//,route=>route.abort());
   await page.addInitScript(()=>{window.Audio=class{constructor(src){this.src=src;this.paused=true;}play(){this.paused=false;return Promise.resolve();}pause(){this.paused=true;}};});
   await page.goto('http://127.0.0.1:'+server.address().port,{waitUntil:'load'});
   await page.waitForFunction(()=>typeof enhanceScreen==='function');
   for(const [name,action] of cases.filter(c=>!process.env.PARK_AUDIT_CASES || process.env.PARK_AUDIT_CASES.split(',').includes(c[0]))){
    await page.evaluate(()=>document.querySelectorAll('.modal.show').forEach(overlay=>closeOverlay(overlay.id)));
    await page.evaluate(action);await page.waitForTimeout(100);
    const result=await page.evaluate(()=>{
     const screen=document.querySelector('.modal.show')||document.querySelector('.screen.active'),visible=el=>{const r=el.getBoundingClientRect(),s=getComputedStyle(el);return r.width>0&&r.height>0&&s.visibility!=='hidden'&&r.bottom>0&&r.top<innerHeight&&!el.closest('[hidden]');};
     const textOverflow=[...screen.querySelectorAll('*')].filter(el=>visible(el)&&el.children.length===0&&el.clientWidth>0&&el.scrollWidth>el.clientWidth+3&&!['auto','scroll'].includes(getComputedStyle(el).overflowX)).map(el=>({text:el.textContent.trim().slice(0,32),class:el.className,width:el.clientWidth,content:el.scrollWidth})).filter(el=>el.text);
     const smallTargets=[...screen.querySelectorAll('button,[role="button"],[role="switch"]')].filter(visible).filter(el=>{const r=el.getBoundingClientRect();return r.width<43||r.height<43;}).map(el=>({label:el.getAttribute('aria-label')||el.textContent.trim().slice(0,24),class:el.className,width:Math.round(el.getBoundingClientRect().width),height:Math.round(el.getBoundingClientRect().height)}));
     const outerOverflow=screen.scrollWidth>screen.clientWidth+2;
     const wideElements=outerOverflow?[...screen.querySelectorAll('*')].filter(el=>visible(el)&&el.getBoundingClientRect().width>innerWidth+2).slice(0,8).map(el=>({tag:el.tagName,class:el.className,id:el.id,width:Math.round(el.getBoundingClientRect().width),scroll:el.scrollWidth})):[];
     return {active:screen.id,outerOverflow,textOverflow,smallTargets,wideElements,background:getComputedStyle(screen).backgroundColor};
    });
    findings.push({viewport,name,...result});
    if(viewport.width===390 || ['home','colorpad','hygiene','hanzi','reader'].includes(name)) await page.screenshot({path:path.join(output,viewport.width+'-'+name+'.png'),animations:'disabled'});
   }
   for(const theme of ['paper','ink']){
    await page.evaluate(()=>document.querySelectorAll('.modal.show').forEach(overlay=>closeOverlay(overlay.id)));
    await page.evaluate(theme=>{applyTheme(theme);go('home');},theme);
    await page.screenshot({path:path.join(output,viewport.width+'-home-'+theme+'.png'),animations:'disabled'});
   }
   await page.evaluate(()=>{applyTheme('color');go('home');openGate();});
   await page.screenshot({path:path.join(output,viewport.width+'-parent-gate.png'),animations:'disabled'});
   await page.evaluate(()=>{gInput=String(gA+gB);gateCheck();});
   await page.screenshot({path:path.join(output,viewport.width+'-parent-settings.png'),animations:'disabled'});
   await context.close();
  }
 }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
 const report={pageDefinitions:40,stateDefinitions:cases.length,checkedStates:new Set(findings.map(f=>f.name)).size,viewportCount:new Set(findings.map(f=>f.viewport.width)).size,totalViews:findings.length,errors,findings};
 fs.writeFileSync(path.join(output,'audit.json'),JSON.stringify(report,null,2));
 const issues=findings.filter(r=>r.outerOverflow||r.textOverflow.length||r.smallTargets.length);
 console.log(JSON.stringify({pages:40,states:report.checkedStates,totalViews:findings.length,errors,issues}));
 if(errors.length||issues.length) process.exitCode=1;
}
main().catch(error=>{console.error(error);process.exitCode=1;});
