const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

function setMenu(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("is-open", open);
  document.body.style.overflow = open ? "hidden" : "";
}

menuButton?.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 980) setMenu(false);
});

const certificateDialog = document.querySelector(".certificate-dialog");
const certificateImage = certificateDialog?.querySelector("img");
const certificateTitle = certificateDialog?.querySelector("h2");
const dialogClose = certificateDialog?.querySelector(".dialog-close");

document.querySelectorAll(".certificate-card").forEach((card) => {
  card.addEventListener("click", () => {
    const language = document.documentElement.lang;
    const titleByLanguage = {
      ko: card.dataset.title,
      en: card.dataset.titleEn,
      zh: card.dataset.titleZh,
      ja: card.dataset.titleJa,
    };
    const originalLabel = {
      ko: "원본",
      en: "original document",
      zh: "原始文件",
      ja: "原本",
    };
    const title = titleByLanguage[language] || card.dataset.title;
    certificateImage.src = card.dataset.certificate;
    certificateImage.alt = `${title}, ${originalLabel[language] || originalLabel.ko}`;
    certificateTitle.textContent = title;
    certificateDialog.showModal();
  });
});

dialogClose?.addEventListener("click", () => certificateDialog.close());

certificateDialog?.addEventListener("click", (event) => {
  if (event.target === certificateDialog) certificateDialog.close();
});

const languageToggle = document.querySelector(".language-toggle");
const languageMenu = document.querySelector(".language-menu");
const currentLanguage = document.querySelector(".current-language");
const currentLanguageFlag = document.querySelector(".current-language-flag");

