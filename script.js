const button = document.querySelector('.button');
const text = document.querySelector('.text');
const container = document.querySelector('.container');

let isToggled = false;

button.addEventListener('click', () => {
  if (isToggled) {
    button.textContent = 'Click Me';
    text.textContent = 'Initial Text';
    container.style.backgroundColor = 'lightblue';
  } else {
    button.textContent = 'Clicked!';
    text.textContent = 'Text Changed';
    container.style.backgroundColor = 'pink';
  }
  isToggled = !isToggled;
});