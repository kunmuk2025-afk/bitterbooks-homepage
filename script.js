const languageToggle = document.querySelector('.language-toggle');
const languageMenu = document.querySelector('.language-menu');
const dialog = document.querySelector('#book-dialog');
const dialogClose = document.querySelector('.dialog-close');

const books = {
  book1: {
    series: 'BITTER BOOKS SERIES 1',
    title: '내 손가락 콩이 발가락',
    description: '손가락을 빠는 아이의 마음을 따뜻하게 들여다보는 쓴맛 감각 동화책입니다.',
    cover: 'assets/book1-cover.webp',
    url: 'https://link.coupang.com/a/fGI7WNKH3A'
  },
  book2: {
    series: 'BITTER BOOKS SERIES 2',
    title: '이놈 선생님',
    description: '아이의 생활 습관을 유쾌한 이야기와 체험형 쓴맛 스티커로 만나는 감각 동화책입니다.',
    cover: 'assets/book2-cover.webp',
    url: 'https://link.coupang.com/a/fGJbAqRVq8'
  }
};

languageToggle?.addEventListener('click', () => {
  const isOpen = languageToggle.getAttribute('aria-expanded') === 'true';
  languageToggle.setAttribute('aria-expanded', String(!isOpen));
  languageMenu.hidden = isOpen;
});

document.addEventListener('click', (event) => {
  if (!languageMenu?.hidden && !languageMenu.contains(event.target) && event.target !== languageToggle) {
    languageMenu.hidden = true;
    languageToggle.setAttribute('aria-expanded', 'false');
  }
});

document.querySelectorAll('[data-book]').forEach((button) => {
  button.addEventListener('click', () => {
    const book = books[button.dataset.book];
    document.querySelector('#dialog-series').textContent = book.series;
    document.querySelector('#dialog-title').textContent = book.title;
    document.querySelector('#dialog-description').textContent = book.description;
    document.querySelector('#dialog-cover').src = book.cover;
    document.querySelector('#dialog-cover').alt = `${book.title} 책 표지`;
    document.querySelector('#dialog-coupang').href = book.url;
    dialog.showModal();
  });
});

dialogClose?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !languageMenu.hidden) {
    languageMenu.hidden = true;
    languageToggle.setAttribute('aria-expanded', 'false');
  }
});
