class Score {
    constructor() {
        this.score = 0;
        this.currentTime = 0;
        this.intervalId = 0;
        this.myScore(); 
    }

   

    myScore() {
        var fixThis = this;
        this.intervalId = setInterval(function(){
        fixThis.score++;
        }, 1000);
    }

}
  


class Live {
    constructor() {
        this.live = 3;
    }
}