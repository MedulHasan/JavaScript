var arr = [1,2,3,4,5]

var x = arr.map(function(value) {
    // return Math.random() * 10
    return value * value
})

console.log('Build in function');
console.log(arr);
console.log(x);

// general way map function
console.log('create my function');

function myMap (arr, cb) {
    var a = []
    for (var i = 0; i < arr.length; i++) {
       var ar = cb(arr[i])
       a.push(ar)
    }
    return a
}
var y = myMap(arr, function(val) {
    var sqr = val * val *val
    return sqr
})
console.log(y);

var z = myMap(arr, function(val) {
    var m10 = val * 10
    return m10
})
console.log(z);
// console.log(y);