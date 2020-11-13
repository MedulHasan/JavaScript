//first class function

function add(a,b) {
    return a + b
}

// 1. a function can be storedin a variable
var sum = add
console.log(sum(2, 3));
// 2. a function can be storedin a array
var arr = []
arr.push(add)
console.log(arr[0](5, 5));
// 3. a function can be storedin a object
var obj = {
    sumation: add
}
console.log(obj.sumation(10,1));
// 4.we can create function as need
setTimeout(function() {
    console.log('I am set time out');
}, 200)


// higher

// 5.we can push function as an arguments
// 6.we can return function from another function

//
