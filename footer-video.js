const video=document.querySelector('#footer-wave-video');
const toggle=document.querySelector('#footer-video-toggle');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const labels={ko:{play:'영상 재생',pause:'영상 멈춤',description:'손을 흔들며 인사하는 비터북스 친구들'},en:{play:'Play video',pause:'Pause video',description:'BitterBooks friends waving hello'},zh:{play:'播放视频',pause:'暂停视频',description:'挥手打招呼的绘本朋友们'},ja:{play:'動画を再生',pause:'動画を止める',description:'手を振って挨拶するBitterBooksの仲間たち'}};
let inView=false;
let userPaused=false;
let manualPlayback=false;
let loaded=false;
video.muted=true;
video.defaultMuted=true;
function render(){
 const text=labels[document.documentElement.lang]||labels.ko;
 toggle.textContent=video.paused?text.play:text.pause;
 toggle.setAttribute('aria-label',toggle.textContent);
 video.setAttribute('aria-label',text.description);
}
function load(){if(loaded)return;loaded=true;video.src=video.dataset.src;video.load();}
function update(){
 if(!inView||document.hidden||userPaused||(reduced.matches&&!manualPlayback)){video.pause();render();return;}
 load();video.play().then(render).catch(render);
}
toggle.addEventListener('click',()=>{
 if(video.paused){userPaused=false;manualPlayback=true;inView=true;update();}
 else{userPaused=true;video.pause();render();}
});
video.addEventListener('play',render);
video.addEventListener('pause',render);
video.addEventListener('error',()=>{video.pause();render();});
document.querySelector('#language').addEventListener('change',render);
document.addEventListener('visibilitychange',update);
reduced.addEventListener('change',()=>{manualPlayback=false;update();});
new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;update();},{threshold:0.05}).observe(video);
toggle.hidden=false;
render();
