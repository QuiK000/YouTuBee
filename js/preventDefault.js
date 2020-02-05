document.addEventListener('DOMContentLoaded', () => {

  const getStarted = document.querySelector('.form__content-btn-getstarted');
  const login = document.querySelector('.form__content-btn-login');

  const start = (e) => {
    e.preventDefault();
  };

  getStarted.addEventListener('click', start);
  login.addEventListener('click', start);
});