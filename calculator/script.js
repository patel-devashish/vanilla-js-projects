let numberButtons = document.querySelectorAll("[data-number]");
let operatioButtons = document.querySelectorAll("[data-operation]");
let equalButton = document.querySelector("[data-equals]");
let deleteButton = document.querySelector("[data-delete]");
let clearButton = document.querySelector("[data-clear]");
let screen = document.querySelector("[data-screen]");

function clear() {
  screen.innerText = "\n";
}

function del() {
  screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1);
}

function appendNumber(btn) {
  btn.onclick = function () {
    if (btn.innerText === "." && screen.innerText.includes(".")) {
      return;
    } else {
      screen.innerText = screen.innerText + btn.innerText;
    }
  };
}

function chooseOperation() {}

function compute() {}

function updateDisplay() {}

clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", del);
numberButtons.forEach((btn) => {
  btn.addEventListener("click", appendNumber(btn));
});
