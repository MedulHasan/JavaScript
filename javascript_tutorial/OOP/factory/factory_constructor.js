// factory pattern

var count1 = 0
var count2 = 0
var rectangle = function(width, height) {
    return {
        width: width,
        height: height,
        
        
        draw: function() {
            count1++
            console.log('i am a factor rectangle '+ count1);
            this.printProperties()
            // console.log(this); //rect property object

        },
    
        printProperties: function() {
            console.log('my width is: ' + this.width);
            console.log('my height is: ' + this.height);
        }
    }
}

var rect1 = rectangle(10, 20)
rect1.draw()

var rect2 = rectangle(100, 200)
rect1.draw()

var rect3 = rectangle(300, 400)
rect1.draw()



// constructor pattern

var Rectangle = function(width, height) {
    this.width = width
    this.height = height

    this.draw = function() {
        count2++
        console.log('i am a constructoral rectangle ' + count2)
        this.printrectangle()

    }

    this.printrectangle = function() {
        console.log('my width is: ' + width)
        console.log('my height is: ' + height)
    }
}

var r1 = new Rectangle(2, 4)
r1.draw()