class Gas {
    constructor(){
        this.x = Math.round(Math.random() * (window.innerWidth - 40));
        this.y = window.innerHeight + 100;
        this.width = 20;
        this.height = 90;
        this.$gas = null;
        this.animate();
        this.velocity = (Math.random() * 10)
    }

    animate() {
        let gas = this;
        setInterval(()=> {
            gas.y -= this.velocity;
        }, 30)
    }


    render(){
        let gas = document.createElement("div");
        gas.className = "gas"; // static styling in .Gas
        this.$gas = gas;
        gas.style.left = `${this.x}px`;
        gas.style.bottom = `${this.y}px`;

        document.getElementById('game').appendChild(gas)
    }

}