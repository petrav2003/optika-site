// Active nav + current year + mobile menu
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.menu a');
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  if (burger && menu){
    burger.addEventListener('click', () => {
      menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', menu.classList.contains('open') ? 'true' : 'false');
    });
  }
})();