const display = document.getElementById("value");
const decbtn = document.querySelector(".dec");
const resbtn = document.querySelector(".res");
const incbtn = document.querySelector(".inc");

let val = 0;
function decrease() {
  val -= 1;
  display.innerText = val;
  if (val < 0) {
    display.style.color = "red";
  }
  if (val > 0) {
    display.style.color = "green";
  }
  if (val == 0) {
    display.style.color = "rgb(1, 32, 40)";
  }
}

function reset() {
  val = 0;
  display.innerText = val;
  display.style.color = "rgb(1, 32, 40)";
}

function increase() {
  val += 1;
  display.innerText = val;
  if (val > 0) {
    display.style.color = "green";
  }
  if (val < 0) {
    display.style.color = "red";
  }
  if (val == 0) {
    display.style.color = "rgb(1, 32, 40)";
  }
}
decbtn.addEventListener("click", decrease);
resbtn.addEventListener("click", reset);
incbtn.addEventListener("click", increase);
