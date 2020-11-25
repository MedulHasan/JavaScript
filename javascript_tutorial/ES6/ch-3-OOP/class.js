class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height

        this.test1 = function() {

        }
    }

    // test = function() {

    // }

    draw(a, b) {
        this.a = a
        this.b = b
        console.log(a, b);
        console.log('Drawing...');
    }
}

let rect1 = new Rectangle(45, 23)
rect1.draw(1, 2)
let rect2 = new Rectangle(45, 23)
rect2.draw(10, 20)