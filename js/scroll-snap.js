let innerArr = [];
let inners = [];
let lastKnownScrollPosition = 0;
let ticking = false;

// 초기 화면 설정
const initScrollSnap = () => {
  const container = document.querySelector(".scroll-container");
  innerArr = [];
  inners = [];
  lastKnownScrollPosition = 0;
  ticking = false;
  inners = document.querySelectorAll(".scroll-section-area-inner");
  inners.forEach((item) => {
    // 전체 길이에서 섹션별 위치가 어디인지 조회(리사이징을 위한 처리)
    innerArr.push(
      Math.floor(
        item.parentElement.offsetTop +
          item.getBoundingClientRect().top -
          item.parentElement.getBoundingClientRect().top
      )
    );
  });

  // 스크롤할때 걸렸는지 확인
  container.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = Math.round(event.target.scrollTop);
    if (!ticking) {
      setTimeout(() => {
        checkScrollPosition(lastKnownScrollPosition);
        ticking = false;
      }, 20);
    }
    ticking = true;
  });
};

// 스크롤 스냅 처리
const scrollSnap = (idx) => {
  // 각 섹션 변경될때마다 활성화 업데이트
  inners.forEach((inner) => {
    if (inner.parentElement.classList.contains("on")) {
      inner.parentElement.classList.remove("on");
    }
    if (inner.classList.contains("on")) {
      inner.classList.remove("on");
    }
    // 각 섹션 스크롤 위치 초기화
    inner.scrollTop = 0;
  });
  inners[idx].parentElement.classList.add("on");
  inners[idx].classList.add("on");

  //TODO: 섹션마다 처리해야할 사항 있으면 작업
};

// 스크롤 걸림 여부 확인
const checkScrollPosition = (scrollPos) => {
  // scroll 위치 +-1까지 근접하면 넘어가도록 처리
  const idx = innerArr.findIndex(
    (y) => y === scrollPos || y === scrollPos - 1 || y === scrollPos + 1
  );
  if (idx > -1) {
    scrollSnap(idx);
  }
};

window.addEventListener("resize", () => {
  initScrollSnap();
});

initScrollSnap();
