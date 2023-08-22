const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const close = document.getElementById('close');

hamburgerMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  mobileMenu.classList.add('flex');
});

close.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('flex');
});
