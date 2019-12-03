class Game {
    constructor(width, height) {
        this.car = new Car(35);
        this.gamewidth = width;
        this.gameheight = height;
        this.interval = 0;
        this.bolts = [new Bolt(), new Bolt(), new Bolt(), new Bolt(), new Bolt(), new Bolt()]
        this.gass = [new Gas()]
        this.start();
        this.rain = new Rain();
    }
    
    start() {
        let game = this;
        setInterval(() =>{
            game.render();
        },100)

        setInterval(() => {
            game.addBolt(new Bolt());
        }, 3000)

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

    render() {
        document.getElementById("game").innerHTML = "";
        this.car.render();

        for (let i = 0; i < this.bolts.length; i++) {
            this.bolts[i].render();
        }

        for (let j = 0; j < this.gass.length; j++) {
            this.gass[j].render();
        }
    }
}

let game = new Game()





    
