'use strict';

let randomNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when no input to check
  if (!guess) {
    displayMessage('⛔No Number');

    //When the guess is correct
  } else if (guess === randomNumber) {
    document.querySelector('.number').textContent = randomNumber;
    displayMessage('✅Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when the guess is high or low
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? '📈Too High' : '📉Too Low');
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤢 You lost');
      document.querySelector('.score').textContent = '0';
    }
  }
});

// adding functionality to again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
