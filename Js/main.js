//header menu Button (when responsive)
var menuBar = document.querySelector(".nav-btn");
menuBar.onclick = function () {
  document.querySelector(".nav-mobile-res").style.transform = "translateX(0)";
};

document.querySelector(".nav-mobile__close").onclick = function () {
  document.querySelector(".nav-mobile-res").style.transform =
    "translateX(100%)";
};

//Digital clock
var span = document.querySelector(".time__clock> span");
var timeMessage = document.querySelector(".time__message > span");
function time() {
  var time = new Date();
  var currentTime =
    time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  if (time.getHours < 12) {
    currentTime += " AM";
  } else {
    currentTime += " PM";
  }
  span.textContent = currentTime;

  if (time.getHours() >= 1 && time.getHours() < 12) {
    timeMessage.textContent = "Good morning";
  } else if (time.getHours() >= 12 && time.getHours() < 18) {
    timeMessage.textContent = "Good Afternoon";
  } else {
    timeMessage.textContent = "Good evening";
  }
}
setInterval(time, 1000);

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
  "../Image/news.png"
);
var post2 = new news(
  "Tittle 2",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit." +
    "Quaerat soluta in necessitatibus quam!" +
    "Itaque exercitationem accusamus iste quis minus reiciendis nam magni? Reprehenderit.",
  "../Image/news.png"
);
var post3 = new news(
  "Tittle 3",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit." +
    "Quaerat soluta in necessitatibus quam!" +
    "Itaque exercitationem accusamus iste quis minus reiciendis nam magni? Reprehenderit.",
  "../Image/news.png"
);
var postList = [post,post2,post3];
var postImage = document.querySelectorAll(".post-detail__image > img");
var postDescription = document.querySelectorAll(".post-detail__desc >p");
var postTittle = document.querySelectorAll(".post-detail__tittle>p");
for (var i = 0; i < 3; i++) {
  postImage[i].src = postList[i].imageUrl;
  postDescription[i].innerText = postList[i].description;
  postTittle[i].innerText = postList[i].tittle;
}

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

//Form validate
var input = document.querySelectorAll(".form__input");
var submitBtn = document.querySelector(".submit-btn");
var errorMess = document.querySelectorAll(".error-message");

var nameInput = document.querySelector(".input__name");
var phoneInput = document.querySelector(".input__phone");
var emailInput = document.querySelector(".input__email");

function checkEmpty() {
  for (var i = 0; i < input.length; i++) {
    if (input[i].value == "") {
      errorMess[i].style.opacity = 1;
      errorMess[i].textContent = "please input this field";
    } else {
      errorMess[i].style.opacity = 0;
    }
  }
}


function checkName() {
  if (nameInput.value.length > 10) {
    errorMess[0].style.opacity = 1;
    errorMess[0].textContent = "your name is too long";
  }
}
function checkPhone() {
  if (phoneInput.value.length > 12 || isNaN(phoneInput.value)) {
    errorMess[2].style.opacity = 1;
    errorMess[2].textContent = "phone must be number and < 12";
  }
}

function checkEmail() {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailInput.value != "" && regex.test(emailInput.value) == false) {
    errorMess[1].style.opacity = 1;
    errorMess[1].textContent = "email not valid";
  }
}

submitBtn.addEventListener("click", function () {
  checkEmpty();
  checkName();
  checkPhone();
  checkEmail();
});

//onclick navigator link
document.querySelectorAll(".nav__blog").forEach(function (element) {
  element.onclick = function () {
    window.scroll({
      top: document.querySelector(".news").offsetTop,
      behavior: "smooth",
    });
  };
});

document.querySelectorAll(".nav__about").forEach(function (element) {
  element.onclick = function () {
    window.scroll({
      top: document.querySelector(".message-2").offsetTop,
      behavior: "smooth",
    });
  };
});

document.querySelectorAll(".nav__gallery").forEach(function (element) {
  element.onclick = function () {
    window.scroll({
      top: document.querySelector(".gallery").offsetTop,
      behavior: "smooth",
    });
  };
});

document.querySelectorAll(".nav__contact").forEach(function (element) {
  element.onclick = function () {
    window.scroll({
      top: document.querySelector(".contact").offsetTop,
      behavior: "smooth",
    });
  };
});
