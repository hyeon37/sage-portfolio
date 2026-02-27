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
const initPaperFlip = (uSettings = {}, target = null) => {
  // let backs = document.querySelectorAll(".back");
  console.log("uSettings",uSettings);
  uSettings = {...settings, ...uSettings};
  console.log("uSettings2",uSettings);
  let paper = document.querySelector(".paper.on");
  paper.addEventListener("click", (event) => {
    console.log("paper", event.target);
    const target = event.target;
    target.classList.toggle("flip");
    // let count = 0;
    // const itv = setInterval(function() {
    //   const clipPath = window.getComputedStyle(target).clipPath;
    //   console.log("clip-path polygon", clipPath);
    //   if (clipPath.includes('polygon')) {
    //     // polygon(...) 안의 내용만 추출
    //     const points = clipPath.match(/polygon\((.*)\)/)[1];
    //     console.log("좌표:", points); // "50% 0%, 100% 100%, 0% 100%"
    //   }
    //   count++;
    //   if (count > 2) {
    //     clearInterval(itv);
    //   }
    // }, 500);
  });

  paper.addEventListener('transitionend', (event) => {
    if (event.propertyName === 'clip-path') {
      console.log('Transition 완료', event);
    }
  });
  paper.addEventListener('transitionstart', (event) => {
    if (event.propertyName === 'clip-path') {
      console.log('Transition 시작', event);
    }
  });
  paper.addEventListener('transitionrun', (event) => {
    if (event.propertyName === 'clip-path') {
      console.log('Transition 실행', event);
    }
  });
  paper.addEventListener('transitioncancel', (event) => {
    if (event.propertyName === 'clip-path') {
      console.log('Transition 취소', event);
    }
  });


  // backs.forEach((back) => {
  //   back.addEventListener("click", (event) => {
  //     console.log("back", event.target);
  //     if (event.target.parentElement.classList.contains("curr")) {
  //       document.documentElement.style.setProperty(
  //         "--paper-flip-width-curr",
  //         "calc(100vw - 20vw)"
  //       );
  //       document.documentElement.style.setProperty(
  //         "--paper-flip-height-curr",
  //         "calc(100dvh - 10dvh)"
  //       );
  //       console.log("e", event, event.target);
  //       const t = setTimeout(() => {
  //         event.target.classList.add("flip");
  //         event.target.previousElementSibling.classList.add("flip");
  //         event.target.parentElement.classList.add("prev");
  //         event.target.parentElement.classList.remove("curr");
  //         event.target.parentElement.nextElementSibling.classList.add("curr");
  //         document.documentElement.style.setProperty(
  //           "--paper-flip-width-prev",
  //           "calc(100vw - 20vw)"
  //         );
  //         document.documentElement.style.setProperty(
  //           "--paper-flip-height-prev",
  //           "calc(100dvh - 10dvh)"
  //         );
  //         document.documentElement.style.setProperty(
  //           "--paper-flip-width-curr",
  //           "10rem"
  //         );
  //         document.documentElement.style.setProperty(
  //           "--paper-flip-height-curr",
  //           "10rem"
  //         );
  //         event.target.parentElement.previousElementSibling?.classList.remove("prev");
  //         Array.from(event.target.parentElement.previousElementSibling?.children || []).forEach((child) => {
  //           child.classList.remove("flip");
  //         });
  //         clearTimeout(t);
  //       }, 1000);
  //     } else if (event.target.parentElement.classList.contains("prev")) {
  //       document.documentElement.style.setProperty(
  //         "--paper-flip-width-prev",
  //         "10rem"
  //       );
  //       document.documentElement.style.setProperty(
  //         "--paper-flip-height-prev",
  //         "10rem"
  //       );
  //       console.log("e", event, event.target);
  //       event.target.classList.remove("flip");
  //       event.target.previousElementSibling.classList.remove("flip");
  //       event.target.parentElement.classList.remove("prev");
  //       event.target.parentElement.classList.add("curr");
  //       event.target.parentElement.nextElementSibling.classList.remove("curr");
  //       document.documentElement.style.setProperty(
  //         "--paper-flip-width-curr",
  //         "10rem"
  //       );
  //       document.documentElement.style.setProperty(
  //         "--paper-flip-height-curr",
  //         "10rem"
  //       );
  //       document.documentElement.style.setProperty(
  //         "--paper-flip-width-prev",
  //         "calc(100vw - 20vw)"
  //       );
  //       document.documentElement.style.setProperty(
  //         "--paper-flip-height-prev",
  //         "calc(100dvh - 10dvh)"
  //       );
  //       event.target.parentElement.previousElementSibling?.classList.add("prev");
  //       Array.from(event.target.parentElement.previousElementSibling?.children || []).forEach((child) => {
  //         child.classList.add("flip");
  //       });
  //     }
  //   });
  // });
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
