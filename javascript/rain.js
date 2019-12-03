class Rain {
    constructor () {
        this.nbDrop = 858;
        this.maxNum = maxNum;
        this.minNum = minNum;
        this.dropLeft = dropLeft;
        this.dropRight = dropRight;
    }
    // number of drops created.

// function to generate a random number range.
    randRange( minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    }

// function to generate drops
    createRain() {
	    for( k = 1; k < this.nbDrop; k++) {
	    var dropLeft = randRange(0,1600);
	    var dropTop = randRange(-1000,1400);

	    $('.rain').append('<div class="drop" id="drop'+ k +'"></div>');
	    $('#drop' + k).css('left',dropLeft);
	    $('#drop' + k).css('top',dropTop);
	    }

    }
    
    // Make it rain
    createRain();
}