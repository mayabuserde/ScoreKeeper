
const maxScore = document.querySelector('#maxScore');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
let player1Score = document.querySelector('#player1Score');
const player2Score = document.querySelector('#player2Score');
const reset = document.querySelector('#reset');
let player1Count = 0;
let player2Count = 0;
let winningScore = 5;
let isGameOver = false;

resetGame = function () {
    player1Count = 0;
    player2Count = 0;
    player1Score.innerText = player1Count;
    player2Score.innerText = player2Count;
    player1Score.classList.remove('win', 'lose');
    player2Score.classList.remove('win', 'lose');
    isGameOver = false;

}

//update winning score and reset game
maxScore.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetGame();
})


player1.addEventListener('click', function () {
    if (!isGameOver) {
        player1Count++;
    }

    if (player1Count === winningScore) {
        player1Score.classList.add('win');
        player2Score.classList.add('lose');
        isGameOver = true;
    } player1Score.innerText = player1Count;

})

player2.addEventListener('click', function () {
    if (!isGameOver) {
        player2Count++;

    }

    if (player2Count === winningScore) {
        player2Score.classList.add('win');
        player1Score.classList.add('lose');
        isGameOver = true;

    }

    player2Score.innerText = player2Count;

})

reset.addEventListener('click', resetGame);



