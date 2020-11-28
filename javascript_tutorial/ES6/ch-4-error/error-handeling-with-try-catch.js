function makeWords(text) {
    try {
        let str = text.trim()
        let words = str.split(' ')
        return words
    } catch(e) {
        // console.log(e);
        console.log('provide valid text');
    }
}

let words = makeWords(25)
console.log(words);