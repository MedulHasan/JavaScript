
let obj = {
    start: 1,
    end: 5,

    [Symbol.iterator]: function* () {
        let currValue = this.start
        while(currValue <= this.end) {
            yield currValue++
        }
    }
}

let iterator = obj[Symbol.iterator]()
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());



let arr = [1, 2]
function* generate(coll) {
    for(let i = 0; i < coll.length; i++) {
        yield coll[i]
    }
}

let ite = generate(arr)
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());
