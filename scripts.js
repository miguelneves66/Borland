const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  // Muda o aria-label para acessibilidade
  if(navMenu.classList.contains('active')){
    menuToggle.setAttribute('aria-label', 'Fechar menu');
  } else {
    menuToggle.setAttribute('aria-label', 'Abrir menu');
  }
});
