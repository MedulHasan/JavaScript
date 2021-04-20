var arr = [1, 2, 3]
var a = 0
for(var i = 0; i<arr.length; i++) {
    if (i==1) {
        arr[i] = 8
        a = 1
    }
    if (a == 1) {
        arr[i+1] = arr[i]
    }
}
console.log(arr)
//1[0], 8[1], [2], [3]