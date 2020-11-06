var arrr = [5,2,7,4,5]

var sum = 0
arrr.forEach(function(value, index, arrr){
    sum +=  value
})
console.log(sum);

console.log('create or own forEach function "output"');

// create or own forEach function
var arr = [1, 2, 3, 4, 5]

function foreach (ar, cb) {
    for (var i = 0; i<ar.length; i++) {
        // console.log(ar[i]);
        cb(ar[i], i, ar)
    }
}


var sum = 0 
foreach(arr, cbb)

function cbb(val, ind, ar) {
    console.log(val, ind, ar);
    sum = sum + val
}

console.log(sum);

foreach(arr, cbbb)

function cbbb(val, ind, arr) {
    arr[ind] = val + 5
}
console.log(arr);