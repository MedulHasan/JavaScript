// 
function extend(parent,child) {
    child.prototype = Object.create(parent.prototype) //inharit
    child.prototype.constructor = child  //reset constructor
}

// main shape
function Shape(color) {
    this.color = color
}

Shape.prototype.common = function() {
    console.log('I am common Method');
}

// Square constructor

function Square(width, color) {
    Shape.call(this, color)
    this.width = width
}

extend(Shape, Square)

Square.prototype.draw = function() {
    console.log('Drawing');
}

// var shape = new Shape()
var square = new Square(12, 'green')
// square.draw()
// square.common()

// Circle constructor

function Circle(radious, color) {
    Shape.call(this, color)
    this.radious =radious
}

extend(Shape, Circle)

var circle = new Circle(5, 'red')
// circle.common()

Circle.prototype.common = function() {
    Shape.prototype.common.call(this)
    console.log('I am overridden');
}

var c = new Circle(4, 'black')
