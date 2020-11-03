var arr = [1,2,3,4,5,6,7,8,9]

// for(var i = 0; i<arr.length-1; i++) {
//     console.log(arr[i])
// }
var res = 0
for (var j = 0; j < arr.length; j++) {
    res = arr[j] % 2
    if (res == 0) {
        console.log(arr[j])
    }
}