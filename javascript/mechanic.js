class Mechanic {
    constructor(){
        this.x = Math.round(Math.random() * (window.innerWidth - 40));
        this.y = window.innerHeight + 100;
        this.width = 40;
        this.height = -40;
        this.$mechanic = null;
        this.startTime = new Date();
        //this.velocity = (Math.random() * 10)
    }



    render(){
        this.y = window.innerHeight + 100 - ((new Date() - this.startTime)/300)*40;
        let mechanic = document.createElement("div");
        mechanic.className = "mechanic"; // static styling in .Mechanic
        this.$mechanic = mechanic;
        mechanic.style.left = `${this.x}px`;
        mechanic.style.bottom = `${this.y}px`;

        document.getElementById('game').appendChild(mechanic)
    }

}