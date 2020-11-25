function add() {
    let sum = 0
    for(let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }
    return sum
}

console.log(add(1, 2, 3, 4, 5));


// rest
function add(...rest) {
    return rest.reduce((a, b) => a + b)
}
console.log(add(1, 2, 3, 4, 5, 6));



// spread
let arr = [1, 2, 3, 4]
console.log(...arr)