function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector('.change-color');
const nameOfBodiesBC = document.querySelector('.color');

changeColorButton.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  nameOfBodiesBC.textContent = document.body.style.backgroundColor;
})
