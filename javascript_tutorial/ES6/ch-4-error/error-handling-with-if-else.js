function convertToInt(v) {
    let res = Number.parseInt(v)
    if(!res) {
        return 'provide a valid input'
    }
    return res
}

let res = convertToInt('medul')
console.log(res);