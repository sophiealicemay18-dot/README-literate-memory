// Select elements
const heading = document.getElementById('mainHeading');
const paragraph = document.querySelector('#mainParagraph');
const changeTextButton = document.getElementById('changeTextButton');
const userInput = document.getElementById('userInput');
const submitButton = document.getElementById('submitButton');

// Initial updates
heading.textContent = 'Welcome to the Updated DOM Lab';
paragraph.textContent = 'This paragraph content has been changed';
heading.style.color = '#1a73e8';

// Event: change paragraph on button click
changeTextButton.addEventListener('click', () => {
  paragraph.textContent = 'You clicked the button!';
});

// Event: update paragraph with user input
submitButton.addEventListener('click', (event) => {
  const value = userInput.value.trim();
  paragraph.textContent = value === '' ? 'No input provided' : value;
  userInput.value = '';
});
