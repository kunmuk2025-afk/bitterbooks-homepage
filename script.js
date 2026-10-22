const nav = document.querySelector('#site-nav');
const menu = document.querySelector('#menu-toggle');
const bookDialog = document.querySelector('#book-dialog');
const faqDialog = document.querySelector('#faq-dialog');
const language = document.querySelector('#language');
let currentLanguage = 'ko';
let trigger = null;

const ko = Object.fromEntries([...document.querySelectorAll('[data-t]')].map(el => [el.dataset.t, el.innerHTML]));
const translations = {
  ko,
  en: {
    navAbout:'Our story',navBooks:'Our books',navLab:'Bitter Lab',navSocial:'Social',menu:'Menu',
    heroTitle:'Open a book.<br>Bring stories to life.',heroSub:'Sensory picture books to feel with your fingertips and remember with your heart.',
    meetBooks:'Meet our books',ourStory:'Our story',bubbleGirl:'See you<br>in the story!',bubbleTeacher:'Good stories are<br>everywhere!',
    booksTitle:'Which story shall we meet today?',booksIntro:'Discover stories that awaken imagination and the senses.',
    book1Title:'My Fingers,<br>Kong’s Toes',book1Desc:'A warm story with a bitter-taste sensory experience.',
    book2Title:'Mr.<br>Inom',book2Desc:'A playful sensory story<br>for everyday habits.',details:'Discover',
    labTitle:'Bitter Lab',labDesc:'Thoughtful ideas and stories<br>for growing children.',
    trustTitle:'Made with care.<br>Read with confidence.',trustDesc:'Every material and detail matters<br>in the books your child meets.',
    faqLink:'Safety & reading guide →',footerDesc:'Making stories that<br>brighten every child’s day.',contact:'Contact',
    close:'Close',ageNote:'Ages 3+ · Read together with an adult.',buyCoupang:'Shop on Coupang',buyNaver:'Naver Store',
    faqTitle:'Before you read together',q1:'How should we try the sensory experience?',a1:'This is not food. Follow the book’s instructions with adult supervision. Never force a child to try the taste.',
    q2:'What is the recommended age?',a2:'Recommended for ages 3 and older. Read and check the instructions together with an adult.',q3:'How can I contact you?'
  },
  zh: {
    navAbout:'关于我们',navBooks:'图书',navLab:'苦味研究所',navSocial:'社交媒体',menu:'菜单',
    heroTitle:'翻开绘本，<br>故事就活了起来。',heroSub:'用指尖感受，用心记住的感官绘本。',meetBooks:'认识绘本',ourStory:'品牌故事',bubbleGirl:'我们在<br>故事里见！',bubbleTeacher:'好故事<br>无处不在！',
    booksTitle:'今天想遇见哪个故事？',booksIntro:'认识唤醒孩子想象力与感官的故事。',
    book1Title:'我的手指<br>小狗的脚趾',book1Desc:'通过温暖的故事，体验特别的苦味感官阅读。',book2Title:'淘气<br>老师',book2Desc:'用趣味故事和感官体验，<br>认识日常习惯。',details:'了解更多',
    labTitle:'苦味研究所',labDesc:'为了孩子健康成长，<br>用心创作的想法与故事。',trustTitle:'用心制作，<br>安心阅读',trustDesc:'孩子遇见的每一本书，<br>我们都认真制作。',faqLink:'安全与使用说明 →',footerDesc:'让孩子的今天，<br>因故事更加闪亮。',contact:'联系我们',
    close:'关闭',ageNote:'适合3岁以上儿童，与监护人一起阅读。',buyCoupang:'在Coupang购买',buyNaver:'Naver商店',
    faqTitle:'亲子阅读前请确认',q1:'如何体验苦味？',a1:'本产品不可食用。请在监护人陪同下按书中说明轻轻体验，不要强迫孩子尝试。',q2:'适合几岁开始阅读？',a2:'建议3岁以上儿童与监护人一起阅读，并确认使用说明。',q3:'如何咨询？'
  },
  ja: {
    navAbout:'ブランド紹介',navBooks:'絵本',navLab:'苦味研究所',navSocial:'SNS',menu:'メニュー',
    heroTitle:'読む瞬間、<br>物語が動き出す。',heroSub:'指先で感じ、心に長く残る感覚絵本。',meetBooks:'絵本を見る',ourStory:'私たちの物語',bubbleGirl:'絵本の中で<br>会おうね！',bubbleTeacher:'素敵な物語は<br>どこにでも！',
    booksTitle:'今日はどんな物語に出会おう？',booksIntro:'子どもの想像力と感覚を目覚めさせる物語をお届けします。',
    book1Title:'私の指と<br>コンの足指',book1Desc:'あたたかい物語を通して、<br>苦味を感じる特別な読書体験。',book2Title:'イノム<br>先生',book2Desc:'楽しい物語と感覚体験で<br>毎日の習慣を学びます。',details:'詳しく見る',
    labTitle:'苦味研究所',labDesc:'子どもの健やかな成長を願う<br>特別なアイデアと物語。',trustTitle:'安心して<br>出会える絵本',trustDesc:'子どもが出会う一冊だから、<br>細部まで丁寧に作ります。',faqLink:'安全・使用ガイド →',footerDesc:'子どもの今日が輝く<br>物語を作ります。',contact:'お問い合わせ',
    close:'閉じる',ageNote:'3歳以上・保護者と一緒にお読みください。',buyCoupang:'Coupangで購入',buyNaver:'Naverストア',
    faqTitle:'一緒に読む前にご確認ください',q1:'感覚体験はどのように行いますか？',a1:'食品ではありません。保護者と一緒に本の説明に従って軽く体験してください。無理に体験させないでください。',q2:'何歳から読めますか？',a2:'推奨年齢は3歳以上です。保護者と一緒に物語と使用説明をご確認ください。',q3:'問い合わせ先は？'
  }
};
const books = {
  book1:{cover:'assets/book1-cover.webp',url:'https://link.coupang.com/a/fGI7WNKH3A',series:1,titleKey:'book1Title',descKey:'book1Desc'},
  book2:{cover:'assets/book2-cover.webp',url:'https://link.coupang.com/a/fGJbAqRVq8',series:2,titleKey:'book2Title',descKey:'book2Desc'}
};

