var arr = [1,2,3,4]
// var arr2 = [5,6,7,8]
// var arr3 = 1
// console.log(arr.join(' , '))

// console.log(arr.fill(0))
// console.log(arr2.concat(arr))
// console.log(Array.isArray(arr3))

var arr4 = Array.from(arr)
// var arr4 = arr
arr4[0] = 9
console.log(arr);
console.log(arr4)

