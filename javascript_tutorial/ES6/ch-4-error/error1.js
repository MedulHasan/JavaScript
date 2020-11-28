let m = 10
if(m > 5) {
    throw new Error('m is greater then 5');
}


// range error
let x = 56
if (x > 50) {
    throw new RangeError('number is too long')
}