//Digital clock
import digitalClock from "../Js/digitalClock.js";
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

//Display top 3 post in news section with javascript(create for practice javascript using innerHTML and Object)
var postDetail = document.querySelectorAll(".post-detail");
for (var i = 0; i < 3; i++) {
  postDetail[i].innerHTML = `<a href="">  
  <div class="post-detail__image">
  <img src="" alt="" />
  </div>
  <div class="post-detail__tittle"><p>abc</p></div>
  <div class="post-detail__desc">
  <p>
  </p>
  </div>
  </a>`;
}

function news(tittle, description, imageUrl) {
  this.tittle = tittle;
  this.description = description;
  this.imageUrl = imageUrl;
}
var post = new news(
  "Tittle 1",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit." +
    "Quaerat soluta in necessitatibus quam!" +
    "Itaque exercitationem accusamus iste quis minus reiciendis nam magni? Reprehenderit.",
  "Image/news.png"
);
var post2 = new news(
  "Tittle 2",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit." +
    "Quaerat soluta in necessitatibus quam!" +
    "Itaque exercitationem accusamus iste quis minus reiciendis nam magni? Reprehenderit.",
  "Image/news.png"
);
var post3 = new news(
  "Tittle 3",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit." +
    "Quaerat soluta in necessitatibus quam!" +
    "Itaque exercitationem accusamus iste quis minus reiciendis nam magni? Reprehenderit.",
  "Image/news.png"
);
var postList = [post, post2, post3];
var postImage = document.querySelectorAll(".post-detail__image > img");
var postDescription = document.querySelectorAll(".post-detail__desc >p");
var postTittle = document.querySelectorAll(".post-detail__tittle>p");
for (var i = 0; i < 3; i++) {
  postImage[i].src = postList[i].imageUrl;
  postDescription[i].innerText = postList[i].description;
  postTittle[i].innerText = postList[i].tittle;
}

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

//onscroll animation:
// window.addEventListener("scroll", function (e) {
//   if (
//     document.body.scrollTop > 100 ||
//     document.documentElement.scrollTop > 100
//   ) {
//     document.querySelector("header").classList.add("header-animation");
//   } else {
//     document.querySelector("header").classList.remove("header-animation");
//   }
// });

// get json
