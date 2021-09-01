'use strict';
/*console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value= 23;
console.log(document.querySelector('.guess').value);*/

//Generating Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = Number(document.querySelector('.score').textContent);
let highscore = 0;
// restarting the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = '20';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});

document.querySelector('.check').addEventListener('click', function () {
    //game over
  if (score <= 1) {
    document.querySelector('.message').textContent = 'Game over!!';
    document.querySelector('.score').textContent = 0;
  }
   else if (score > 1) {
    //Checking for no input
    if (Number(document.querySelector('.guess').value) === 0) {
      document.querySelector('.message').textContent = 'No Number!!';
    }
    //Player wins
    else if (Number(document.querySelector('.guess').value) === secretNumber) {
      document.querySelector('.message').textContent = 'You Have Won!!';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = secretNumber;
      if(highscore<score){
      highscore = score;
      document.querySelector('.highscore').textContent= highscore;
    }
}
    //entered number greater than secret number
    else if (Number(document.querySelector('.guess').value) > secretNumber) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
      //entered number less than secretnumber
    } else if (Number(document.querySelector('.guess').value) < secretNumber) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    }
}
});
