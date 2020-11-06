function first(a) {
    return a
}

function second(b) {
    return b * 5
}

function third (c, d) {
    return c + d
}

var x = first(second(third(2, 3)))
console.log(x);