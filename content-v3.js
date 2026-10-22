import { revisionTranslations } from './revision-i18n.js';
// Content and modal flows for the first homepage review.
const nav = document.querySelector('#site-nav');
const menu = document.querySelector('#menu-toggle');
const bookDialog = document.querySelector('#book-dialog');
const faqDialog = document.querySelector('#faq-dialog');
const language = document.querySelector('#language');
let currentLanguage = 'ko';
const modalTriggers = new WeakMap();
let activeBook = null;

const ko = Object.fromEntries([...document.querySelectorAll('[data-t]')].map(el => [el.dataset.t, el.innerHTML]));
const translations = {
  ko,
  en: {
    navAbout:'Our story',navBooks:'Our books',navLab:'Bitter Lab',navSocial:'Social',menu:'Menu',
    heroTitle:'Open a book.<br>Bring stories to life.',heroSub:'Sensory picture books to feel with your fingertips and remember with your heart.',
    meetBooks:'Meet our books',ourStory:'Our story',bubbleGirl:'See you<br>in the story!',bubbleTeacher:'Shall we explore<br>the story together?',
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
    heroTitle:'翻开绘本，<br>故事就活了起来。',heroSub:'用指尖感受，用心记住的感官绘本。',meetBooks:'认识绘本',ourStory:'品牌故事',bubbleGirl:'我们在<br>故事里见！',bubbleTeacher:'一起看看<br>书里的故事吧！',
    booksTitle:'今天想遇见哪个故事？',booksIntro:'认识唤醒孩子想象力与感官的故事。',
    book1Title:'我的手指<br>小狗的脚趾',book1Desc:'通过温暖的故事，体验特别的苦味感官阅读。',book2Title:'淘气<br>老师',book2Desc:'用趣味故事和感官体验，<br>认识日常习惯。',details:'了解更多',
    labTitle:'苦味研究所',labDesc:'为了孩子健康成长，<br>用心创作的想法与故事。',trustTitle:'用心制作，<br>安心阅读',trustDesc:'孩子遇见的每一本书，<br>我们都认真制作。',faqLink:'安全与使用说明 →',footerDesc:'让孩子的今天，<br>因故事更加闪亮。',contact:'联系我们',
    close:'关闭',ageNote:'适合3岁以上儿童，与监护人一起阅读。',buyCoupang:'在Coupang购买',buyNaver:'Naver商店',
    faqTitle:'亲子阅读前请确认',q1:'如何体验苦味？',a1:'本产品不可食用。请在监护人陪同下按书中说明轻轻体验，不要强迫孩子尝试。',q2:'适合几岁开始阅读？',a2:'建议3岁以上儿童与监护人一起阅读，并确认使用说明。',q3:'如何咨询？'
  },
  ja: {
    navAbout:'ブランド紹介',navBooks:'絵本',navLab:'苦味研究所',navSocial:'SNS',menu:'メニュー',
    heroTitle:'読む瞬間、<br>物語が動き出す。',heroSub:'指先で感じ、心に長く残る感覚絵本。',meetBooks:'絵本を見る',ourStory:'私たちの物語',bubbleGirl:'絵本の中で<br>会おうね！',bubbleTeacher:'どんな物語か<br>一緒に見てみよう！',
    booksTitle:'今日はどんな物語に出会おう？',booksIntro:'子どもの想像力と感覚を目覚めさせる物語をお届けします。',
    book1Title:'私の指と<br>コンの足指',book1Desc:'あたたかい物語を通して、<br>苦味を感じる特別な読書体験。',book2Title:'イノム<br>先生',book2Desc:'楽しい物語と感覚体験で<br>毎日の習慣を学びます。',details:'詳しく見る',
    labTitle:'苦味研究所',labDesc:'子どもの健やかな成長を願う<br>特別なアイデアと物語。',trustTitle:'安心して<br>出会える絵本',trustDesc:'子どもが出会う一冊だから、<br>細部まで丁寧に作ります。',faqLink:'安全・使用ガイド →',footerDesc:'子どもの今日が輝く<br>物語を作ります。',contact:'お問い合わせ',
    close:'閉じる',ageNote:'3歳以上・保護者と一緒にお読みください。',buyCoupang:'Coupangで購入',buyNaver:'Naverストア',
    faqTitle:'一緒に読む前にご確認ください',q1:'感覚体験はどのように行いますか？',a1:'食品ではありません。保護者と一緒に本の説明に従って軽く体験してください。無理に体験させないでください。',q2:'何歳から読めますか？',a2:'推奨年齢は3歳以上です。保護者と一緒に物語と使用説明をご確認ください。',q3:'問い合わせ先は？'
  }
};
Object.assign(ko,{copySuccess:'복사했습니다. 이메일에 붙여 넣어 보내주세요.',copyFailed:'복사가 지원되지 않습니다. 이메일 주소나 작성한 내용을 직접 선택해 복사해 주세요.'});
for(const lang of ['en','zh','ja'])Object.assign(translations[lang],revisionTranslations[lang]);
const books = {
  book1:{cover:'assets/book1-cover.webp',url:'https://link.coupang.com/a/fGI7WNKH3A',series:1,titleKey:'book1Title',descKey:'book1Desc'},
  book2:{cover:'assets/book2-cover.webp',url:'https://link.coupang.com/a/fGJbAqRVq8',series:2,titleKey:'book2Title',descKey:'book2Desc'}
};
const bookEditorial = {
  ko: [
    ['손가락을 빠는 아이의 마음을 따뜻하게 들여다보는 그림책입니다. 책 속 쓴맛 체험을 통해 행동의 결과를 직접 느껴보고, 스스로 생각하는 첫걸음을 응원합니다.','이런 이야기예요','익숙한 습관을 무조건 그만두라고 하기 전에, 아이의 마음을 이야기로 만나보세요. 여자아이와 강아지 콩이를 보며 내 손과 일상 속 행동을 함께 돌아볼 수 있습니다.','이 책의 특별한 경험','3세 이상 어린이와 보호자가 함께 읽는 감각 그림책|이야기와 연결된 쓴맛 체험 요소|책을 읽은 뒤 대화로 이어가는 생활 습관 이야기','함께 읽는 방법','아이의 속도에 맞춰 그림과 이야기를 먼저 즐겨주세요.|책의 안내를 확인하고, 아이가 원할 때 보호자와 함께 가볍게 체험해 주세요.|“어떤 느낌이었어?”, “다음에는 어떻게 해볼까?” 하고 아이의 생각을 들어주세요.'],
    ['일상에서 만나는 여러 행동을 유쾌하게 짚어주는 오감 체험형 동화책입니다. “이놈!” 하고 등장하는 선생님의 익살스러운 이야기와 쓴맛 스티커가 행동의 원인과 결과를 함께 생각할 계기를 만듭니다.','이런 이야기예요','이놈 선생님과 동물 친구들을 따라가며 생활 속 행동을 들여다봅니다. 훈계만 듣기보다 재미있는 장면을 읽고 직접 느끼면서, 아이가 자기 생각을 말해볼 수 있는 책입니다.','이 책의 특별한 경험','유쾌한 선생님과 동물 친구들이 전하는 생활 습관 이야기|직접 체험할 수 있는 쓴맛 스티커 포함|보호자와 함께 읽고 느끼고 이야기하는 구성','함께 읽는 방법','선생님과 친구들에게 어떤 일이 생기는지 먼저 읽어주세요.|부록 스티커는 책의 안내에 따라 사용하고, 체험을 강요하지 마세요.|이야기 속 행동과 우리 일상을 연결해 아이와 편안하게 대화해 주세요.']
  ],
  en:[
    ['A warm picture book about a child who sucks their fingers. A story-linked bitter-taste experience invites children to notice the results of an action and think for themselves.','About the story','Before telling a child to stop a familiar habit, meet their feelings through a story. Follow the girl and Kong the dog, and talk together about hands and everyday habits.','What makes this book special','A sensory picture book for ages 3+ and caregivers|A bitter-taste experience connected to the story|Everyday habits explored through conversation','Read together','Enjoy the pictures and story at the child’s pace.|Follow the book’s instructions; try the experience lightly with an adult only if the child wishes.|Ask how it felt and what they might try next.'],
    ['A playful sensory picture book about everyday behavior. The expressive teacher and bitter-taste stickers offer a chance to think about actions and their consequences.','About the story','Follow Mr. Inom and his animal friends through everyday situations. Funny scenes and a sensory experience invite children to share their own thoughts.','What makes this book special','Everyday habits with a playful teacher and animal friends|Bitter-taste experience stickers included|Read, feel and talk with a caregiver','Read together','Read what happens to the teacher and friends first.|Use stickers as instructed; never force the experience.|Connect the story to everyday situations in a relaxed conversation.']
  ],
  zh:[
    ['一本温柔走进吮手指孩子内心的绘本。通过与故事相连的苦味体验，陪孩子感受行为的结果，并鼓励自主思考。','故事介绍','在要求孩子改掉习惯之前，先通过故事理解孩子的心情。和小女孩、小狗一起看看自己的双手与日常行为。','本书特色','适合3岁以上儿童与监护人共读|与故事相连的苦味体验|通过亲子对话认识生活习惯','一起读的方法','按孩子的节奏欣赏图画和故事。|遵循书中说明，只在孩子愿意时与监护人轻轻体验。|问问孩子有什么感受，下次想怎么做。'],
    ['以幽默故事认识日常行为的感官绘本。老师的有趣表情与苦味贴纸，为孩子思考行为和结果提供契机。','故事介绍','跟着老师和动物朋友看看生活中的行为。在有趣的情节与感官体验中，鼓励孩子说出自己的想法。','本书特色','幽默老师与动物朋友的生活习惯故事|附苦味体验贴纸|与监护人一起阅读、感受和交流','一起读的方法','先看看老师和朋友遇到了什么事情。|按书中说明使用贴纸，不强迫体验。|把故事与日常生活联系起来，轻松聊一聊。']
  ],
  ja:[
    ['指しゃぶりをする子どもの心をあたたかく見つめる絵本。物語につながる苦味体験を通して、行動の結果を感じ、自分で考える一歩を応援します。','どんなお話？','習慣をやめるように言う前に、物語で子どもの気持ちに出会いましょう。女の子と犬のコンと一緒に、手や毎日の行動について話せます。','この絵本の特徴','3歳以上の子どもと保護者のための感覚絵本|物語につながる苦味体験|会話で考える毎日の習慣','一緒に読むヒント','子どものペースで絵と物語を楽しみます。|本の説明を確認し、本人が希望する時だけ保護者と軽く体験します。|どんな感じだったか、次にどうしたいか聞いてみましょう。'],
    ['毎日の行動をユーモラスに描く感覚絵本。先生の愉快な物語と苦味シールで、行動と結果について考えるきっかけを作ります。','どんなお話？','イノム先生と動物たちと一緒に、生活の中の行動を見つめます。楽しい場面と感覚体験を通して、自分の考えを話せる絵本です。','この絵本の特徴','愉快な先生と動物たちの生活習慣の物語|苦味体験シール付き|保護者と読み、感じ、話す構成','一緒に読むヒント','先生と友達に何が起きるか、まず物語を読みます。|シールは本の説明に従い、体験を強制しないでください。|物語と毎日の生活をつなげ、気軽に話しましょう。']
  ]
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
  activeBook=id;
  const copy=bookEditorial[currentLanguage][book.series-1];
  document.querySelector('#dialog-cover').src=book.cover;
  document.querySelector('#dialog-cover').alt=t[book.titleKey].replaceAll('<br>',' ');
  document.querySelector('#dialog-series').textContent='BITTER BOOKS SERIES '+book.series;
  document.querySelector('#dialog-title').innerHTML=t[book.titleKey];
  document.querySelector('#dialog-description').textContent=copy[0];
  document.querySelector('#book-editorial').innerHTML=`<h3>${copy[1]}</h3><p>${copy[2]}</p><h3>${copy[3]}</h3><ul>${copy[4].split('|').map(s=>`<li>${s}</li>`).join('')}</ul><h3>${copy[5]}</h3><ol>${copy[6].split('|').map(s=>`<li>${s}</li>`).join('')}</ol>`;
  document.querySelector('#dialog-coupang').href=book.url;
  document.querySelector('#purchase-panel').hidden=true;
  document.querySelector('#show-purchase').setAttribute('aria-expanded','false');
  if(!bookDialog.open)bookDialog.showModal();
  bookDialog.scrollTop=0;
}
document.querySelectorAll('[data-book]').forEach(button=>{
  button.addEventListener('click',()=>{modalTriggers.set(bookDialog,button);openBook(button.dataset.book);});
});
document.querySelectorAll('[data-open]').forEach(button=>button.addEventListener('click',()=>{
  const dialog=document.querySelector(`#${button.dataset.open}-dialog`);
  closeMenu();modalTriggers.set(dialog,button);dialog.showModal();dialog.scrollTop=0;
}));
document.querySelector('#show-purchase').addEventListener('click',event=>{
  document.querySelector('#purchase-panel').hidden=false;
  event.currentTarget.setAttribute('aria-expanded','true');
  document.querySelector('#purchase-title').focus({preventScroll:true});
  document.querySelector('#purchase-panel').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'start'});
});
document.querySelectorAll('[data-document]').forEach(button=>button.addEventListener('click',()=>{
  const dialog=document.querySelector('#document-dialog');
  document.querySelector('#document-image').src=button.dataset.document;
  document.querySelector('#document-image').alt=button.textContent.trim();
  document.querySelector('#document-download').href=button.dataset.document;
  modalTriggers.set(dialog,button);dialog.showModal();dialog.scrollTop=0;
}));
async function copyText(text){
  const t=translations[currentLanguage];
  const status=document.querySelector('#copy-status');
  try{await navigator.clipboard.writeText(text);status.textContent=t.copySuccess;}
  catch{status.textContent=t.copyFailed;}
}
document.querySelector('#copy-email').addEventListener('click',()=>copyText('bitterbooks@naver.com'));
document.querySelector('#contact-form').addEventListener('submit',event=>{
  event.preventDefault();
  const category=document.querySelector('#contact-category').selectedOptions[0].textContent;
  const message=document.querySelector('#contact-message').value.trim();
  if(!message)return;
  copyText(`[BitterBooks / ${category}]\n\n${message}`);
});
document.querySelectorAll('.dialog').forEach(dialog=>{
  dialog.querySelector('[data-close]').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{
    if(event.target!==dialog)return;
    const box=dialog.getBoundingClientRect();
    if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close();
  });
  dialog.addEventListener('close',()=>{modalTriggers.get(dialog)?.focus({preventScroll:true});if(dialog===bookDialog)activeBook=null;});
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
  if(activeBook)openBook(activeBook);
  closeMenu();
});
