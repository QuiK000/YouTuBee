document.addEventListener("DOMContentLoaded", () => {

  const reload = document.querySelector('.reload');

  const reloadPage = event => {
    for (let i = 0; i < 10; i++){
      console.log(i + 1);

      if (reload){
        clearTimeout(reload);
      }

      alert('1231231231');

      reloadPage = setTimeout(() => {
        location.reload(true);
      }, 1000);
    }
  }

  reload.addEventListener('click', reloadPage);

});