const englishCopy = {
  ".site-nav a:nth-child(1)": "About",
  ".site-nav a:nth-child(2)": "Books",
  ".site-nav a:nth-child(3)": "BitterINK Lab",
  ".site-nav a:nth-child(4)": "Social",
  ".header-buy": "Shop",
  ".eyebrow": "Stories that reach the senses before words",
  ".hero h1": "Turning children’s habits<br />into stories.",
  ".hero-description":
    "Instead of scolding or forcing a stop, we help children feel and understand for themselves. Bitter Books connects patented BitterINK with storytelling to create a new reading experience.",
  ".button-primary": "Discover Bitter Books <span aria-hidden=\"true\">→</span>",
  ".text-link": "Where to buy <span aria-hidden=\"true\">↗</span>",
  ".about-section .section-index": "01 / ABOUT BITTER BOOKS",
  ".about-heading h2": "Learning begins<br />with all five senses.",
  ".about-warm-note":
    "Stories seen with the eyes, met by the fingertips,<br />and remembered by the heart",
  ".about-lead > p:first-child":
    "Bitter Books is the world’s first educational and self-development publishing brand to apply bitter-tasting ink, BitterINK.",
  ".about-caption":
    "We propose a new reading experience that goes beyond reading—one that is felt, experienced and remembered.",
  ".about-detail-inner article:nth-child(1) span": "ONE",
  ".about-detail-inner article:nth-child(1) h3": "Learning through the senses",
  ".about-detail-inner article:nth-child(1) p":
    "Guided by the belief that learning begins with all five senses, we create books that help readers reflect on habits and open up new possibilities for growth.",
  ".about-detail-inner article:nth-child(2) span": "TWO",
  ".about-detail-inner article:nth-child(2) h3": "Memories felt in the body",
  ".about-detail-inner article:nth-child(2) p":
    "Even the best lesson can fade without experience. Bitter Books adds the sensation of bitterness to stories so their educational message can be felt and remembered longer.",
  ".about-detail-inner article:nth-child(3) span": "THREE",
  ".about-detail-inner article:nth-child(3) h3": "A small turning point",
  ".about-detail-inner article:nth-child(3) p":
    "Every Bitter Books title uses BitterINK, offering children and adults a distinctive moment to feel, think and begin a new behavior for themselves.",
  ".ink-intro .section-index": "02 / BITTERINK TECHNOLOGY",
  ".ink-kicker": "See it, touch it, feel it",
  ".ink-intro h2": "Add sensation to print,<br />and a story becomes an experience.",
  ".ink-description":
    "BitterINK is a distinctive printing technology that brings the sensory stimulus of bitterness into printed materials. It combines Veranova’s premium bittering ingredient from the United Kingdom with vegetable soybean-oil-based ink, moving beyond seeing and reading to support recognition and behavioral change through taste.",
  ".ink-story-window p":
    "Bitterness is not meant to surprise a child.<br />It is a small sensory cue that helps the story’s message stay in the body and memory.",
  ".ink-facts article:nth-child(1) h3": "Patented printing technology",
  ".ink-facts article:nth-child(1) p":
    "A bitter ink composition and printing technology protected by Korean Patent No. 10-2761689.",
  ".ink-facts article:nth-child(2) h3": "Children’s product safety testing",
  ".ink-facts article:nth-child(2) p":
    "Bitter Books toys completed testing under Korea’s common safety standards for children’s products, with a KOTITI test report.",
  ".ink-facts article:nth-child(3) h3": "Multiple printing methods",
  ".ink-facts article:nth-child(3) p":
    "Developed for applications ranging from offset printing on paper to UV printing and gravure printing for films and stickers.",
  ".print-methods span:nth-child(1)": "OFFSET INK : For books and educational tools",
  ".print-methods span:nth-child(2)": "UV INK : For plastics and non-absorbent materials",
  ".print-methods span:nth-child(3)": "GRAVURE INK : For films and vinyl",
  ".certificate-heading .section-index": "PROOF & CERTIFICATION",
  ".certificate-heading h3": "Our technology is backed by evidence.",
  ".certificate-heading > p": "Select an image to view the original document.",
  ".certificate-card:nth-child(1) span": "KOREAN PATENT",
  ".certificate-card:nth-child(1) strong": "Patent No. 10-2761689",
  ".certificate-card:nth-child(2) span": "CHILDREN’S PRODUCT SAFETY",
  ".certificate-card:nth-child(2) strong": "KOTITI Test Report",
  ".certificate-card:nth-child(3) span": "GLOBAL IP",
  ".certificate-card:nth-child(3) strong": "U.S. Patent Application",
  ".faq-heading .section-index": "BITTERINK FAQ",
  ".faq-heading h3": "Before reading together,<br />find quick answers here.",
  ".faq-heading > p:last-child": "Select a question to reveal a short answer.",
  ".soyink-note p":
    "BitterINK products are made with plant-based soybean-oil <strong>SoyINK-certified ink</strong>.",
  ".faq-list details:nth-child(1) summary":
    '<span class="faq-number">Q1</span><span class="faq-question-text">Is the bitter ink in this book safe?</span>',
  ".faq-list details:nth-child(1) p":
    "It uses plant-based SoyINK and Veranova’s premium bittering ingredient from the United Kingdom, and has completed children’s product safety testing.",
  ".faq-list details:nth-child(2) summary":
    '<span class="faq-number">Q2</span><span class="faq-question-text">Is brief contact with the mouth okay?</span>',
  ".faq-list details:nth-child(2) p":
    "It is designed for brief sensory contact. It is not food, so use only a light touch with a fingertip or the tip of the tongue.",
  ".faq-list details:nth-child(3) summary":
    '<span class="faq-number">Q3</span><span class="faq-question-text">Does the bitter taste spread through the book?</span>',
  ".faq-list details:nth-child(3) p":
    "It is printed only on selected scenes and fixed after drying. A faint taste may be noticed nearby depending on the paper.",
  ".faq-list details:nth-child(4) summary":
    '<span class="faq-number">Q4</span><span class="faq-question-text">How do we use the experience stickers?</span>',
  ".faq-list details:nth-child(4) p":
    "When several children share the book, place an included sticker on the scene and let each child experience one hygienically.",
  ".faq-list details:nth-child(5) summary":
    '<span class="faq-number">Q5</span><span class="faq-question-text">What age is it recommended for?</span>',
  ".faq-list details:nth-child(5) p":
    "It is recommended for ages three and older. The experience is best shared lightly with a caregiver.",
  ".faq-list details:nth-child(6) summary":
    '<span class="faq-number">Q6</span><span class="faq-question-text">Does the bitter taste last after repeated use?</span>',
  ".faq-list details:nth-child(6) p":
    "Moisture and friction can gradually weaken it. Use the included bitter-taste stickers when another experience is needed.",
  ".story-header .section-index": "03 / BITTER BOOKS SERIES",
  ".story-header h2": "Feel, laugh,<br />and change from within.",
  ".story-header > p":
    "Bitter Books chooses stories over lectures and experience over pressure. Meet two different sensory stories.",
  ".book-card:nth-child(1) .story-label": "BITTER BOOKS SERIES 01",
  ".book-card:nth-child(1) .book-copy h3": "My Finger, Kong’s Toe",
  ".book-card:nth-child(1) .book-copy > p:not(.story-label)":
    "A warm picture book that looks closely at why children suck their fingers. Its bitter-taste experience helps children feel the result of the behavior and take their first step toward stopping without being scolded.",
  ".book-card:nth-child(1) li:nth-child(1)":
    "A sensory picture book for children aged three and older and their caregivers",
  ".book-card:nth-child(1) li:nth-child(2)":
    "Bitter-taste experience with Korean children’s product safety confirmation",
  ".book-card:nth-child(2) .story-label": "BITTER BOOKS SERIES 02",
  ".book-card:nth-child(2) .book-copy h3": "Teacher Inom",
  ".book-card:nth-child(2) .book-copy > p:not(.story-label)":
    "A playful five-senses storybook that humorously points out everyday misbehavior. The comical teacher and a hands-on bitter sticker help children remember the cause and result of their actions.",
  ".book-card:nth-child(2) li:nth-child(1)":
    "Everyday habits learned through a funny story",
  ".book-card:nth-child(2) li:nth-child(2)":
    "Includes an experiential bitter-taste sticker",
  ".book-buy": "Buy on Coupang <span aria-hidden=\"true\">↗</span>",
  ".book-store": "Naver SmartStore <span aria-hidden=\"true\">↗</span>",
  ".buy-section .section-index": "04 / WHERE TO BUY",
  ".buy-section h2": "Meet Bitter Books<br />at your preferred online store.",
  ".store-links a:nth-child(1) strong": "Buy My Finger, Kong’s Toe",
  ".store-links a:nth-child(2) strong": "Buy Teacher Inom",
  ".store-links a:nth-child(3) strong": "Official Bitter Books Store",
  ".social-intro .section-index": "05 / FOLLOW THE STORY",
  ".social-intro h2":
    "Be the first to see<br />how our books and new stories are made.",
  ".social-intro > p:last-child":
    "Follow scenes from our picture books, behind-the-scenes moments and short videos to enjoy with children.",
  ".instagram-card p": "Discover the making of our books and stories from inside the pages.",
  ".youtube-card p": "Watch playful Bitter Books videos together with your child.",
  ".collaboration-intro .section-index": "06 / CONTACT US",
  ".collaboration-intro h2":
    "Let’s create a new kind<br />of sensory story together.",
  ".collaboration-intro > p:last-child":
    "Bitter Books welcomes partnerships that make children’s everyday experiences kinder and more memorable.",
  ".collaboration-fields article:nth-child(1) h3": "Publishing & education",
  ".collaboration-fields article:nth-child(1) p":
    "Books, learning tools and stickers designed to reinforce behavior change and learning.",
  ".collaboration-fields article:nth-child(2) h3": "Pet care",
  ".collaboration-fields article:nth-child(2) p":
    "Tapes and stickers for behavior guidance and protection of furniture and electrical cords.",
  ".collaboration-fields article:nth-child(3) h3": "Packaging & protection",
  ".collaboration-fields article:nth-child(3) p":
    "Packaging and protective products designed with children’s safety in mind.",
  ".footer-brand p": "Books learned through the senses and grown through stories",
  ".footer-info > p:nth-child(1)": "KUNMUK Co., Ltd. · CEO Hyunmin Roh",
  ".footer-info > p:nth-child(2)": "Business registration No. 122-86-49985",
  ".footer-info > p:nth-child(3)":
    "E-commerce registration No. 2025-Yongin Giheung-02468",
  ".footer-info > p:nth-child(4)": "Publisher registration No. 2025-000099",
  ".footer-info .footer-address":
    "Business address: 6F, C608-D68, 444 Dongbaekjukjeon-daero, Giheung-gu, Yongin-si, Gyeonggi-do, Republic of Korea",
};

