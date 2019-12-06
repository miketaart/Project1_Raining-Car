class Game {
    constructor(width, height) {
        this.car = new Car(35);
        this.gamewidth = width;
        this.gameheight = height;
        this.interval = 0;
        this.bolts = [new Bolt()];
        this.gass = [new Gas()];
        this.rocks = [new Rock()];
        this.mechanics = [new Mechanic()];
        this.start();
        this.score = new Score();
        this.live = new Live();
        this.gameOver = null;
    }

    // set intervals for different functions and classes to be created/ran.
    start() {
        let game = this;
        setInterval(() => {
            game.render();
        }, 130)

        setInterval(() => {
            game.addBolt(new Bolt());
        }, 200)

        setInterval(() => {
            game.addGas(new Gas());
        }, 15000)

        setInterval(() => {
            game.addMechanic(new Mechanic());
        }, 10000)

        setInterval(() => {
            game.addRock(new Rock());
        }, 15000)

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

    addGas(mechanic) {
        this.mechanics.push(mechanic);
    }

    addRock(rock) {
        this.rocks.push(rock);
    }

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

    renderMechanic() {
        for (let l = 0; l < this.mechanics.length; l++) {
            this.mechanics[l].render();
        }
    }

    renderRock() {
        for (let k = 0; k < this.rocks.length; k++) {
            this.rocks[k].render();
        }
    }

    render() {
        this.checkCollissionBolt();
        this.checkCollissionGas();
        this.checkCollissionMechanic();
        this.checkCollissionRock();
        document.getElementById("game").innerHTML = "";
        if(this.car) this.car.render();
        if(this.bolts) this.renderBolt();
        if(this.gass) this.renderGas();
        if(this.mechanics) this.renderMechanic();
        if(this.rocks) this.renderRock();
        if(this.gameOver) this.gameOver.render();
        
    }

    stopGame() {
        this.car = 0;
        this.bolts = [];
        this.gass = [];
        this.mechanic = [];
        this.rocks = [];
        this.gameOver = new GameOver();
        console.log('game stopped')
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
                this.live.live--              
                if(this.live.live < 1) {
                    this.stopGame();
                }
                return true;
            }
        }
        return false
    }

    checkCollissionRock() {
        document.getElementById("live").innerHTML = this.live.live;
        var rocks = this.rocks
        var car = this.car
        for (let k = 0; k < rocks.length; k++) {
            if (collission(car, rocks[k])) {
                rocks = rocks.splice(k, 1);
                this.live.live = this.live.live -2;             
                if(this.live.live < 1) {
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
                this.score.score+=20;
                return true;
            }
        }
        return false
    }

    checkCollissionMechanic() {
        document.getElementById("live").innerHTML = this.live.live
        var mechanics = this.mechanics
        var car = this.car
        for (let l = 0; l < mechanics.length; l++) {
            if (collission(car, mechanics[l])) {
                mechanics = mechanics.splice(l, 1);
                this.live.live+=3;
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