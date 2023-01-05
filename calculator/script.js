let numberButtons = document.querySelectorAll("[data-number]");
let operationButtons = document.querySelectorAll("[data-operation]");
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

function chooseOperation(btn) {
  btn.onclick = function () {
    if (
      screen.innerText.includes("+") ||
      screen.innerText.includes("×") ||
      screen.innerText.includes("÷") ||
      screen.innerText.includes("-")
    ) {
      return;
    } else {
      screen.innerText += btn.innerText;
    }
  };
}

function compute() {
  l_operand = screen.innerText;
}

function updateDisplay() {}

clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", del);
numberButtons.forEach((btn) => {
  btn.addEventListener("click", appendNumber(btn));
});
operationButtons.forEach((btn) => {
  btn.addEventListener("click", chooseOperation(btn));
});
equalButton.addEventListener("click", compute);
