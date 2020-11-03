var a = 10
var str = ''

if (a % 2 == 0) {
    str = 'EVEN'
}
else {
    str = 'ODD'
}
console.log(str)

// ternary operator

var result = (a % 2 == 0) ? 'EVEN' : 'ODD'
console.log(result)

//shorthand
var name = ''
console.log('\n',name || 'Medul')

var isok = true
isok && console.log('ok')