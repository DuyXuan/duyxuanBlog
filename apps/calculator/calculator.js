const txtDisplay = document.querySelector(".display-text");
const btnMC = document.querySelector(".btn__mc");
const btnMR = document.querySelector(".btn__mr");
const btnMAdd = document.querySelector(".btn__m-add");
const btnMSub = document.querySelector(".btn__m-sub");
const btnCE = document.querySelector(".btn__CE");
const btnOne = document.querySelector(".btn__one");
const btnTwo = document.querySelector(".btn__two");
const btnThree = document.querySelector(".btn__three");
const btnFour = document.querySelector(".btn__four");
const btnFive = document.querySelector(".btn__five");
const btnSix = document.querySelector(".btn__six");
const btnSeven = document.querySelector(".btn__seven");
const btnEight = document.querySelector(".btn__eight");
const btnNine = document.querySelector(".btn__nine");
const btnZez = document.querySelector(".btn__zezo");
const btnAdd = document.querySelector(".btn__add");
const btnSub = document.querySelector(".btn__sub");
const btnDiv = document.querySelector(".btn__div");
const btnMulti = document.querySelector(".btn__multi");
const btnPercent = document.querySelector(".btn__percent");
const btnSqrt = document.querySelector(".btn__sqrt");
const btnEqual = document.querySelector(".btn__equal");
const btnDot = document.querySelector(".btn__dot");
const btnSwap = document.querySelector(".btn__swap");
// const varName = document.querySelector('.btn__CE');

var ready = true;
let result = 0;
let operator = "";
let num1 = 0,
  num2 = 0;
function buttonAction() {
  btnOne.addEventListener("click", function (e) {
    setNumber(btnOne);
  });
  btnTwo.addEventListener("click", function (e) {
    setNumber(btnTwo);
  });
  btnThree.addEventListener("click", function (e) {
    setNumber(btnThree);
  });
  btnFour.addEventListener("click", function (e) {
    setNumber(btnFour);
  });
  btnFive.addEventListener("click", function (e) {
    setNumber(btnFive);
  });
  btnSix.addEventListener("click", function (e) {
    setNumber(btnSix);
  });
  btnSeven.addEventListener("click", function (e) {
    setNumber(btnSeven);
  });
  btnEight.addEventListener("click", function (e) {
    setNumber(btnEight);
  });
  btnNine.addEventListener("click", function (e) {
    setNumber(btnNine);
  });
  btnZez.addEventListener("click", function (e) {
    setNumber(btnZez);
  });
  btnCE.addEventListener("click", function (e) {
    txtDisplay.textContent = "0";
    ready = true;
  });
  btnAdd.addEventListener("click", function (e) {
    num1 = getCurrentText();
    setOperator("add");
  });
  btnSub.addEventListener("click", function (e) {
    num1 = getCurrentText();
    setOperator("sub");
  });
  btnMulti.addEventListener("click", function (e) {
    num1 = getCurrentText();
    setOperator("multi");
  });
  btnDiv.addEventListener("click", function (e) {
    num1 = Number(getCurrentText());

    setOperator("div");
  });
  btnSqrt.addEventListener("click", function (e) {
    num1 = getCurrentText();
    result = sqrt(num1);
    setText(result);
  });
  btnDot.addEventListener("click", function (e) {
    num1 = getCurrentText();
    setText(addDot(num1));
  });
  btnSwap.addEventListener("click", function (e) {
    setText(swap(getCurrentText()));
  });

  btnEqual.addEventListener("click", function (e) {
    calculate(num1);
    setText(result);
    operator = "";
  });
}
buttonAction();

function getCurrentText() {
  return txtDisplay.textContent;
}
function setText(string) {
  txtDisplay.textContent = string;
}

function setNumber(btn) {
  if (ready == true) {
    txtDisplay.textContent[0] = "";
    txtDisplay.textContent = btn.textContent;

    ready = false;
  } else {
    setText(getCurrentText() + btn.textContent);
  }
}
function sqrt(number) {
  if (number < 0) {
    return;
  }
  return Math.sqrt(number);
}
function addDot(number) {
  if (!number.includes(".") && ready == false) {
    ready = false;
    return (number += ".");
  }
  if (ready == true) {
    number = "0.";
    ready = false;

    return number;
  }
  return number;
}
function swap(number) {
  if (number.includes("-")) {
    return number.replace("-", "");
  } else {
    return "-" + number;
  }
}

function setOperator(button) {
  if (ready) {
    operator = button;
    return;
  }
  operator = button;

  ready = true;
}

function calculate(num1) {
  num2 = Number(getCurrentText());
  if (operator == "add") {
    result = Number(num1) + Number(num2);
  } else if (operator == "sub") {
    result = Number(num1) - Number(num2);
  } else if (operator == "multi") {
    result = Number(num1) * Number(num2);
  } else if (operator == "div") {
    if (num2 == 0) {
      setText("can't div by 0");
    } else {
      result = Number(num1) / Number(num2);
    }
  } else {
    result = getCurrentText();
  }
  setText(result);
  ready = true;
}
