class GameOver {
    constructor(score){
        this.score;
    }
    render() {
        let gameOverAlert = document.createElement("div");
        gameOverAlert.className = "gameOverAlert";
        this.$gameOverAlert = gameOverAlert;
        gameOverAlert.style.left = 50 + "vw";
        gameOverAlert.style.bottom = 50 + "vh";
        gameOverAlert.style.transform = "translate(-50%, 50%)";
        gameOverAlert.innerHTML = "GAME OVER";
        document.getElementById('game').appendChild(gameOverAlert);
    }
}