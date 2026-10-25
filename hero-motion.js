const hero = document.querySelector('.hero');
const toggle = document.querySelector('#hero-motion-toggle');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const fineHover = matchMedia('(hover: hover) and (pointer: fine)');
const labels = {
  ko: {pause:'움직임 멈춤',play:'움직임 재생',girl:'여자아이와 콩이에게 인사하기',teacher:'이놈 선생님에게 인사하기'},
  en: {pause:'Pause motion',play:'Play motion',girl:'Say hello to the girl and Kong',teacher:'Say hello to Mr. Inom'},
  zh: {pause:'暂停动画',play:'播放动画',girl:'向小女孩和小狗打招呼',teacher:'向老师打招呼'},
  ja: {pause:'動きを止める',play:'動きを再生',girl:'女の子とコンに挨拶する',teacher:'イノム先生に挨拶する'}
};
let pausedByUser = false;
let inView = true;
const controls = [];
const reactions = new Map();

function canMove(){return !pausedByUser && !reduced.matches && inView && !document.hidden;}
function update(){
  hero.dataset.motion = canMove() ? 'running' : 'paused';
  const text=labels[document.documentElement.lang] || labels.ko;
  toggle.hidden=reduced.matches;
  toggle.textContent=pausedByUser ? text.play : text.pause;
  toggle.setAttribute('aria-label',toggle.textContent);
  for(const {button,side} of controls){button.setAttribute('aria-label',text[side]);button.disabled=reduced.matches;}
  if(!canMove()){for(const animation of reactions.values())animation.cancel();reactions.clear();}
}
function react(button,side){
  if(!canMove())return;
  reactions.get(button)?.cancel();
  const direction=side==='girl' ? -1 : 1;
  const lift=innerWidth<=760 ? -7 : -12;
  const animation=button.animate([
    {transform:'translateY(0) rotate(0deg)'},
    {transform:`translateY(${lift}px) rotate(${direction*2}deg)`,offset:.35},
    {transform:`translateY(-2px) rotate(${-direction*.8}deg)`,offset:.7},
    {transform:'translateY(0) rotate(0deg)'}
  ],{duration:780,easing:'ease-in-out'});
  reactions.set(button,animation);
  animation.onfinish=()=>{if(reactions.get(button)===animation)reactions.delete(button);};
}
for(const side of ['girl','teacher']){
  const image=hero.querySelector(`.${side} > .character-image`);
  const entry=document.createElement('span');entry.className='character-entry';
  const button=document.createElement('button');button.type='button';button.className='character-motion';
  image.before(entry);entry.append(button);button.append(image);
  controls.push({button,side});
  const arrive=()=>entry.classList.add('ready');
  if(image.complete&&image.naturalWidth)arrive();else image.addEventListener('load',arrive,{once:true});
  button.addEventListener('pointerenter',()=>{if(fineHover.matches)react(button,side);});
  button.addEventListener('click',()=>react(button,side));
}
toggle.addEventListener('click',()=>{pausedByUser=!pausedByUser;update();});
document.querySelector('#language').addEventListener('change',update);
document.addEventListener('visibilitychange',update);
reduced.addEventListener('change',update);
const observer=new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;update();},{threshold:0});
observer.observe(hero);
update();
