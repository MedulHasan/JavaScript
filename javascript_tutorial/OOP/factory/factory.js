var areaOfCircle = function(radius) {
    return {
        radius: radius,

        draw: function() {
            var A = 3.1416 * radius * this.radius
            console.log(`when Radius: ${this.radius}  then Area is: ${A}`);
        }
    }
}

var area1 = areaOfCircle(2)
area1.draw()

var area1 = areaOfCircle(5)
area1.draw()