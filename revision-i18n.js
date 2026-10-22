const values = items => items.map((x,i)=>`<article><span>0${i+1} / ${['FEEL','THINK','GROW'][i]}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('');
const faqs = (lead,note,items) => `<p class="section-lead">${lead}</p><div class="guide-note">${note}</div>`+items.map((x,i)=>`<details ${i===0?'open':''}><summary>0${i+1}. ${x[0]}</summary><p>${x[1]}</p></details>`).join('');
const lab = (lead,parts) => `<p class="section-lead">${lead}</p><img class="content-banner" src="assets/lab-visual.webp" width="1536" height="1024" alt="BitterINK picture book illustration" loading="lazy">`+parts.map(x=>`<h3>${x[0]}</h3><p>${x[1]}</p>`).join('');
export const revisionTranslations={
 en:{
  aboutTitle:'Learning begins with the senses.',aboutLead:'An invitation to feel and discover, together.<br>BitterBooks connects stories with BitterINK, our bitter-taste printing technology.',
  aboutValues:values([['Stories to feel','Read with your eyes, explore with your fingertips, and connect the story’s message with a special sensory experience.'],['Experiences to remember','We look at the feelings behind a child’s behavior. Reading and talking with a caregiver gives children time to think.'],['Small steps to grow','Rather than prescribing an answer, we offer a starting point for a new action. We make stories that brighten every child’s day.']]),
  videoTitle:'The story continues beyond the book!',videoLead:'Discover videos to watch together and short, playful Reels.',youtubeTitle:'Shall we watch a story together?',youtubeDesc:'Meet BitterBooks friends in our videos.',youtubeCta:'Watch on YouTube ↗',reelsTitle:'A little break, a playful Reel!',reelsDesc:'Enjoy book moments and news in short videos.',reelsCta:'Watch Instagram Reels ↗',
  showPurchase:'See where to buy ↓',purchaseTitle:'Where shall we meet?',purchaseDesc:'Choose a store to continue to its website.',viewTest:'View KOTITI test report',viewPatent:'View Korean patent',documentTitle:'Product documents',documentHint:'Enlarge the original image to read the document.',downloadDocument:'Save original image',
  contactTitle:'What would you like to tell us?',contactLead:'Ask about books, use, bulk orders, publishing or education partnerships.',copyEmail:'Copy email address',contactCategory:'Inquiry type',categoryBook:'Books and use',categoryOrder:'Bulk orders',categoryPartner:'Publishing / education partnership',categoryOther:'Other',contactMessage:'Your message',contactNote:'Copy your message and send it to the address above from your usual email service. This screen does not submit an inquiry automatically.',copyInquiry:'Copy inquiry message',copySuccess:'Copied. Paste it into your email to send.',copyFailed:'Copy is not available. Please select and copy the email address or your message manually.',
  labDialogTitle:'Bitter Lab: adding a sense to the story',
  labContent:lab('Books to see, touch and feel.<br>Adding a sense to print turns a story into an experience.',[
    ['Why add a bitter taste?','An experience can make a message more memorable. We connect a bitter-taste sensation with a scene so a child and caregiver can reflect together. It is not intended to frighten or punish a child.'],
    ['What is BitterINK?','A bitter-taste printing technology developed by Kunmuk. It combines bittering material from Veranova in the UK with vegetable soy-oil-based ink. It appears in selected book scenes and experience stickers.'],
    ['Technology and supporting documents','Korean registered patent No. 10-2761689 protects the bitter ink composition and printing technology. The Korean patent certificate and KOTITI children’s product common safety standard test report from our earlier website are available below.'],
    ['Printing methods','OFFSET: paper books and educational tools. UV: plastics and other non-absorbent materials. GRAVURE: films and flexible packaging. Applications are developed for each material and purpose; follow the instructions for the specific product.'],
    ['Read, experience, talk','Read the story first. For ages 3+, try the experience lightly with an adult only if the child wants to, following the book’s instructions. Listen to how the child feels and talk about what they might do next.']
  ]),
  safetyContent:faqs('Read together, experience lightly, and leave time to talk. Enjoying the story comes first.','<strong>Ages 3+ · With an adult · Not food</strong><p>Read the instructions on the book and included items first. Never force repeated tasting or use the experience as punishment.</p>',[
    ['What materials are used?','The books use vegetable soy-oil-based SoyINK and bittering material from Veranova in the UK. The KOTITI children’s product common safety standard test report from our earlier website is available below. A report applies to the tested product and items; it does not make the book or sticker edible.'],
    ['How should mouth contact be approached?','The experience is designed for light fingertip or tongue-tip contact at the indicated area, with adult supervision and according to the book’s instructions. Do not chew or eat paper, stickers or ink. Stop if the child is uncomfortable or does not wish to take part; reading the story alone is fine.'],
    ['Does the taste spread throughout the book?','It is printed only in selected scenes and fixed after drying. A slight taste may be noticeable nearby depending on the paper. Avoid soaking or excessive rubbing.'],
    ['How do we use the stickers?','Apply a sticker to the indicated scene as instructed. When reading with several children, use a separate sticker for each child. Stickers are not food; supervise so children do not peel off and swallow them.'],
    ['What is the recommended age?','Ages 3 and older, with a caregiver. Adapt reading to the child’s understanding and response. Tasting is optional.'],
    ['Will the taste last after repeated use?','Moisture and friction may gradually weaken the taste. Follow the book’s instructions when using the included stickers for further experiences. Do not rub hard or wet the area.'],
    ['How should we store and read the book?','Keep it away from water and humidity and read with clean hands. Read first, then ask how the character might feel and what you could try together. Responses and changes in habits vary from child to child.'],
    ['Where can I find product details?','Check the age guidance and precautions on the book, packaging and store listing for each product. View the KOTITI report below, or use Contact for questions about the book and included items.']
  ])
 },
 zh:{
  aboutTitle:'学习从感官开始。',aboutLead:'陪孩子自主感受、发现与思考。<br>비터북스将故事与苦味印刷技术BitterINK相连，创造特别的阅读体验。',
  aboutValues:values([['用感官遇见故事','用眼睛阅读，用指尖探索，用特别的苦味体验感受故事的信息。'],['留在心里的体验','先理解孩子行为背后的心情。与监护人一起阅读和交流，给孩子自主思考的时间。'],['鼓励小小的改变','为尝试新的行为提供契机，不强加唯一答案。用故事让孩子的今天更加闪亮。']]),
  videoTitle:'书本之外，故事还在继续！',videoLead:'一起观看的视频，短小有趣的Reels，都在这里。',youtubeTitle:'一起看看会动的故事吧！',youtubeDesc:'在视频中遇见비터북스的朋友。',youtubeCta:'观看YouTube视频 ↗',reelsTitle:'休息一下，看看有趣的Reels！',reelsDesc:'用短视频欣赏绘本片段与新消息。',reelsCta:'观看Instagram Reels ↗',
  showPurchase:'查看购买渠道 ↓',purchaseTitle:'想在哪里遇见这本书？',purchaseDesc:'选择商店后将前往对应网站。',viewTest:'查看KOTITI检测报告',viewPatent:'查看韩国专利证书',documentTitle:'产品相关资料',documentHint:'可放大原图阅读资料。',downloadDocument:'保存原始图片',contactTitle:'您想告诉我们什么？',contactLead:'欢迎咨询图书、使用方法、团购、出版及教育合作。',copyEmail:'复制邮箱地址',contactCategory:'咨询类型',categoryBook:'图书与使用说明',categoryOrder:'团体购买',categoryPartner:'出版与教育合作',categoryOther:'其他咨询',contactMessage:'咨询内容',contactNote:'复制内容后，请从您常用的邮箱发送至上方地址。本窗口不会自动提交咨询。',copyInquiry:'复制咨询内容',copySuccess:'已复制，请粘贴到邮件中发送。',copyFailed:'无法自动复制，请手动选择并复制邮箱或内容。',
  labDialogTitle:'为故事增添感官体验的苦味研究所',
  labContent:lab('看一看，摸一摸，感受绘本。<br>为印刷增添感官，让故事成为体验。',[
    ['为什么加入苦味？','直接体验能让故事的信息更加难忘。将苦味与情节相连，为孩子和监护人一起思考行为提供契机，不用于惊吓或惩罚孩子。'],
    ['什么是BitterINK？','由建墨开发的苦味印刷技术，将英国Veranova的苦味原料与植物大豆油基油墨结合，应用于绘本中的部分场景和体验贴纸。'],
    ['技术与确认资料','韩国注册专利第10-2761689号保护苦味油墨配方及印刷技术。下方可查看旧网站公开的韩国专利证书与KOTITI儿童产品通用安全标准检测报告。'],
    ['适用于哪些印刷方式？','OFFSET：纸质图书和教育工具。UV：塑料等非吸收性材料。GRAVURE：薄膜和软包装。按材料和用途开发应用，实际使用请遵循各产品的说明。'],
    ['阅读、感受、交流','先阅读故事。适合3岁以上儿童，只在孩子愿意时，由监护人陪同，按书中说明轻轻体验。倾听感受，一起聊聊下一次想怎么做。']
  ]),
  safetyContent:faqs('一起阅读，轻轻体验，充分交流。享受故事的心情最重要。','<strong>3岁以上 · 监护人陪同 · 不可食用</strong><p>请先确认图书和附录的说明，不强迫反复体验，也不用于惩罚。</p>',[
    ['苦味油墨使用什么原料？','使用植物大豆油基SoyINK和英国Veranova苦味原料。下方可查看旧网站公开的KOTITI儿童产品通用安全标准检测报告。检测仅涉及相应产品和项目，并不代表图书或贴纸可以食用。'],
    ['如何进行接触口部的体验？','按书中说明，在指定位置由监护人陪同，用指尖或舌尖轻轻接触。不可咀嚼或吞食纸张、贴纸、油墨。孩子不愿意或感到不适时停止，只阅读故事也可以。'],
    ['苦味会扩散到整本书吗？','仅在部分场景印刷，干燥后固定。因纸张特性，周边可能有微弱苦味。请避免浸湿和过度摩擦。'],
    ['如何使用附录贴纸？','按书中说明贴于相应场景。多个孩子共读时，每人使用单独一张。贴纸不可食用，监护人应注意避免孩子揭下吞咽。'],
    ['适合几岁阅读？','建议3岁以上，在监护人陪同下按孩子的理解和反应阅读。苦味体验并非必须。'],
    ['多次使用后苦味还会保留吗？','水分和摩擦可能逐渐减弱苦味。需要再次体验时，请按说明使用附带贴纸。不要用力摩擦或沾水体验。'],
    ['如何保存和共读？','避免水分和潮湿，阅读前清洁双手。先读故事，再聊聊角色的心情以及下次想怎么做。体验反应与习惯变化因孩子而异。'],
    ['在哪里确认产品信息？','各产品的年龄和注意事项以图书、包装及购买页面为准。下方可查看KOTITI报告，产品或附录问题请使用联系我们。']
  ])
 },
 ja:{
  aboutTitle:'学びは五感から始まります。',aboutLead:'自分で感じ、気づき、考えられるように。<br>BitterBooksは物語と苦味印刷技術BitterINKをつなぐ出版ブランドです。',
  aboutValues:values([['感覚で出会う物語','目で読み、指先で触れ、特別な苦味体験を通して物語のメッセージを感じます。'],['心に残る経験','行動の裏にある子どもの気持ちを見つめます。保護者と読み、話し、自分で考える時間を届けます。'],['小さな変化を応援する本','正解を押しつけず、新しい行動へのきっかけを作ります。子どもの今日が輝く物語を届けます。']]),
  videoTitle:'本の外でも、物語は続きます！',videoLead:'親子で楽しむ動画から、短く楽しいリールまで。',youtubeTitle:'動く物語を、一緒に見よう！',youtubeDesc:'動画でBitterBooksの友達に会いましょう。',youtubeCta:'YouTubeで動画を見る ↗',reelsTitle:'ひと休みに、楽しいリール！',reelsDesc:'絵本の場面や新しいお知らせを短い動画で。',reelsCta:'Instagramリールを見る ↗',
  showPurchase:'購入先を見る ↓',purchaseTitle:'どこで出会いましょう？',purchaseDesc:'ストアを選ぶと、そのサイトへ移動します。',viewTest:'KOTITI試験成績書を見る',viewPatent:'韓国特許証を見る',documentTitle:'製品の確認資料',documentHint:'元の画像を拡大して資料をご覧いただけます。',downloadDocument:'元の画像を保存',contactTitle:'どんなお話を聞かせてくれますか？',contactLead:'絵本、使い方、まとめ買い、出版・教育連携についてお問い合わせください。',copyEmail:'メールアドレスをコピー',contactCategory:'お問い合わせの種類',categoryBook:'絵本・使い方',categoryOrder:'まとめ買い',categoryPartner:'出版・教育連携',categoryOther:'その他',contactMessage:'お問い合わせ内容',contactNote:'内容をコピーし、普段お使いのメールから上のアドレスへ送信してください。この画面から自動送信はされません。',copyInquiry:'お問い合わせ内容をコピー',copySuccess:'コピーしました。メールに貼り付けて送信してください。',copyFailed:'自動コピーできません。アドレスや内容を選択してコピーしてください。',
  labDialogTitle:'物語に感覚を添える、苦味研究所',
  labContent:lab('見て、触れて、感じる絵本。<br>印刷に感覚を添えると、物語は体験になります。',[
    ['なぜ苦味を添えるの？','直接体験することで物語のメッセージが心に残りやすくなります。場面と苦味をつなげ、保護者と一緒に行動の意味を考えるきっかけを作ります。驚かせたり罰を与えたりするためのものではありません。'],
    ['BitterINKとは？','建墨が開発した苦味印刷技術です。英国Veranovaの苦味原料と植物性大豆油ベースのインクを組み合わせ、絵本の一部の場面や体験シールに使用しています。'],
    ['技術と確認資料','韓国登録特許第10-2761689号で苦味インク組成物と印刷技術を保護しています。旧サイトで公開していた韓国特許証とKOTITI子ども向け製品共通安全基準試験成績書を下から確認できます。'],
    ['対応する印刷方式','OFFSET：紙の絵本や教育道具。UV：プラスチックなど非吸収素材。GRAVURE：フィルムや軟包装。素材と用途に合わせて開発しており、使用時は各製品の説明を確認してください。'],
    ['読み、感じ、話す','まず物語を読みます。3歳以上、本人が希望する時だけ保護者と本の説明に従って軽く体験します。感じたことを聞き、次にどうしたいか一緒に話しましょう。']
  ]),
  safetyContent:faqs('一緒に読み、軽く体験し、ゆっくり話しましょう。物語を楽しむ気持ちが一番です。','<strong>3歳以上 · 保護者と一緒に · 食品ではありません</strong><p>本と付属品の説明を先に確認してください。体験の繰り返しを強制したり、罰として使ったりしないでください。</p>',[
    ['どんな原料を使っていますか？','植物性大豆油ベースのSoyINKと英国Veranovaの苦味原料を使っています。旧サイトのKOTITI子ども向け製品共通安全基準試験成績書は下から確認できます。試験は対象製品と項目についてのもので、本やシールが食べられるという意味ではありません。'],
    ['口に触れる体験はどう行いますか？','本の説明に従い、指定箇所で保護者と一緒に指先や舌先に軽く触れる程度にします。紙、シール、インクを噛んだり食べたりしないでください。嫌がったり不快に感じたりしたら中止し、物語だけ楽しんでも構いません。'],
    ['苦味は本全体に広がりますか？','一部の場面だけに印刷され、乾燥後に定着します。紙の特性により周囲で微かな苦味を感じる場合があります。濡らしたり強くこすったりしないでください。'],
    ['付属シールはどう使いますか？','本の説明に従って該当場面に貼ります。複数の子どもで読む場合は一人一枚を使ってください。シールは食品ではありません。はがして飲み込まないよう保護者が見守ってください。'],
    ['何歳から読めますか？','推奨年齢は3歳以上です。保護者と一緒に理解や反応に合わせて読みます。苦味体験は必須ではありません。'],
    ['繰り返しても苦味は残りますか？','水分や摩擦で徐々に弱くなることがあります。再度体験する場合は、本の説明に従って付属シールを活用してください。強くこすったり濡らしたりしないでください。'],
    ['保管と読み聞かせのヒントは？','水分や湿気を避け、清潔な手で読みます。先に物語を読み、登場人物の気持ちや次にできることを話しましょう。反応や習慣の変化には個人差があります。'],
    ['製品情報はどこで確認できますか？','年齢と注意事項は各製品の本、包装、購入先の表示を優先してください。下からKOTITIの資料を確認できます。製品や付属品のご質問はお問い合わせをご利用ください。']
  ])
 }
};
