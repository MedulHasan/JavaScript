var n = 5

for (var i = 1; i <= n; i++) {
    var res = ''
    for  (var j = 1; j <= i; j++) {
        res = res + j + ' '
    }
    console.log(res)
}
console.log()

for (var i = 1; i <= n; i++) {
    res = ''
    for (var j = 1; j<=i; j++) {
        res = res + '*' + ' '
    }
    console.log(res,)
}
console.log()

for (var i = n; i >= 1; i--) {
    res = ''
    for (var j = i; j>=1; j--) {
        res = res + '* '
    }
    console.log(res)
}
console.log()


