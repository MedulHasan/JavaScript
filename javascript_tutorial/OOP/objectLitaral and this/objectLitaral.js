var rect = {
    width: 100, //opject property
    height: 50,

    draw: function() {
        console.log('i am a rectangle');
        this.printProperties()
        // console.log(this); //rect property object
    },

    printProperties: function() {
        console.log('my width is: ' + this.width);
        console.log('my height is: ' + this.height);
    }
}

rect.draw()

/*rect.width = 200
rect.draw()*/

function myFun() {
    // console.log(this); //window object
    rect.printProperties()
}

myFun()

var another = {
    width: 47,
    height: 56,
    print: rect.printProperties
}

console.log(another.print)
another.print()

// this keyword

