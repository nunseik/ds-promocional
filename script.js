const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});

document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const cards = [...document.querySelectorAll('.product-card')];
const empty = document.querySelector('.empty-state');
document.querySelectorAll('.filter').forEach((filter) => filter.addEventListener('click', () => {
  document.querySelector('.filter.active')?.classList.remove('active');
  filter.classList.add('active');
  const category = filter.dataset.filter;
  let visible = 0;
  cards.forEach((card) => {
    const show = category === 'todos' || card.dataset.category === category;
    card.classList.toggle('hidden', !show);
    if (show) visible += 1;
  });
  empty.hidden = visible !== 0;
}));

document.getElementById('year').textContent = new Date().getFullYear();
