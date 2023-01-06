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
    if (
      btn.innerText === "." &&
      (screen.innerText.includes("+") ||
        screen.innerText.includes("×") ||
        screen.innerText.includes("÷") ||
        screen.innerText.includes("-"))
    ) {
      if (screen.innerText.split(".").length - 1 < 2) {
        screen.innerText += btn.innerText;
      } else {
        return;
      }
    }
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
  let l_operand = parseFloat(screen.innerText);
  let r_operand = parseFloat(
    screen.innerText.replace(l_operand.toString(), "").slice(1)
  );
  let oper = screen.innerText.slice(
    l_operand.toString().length,
    l_operand.toString().length + 1
  );
  switch (oper.toString()) {
    case "÷":
      var res = l_operand / r_operand;
      screen.innerText = res.toString();
      break;
    case "×":
      var res = l_operand * r_operand;
      screen.innerText = res.toString();
      break;
    case "+":
      var res = l_operand + r_operand;
      screen.innerText = res.toString();
      break;
    case "-":
      var res = l_operand - r_operand;
      screen.innerText = res.toString();
      break;
  }
}

clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", del);
numberButtons.forEach((btn) => {
  btn.addEventListener("click", appendNumber(btn));
});
operationButtons.forEach((btn) => {
  btn.addEventListener("click", chooseOperation(btn));
});
equalButton.addEventListener("click", compute);
