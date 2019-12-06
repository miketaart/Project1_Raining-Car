class GameOver {
    constructor(score){
        this.score = score;
    }
    render() {
        let gameOverAlert = document.createElement("div");
        let playAgain = document.createElement("a")
        playAgain.innerHTML = "Press enter to play again";
        gameOverAlert.className = "gameOverAlert";
        playAgain.setAttribute("id", "playAgain");
        this.$gameOverAlert = gameOverAlert;
        gameOverAlert.style.left = 50 + "vw";
        gameOverAlert.style.bottom = 50 + "vh";
        gameOverAlert.style.transform = "translate(-50%, 50%)";
        gameOverAlert.innerHTML = "GAME OVER";
        gameOverAlert.appendChild(playAgain);

        document.getElementById('game').appendChild(gameOverAlert);
    }

    //refresher() {
        //window.location.href = './'
    //}
}