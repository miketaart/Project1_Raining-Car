
class Score {
    constructor(game) {
        this.game = game;
        this.score = 0;
        this.currentTime = 0;
        this.intervalId = 0;
        this.myScore();
     
    }
    incrementer() {
        this.score++
    }

    myScore() {
        if (this.game.live.live > 0) {
            setInterval(() => {this.score++}, 1000)
            
        } 
        
    }

    scoreLogic() {
        if (this.game.live.live <= 0) {
            this.game.stopGame();
            this.game.live.live = 0
        } 
        
    }
    }

    // myScore() {
    //     var fixThis = this;
    //     this.intervalId = setInterval(function(){
    //    fixThis.score++;
    //     console.log(live.live)
    //     }, 1000);
    // }


  
class Live {
    constructor() {
        this.live = 3;
    }
}


