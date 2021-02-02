
const maxScore = document.querySelector('#maxScore');
const reset = document.querySelector('#reset');

let winningScore = 3;
let isGameOver = false;

const player1 = {
    score: 0,
    button: document.querySelector('#buttonPlayer1'),
    display: document.querySelector('#displayPlayer1'),
    name: document.querySelector('#namePlayer1')

};

const player2 = {
    score: 0,
    button: document.querySelector('#buttonPlayer2'),
    display: document.querySelector('#displayPlayer2'),
    name: document.querySelector('#namePlayer2')
}

const resetGame = function () {
    isGameOver = false;
    for (let player of [player1, player2]) {
        player.score = 0;
        player.display.innerText = player.score;
        player.display.classList.remove('has-text-primary', 'has-text-danger');
        player.button.disabled = false;
        player.name.disabled = false;

    }

}
player1.name.addEventListener('change', function () {
    player1.button.innerText = `+ 1 ${player1.name.value}`;
    player1.name.disabled = true;
})

player2.name.addEventListener('change', function () {
    player2.button.innerText = `+ 1 ${player2.name.value}`;
    player2.name.disabled = true;
})

//update winning score and reset game
maxScore.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetGame();
})

const updateScore = function (player, opponent) {
    if (!isGameOver) {
        player.score++;
    }
    if (player.score === winningScore) {
        player.display.classList.add('has-text-primary');
        opponent.display.classList.add('has-text-danger');
        player.button.disabled = true;
        opponent.button.disabled = true;
        isGameOver = true;
    } player.display.innerText = player.score;
}

player1.button.addEventListener('click', function () {
    updateScore(player1, player2);
})

player2.button.addEventListener('click', function () {
    updateScore(player2, player1);
})


reset.addEventListener('click', resetGame);



