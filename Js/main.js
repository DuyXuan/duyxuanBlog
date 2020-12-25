//Digital clock
import digitalClock from "../Js/digitalClock.js";
import postRender from "../Js/postRender.js";
postRender.start();
setInterval(digitalClock, 1000);

//header responsive menu Button
const menuBar = document.querySelector(".nav-btn");
menuBar.onclick = function () {
  document.querySelector(".nav-mobile-res").style.transform = "translateX(0)";
};

document.querySelector(".nav-mobile__close").onclick = () => {
  document.querySelector(".nav-mobile-res").style.transform =
    "translateX(100%)";
};

//form Validate
var submitBtn = document.querySelector(".submit-btn");
import validator from "../Js/Validator.js";
submitBtn.addEventListener("click", () => {
  validator.checkEmpty(),
    validator.checkName(),
    validator.checkEmail(),
    validator.checkPhone();
});

//onclick navigator link
document.querySelectorAll(".nav__blog").forEach((element) => {
  element.onclick = function () {
    window.scroll({
      top: document.querySelector(".news").offsetTop,
      behavior: "smooth",
    });
  };
});

document.querySelectorAll(".nav__about").forEach((element) => {
  element.onclick = function () {
    window.scroll({
      top: document.querySelector(".message-2").offsetTop,
      behavior: "smooth",
    });
  };
});

document.querySelectorAll(".nav__gallery").forEach((element) => {
  element.onclick = function () {
    window.scroll({
      top: document.querySelector(".gallery").offsetTop,
      behavior: "smooth",
    });
  };
});

document.querySelectorAll(".nav__contact").forEach((element) => {
  element.onclick = function () {
    window.scroll({
      top: document.querySelector(".contact").offsetTop,
      behavior: "smooth",
    });
  };
});

//Scroll to top btn
var scrollTop = document.querySelector(".scroll-btn");
window.onscroll = function () {
  scrollToTop();
};

scrollTop.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

//scroll button appear when the y position of time element(digital clock)< 0
function scrollToTop() {
  if (
    document.body.scrollTop >
    document.querySelector(".time").getBoundingClientRect().top
  ) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
}

// display gallery image
const gallery = document.querySelectorAll(".gallery__image");
const galleryPopup = document.querySelector(".gallery-popup");
const galleryExit = document.querySelector(".gallery-popup .exit-icon");

for (const item of gallery) {
  item.addEventListener("click", function (e) {
    galleryPopup.style.display = "block";
  });
}
galleryExit.addEventListener("click", function (e) {
  galleryPopup.style.display = "none";
});

//carousel
