var a = 10

// for(var i = 1; i <= a; i++) {
//     console.log(i, ' : Medul')
// }
var result = 0
for (var i = 1; i <= 10; i++) {
    console.log(result, '+', i, '=', (result = result+i))
    // result = result + i
}
console.log(result)