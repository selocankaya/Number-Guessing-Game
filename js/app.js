const userGuess = document.querySelector('.input-box');
const number = parseInt(Math.random() * 100);
const button = document.querySelector('.submit-button');
const warning = document.querySelector('.warnings');
const guessForm = document.querySelector('form');
const attempt = document.querySelector('.previous-guess');
const remainingGuess = document.querySelector('.remaining-guess');

let guessRemaining = 10;
let counter = 0;

button.addEventListener('click', (e) => {
  e.preventDefault();
  comparision();
  guessForm.reset();
});

function restart() {
  location.reload();
}

function comparision() {
  if (parseInt(userGuess.value) === number) {
    warning.textContent = 'Congratulations. You knew ...';
  }

  guessRemaining--;
  counter++;
  attempt.textContent = 'Previous Guess : ' + counter;
  remainingGuess.textContent = 'Guess Remaining : ' + guessRemaining;

  if (parseInt(userGuess.value) < number) {
    warning.textContent = 'Try Higher..';
  } else {
    warning.textContent = 'Try Lower..';
  }

  if (guessRemaining == 0) {
    warning.marginBottom = '100px';
    warning.style.height = '14vh';
    warning.style.width = '80%';
    warning.textContent =
      "Sorry, You Didn't Know. Press the Button to Start Again.";
    attempt.textContent = ' ';
    remainingGuess.textContent = ' ';
    button.value = 'RESTART';
    button.addEventListener('click', restart);
  }
}
