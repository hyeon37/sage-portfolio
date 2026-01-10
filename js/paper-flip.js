// 초기 화면 설정
const initPaperFlip = () => {
  var el = document.querySelector(".paper.curr .back");
  el.addEventListener("click", function (e) {
    console.log("e", e, this);
    // this.classList.add("flip");
    // this.previousElementSibling.classList.add("flip");
    document.documentElement.style.setProperty(
      "--paper-flip-width",
      "calc(100vw - 20vw)"
    );
    document.documentElement.style.setProperty(
      "--paper-flip-height",
      "calc(100vh - 10vh)"
    );
  });
};

initPaperFlip();
