class Car {
    constructor(moveBy) {
        this.moveBy = moveBy;
        this.$car = null;
        this.x = 0;
        this.y = 0;
        this.width = 130;
        this.height = 65;
        this.render();
        this.initiateControls();

    }
    // similar to Rover
    initiateControls() {
        let car = this;
        window.addEventListener('keydown', (event) => {
         
            switch (event.key) {
                case 'ArrowLeft': 
                if (this.x < 10) {
                    return
                } else {
                car.x -= this.moveBy;
                }
                break;
                case 'ArrowRight': 
                if (this.x > window.innerWidth-100) {
                    return
                }
                else {
                    car.x += this.moveBy;
                }
                break;

            }
        })
    }

    render() {
        let car = document.createElement("div");
        car.className = "car"; // static styling in .car
        this.$car = car;
        car.style.left = `${this.x}px`;
        car.style.bottom = `${this.y}px`;
        document.getElementById('game').appendChild(car);
    }
    
}

