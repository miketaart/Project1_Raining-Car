class Bolt {
    constructor(){
        this.x = Math.round(Math.random() * (window.innerWidth - 40));
        this.y = window.innerHeight + 100;
        this.width = 40; // set in .bolt css
        this.height = 85;
        this.$bolt = null;
        this.animate();
        this.velocity = Math.floor(Math.random() * (40 - 10) ) + 10; //(Math.random() * 10)
    }

    animate() {
        let bolt = this;
        setInterval(()=> {
            bolt.y -= this.velocity 
        }, 90)
    }


    render(){
        let bolt = document.createElement("div");
        bolt.className = "bolt"; // static styling in .bolt
        this.$bolt = bolt;
        bolt.style.left = `${this.x}px`;
        bolt.style.bottom = `${this.y}px`;

        document.getElementById('game').appendChild(bolt)
    }

}

