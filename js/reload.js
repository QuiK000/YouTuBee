document.addEventListener("DOMContentLoaded", () => {

  const reload = document.querySelector('.reload');

  const reloadPage = () => {
    for (let i = 0; i < 10; i++){
      console.log(i + 1);

      if (reload){
        clearTimeout(reload);
      }

      console.log('Reload was successful');

      reloadPage = setTimeout(() => {
        location.reload(true);
      }, 1000);
    }
  }

  reload.addEventListener('click', reloadPage);

});