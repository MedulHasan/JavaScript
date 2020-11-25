// ----old object decleration
let a = 10, b = 20
let obj = {
    a: a,
    b:b,
    print: function() {
        console.log(this);
    }
}
obj.print()


// ----es6 object decleration
let obj2 = {
    a,
    b,
    print() {
        console.log(this);
    }
}
obj2.print()