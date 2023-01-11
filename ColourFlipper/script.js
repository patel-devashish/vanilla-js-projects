const colorsArr = [
  "#FF0000",
  "#FFFFFF",
  "#00FFFF",
  "#C0C0C0",
  "#0000FF",
  "#808080",
  "#00008B",
  "#000000",
  "#ADD8E6",
  "#FFA500",
  "#800080",
  "#A52A2A",
  "#FFFF00",
  "#800000",
  "#00FF00",
  "#008000",
  "#FF00FF",
  "#808000",
  "#FFC0CB",
  "#7FFFD4",
];
const button = document.querySelector(".btn");
const colours = document.querySelector(".colour");

function randNumGenrator() {
  return Math.floor(Math.random() * colorsArr.length);
}
button.addEventListener("click", () => {
  const randomNumber = randNumGenrator();
  document.body.style.backgroundColor = colorsArr[randomNumber];
  colours.innerText = colorsArr[randomNumber];
});
