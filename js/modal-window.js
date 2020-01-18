$(document).ready(() => {
  $('.form__content-btn-login').on('click', () => {
    $('.auth').fadeIn();
    $('.auth').fadeIn('disabled');
  });
  $('.close').on('click', () => {
    $('.auth').fadeOut();
  });
  $(document).keydown((e) => {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.auth').fadeOut();
    }
  });
});