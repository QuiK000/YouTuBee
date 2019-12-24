document.addEventListener("DOMContentLoaded", () => {

  const burgerMenu = document.querySelector('.header__burger-menu');
  const sideBar = document.querySelector('.main__sidebar');
  const subscribeBtn = document.querySelector('.main__content-center-button-subscribe');

  burgerMenu.addEventListener('click', () => {
    sideBar.classList.toggle('unshow');
  })

  subscribeBtn.addEventListener('click', () => {
    subscribeBtn.innerHTML = 'Signed';
    subscribeBtn.style.backgroundColor = '#282828';
  })

})