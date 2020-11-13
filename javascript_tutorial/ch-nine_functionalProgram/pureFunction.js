// 'it return the same result if given the same argument'
// 'it does not cause any observablr side effects'

function sqr(n) {
    return n*n
}

var x = sqr(2)
console.log(x);
console.log(sqr(2));