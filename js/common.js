const jsFiles = ["./js/scroll-snap.js", "./js/paper-flip.js"];

const importScripts = (files) => {
  files.forEach((file) => {
    const el = document.createElement("script");
    el.src = file + "?v=" + new Date().getTime();
    el.defer;
    document.body.appendChild(el);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  // script 추가
  importScripts(jsFiles);
});