const chineseCopy = {
  ".site-nav a:nth-child(1)": "品牌介绍",
  ".site-nav a:nth-child(2)": "出版图书",
  ".site-nav a:nth-child(3)": "BitterINK 实验室",
  ".site-nav a:nth-child(4)": "社交媒体",
  ".header-buy": "购买",
  ".eyebrow": "比语言更早触达感官的故事",
  ".hero h1": "把孩子的习惯，<br />变成故事。",
  ".hero-description":
    "不责骂，也不强迫制止，而是让孩子亲自感受并理解。Bitter Books 将专利 BitterINK 与故事相结合，创造全新的阅读体验。",
  ".button-primary": "了解 Bitter Books <span aria-hidden=\"true\">→</span>",
  ".text-link": "查看购买渠道 <span aria-hidden=\"true\">↗</span>",
  ".about-section .section-index": "01 / 关于 BITTER BOOKS",
  ".about-heading h2": "学习，<br />从五感开始。",
  ".about-warm-note": "用眼睛阅读，用指尖感受，<br />在心里久久停留的故事",
  ".about-lead > p:first-child":
    "Bitter Books 是全球首个将苦味油墨 BitterINK 应用于教育与自我成长领域的出版品牌。",
  ".about-caption":
    "我们提出一种不止于阅读，而是通过身体感受并长久记忆的全新阅读体验。",
  ".about-detail-inner article:nth-child(1) span": "一",
  ".about-detail-inner article:nth-child(1) h3": "从五感开始的学习",
  ".about-detail-inner article:nth-child(1) p":
    "秉持“学习从五感开始”的理念，我们通过感官学习帮助读者重新认识习惯，拓展成长的可能。",
  ".about-detail-inner article:nth-child(2) span": "二",
  ".about-detail-inner article:nth-child(2) h3": "留在身体里的记忆",
  ".about-detail-inner article:nth-child(2) p":
    "再好的教育，如果缺少体验也容易被遗忘。Bitter Books 将苦味感受融入故事，让教育信息被亲自感受并长久记住。",
  ".about-detail-inner article:nth-child(3) span": "三",
  ".about-detail-inner article:nth-child(3) h3": "行为改变的小小起点",
  ".about-detail-inner article:nth-child(3) p":
    "Bitter Books 的每一本书都使用 BitterINK，为孩子和成人带来亲自感受、思考并开始新行动的特别时刻。",
  ".ink-intro .section-index": "02 / BITTERINK 技术",
  ".ink-kicker": "看见、触摸、感受",
  ".ink-intro h2": "当印刷加入感官，<br />故事便成为体验。",
  ".ink-description":
    "BitterINK 是将“苦味”感官刺激融入印刷品的独特技术。它把英国 Veranova 的优质苦味原料与植物性大豆油墨结合，让阅读不只停留在视觉，也通过味觉帮助认知与行为转变。",
  ".ink-story-window p":
    "苦味不是为了吓到孩子，<br />而是帮助身体记住故事信息的小小感官提示。",
  ".ink-facts article:nth-child(1) h3": "专利印刷技术",
  ".ink-facts article:nth-child(1) p":
    "受韩国注册专利第 10-2761689 号保护的苦味油墨配方与印刷技术。",
  ".ink-facts article:nth-child(2) h3": "儿童产品安全检测",
  ".ink-facts article:nth-child(2) p":
    "Bitter Books 玩具已完成韩国儿童产品通用安全标准检测，并取得 KOTITI 检测报告。",
  ".ink-facts article:nth-child(3) h3": "多种印刷方式",
  ".ink-facts article:nth-child(3) p":
    "从纸张胶印、UV 印刷到薄膜与贴纸的凹版印刷，可按用途和材料灵活应用。",
  ".print-methods span:nth-child(1)": "OFFSET 油墨：用于图书和教育工具",
  ".print-methods span:nth-child(2)": "UV 油墨：用于塑料及非吸收材料",
  ".print-methods span:nth-child(3)": "凹版油墨：用于薄膜和塑料膜",
  ".certificate-heading .section-index": "证明与认证",
  ".certificate-heading h3": "我们的技术，有真实资料为证。",
  ".certificate-heading > p": "点击图片可查看原始文件。",
  ".certificate-card:nth-child(1) span": "韩国注册专利",
  ".certificate-card:nth-child(1) strong": "第 10-2761689 号",
  ".certificate-card:nth-child(2) span": "儿童产品安全确认",
  ".certificate-card:nth-child(2) strong": "KOTITI 检测报告",
  ".certificate-card:nth-child(3) span": "全球知识产权",
  ".certificate-card:nth-child(3) strong": "美国专利申请",
  ".faq-heading .section-index": "BITTERINK 常见问题",
  ".faq-heading h3": "亲子共读前，<br />先看看这些常见问题。",
  ".faq-heading > p:last-child": "点击问题即可查看简短回答。",
  ".soyink-note p":
    "BitterINK 产品采用植物性大豆油制成的 <strong>SoyINK 认证油墨</strong>。",
  ".faq-list details:nth-child(1) summary":
    '<span class="faq-number">Q1</span><span class="faq-question-text">书中的苦味油墨安全吗？</span>',
  ".faq-list details:nth-child(1) p":
    "采用植物性 SoyINK 和英国 Veranova 的优质苦味原料，并已完成儿童产品安全检测。",
  ".faq-list details:nth-child(2) summary":
    '<span class="faq-number">Q2</span><span class="faq-question-text">短暂接触口腔也没问题吗？</span>',
  ".faq-list details:nth-child(2) p":
    "产品按短暂感官体验设计，并非食品。请仅用指尖或舌尖轻轻体验。",
  ".faq-list details:nth-child(3) summary":
    '<span class="faq-number">Q3</span><span class="faq-question-text">苦味会扩散到整本书吗？</span>',
  ".faq-list details:nth-child(3) p":
    "只印在部分场景，干燥后会固定。根据纸张特性，邻近区域可能感受到轻微苦味。",
  ".faq-list details:nth-child(4) summary":
    '<span class="faq-number">Q4</span><span class="faq-question-text">体验贴纸怎么使用？</span>',
  ".faq-list details:nth-child(4) p":
    "多人共读时，请将附赠贴纸贴在相应场景，每次使用一张，更加卫生。",
  ".faq-list details:nth-child(5) summary":
    '<span class="faq-number">Q5</span><span class="faq-question-text">几岁开始适合使用？</span>',
  ".faq-list details:nth-child(5) p":
    "建议年龄为 3 岁以上。与家长一起阅读并轻轻体验，效果更好。",
  ".faq-list details:nth-child(6) summary":
    '<span class="faq-number">Q6</span><span class="faq-question-text">多次使用后苦味还会保留吗？</span>',
  ".faq-list details:nth-child(6) p":
    "水分和摩擦会让苦味逐渐减弱。需要再次体验时，可使用随书附赠的苦味贴纸。",
  ".story-header .section-index": "03 / BITTER BOOKS 系列",
  ".story-header h2": "感受、欢笑，<br />然后主动改变。",
  ".story-header > p":
    "Bitter Books 选择故事而非说教，选择体验而非强迫。来认识两本不同的感官故事书。",
  ".book-card:nth-child(1) .story-label": "BITTER BOOKS 系列 01",
  ".book-card:nth-child(1) .book-copy h3": "我的手指，Kong的脚趾",
  ".book-card:nth-child(1) .book-copy > p:not(.story-label)":
    "一本温暖观察孩子吸手指原因的绘本。书中的苦味体验帮助孩子亲自感受行为的结果，在不被责骂的情况下迈出停止习惯的第一步。",
  ".book-card:nth-child(1) li:nth-child(1)": "适合 3 岁以上儿童及家长的感官绘本",
  ".book-card:nth-child(1) li:nth-child(2)": "苦味体验设计与韩国儿童产品安全确认",
  ".book-card:nth-child(2) .story-label": "BITTER BOOKS 系列 02",
  ".book-card:nth-child(2) .book-copy h3": "伊诺姆老师",
  ".book-card:nth-child(2) .book-copy > p:not(.story-label)":
    "一本以幽默方式指出孩子日常不良行为的五感体验绘本。诙谐的老师故事和亲手体验的苦味贴纸，帮助孩子记住行为的原因与结果。",
  ".book-card:nth-child(2) li:nth-child(1)": "通过有趣故事学习生活习惯",
  ".book-card:nth-child(2) li:nth-child(2)": "附带可亲自体验的苦味贴纸",
  ".book-buy": "前往 Coupang 购买 <span aria-hidden=\"true\">↗</span>",
  ".book-store": "Naver 智慧商店 <span aria-hidden=\"true\">↗</span>",
  ".buy-section .section-index": "04 / 购买渠道",
  ".buy-section h2": "在您常用的网上商店<br />遇见 Bitter Books。",
  ".store-links a:nth-child(1) strong": "购买《我的手指，Kong的脚趾》",
  ".store-links a:nth-child(2) strong": "购买《伊诺姆老师》",
  ".store-links a:nth-child(3) strong": "Bitter Books 官方商店",
  ".social-intro .section-index": "05 / 关注故事",
  ".social-intro h2": "第一时间了解<br />新书与故事的诞生过程。",
  ".social-intro > p:last-child":
    "在社交媒体查看绘本场景、制作幕后和适合亲子一起观看的短视频。",
  ".instagram-card p": "了解绘本的制作过程与书中故事。",
  ".youtube-card p": "与孩子一起观看有趣的 Bitter Books 视频。",
  ".collaboration-intro .section-index": "06 / 联系我们",
  ".collaboration-intro h2": "一起创造<br />全新的感官故事。",
  ".collaboration-intro > p:last-child":
    "Bitter Books 期待能让孩子日常体验更温柔、更难忘的合作与联名。",
  ".collaboration-fields article:nth-child(1) h3": "出版与教育",
  ".collaboration-fields article:nth-child(1) p":
    "制作帮助行为调整并提升教育效果的图书、教具与贴纸。",
  ".collaboration-fields article:nth-child(2) h3": "宠物市场",
  ".collaboration-fields article:nth-child(2) p":
    "开发用于行为引导及保护家具、电线的胶带与贴纸。",
  ".collaboration-fields article:nth-child(3) h3": "包装与防护产品",
  ".collaboration-fields article:nth-child(3) p":
    "开发以儿童安全为核心的包装材料与防护产品。",
  ".footer-brand p": "用感官学习，在故事中成长的书",
  ".footer-info > p:nth-child(1)": "KUNMUK 株式会社 · 代表 卢贤敏",
  ".footer-info > p:nth-child(2)": "营业执照号码 122-86-49985",
  ".footer-info > p:nth-child(3)": "通信销售业申报编号 2025-용인기흥-02468",
  ".footer-info > p:nth-child(4)": "出版社登记编号 2025-000099",
  ".footer-info .footer-address":
    "营业地址：韩国京畿道龙仁市器兴区东柏竹田大路444，6层 C608-D68号 JUNEVE（中洞）",
};

