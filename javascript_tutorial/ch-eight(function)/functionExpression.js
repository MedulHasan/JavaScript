
// function expression
var  addition1 = function add(a, b) {
    return a+b
}

console.log(addition1(2,3));

// function anonimus
var  addition2 = function(a, b) {
    return a+b
}

console.log(addition2(2,3));

setTimeout(function() {
    console.log('Print after 3 second');
}, 3000)