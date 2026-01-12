// 초기 화면 설정
const initPaperFlip = () => {
  let backs = document.querySelectorAll(".back");
  backs.forEach((back) => {
    back.addEventListener("click", (event) => {
      console.log("back", event.target);
      if (event.target.parentElement.classList.contains("curr")) {
        document.documentElement.style.setProperty(
          "--paper-flip-width-curr",
          "calc(100vw - 20vw)"
        );
        document.documentElement.style.setProperty(
          "--paper-flip-height-curr",
          "calc(100vh - 10vh)"
        );
        console.log("e", event, event.target);
        const t = setTimeout(() => {
          event.target.classList.add("flip");
          event.target.previousElementSibling.classList.add("flip");
          event.target.parentElement.classList.add("prev");
          event.target.parentElement.classList.remove("curr");
          event.target.parentElement.nextElementSibling.classList.add("curr");
          document.documentElement.style.setProperty(
            "--paper-flip-width-prev",
            "calc(100vw - 20vw)"
          );
          document.documentElement.style.setProperty(
            "--paper-flip-height-prev",
            "calc(100vh - 10vh)"
          );
          document.documentElement.style.setProperty(
            "--paper-flip-width-curr",
            "10rem"
          );
          document.documentElement.style.setProperty(
            "--paper-flip-height-curr",
            "10rem"
          );
          event.target.parentElement.previousElementSibling?.classList.remove("prev");
          Array.from(event.target.parentElement.previousElementSibling?.children || []).forEach((child) => {
            child.classList.remove("flip");
          });
          clearTimeout(t);
        }, 1000);
      } else if (event.target.parentElement.classList.contains("prev")) {
        document.documentElement.style.setProperty(
          "--paper-flip-width-prev",
          "10rem"
        );
        document.documentElement.style.setProperty(
          "--paper-flip-height-prev",
          "10rem"
        );
        console.log("e", event, event.target);
        event.target.classList.remove("flip");
        event.target.previousElementSibling.classList.remove("flip");
        event.target.parentElement.classList.remove("prev");
        event.target.parentElement.classList.add("curr");
        event.target.parentElement.nextElementSibling.classList.remove("curr");
        document.documentElement.style.setProperty(
          "--paper-flip-width-curr",
          "10rem"
        );
        document.documentElement.style.setProperty(
          "--paper-flip-height-curr",
          "10rem"
        );
        document.documentElement.style.setProperty(
          "--paper-flip-width-prev",
          "calc(100vw - 20vw)"
        );
        document.documentElement.style.setProperty(
          "--paper-flip-height-prev",
          "calc(100vh - 10vh)"
        );
        event.target.parentElement.previousElementSibling?.classList.add("prev");
        Array.from(event.target.parentElement.previousElementSibling?.children || []).forEach((child) => {
          child.classList.add("flip");
        });
      }
    });
  });
};

initPaperFlip();
