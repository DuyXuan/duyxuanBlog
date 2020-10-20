const addBtn = document.querySelector(".add-btn");
const inputValue = document.querySelector(".input");
const list = document.querySelector(".list");

inputValue.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    add();
  }
});

function add() {
  if (inputValue.value != "") {
    let newItem = document.createElement("li");
    list.appendChild(newItem);
    newItem.innerHTML = `<span>${inputValue.value}</span>`;
    inputValue.value = "";
    deleteBtn(newItem);
  }
}
addBtn.addEventListener("click", function (e) {
  add();
});

function deleteBtn(item) {
  let newBTn = document.createElement("BUTTON");
  newBTn.textContent = "X";
  newBTn.classList.add(".delete");
  item.appendChild(newBTn);

  newBTn.addEventListener("click", function (e) {
    item.remove();
  });
}

list.addEventListener("click", function (e) {
  let target = e.target.tagName.toLowerCase();
  if (target === "li") {
    if (e.target.style.backgroundColor != "green") {
      e.target.classList.toggle("complete");
      e.target.classList.toggle("message");
    }
  }
});
