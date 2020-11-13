function Square(width) {
    this.width = width

    this.getWidth = function() {
        console.log('Width is: ' + this.width);
        // this.draw()
    }
    
}

Square.prototype = {
    draw: function() {
        console.log('Draw');
        this.getWidth()
    },
    toString: function() {
        return 'My width is: ' + this.width
    }
}

var sqr1 = new Square(2)
var sqr2 = new Square(3)

// console.log(Object.keys(sqr1));

// for(var i in sqr1) {
//     console.log(i);
// }

// console.log(sqr1.hasOwnProperty('width'));