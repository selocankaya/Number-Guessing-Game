const userGuess = document.querySelector('.input-box');
const number = parseInt(Math.random() * 100);
const button = document.querySelector('.submit-button');
const warning = document.querySelector('.warnings');
const guessForm = document.querySelector('form');
const attempt = document.querySelector('.previous-guess');
const remainingGuess = document.querySelector('.remaining-guess');

console.log(number);

let guessRemaining = 10;
var counter = 0;

button.addEventListener('click', (e) => {
  e.preventDefault();
  comparision();
  guessForm.reset();
});

function restart() {
  location.reload();
}

function ask() {
  warning.marginBottom = '100px';
  warning.style.height = '14vh';
  warning.style.width = '80%';
  attempt.textContent = ' ';
  remainingGuess.textContent = ' ';
  button.value = 'RESTART';
  button.addEventListener('click', restart);
}

function comparision() {
  guessRemaining--;
  counter++;
  if (parseInt(userGuess.value) === number) {
    warning.textContent = `Congratulations! You knew it on your ${counter}. try.`;
    ask();
  } else {
    attempt.textContent = 'Previous Guess : ' + counter;
    remainingGuess.textContent = 'Guess Remaining : ' + guessRemaining;

    if (parseInt(userGuess.value) < number) {
      warning.textContent = 'Higher..';
    } else {
      warning.textContent = 'Lower..';
    }

    if (guessRemaining == 0) {
      warning.textContent =
        "Sorry, You Didn't Know. Press the Button to Start Again.";
      ask();
    }
  }
}
