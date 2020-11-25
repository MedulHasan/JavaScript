const _radious = Symbol() //this is not a pure private property
const _name = Symbol()
const _draw = Symbol()
class Circle {
    constructor(radious, name) {
        this[_radious] = radious
        this[_name] = name
        this.a = radious
    }

    [_draw]() {
        console.log('drawing...');
    }
}
let c = new Circle(2, 'medul')
console.log(c);
 

// console.log(Object.getOwnPropertyNames(c));
// let x = Object.getOwnPropertySymbols(c)[1]
// console.log(c[x]);