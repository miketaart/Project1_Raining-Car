class Rock {
    constructor(){
        this.x = Math.round(Math.random() * (window.innerWidth - 40));
        this.y = window.innerHeight + 100;
        this.width = 94; // set in .rock css
        this.height = 85;
        this.$rock = null;
        this.animate();
        this.velocity = Math.floor(Math.random() * (40 - 10) ) + 10; //(Math.random() * 10)
    }

    animate() {
        let rock = this;
        setInterval(()=> {
            rock.y -= 3*this.velocity 
        }, 175)
    }


    render(){
        let rock = document.createElement("div");
        rock.className = "rock"; // static styling in .rock
        this.$rock = rock;
        rock.style.left = `${this.x}px`;
        rock.style.bottom = `${this.y}px`;

        document.getElementById('game').appendChild(rock)
    }

}