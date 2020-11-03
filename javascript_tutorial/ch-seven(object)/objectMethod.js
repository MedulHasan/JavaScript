var obj = {
    a: 10,
    b: 20,
    c: 30
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));


// create a new object with previous one

var obj2 = Object.assign({}, obj)
obj2.a = 100
console.log(obj2);