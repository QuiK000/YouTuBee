document.addEventListener('DOMContentLoaded', () => {

  const SubscribeBtn = document.querySelector('.main__content-center-button-subscribe');

  const subscribeClick = () => {

    SubscribeBtn.style.background == '#f24f86' ? '#222' : '#f24f86';

  };
  
  SubscribeBtn.addEventListener('click', subscribeClick);
});