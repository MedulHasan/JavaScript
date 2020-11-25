
// function decleration
function add(a, b) {
    return a + b
}
console.log(add(2, 3));

// function experesstion
let abc = function(a, b) {
    return a + b
}



// arrow function

let sqr = x => x * x //if we use single parameter then we will not use anu '()' parenthesis

console.log(sqr(2));

let x = (a, b) => a + b //single line arrow function, if we have a one line statement then can not use the return keyword

console.log(x(5, 5));

let add = (a, b) => {
    return a + b
}
let result = add(2, 3)
console.log(result);
