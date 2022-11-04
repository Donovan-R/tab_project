const btns = document.querySelectorAll(".tabBtn");
const articles = document.querySelectorAll(".content");

console.log(articles);
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    btns.forEach(function (bTarget) {
      if (bTarget !== e.currentTarget) {
        bTarget.classList.remove("active");
      } else {
        btn.classList.add("active");
      }
    });
    const checkId = e.currentTarget.textContent;
    const target = document.getElementById(checkId);

    articles.forEach(function (article) {
      if (article !== target) {
        article.classList.remove("active");
      } else {
        target.classList.add("active");
      }
    });
  });
});
