document.addEventListener('DOMContentLoaded', () => {

  const SubscribeBtn = document.querySelector('.main__content-center-button-subscribe');

  let clicked = false;

  const subscribeClick = () => { 
    clicked = true;
    for (let i = 0; i < 1; i++) {
      SubscribeBtn.style.background = '#222';
    };
    if (clicked) {
      SubscribeBtn.innerHTML = 'Subscribed';
    }
    SubscribeBtn.addEventListener('click', () => {
      for (let i = 0; i < 1; i++) {
        SubscribeBtn.style.background = '#f24f86';
      }
      if (clicked) {
        SubscribeBtn.innerHTML = 'Subscribe';
      }
      clicked = false;
    });
  };

  SubscribeBtn.addEventListener('click', subscribeClick);
});