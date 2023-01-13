const display = document.getElementById("value");
const decbtn = document.querySelector(".dec");
const resbtn = document.querySelector(".res");
const incbtn = document.querySelector(".inc");

let val = 0;
function decrease() {
  val -= 1;
  display.innerText = val;
}

function reset() {
  val = 0;
  display.innerText = val;
}

function increase() {
  val += 1;
  display.innerText = val;
}
decbtn.addEventListener("click", decrease);
resbtn.addEventListener("click", reset);
incbtn.addEventListener("click", increase);
