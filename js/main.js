document.addEventListener("DOMContentLoaded", () => {

  const burgerMenu = document.querySelector('.header__burger-menu');
  const sideBar = document.querySelector('.main__sidebar');

  burgerMenu.addEventListener('click', () => {
    sideBar.classList.toggle('unshow');
    
  })
})