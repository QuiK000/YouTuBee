document.addEventListener("DOMContentLoaded", () => {

  const c = 14;
  const cn = 3;
  const FullPage = Math.ceil(c / cn);

  const paginator = document.querySelector(".paginator");

  let span = "";

  for (var i = 0; i < FullPage; i++) {
    span += "<span class='paginator-number' data-page=" + i * cn + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";
  }
  paginator.innerHTML = span;

  const elementNum = document.querySelectorAll("#num");
  for (let i = 0; i < elementNum.length; i++) {
    if (i < cn) {
      elementNum[i].style.display = "flex";
    }
  }

  let mainActive = document.getElementById("page1");
  mainActive.classList.add("paginator_active");

  const pagination = event => {
    const e = event || window.event;
    const target = e.target;
    const id = target.id;
    
    if (target.tagName.toLowerCase() != "span") return;
    
    const num_ = id.substr(4);
    const data_page = +target.dataset.page;
    mainActive.classList.remove("paginator_active");
    mainActive = document.getElementById(id);
    mainActive.classList.add("paginator_active");

    let j = 0;
    for (let i = 0; i < elementNum.length; i++) {
      const data_num = elementNum[i].dataset.num;
      if (data_num <= data_page || data_num >= data_page)
        elementNum[i].style.display = "none";

    }
    for (let i = data_page; i < elementNum.length; i++) {
      if (j >= cn) break;
      elementNum[i].style.display = "flex";
      j++;
    }
  }

  addEventListener('click', pagination);
});