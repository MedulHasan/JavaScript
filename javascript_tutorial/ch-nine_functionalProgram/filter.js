var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var x = arr.filter(function(val) {
    return val % 2 === 0
})

console.log('Even:', x);

// we can create our iwn function
function myFilter (arr, cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if(cb(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log('Odd:', myFilter( arr, function (val) {
    return val % 2 === 1
}));

console.log('gater then 5', myFilter( arr, function (value) {
    return value < 5
}))