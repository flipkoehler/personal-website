const main = document.querySelector('[data-js="main"]');
const darkModeBtn = document.querySelector('[data-js="darkmodeBtn"]');

darkModeBtn.addEventListener("click", addDarkMode);

function addDarkMode() {
  main.classList.toggle("dark");
}
