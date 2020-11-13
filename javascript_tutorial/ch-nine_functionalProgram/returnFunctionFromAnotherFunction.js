function x(msg) {
     function y(name) {
        return msg + ',' + name
    }
    return y
}

var hi = x('hi')
var nm = hi('medul')
console.log (nm)

function sqr(b) {
    return function(n) {
        var res = 1
        for(var i = 0; i < b; i++) {
            res = res * n
        }
        return res
    }
}

var bs = sqr(10)
console.log(bs(2));

var bb = sqr(5)
console.log(bb(3));