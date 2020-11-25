
// Array iterator
const arr = [1, 2, 3]

function createIterator(collection) {
    let i = 0
    return {
        next () {
            return {
                done: i >= collection.length,
                value: collection[i++]
            }
        }
    }
}

let iterate = createIterator(arr)
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());

// string iterator
let str = 'medul'

function strite(coll) {
    let i = 0
    return {
        next() {
            return {
                done: i >= coll.length,
                value: coll[i++]
            }
        }
    }
}
let x = strite(str)
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
