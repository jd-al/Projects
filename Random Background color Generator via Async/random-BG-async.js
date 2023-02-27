// select the elements
const body = document.body;
const btn = document.querySelector("button");

// set colors and generate the random colors
const intervalId = setInterval(() => {
  const red = Math.floor(Math.random() * 126);
  const green = Math.floor(Math.random() * 126);
  const blue = Math.floor(Math.random() * 126);
  const rgb = `rgb(${red},${green},${blue})`;
  // setting the bg color
  body.style.backgroundColor = rgb;
}, 1000);
// stop chnaging if button is clicked
btn.addEventListener("click", () => {
  clearInterval(intervalId);
  // displaying the current rgb color after clearing the setInterval
  btn.textContent = body.style.backgroundColor;
});
