class Bolt {
    constructor(){
        this.x = Math.round(Math.random() * (window.innerWidth - 40));
        this.y = 0;
        this.width = 40; // set in .bolt css
        this.height = 90;
        this.$bolt = null;
        this.animate();

    }
    
    initiate(){ // starting position???

    }

    animate() {
        let bolt = this;
        setInterval(()=> {
            bolt.y += 25
        }, 300)
    }


    render(){
        let bolt = document.createElement("div");
        bolt.className = "bolt"; // static styling in .bolt
        this.$bolt = bolt;
        bolt.style.left = `${this.x}px`;
        bolt.style.top = `${this.y}px`;

        document.getElementById('game').appendChild(bolt)
    }

}

