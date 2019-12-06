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
        this.live = new Live(this);
        this.score = new Score(this);
        this.gameOver = null;
        this.reset = this.start();
    }

    // set intervals for different functions and classes to be created/ran.
    start() {
        let game = this;
        setInterval(() => {
            this.score.scoreLogic();
            game.render();
        }, 200)

        setInterval(() => {
            game.addBolt(new Bolt());
        }, 500)
        
        setInterval(() => {
            game.addGas(new Gas());
        }, 15000)
        
        setInterval(() => {
            game.addMechanic(new Mechanic());
        }, 10000)
        
        setInterval(() => {
            game.addRock(new Rock());
        }, 15000)
        
        document.addEventListener("keydown", (e)=> {
            if(e.keyCode === 13 && this.gameOver) window.location = "/" 
        })
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
    
    addMechanic(mechanic) {
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
        
       
        document.getElementById("game").innerHTML = "";
        document.getElementById("live").innerHTML = this.live.live
        console.log(this.live.live)
        this.checkCollissionBolt();
        this.checkCollissionGas();
        this.checkCollissionMechanic();
        this.checkCollissionRock();
        if(this.gameOver) this.gameOver.render();
        if(this.car) this.car.render();
        if(this.bolts) this.renderBolt();
        if(this.gass) this.renderGas();
        if(this.mechanics) this.renderMechanic();
        if(this.rocks) this.renderRock();
 
    }

    stopGame() {
        this.car = 0;
        this.bolts = [];
        this.gass = [];
        this.mechanic = [];
        this.rocks = [];
        this.gameOver = new GameOver();
        
    }

    // check if bolts collide with car
    checkCollissionBolt() {
        var bolts = this.bolts
        var car = this.car
        for (let i = 0; i < bolts.length; i++) {
            if (collission(car, bolts[i])) {
                bolts = bolts.splice(i, 1);
                this.live.live--      
                console.log("Bolt collision func")        
                return true;
            }
        }
        return false
    }

    checkCollissionRock() {
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
                console.log("Gas collision")
                return true;
            }
        }
        return false
    }

    checkCollissionMechanic() {
        
        var mechanics = this.mechanics
        var car = this.car
        for (let l = 0; l < mechanics.length; l++) {
            if (collission(car, mechanics[l])) {
                console.log("Mechanic collision")
                this.live.live = this.live.live + 3;
                mechanics = mechanics.splice(l, 1);
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