function closeMenu(){
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded','false');
}
menu.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menu.setAttribute('aria-expanded',String(open));
});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('click',event=>{
  if(!nav.contains(event.target)&&!menu.contains(event.target)) closeMenu();
});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape') closeMenu();
});
matchMedia('(min-width:761px)').addEventListener('change',closeMenu);

function openBook(id){
  const book=books[id],t=translations[currentLanguage];
  document.querySelector('#dialog-cover').src=book.cover;
  document.querySelector('#dialog-cover').alt=t[book.titleKey].replaceAll('<br>',' ');
  document.querySelector('#dialog-series').textContent='BITTER BOOKS SERIES '+book.series;
  document.querySelector('#dialog-title').innerHTML=t[book.titleKey];
  document.querySelector('#dialog-description').innerHTML=t[book.descKey];
  document.querySelector('#dialog-coupang').href=book.url;
  bookDialog.showModal();
}
document.querySelectorAll('[data-book]').forEach(button=>{
  button.addEventListener('click',()=>{trigger=button;openBook(button.dataset.book);});
});
document.querySelector('[data-open="faq"]').addEventListener('click',event=>{
  trigger=event.currentTarget;faqDialog.showModal();
});
document.querySelectorAll('.dialog').forEach(dialog=>{
  dialog.querySelector('[data-close]').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{
    if(event.target!==dialog)return;
    const box=dialog.getBoundingClientRect();
    if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close();
  });
  dialog.addEventListener('close',()=>trigger?.focus({preventScroll:true}));
});

language.addEventListener('change',()=>{
  currentLanguage=language.value;
  document.documentElement.lang=currentLanguage;
  const t=translations[currentLanguage];
  document.querySelectorAll('[data-t]').forEach(el=>{
    el.innerHTML=t[el.dataset.t]??ko[el.dataset.t];
  });
  document.querySelector('.translated-title').innerHTML=t.heroTitle;
  document.querySelector('.hero').setAttribute('aria-label',t.heroTitle.replaceAll('<br>',' '));
  closeMenu();
});
