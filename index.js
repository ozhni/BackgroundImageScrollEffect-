"use strict";

const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
  udateImage();
});

function udateImage() {
  bgImageEl.style.opacity = 1 - window.scrollY / 1000;
  bgImageEl.style.backgroundSize = 160 - window.scrollY / 10 + "%";
}
