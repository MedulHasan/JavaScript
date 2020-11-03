function add(a, b) {
    var res = a +b
    return res
}

var x =  add(50, 20)
// console.log(x);

var arr1 = [1, 2, 3, 4]
var arr2 = [4, 5, 6, 7]
var arr3 = [2, 5, 8, 4]

function sumOfArray(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    console.log(sum);
}

sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)

//----------- argument--------

function test() {
    // console.log(arguments);
    // console.log(typeof a);
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
// test(1, 2, 3)


// create addition function using arguents 

function addAll () {
    var sum = 0

    for (var i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }
    console.log(sum);
}

addAll(1, 2, 3, 4, 5)
addAll(1, 2, 3, 4, 5, 6)