const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const header = $('.site-header');
const menuButton = $('.menu-button');
const mobileNav = $('.mobile-nav');
const language = $('.language');
const languageButton = $('.language-button');

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20), { passive: true });

function closeMobileMenu() {
  mobileNav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

menuButton.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('menu-open', isOpen);
});

$$('.mobile-nav a').forEach(link => link.addEventListener('click', closeMobileMenu));

languageButton.addEventListener('click', (event) => {
  event.stopPropagation();
  const isOpen = language.classList.toggle('open');
  languageButton.setAttribute('aria-expanded', String(isOpen));
});
document.addEventListener('click', (event) => {
  if (!language.contains(event.target)) {
    language.classList.remove('open');
    languageButton.setAttribute('aria-expanded', 'false');
  }
  if (!header.contains(event.target)) closeMobileMenu();
});

const translations = {
  ko: {
    label: '한국어', flag: '🇰🇷', navAbout: '비터북스 소개', navBooks: '출간 도서', navLab: '쓴맛 연구소', navSns: 'SNS',
    heroTitle: '읽는 순간,<br><em>이야기가 살아나요.</em>', heroSub: '손끝으로 느끼고, 마음으로 오래 기억하는 감각 동화책', meetBooks: '책 만나보기', ourStory: '비터북스 이야기', bubbleLeft: '우리, 책 속에서 만나자!', bubbleRight: '좋은 이야기는 언제나 발견할 수 있지!',
    booksTitle: '오늘은 어떤 이야기를 만나볼까요?', booksIntro: '아이의 상상력과 감각을 깨우는 비터북스의 이야기를 만나보세요.', book1Title: '내 손가락<br>콩이 발가락', book1Desc: '손가락을 빠는 아이의 마음을 따뜻하게 들여다보는 세계 최초 쓴맛 동화책입니다.', book2Title: '이놈<br>선생님', book2Desc: '아이의 생활 습관을 유쾌한 이야기와 체험형 쓴맛 스티커로 만나보세요.', details: '자세히 보기',
    aboutTitle: '감각으로 배우고,<br>이야기로 자랍니다.', aboutDesc: '비터북스는 훈계보다 이야기를, 강요보다 경험을 선택합니다. 아이가 스스로 느끼고 생각하며 작은 행동의 변화를 시작하도록 돕습니다.', senseTitle: '오감으로 시작하는 배움', senseDesc: '보고, 만지고, 느끼는 독서 경험으로 아이의 호기심을 깨웁니다.', memoryTitle: '몸으로 남는 기억', memoryDesc: '이야기와 감각이 만나 교육적 메시지를 오래 기억하게 합니다.', changeTitle: '행동의 작은 전환점', changeDesc: '혼내지 않아도 아이가 스스로 느끼고 선택하는 계기를 만듭니다.',
    labTitle: '쓴맛을 더하면,<br>이야기는 경험이 됩니다.', labDesc: '특허받은 BitterINK 기술은 식물성 콩기름 기반 Soy Ink와 쓴맛 원료를 결합해 책의 메시지를 감각으로 기억하게 합니다.', labLink: '비터잉크 기술 알아보기', trustTitle: '안심하고<br>만날 수 있는 책', trustDesc: '아이와 함께 읽는 순간을 생각하며 재료부터 인쇄까지 꼼꼼하게 만듭니다.',
    faqTitle: '아이와 함께 읽기 전,<br>궁금한 점을 확인해보세요.', q1: '이 책의 쓴맛 잉크는 안전한가요?', a1: '식물성 콩기름 기반 Soy Ink와 프리미엄 쓴맛 원료를 사용하며 어린이제품 안전 시험을 완료했습니다.', q2: '아이의 입에 닿아도 괜찮나요?', a2: '입에 살짝 닿는 체험을 고려해 설계했지만 먹는 제품은 아닙니다. 보호자와 함께 가볍게 체험해 주세요.', q3: '쓴맛이 책 전체로 번지나요?', a3: '일부 장면에만 인쇄되고 건조 후 고정됩니다. 종이 특성에 따라 주변에서 미세한 쓴맛이 느껴질 수 있습니다.', q4: '체험 스티커는 어떻게 사용하나요?', a4: '여러 아이가 함께 읽을 때 해당 장면에 부록 스티커를 붙여 한 장씩 위생적으로 체험해 주세요.', q5: '몇 살부터 사용할 수 있나요?', a5: '권장 연령은 만 3세 이상입니다. 보호자와 함께 읽으며 체험하면 더욱 좋습니다.', q6: '여러 번 사용해도 쓴맛이 유지되나요?', a6: '물기와 마찰로 점차 약해질 수 있습니다. 반복 체험에는 함께 제공된 쓴맛 스티커를 활용해 주세요.',
    buyTitle: '비터북스의 이야기를<br>온라인에서 만나보세요.', buy1: '내 손가락 콩이 발가락 구매하기', buy2: '이놈 선생님 구매하기', officialStore: '비터북스 공식 스토어', socialTitle: '책이 만들어지는 순간과<br>다음 이야기를 만나보세요.', collab: '협업·제휴 문의', footerTag: '감각으로 배우고, 이야기로 자라는 책'
  },
  en: {
    label: 'English', flag: '🇺🇸', navAbout: 'About', navBooks: 'Books', navLab: 'BitterINK Lab', navSns: 'Social',
    heroTitle: 'Open a book,<br><em>and stories come alive.</em>', heroSub: 'Sensory picture books felt by hand and remembered by heart', meetBooks: 'Meet the books', ourStory: 'Our story', bubbleLeft: 'Meet us inside the book!', bubbleRight: 'A good story is always worth discovering!',
    booksTitle: 'Which story shall we meet today?', booksIntro: 'Discover stories that awaken imagination and the senses.', book1Title: 'My Finger,<br>Kong’s Toe', book1Desc: 'A warm sensory story about a child, her habit, and her fluffy friend Kong.', book2Title: 'Mr. Inom', book2Desc: 'A playful story about everyday habits with an interactive bitter-taste sticker.', details: 'View details',
    aboutTitle: 'Learn through senses,<br>grow through stories.', aboutDesc: 'BitterBooks chooses stories over scolding and experience over pressure, helping children feel, think, and begin a small change.', senseTitle: 'Learning with all five senses', senseDesc: 'Seeing, touching and feeling awaken a child’s curiosity.', memoryTitle: 'Memories the body keeps', memoryDesc: 'Story and sensation help meaningful messages stay longer.', changeTitle: 'A small turning point', changeDesc: 'Children get a chance to feel and choose for themselves.',
    labTitle: 'Add a bitter sensation,<br>and a story becomes an experience.', labDesc: 'Patented BitterINK combines plant-based Soy Ink with a premium bitter ingredient to make a book’s message memorable.', labLink: 'Explore BitterINK', trustTitle: 'Books you can<br>meet with confidence', trustDesc: 'Every detail, from materials to printing, is considered for shared reading.',
    faqTitle: 'Before reading together,<br>here are the answers.', q1: 'Is the bitter ink safe?', a1: 'We use plant-based Soy Ink and a premium bitter ingredient and have completed children’s product safety testing.', q2: 'Is brief mouth contact okay?', a2: 'It is designed for a light sensory experience but is not food. Experience it lightly with a guardian.', q3: 'Does the bitter taste spread?', a3: 'It is printed only on selected scenes and fixed after drying.', q4: 'How do we use the experience stickers?', a4: 'Attach a supplement sticker to the scene so several children can experience it hygienically.', q5: 'What age is it for?', a5: 'Recommended for ages three and up with a guardian.', q6: 'Does the taste last?', a6: 'Moisture and friction can weaken it. Use the included stickers for repeated experiences.',
    buyTitle: 'Meet BitterBooks<br>online.', buy1: 'Buy My Finger, Kong’s Toe', buy2: 'Buy Mr. Inom', officialStore: 'Official BitterBooks Store', socialTitle: 'See how our books are made<br>and meet the next story.', collab: 'Partnerships', footerTag: 'Books that teach through senses and grow through stories'
  },
  zh: {
    label: '中文', flag: '🇨🇳', navAbout: '关于我们', navBooks: '出版图书', navLab: '苦味研究所', navSns: '社交媒体',
    heroTitle: '翻开书的瞬间，<br><em>故事鲜活起来。</em>', heroSub: '用指尖感受、在心中长久留存的感官绘本', meetBooks: '认识图书', ourStory: '品牌故事', bubbleLeft: '在书里见吧！', bubbleRight: '好故事总值得发现！', booksTitle: '今天想遇见哪个故事？', booksIntro: '唤醒孩子想象力与感官的故事。', book1Title: '我的手指，<br>Kong的脚趾', book1Desc: '温柔理解孩子习惯与内心的感官绘本。', book2Title: 'Inom老师', book2Desc: '以有趣故事和体验贴纸认识日常生活习惯。', details: '查看详情',
    aboutTitle: '用感官学习，<br>在故事中成长。', aboutDesc: '比起训斥，我们选择故事；比起强迫，我们选择体验。', senseTitle: '从五感开始学习', senseDesc: '看、摸、感受，唤醒孩子的好奇心。', memoryTitle: '留在身体里的记忆', memoryDesc: '故事与感官相遇，让信息留存更久。', changeTitle: '行动的小小转折', changeDesc: '给孩子自己感受和选择的机会。', labTitle: '加入苦味，<br>故事成为体验。', labDesc: '专利BitterINK将植物性Soy Ink与优质苦味原料结合。', labLink: '了解BitterINK', trustTitle: '可以安心<br>相遇的书', trustDesc: '从材料到印刷，都为亲子共读细心制作。', faqTitle: '亲子共读之前，<br>先看看常见问题。', q1: '这本书的苦味墨水安全吗？', a1: '采用植物性Soy Ink和优质苦味原料，并已完成儿童产品安全测试。', q2: '短暂接触口腔可以吗？', a2: '产品考虑了轻微感官体验，但并非食品，请在监护人陪同下轻轻体验。', q3: '苦味会扩散到整本书吗？', a3: '只印刷在部分画面上，干燥后固定。', q4: '体验贴纸如何使用？', a4: '多人共读时，可将附赠贴纸贴在相应画面上，卫生地逐张体验。', q5: '几岁可以使用？', a5: '建议三岁以上儿童在监护人陪同下阅读体验。', q6: '苦味可以保持多久？', a6: '水分和摩擦会使苦味逐渐减弱，需要重复体验时请使用附赠贴纸。', buyTitle: '在线认识<br>比特图书。', buy1: '购买《我的手指，Kong的脚趾》', buy2: '购买《Inom老师》', officialStore: '比特图书官方商店', socialTitle: '认识图书诞生的瞬间<br>与下一个故事。', collab: '合作咨询', footerTag: '用感官学习，在故事中成长的书'
  },
  ja: {
    label: '日本語', flag: '🇯🇵', navAbout: 'ビターブックス紹介', navBooks: '出版書籍', navLab: '苦味研究所', navSns: 'SNS',
    heroTitle: '本を開く瞬間、<br><em>物語が動き出す。</em>', heroSub: '指先で感じ、心に長く残る感覚絵本', meetBooks: '本を見る', ourStory: '私たちの物語', bubbleLeft: '本の中で会おう！', bubbleRight: '良い物語はいつでも発見できるよ！', booksTitle: '今日はどの物語に会いますか？', booksIntro: '子どもの想像力と感覚を目覚めさせる物語。', book1Title: 'わたしの指、<br>コンの足の指', book1Desc: '子どもの習慣と心をやさしく見つめる感覚絵本です。', book2Title: 'イノム先生', book2Desc: '楽しい物語と体験ステッカーで生活習慣を学びます。', details: '詳しく見る',
    aboutTitle: '感覚で学び、<br>物語で育ちます。', aboutDesc: '叱るより物語を、強制より体験を選びます。', senseTitle: '五感から始まる学び', senseDesc: '見て、触れて、感じる読書体験が好奇心を育てます。', memoryTitle: '身体に残る記憶', memoryDesc: '物語と感覚が大切なメッセージを長く残します。', changeTitle: '行動の小さな転換点', changeDesc: '自分で感じ、選ぶきっかけをつくります。', labTitle: '苦味を加えると、<br>物語は体験になります。', labDesc: '特許BitterINKは植物性Soy Inkと上質な苦味原料を組み合わせています。', labLink: 'BitterINKを見る', trustTitle: '安心して<br>出会える本', trustDesc: '親子で読む時間を考え、素材から印刷まで丁寧につくります。', faqTitle: '一緒に読む前に、<br>気になることを確認。', q1: 'この本の苦味インクは安全ですか？', a1: '植物性Soy Inkと上質な苦味原料を使用し、子ども向け製品の安全試験を完了しています。', q2: '口に少し触れても大丈夫ですか？', a2: '軽い感覚体験を考慮していますが食品ではありません。保護者と一緒に体験してください。', q3: '苦味は本全体に広がりますか？', a3: '一部の場面だけに印刷され、乾燥後に固定されます。', q4: '体験ステッカーはどう使いますか？', a4: '複数の子どもが読むときは、付属ステッカーを該当場面に貼り、一枚ずつ衛生的に体験してください。', q5: '何歳から使えますか？', a5: '推奨年齢は3歳以上です。保護者と一緒に読んでください。', q6: '苦味は何度でも続きますか？', a6: '水分や摩擦で少しずつ弱くなります。繰り返す場合は付属ステッカーをご利用ください。', buyTitle: 'オンラインで<br>ビターブックスに出会う。', buy1: '「わたしの指、コンの足の指」を購入', buy2: '「イノム先生」を購入', officialStore: 'ビターブックス公式ストア', socialTitle: '本が生まれる瞬間と<br>次の物語に会いましょう。', collab: 'コラボ・提携', footerTag: '感覚で学び、物語で育つ本'
  }
};

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.ko;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  $$('[data-i18n]').forEach(element => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  $('.current-lang').textContent = dictionary.label;
  $('.flag').textContent = dictionary.flag;
  $$('.language-menu button').forEach(button => button.setAttribute('aria-selected', String(button.dataset.lang === lang)));
  localStorage.setItem('bitterbooks-language', lang);
  language.classList.remove('open');
  languageButton.setAttribute('aria-expanded', 'false');
}