const japaneseCopy = {
  ".site-nav a:nth-child(1)": "ビターブックスについて",
  ".site-nav a:nth-child(2)": "刊行書籍",
  ".site-nav a:nth-child(3)": "BitterINK ラボ",
  ".site-nav a:nth-child(4)": "SNS",
  ".header-buy": "購入する",
  ".eyebrow": "言葉より先に、感覚へ届く物語",
  ".hero h1": "子どもの習慣を、<br />物語に変えます。",
  ".hero-description":
    "叱ったり無理にやめさせたりするのではなく、子ども自身が感じて気づけるように。Bitter Books は特許技術 BitterINK と物語をつなぎ、新しい読書体験をつくります。",
  ".button-primary": "Bitter Books を知る <span aria-hidden=\"true\">→</span>",
  ".text-link": "購入先を見る <span aria-hidden=\"true\">↗</span>",
  ".about-section .section-index": "01 / BITTER BOOKS について",
  ".about-heading h2": "学びは、<br />五感から始まります。",
  ".about-warm-note": "目で読み、指先で出会い、<br />心に長く残る物語",
  ".about-lead > p:first-child":
    "Bitter Books は、世界で初めて苦味インク BitterINK を教育・自己成長分野に取り入れた出版ブランドです。",
  ".about-caption":
    "読むだけで終わらず、体で感じ、長く記憶する新しい読書体験を提案します。",
  ".about-detail-inner article:nth-child(1) span": "ひとつ",
  ".about-detail-inner article:nth-child(1) h3": "五感から始まる学び",
  ".about-detail-inner article:nth-child(1) p":
    "「学びは五感から始まる」という考えのもと、感覚を使った学びで習慣を見つめ直し、成長の可能性を広げる本をつくります。",
  ".about-detail-inner article:nth-child(2) span": "ふたつ",
  ".about-detail-inner article:nth-child(2) h3": "体に残る記憶",
  ".about-detail-inner article:nth-child(2) p":
    "どれほど優れた教育も、体験がなければ忘れられがちです。Bitter Books は苦味の感覚を物語に加え、メッセージを実感し、長く覚えられるようにします。",
  ".about-detail-inner article:nth-child(3) span": "みっつ",
  ".about-detail-inner article:nth-child(3) h3": "行動が変わる小さなきっかけ",
  ".about-detail-inner article:nth-child(3) p":
    "Bitter Books のすべての本には BitterINK が使われています。子どもも大人も自ら感じ、考え、新しい行動を始める特別な体験を届けます。",
  ".ink-intro .section-index": "02 / BITTERINK テクノロジー",
  ".ink-kicker": "見て、触れて、感じる本",
  ".ink-intro h2": "印刷に感覚を加えると、<br />物語は体験になります。",
  ".ink-description":
    "BitterINK は「苦味」という感覚刺激を印刷物に取り入れた独自の印刷技術です。英国 Veranova のプレミアム苦味原料と植物性大豆油インクを組み合わせ、見る・読むだけでなく、味覚を通じた認識と行動の変化を支えます。",
  ".ink-story-window p":
    "苦味は子どもを驚かせるためではありません。<br />物語のメッセージを体で覚えるための小さな感覚のきっかけです。",
  ".ink-facts article:nth-child(1) h3": "特許取得済みの印刷技術",
  ".ink-facts article:nth-child(1) p":
    "韓国登録特許第 10-2761689 号で保護された苦味インク組成物と印刷技術です。",
  ".ink-facts article:nth-child(2) h3": "子ども向け製品の安全試験",
  ".ink-facts article:nth-child(2) p":
    "Bitter Books の玩具は韓国の子ども向け製品共通安全基準試験を完了し、KOTITI 試験成績書を取得しています。",
  ".ink-facts article:nth-child(3) h3": "多様な印刷方式",
  ".ink-facts article:nth-child(3) p":
    "紙用オフセットから UV 印刷、フィルムやシール向けグラビア印刷まで、用途と素材に合わせて展開できます。",
  ".print-methods span:nth-child(1)": "OFFSET インク：書籍・教育ツール用",
  ".print-methods span:nth-child(2)": "UV インク：プラスチック・非吸収素材用",
  ".print-methods span:nth-child(3)": "グラビアインク：フィルム・ビニール用",
  ".certificate-heading .section-index": "証明・認証",
  ".certificate-heading h3": "技術を言葉だけで説明しません。",
  ".certificate-heading > p": "画像を選ぶと原本を確認できます。",
  ".certificate-card:nth-child(1) span": "韓国登録特許",
  ".certificate-card:nth-child(1) strong": "第 10-2761689 号",
  ".certificate-card:nth-child(2) span": "子ども向け製品の安全確認",
  ".certificate-card:nth-child(2) strong": "KOTITI 試験成績書",
  ".certificate-card:nth-child(3) span": "グローバル IP",
  ".certificate-card:nth-child(3) strong": "米国特許出願",
  ".faq-heading .section-index": "BITTERINK FAQ",
  ".faq-heading h3": "一緒に読む前に、<br />気になることを確認しましょう。",
  ".faq-heading > p:last-child": "質問を選ぶと短い回答が表示されます。",
  ".soyink-note p":
    "BitterINK 製品は植物性大豆油ベースの <strong>SoyINK 認証インク</strong>でつくられています。",
  ".faq-list details:nth-child(1) summary":
    '<span class="faq-number">Q1</span><span class="faq-question-text">この本の苦味インクは安全ですか？</span>',
  ".faq-list details:nth-child(1) p":
    "植物性 SoyINK と英国 Veranova のプレミアム苦味原料を使用し、子ども向け製品の安全試験を完了しています。",
  ".faq-list details:nth-child(2) summary":
    '<span class="faq-number">Q2</span><span class="faq-question-text">口に少し触れても大丈夫ですか？</span>',
  ".faq-list details:nth-child(2) p":
    "短時間の感覚体験を想定して設計されています。食品ではないため、指先や舌先で軽く体験してください。",
  ".faq-list details:nth-child(3) summary":
    '<span class="faq-number">Q3</span><span class="faq-question-text">苦味は本全体に広がりますか？</span>',
  ".faq-list details:nth-child(3) p":
    "一部の場面だけに印刷され、乾燥後に定着します。紙の特性により周辺でわずかな苦味を感じることがあります。",
  ".faq-list details:nth-child(4) summary":
    '<span class="faq-number">Q4</span><span class="faq-question-text">体験シールはどう使いますか？</span>',
  ".faq-list details:nth-child(4) p":
    "複数の子どもで読むときは、付属シールを該当場面に貼り、一枚ずつ衛生的に体験してください。",
  ".faq-list details:nth-child(5) summary":
    '<span class="faq-number">Q5</span><span class="faq-question-text">何歳から使えますか？</span>',
  ".faq-list details:nth-child(5) p":
    "推奨年齢は 3 歳以上です。保護者と一緒に読み、軽く体験するとより効果的です。",
  ".faq-list details:nth-child(6) summary":
    '<span class="faq-number">Q6</span><span class="faq-question-text">繰り返し使っても苦味は残りますか？</span>',
  ".faq-list details:nth-child(6) p":
    "水分や摩擦で苦味は少しずつ弱くなります。繰り返し体験するときは付属の苦味シールをご利用ください。",
  ".story-header .section-index": "03 / BITTER BOOKS シリーズ",
  ".story-header h2": "感じて、笑って、<br />自分から変わる物語",
  ".story-header > p":
    "Bitter Books は説教より物語を、強制より体験を選びます。二つの異なる感覚の物語に出会ってください。",
  ".book-card:nth-child(1) .story-label": "BITTER BOOKS シリーズ 01",
  ".book-card:nth-child(1) .book-copy h3": "わたしの指、コンの足の指",
  ".book-card:nth-child(1) .book-copy > p:not(.story-label)":
    "指しゃぶりをする子どもの気持ちをあたたかく見つめる絵本です。本の中の苦味体験を通して行動の結果を自ら感じ、叱られなくてもやめるための第一歩を応援します。",
  ".book-card:nth-child(1) li:nth-child(1)": "3 歳以上の子どもと保護者のための感覚絵本",
  ".book-card:nth-child(1) li:nth-child(2)": "苦味体験要素と韓国の子ども向け製品安全確認",
  ".book-card:nth-child(2) .story-label": "BITTER BOOKS シリーズ 02",
  ".book-card:nth-child(2) .book-copy h3": "イノム先生",
  ".book-card:nth-child(2) .book-copy > p:not(.story-label)":
    "日常のよくない行動を楽しく伝える五感体験型の絵本です。愉快な先生の物語と実際に触れる苦味シールが、行動の原因と結果を記憶に残します。",
  ".book-card:nth-child(2) li:nth-child(1)": "楽しい物語で学ぶ生活習慣",
  ".book-card:nth-child(2) li:nth-child(2)": "実際に体験できる苦味シール付き",
  ".book-buy": "Coupang で購入 <span aria-hidden=\"true\">↗</span>",
  ".book-store": "Naver スマートストア <span aria-hidden=\"true\">↗</span>",
  ".buy-section .section-index": "04 / 購入先",
  ".buy-section h2": "いつものオンラインストアで<br />Bitter Books に出会えます。",
  ".store-links a:nth-child(1) strong": "『わたしの指、コンの足の指』を購入",
  ".store-links a:nth-child(2) strong": "『イノム先生』を購入",
  ".store-links a:nth-child(3) strong": "Bitter Books 公式ストア",
  ".social-intro .section-index": "05 / 物語をフォロー",
  ".social-intro h2": "本が生まれる瞬間と<br />次の物語をいち早く。",
  ".social-intro > p:last-child":
    "絵本の場面、制作の舞台裏、親子で楽しめる短い動画を SNS でお届けします。",
  ".instagram-card p": "絵本の制作過程と本の中の物語をご覧ください。",
  ".youtube-card p": "お子さまと一緒に楽しめる Bitter Books の動画をご覧ください。",
  ".collaboration-intro .section-index": "06 / お問い合わせ",
  ".collaboration-intro h2": "新しい感覚の物語を<br />一緒につくりませんか。",
  ".collaboration-intro > p:last-child":
    "Bitter Books は、子どもの日常体験をよりやさしく、心に残るものにする協業・提携をお待ちしています。",
  ".collaboration-fields article:nth-child(1) h3": "出版・教育分野",
  ".collaboration-fields article:nth-child(1) p":
    "行動の見直しと教育効果を高める本、教材、シールの制作。",
  ".collaboration-fields article:nth-child(2) h3": "ペット市場",
  ".collaboration-fields article:nth-child(2) p":
    "行動サポートや家具・電線保護のためのテープとシールの開発。",
  ".collaboration-fields article:nth-child(3) h3": "包装・保護製品",
  ".collaboration-fields article:nth-child(3) p":
    "子どもの安全を考えた包装材と保護製品の開発。",
  ".footer-brand p": "感覚で学び、物語で育つ本",
  ".footer-info > p:nth-child(1)": "株式会社 KUNMUK・代表 ノ・ヒョンミン",
  ".footer-info > p:nth-child(2)": "事業者登録番号 122-86-49985",
  ".footer-info > p:nth-child(3)": "通信販売業届出番号 2025-용인기흥-02468",
  ".footer-info > p:nth-child(4)": "出版社届出番号 2025-000099",
  ".footer-info .footer-address":
    "事業所住所：韓国 京畿道龍仁市器興区東柏竹田大路444、6階 C608-D68号 JUNEVE（中洞）",
};

