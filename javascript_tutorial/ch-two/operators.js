// Arithmetic operator
// + - * / % ++ --

var a = 10
var b = 7

var add = a + b
var sub = a - b
var mul = a * b
var div = a / b
var rem = a % b

console.log(a, '+', b, '=', add)
console.log(a, '-', b, '=', sub)
console.log(a, '*', b, '=', mul)
console.log(a, '/', b, '=', div)
console.log(a, '%', b, '=', rem)

// incremental operatoe(++)
// (++) pre incremental & post incremental(++)

console.log('pre-incremental:', ++a)
console.log('post-incremental:', a++)
console.log('incremental:', a)

// decremental operatoe(++)
// (++) pre decremental & post decremental(++)
console.log('pre-decremental:', --a)
console.log('post-decremental:', a--)
console.log('decremental:', a)
console.log()

// assignment operator
// =
console.log('assignment operator')
a = a + b
console.log(a)

a -= b
console.log(a)

a = a * b
console.log(a)

a /= b
console.log(a)

a = a % b
console.log(a)

// comparision operators
// ==, !=, <=, >=, <, >
console.log('comparison operator')
console.log(a == b)

// type comparision operators
var c ='50'
var d = 50

console.log(c === d)
console.log(c !== d)

// logical operator
// &&, ||, !

// bitwise operator
// &,|,`,^,<<,>>
