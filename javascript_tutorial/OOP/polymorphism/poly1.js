// inharithance
function extend(parent,child) {
    child.prototype = Object.create(parent.prototype) //inharit
    child.prototype.constructor = child  //reset constructor
}

// main shape
function Shape(color) {
    this.color = color
}

Shape.prototype.common = function() {
    console.log('I am a common Method');
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

Square.prototype.common = function() {
    // Shape.prototype.common.call(this)
    console.log('i am a common and square method override me');
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

// var circle = new Circle(5, 'red')
// circle.common()

Circle.prototype.common = function() {
    // Shape.prototype.common.call(this)
    console.log('i am a common and circle method override me');
}

var c = new Circle(4, 'black')

var s = new Shape('pink')

var arr = [s, c, square]

for(var i of arr) {
    i.common( )
}