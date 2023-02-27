// Change the background color of a window with a random color,
// when we click on the button.

// select the required elements
const currentColor = document.querySelector(".current-color");
const mainButton = document.querySelector("button");
const body = document.body;

// creating a function
function randomColorGenerator() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${red},${green},${blue})`;
  return randomColor;
}

// adding event
mainButton.addEventListener("click", () => {
  const randomColor = randomColorGenerator();
  body.style.backgroundColor = randomColor;
  //   setting the current color value same as random color
  currentColor.textContent = randomColor;
});
