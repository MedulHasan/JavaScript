var TrianglArea = function (base, height) {
    this.base = base
    this.height = height

    this.draw = function() {
        var A = (base * height) / 2
        console.log(`Base: ${base}\nHeight: ${height}\n\nArea is: ${A}`);
    }
}

var tran1 = new TrianglArea(2, 3)
tran1.draw()
var tran1 = new TrianglArea(20, 23)
tran1.draw()