const languageCopies = {
  en: englishCopy,
  zh: chineseCopy,
  ja: japaneseCopy,
};

const languageSettings = {
  ko: {
    label: "한국어",
    flag: "./assets/flags/kr.svg",
    title: "비터북스(BitterBooks) | 감각으로 배우는 그림책",
    ariaLabel: "언어 변경",
  },
  en: {
    label: "English",
    flag: "./assets/flags/us.svg",
    title: "Bitter Books | Stories Learned Through the Senses",
    ariaLabel: "Change language",
  },
  zh: {
    label: "中文",
    flag: "./assets/flags/cn.svg",
    title: "Bitter Books | 用感官学习的故事",
    ariaLabel: "切换语言",
  },
  ja: {
    label: "日本語",
    flag: "./assets/flags/jp.svg",
    title: "Bitter Books | 五感で学ぶ物語",
    ariaLabel: "言語を変更",
  },
};

const translatableNodes = new Map();

Object.keys(englishCopy).forEach((selector) => {
  const nodes = [...document.querySelectorAll(selector)];
  translatableNodes.set(
    selector,
    nodes.map((node) => ({ node, korean: node.innerHTML })),
  );
});

function setLanguage(language) {
  const normalizedLanguage = languageSettings[language] ? language : "ko";
  const copy = languageCopies[normalizedLanguage];
  const settings = languageSettings[normalizedLanguage];

  translatableNodes.forEach((items, selector) => {
    items.forEach(({ node, korean }) => {
      node.innerHTML = copy ? copy[selector] : korean;
    });
  });

  document.documentElement.lang = normalizedLanguage;
  document.title = settings.title;
  currentLanguage.textContent = settings.label;
  currentLanguageFlag.src = settings.flag;
  languageToggle.setAttribute("aria-label", settings.ariaLabel);
  try {
    localStorage.setItem("bitterbooks-language", normalizedLanguage);
  } catch {
    // The language switch still works when browser storage is unavailable.
  }
}

function closeLanguageMenu() {
  languageToggle?.setAttribute("aria-expanded", "false");
  if (languageMenu) languageMenu.hidden = true;
}

languageToggle?.addEventListener("click", () => {
  const willOpen = languageToggle.getAttribute("aria-expanded") !== "true";
  languageToggle.setAttribute("aria-expanded", String(willOpen));
  languageMenu.hidden = !willOpen;
});

languageMenu?.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language);
    closeLanguageMenu();
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".language-switcher")) closeLanguageMenu();
});

let savedLanguage;
try {
  savedLanguage = localStorage.getItem("bitterbooks-language");
} catch {
  savedLanguage = null;
}
if (languageSettings[savedLanguage]) setLanguage(savedLanguage);
