/*
project 4.
let randomNum = Math.random() * 100;
// randomNum = Math.floor(randomNum) + 1;
randomNum = parseInt(randomNum) + 1;
const form = document.querySelector('.form');
let prevGuesses = [];
let pg = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let counter = 10;
let lowOrHi = document.querySelector('.lowOrHi');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let num = parseInt(document.querySelector('.guessField').value);

  if (num === '' || num <= 0 || isNaN (num)) {
    lowOrHi.innerHTML = 'Please enter a valid number!';
  }else {
    if (prevGuesses.length < 10 && counter >= 1) {
      prevGuesses.push(num);
      let a = (pg.innerHTML = `${prevGuesses}`);
      counter--;
      lastResult.innerHTML = `${counter}`;
  
      if (randomNum == num) {
        lowOrHi.innerHTML = 'Congrats! You guessed it Right!...<br /> Play Again';
        counter = 0;
      } else if (randomNum > num) {
        lowOrHi.innerHTML = 'Number is too Low';
      } else {
        lowOrHi.innerHTML = 'Number is too High';
      }
    }else {
      lowOrHi.innerHTML = `Oooops! Game is Over!<br />Try again...Random Number was ${randomNum}`;
    }
  }
});

/* 
It is important to note that this will not work as expected because JS code is executed sequentially and hence, this will run before the addEventListener is triggerred
let a = pg.innerHTML = `${prevGuesses}`;
console.log (a);
*/
// Another Method for project 4.

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = window.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

// The second code snippet (code2) is generally more efficient and better organized for a number-guessing game. It uses better variable naming, a more structured approach, and handles user input validation more effectively. It also provides a clear start over and new game feature, making it a better choice for a user-friendly and maintainable application.



