// Menu Button (for responsive)
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

//Scroll top btn
var scrollTop = document.querySelector(".scroll-btn");
window.onscroll = function () {
  scrollToTop();
};

scrollTop.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

function scrollToTop() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
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
      errorMess[i].style.display = "block";
      errorMess[i].textContent = "please input this field";
    } else {
      errorMess[i].style.display = "none";
    }
  }
}
function errorMessage(element){
  var errorMess = "";
if(element.test(nameInput)){
  errorMess = "your name is too long";
}
return errorMess;
}

function checkName() {
  if (nameInput.value.length > 10) {
    errorMess[0].style.display = "block";
    errorMess[0].textContent = "your name is too long";
  }
}
function checkPhone() {
  if (phoneInput.value.length > 12 || isNaN(phoneInput.value)) {
    errorMess[2].style.display = "block";
    errorMess[2].textContent = "phone must be number and < 12";
  }
}

function checkEmail() {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (emailInput.value !="" && regex.test(emailInput.value)==false) {
    errorMess[1].style.display = "block";
    errorMess[1].textContent = "email not valid";
  }
}


submitBtn.addEventListener("click", function () {
  checkEmpty();
  checkName();
  checkPhone();
  checkEmail();
});