$$('.language-menu button').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));
applyLanguage(localStorage.getItem('bitterbooks-language') || 'ko');

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
$$('.reveal').forEach(element => observer.observe(element));

const bookData = {
  book1: {
    series: 'SERIES 01', title: '내 손가락 콩이 발가락', cover: 'assets/book1-cover.webp', link: 'https://link.coupang.com/a/fGI7WNKH3A',
    description: '손가락을 빠는 아이의 마음을 따뜻하게 들여다보는 그림책입니다. 책 속 쓴맛 체험을 통해 아이가 행동의 결과를 직접 느끼고 스스로 멈추는 첫걸음을 응원합니다.',
    features: ['3세 이상 어린이와 보호자를 위한 감각 그림책', '쓴맛 체험 요소와 KC 안전확인']
  },
  book2: {
    series: 'SERIES 02', title: '이놈 선생님', cover: 'assets/book2-cover.webp', link: 'https://link.coupang.com/a/fGJbAqRVq8',
    description: '아이가 일상에서 만나는 여러 잘못된 행동을 유쾌하게 짚어주는 오감 체험형 동화책입니다. 익살스러운 이야기와 쓴맛 스티커가 행동의 원인과 결과를 기억하게 합니다.',
    features: ['재미있는 이야기로 배우는 생활 습관', '직접 체험하는 쓴맛 스티커 포함']
  }
};

const dialog = $('#book-dialog');
$$('.card-button').forEach(button => button.addEventListener('click', () => {
  const book = bookData[button.dataset.book];
  $('#dialog-series').textContent = book.series;
  $('#dialog-title').textContent = book.title;
  $('#dialog-cover').src = book.cover;
  $('#dialog-cover').alt = `${book.title} 표지`;
  $('#dialog-description').textContent = book.description;
  $('#dialog-features').innerHTML = book.features.map(item => `<li>${item}</li>`).join('');
  $('#dialog-coupang').href = book.link;
  dialog.showModal();
}));
$('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

async function updateVisitorCount() {
  try {
    const response = await fetch('https://icount.kr/api.php?id=bitterbooks.com', { cache: 'no-store' });
    if (!response.ok) throw new Error('counter unavailable');
    const data = await response.json();
    $('#visitor-count').textContent = `TODAY ${Number(data.today.pv).toLocaleString()} · TOTAL ${Number(data.total.pv).toLocaleString()}`;
  } catch (_) {
    $('#visitor-count').textContent = 'TODAY – · TOTAL –';
  }
}
window.addEventListener('load', updateVisitorCount, { once: true });
