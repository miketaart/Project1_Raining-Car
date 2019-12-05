class Game {
    constructor(width, height) {
        this.car = new Car(35);
        this.gamewidth = width;
        this.gameheight = height;
        this.interval = 0;
        this.bolts = [new Bolt()]
        this.gass = [new Gas()]
        //this.rocks = [new Rock()]
        this.start();
        this.score = new Score();
        this.live = new Live();
        this.gameOver = null;
    }


    start() {
        let game = this;
        setInterval(() => {
            game.render();
        }, 100)

        setInterval(() => {
            game.addBolt(new Bolt());
        }, 2000)

        setInterval(() => {
            game.addGas(new Gas());
        }, 20000)

    }



    addCar(car) {
        this.car = car;
    }

    addBolt(bolt) {
        this.bolts.push(bolt);
    }

    addGas(gas) {
        this.gass.push(gas);
    }

    /*addRock(rock) {
        this.rocks.push(rock);
    }*/

    renderBolt() {
        for (let i = 0; i < this.bolts.length; i++) {
            this.bolts[i].render();
        }
    }

    renderGas() {
        for (let j = 0; j < this.gass.length; j++) {
            this.gass[j].render();
        }
    }

    render() {
        this.checkCollissionBolt();
        this.checkCollissionGas();
        document.getElementById("game").innerHTML = "";
        if(this.car) this.car.render();
        if(this.bolts) this.renderBolt();
        if(this.gass) this.renderGas();
        if(this.gameOver) this.gameOver.render();
        
    }

    stopGame() {
        this.car = 0;
        this.bolts = [];
        this.gass = [];
        this.gameOver = new GameOver();
        //this.checkCollissionBolt() = false;
        //this.checkCollissionGas() =  false;
        //this.rocks = [new Rock()]
    }

    // check if bolts collide with car
    checkCollissionBolt() {
        document.getElementById("live").innerHTML = this.live.live;
        var bolts = this.bolts
        var car = this.car
        for (let i = 0; i < bolts.length; i++) {
            if (collission(car, bolts[i])) {
                bolts = bolts.splice(i, 1);
                console.log("You were struck by lightning")
                this.live.live--              
                if(this.live.live === 0) {
                    this.stopGame();
                }
                return true;
            }

        }


        return false


    }
    
    // check if car collides with bonus 
    checkCollissionGas() {
        document.getElementById("score").innerHTML = this.score.score
        var gass = this.gass
        var car = this.car
        for (let j = 0; j < gass.length; j++) {
            if (collission(car, gass[j])) {
                gass = gass.splice(j, 1);
                this.score.score++;
                console.log("YES!")
                return true;
            }
        }
        return false
    }

    
}

function collission(element1, element2) {
    //let height = window.innerHeight
    return !(
        ((element1.y + element1.height) < (element2.y)) ||
        (element1.y > (element2.y + element2.height)) ||
        ((element1.x + element1.width) < element2.x) ||
        (element1.x > (element2.x + element2.width))
    )
}


let game = new Game()