/*

 */
// 초기 세팅 선언
const settings = {
  paperWidth: '50rem',
  paperHeight: '30rem',
  paperClipWidth: '3rem',
  paperClipHeight: '1rem',
  paperFlipWidth: '10rem',
  paperFlipHeight: '5rem',
  paperClipPosition: 'left',
  unit: 'rem',
};

// 초기 화면 설정
const initPaperFlip = (uSettings = {}) => {
  uSettings = {...settings, ...uSettings};
  let papers = document.querySelectorAll(".paper");
  papers.forEach((paper)=>{
    paper.addEventListener("click", (event) => {
      const target = event.target;
      if (target.classList.contains("flip")) {
        target.classList.toggle("flip");
        target.classList.toggle("on");
        target.nextElementSibling?.classList.remove("on");
      } else {
        target.classList.toggle("flip");
        target.classList.toggle("on");
      }
    });
    paper.addEventListener('transitionend', (event) => {
      if (event.propertyName === 'clip-path') {
        const target = event.target;
        if (target.classList.contains("on")) {
        } else {
          target.nextElementSibling?.classList.add("on");
        }
      }
    });
  });
};

// 1. 현재 루트 폰트 사이즈 가져오기 (보통 16px)
const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

// 2. px -> rem 변환 함수
const pxToRem = (px) => `${px / rootFontSize}rem`;

// 3. rem -> px 변환 함수
const remToPx = (rem) => `${rem * rootFontSize}px`;

console.log(pxToRem(32)); // "2rem" (16px 기준)
console.log(remToPx(1.5)); // "24px" (16px 기준)

initPaperFlip({
  paperWidth: '10rem',
});
