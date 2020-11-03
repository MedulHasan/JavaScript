var arr = [12,18,54,23,87,14,19, 23]
console.log(arr.length)
var find = 23
var isFound = false
for(var i = 0;i<arr.length-1;i++) {
    if(arr[i] === 23) {
        console.log('here is ', arr[i], 'at index', i)
        isFound = true
        break
    }
}

if(!isFound) {
    console.log('did not found')
}