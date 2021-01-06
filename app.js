const scoreCounter = document.querySelector('#scoreCounter');
const maxScore = document.querySelector('#maxScore');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
let player1Score = document.querySelector('#player1Score');
const player2Score = document.querySelector('#player2Score');
const reset = document.querySelector('#reset');
let player1Count = 0;
let player2Count = 0;


// getMaxScore = function (e) {
//     let neededToWin = e.target.value;
//     return neededToWin;
// }
// let neededToWin = maxScore.addEventListener('change', getMaxScore);
// console.log(neededToWin);

player1.addEventListener('click', function () {
    player1Count++;



    player1Score.innerText = player1Count;


    if (player1Count === 5) {
        player1Score.classList.add('win');
        player2Score.classList.add('lose');



    }

})

player2.addEventListener('click', function () {
    player2Count++;

    player2Score.innerText = player2Count;


    if (player2Count === 5) {
        player2Score.classList.add('win');
        player1Score.classList.add('lose');

    }



})

reset.addEventListener('click', function () {
    player1Count = 0;
    player2Count = 0;
    player1Score.innerText = player1Count;
    player2Score.innerText = player2Count;
    player1Score.classList.remove('win', 'lose');
    player2Score.classList.remove('win', 'lose');

})

