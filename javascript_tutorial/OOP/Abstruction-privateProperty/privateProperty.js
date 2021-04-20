var Rect = function (width, height) {
    this.width = width
    this.height = height

    var position = {
        x: 10,
        y: 50
    }

    var printProperty = function() {
        console.log(`My width is: ${this.width}`);
        console.log(`My height is: ${this.height}`);
    }.bind(this)

    this.draw = function() {
        console.log(`I am a rectangle`);
        printProperty()
        console.log(position.x);
        console.log(position.y);
    }
}

var rect1 = new Rect(10, 20)
rect1.draw()