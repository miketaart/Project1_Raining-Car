class GameOver {
    constructor(score){
        this.score;
    }
    render() {
        let gameOverAlert = document.createElement("div");
        let playAgain = document.createElement("button");
        gameOverAlert.className = "gameOverAlert";
        this.$gameOverAlert = gameOverAlert;
        gameOverAlert.style.left = 50 + "vw";
        gameOverAlert.style.bottom = 50 + "vh";
        gameOverAlert.style.transform = "translate(-50%, 50%)";
        gameOverAlert.innerHTML = "GAME OVER";
        playAgain.innerHTML = "Play Again";
        
        document.getElementById('game').appendChild(gameOverAlert);
        document.getElementsByClassName('gameOverAlert')[0].appendChild(playAgain);
        document.getElementsByClassName('playAgain')[0].addEventListener("click", refresher())

    }

    refresher() {
        location.href = 'https://rain-car.herokuapp.com/'
    }
}