const arr2 = [1, 2, 3]
let iterator = arr2[Symbol.iterator]()

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());



const str2 = 'medul'
let strIte = str2[ Symbol.iterator]()

console.log(strIte.next());
console.log(strIte.next());
console.log(strIte.next());
console.log(strIte.next());
console.log(strIte.next());
console.log(strIte.next());