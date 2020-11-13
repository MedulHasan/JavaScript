function simple(a, b, callback) {
    var c = a + b
    var d = a - b

    var res = callback(c,d)
    return res
}

function add(a, b) {
    return a + b
}

var result = simple(5, 8, add)
console.log(result);

var result2 = simple(5, 8, function(a, b){
    return a - b
})
console.log(result2);