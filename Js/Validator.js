//Form validate
var input = document.querySelectorAll(".form__input");
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


export default  {
    checkEmpty,
    checkName,
    checkEmail,
    checkPhone
}