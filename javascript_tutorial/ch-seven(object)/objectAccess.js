var point = {
    a: 10,
    b: 20,
    c: 30
}
point.a = 50
point.d = 70
point['b'] = 60
var porp = 'c'
point[porp] = 80
//-----dot notation----
console.log(point);

// console.log(point.a + point.b);

// ------array notation---------
// console.log(point['a']);

// var show = 'a'
// console.log(point[show]);

delete point.d
console.log(point);