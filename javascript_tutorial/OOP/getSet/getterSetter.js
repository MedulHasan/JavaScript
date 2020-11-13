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

    /*this.getPosition = function() {
        return position
    }*/

    Object.defineProperty(this, 'position', {
        get: function () {
            return position
        },

        set: function(value) {
            position = value
        }
    })

    this.draw = function() {
        console.log(`I am a rectangle`);
        printProperty()
        console.log(position.x);
        console.log(position.y);
    }
}

var rect1 = new Rect(10, 20)
rect1.draw()

// console.log('Get position: '+ rect1.getPosition().y);

rect1.position = {
    x: 123,
    y: 456
}

console.log(rect1.position);