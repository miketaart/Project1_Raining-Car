class GameOver {
    constructor(score){
        this.score = score;
    }
    render() {
        let gameOverAlert = document.createElement("div");
        let playAgain = document.createElement("button");
        playAgain.innerHTML = "Play Again";
        gameOverAlert.className = "gameOverAlert";
        playAgain.setAttribute("id", "playAgain");
        //playAgain.className = "playAgain"
        this.$gameOverAlert = gameOverAlert;
        gameOverAlert.style.left = 50 + "vw";
        gameOverAlert.style.bottom = 50 + "vh";
        gameOverAlert.style.transform = "translate(-50%, 50%)";
        gameOverAlert.innerHTML = "GAME OVER";
        document.getElementById('game').appendChild(gameOverAlert);
    
        document.getElementsByClassName('gameOverAlert')[0].appendChild(playAgain);
        //document.getElementsByClassName('playAgain')[0].addEventListener("click", this.refresher())
        document.getElementById('playAgain').addEventListener("click", this.refresher())
    }

    refresher() {
        window.location.href = 'https://rain-car.herokuapp.com/'
    }
}