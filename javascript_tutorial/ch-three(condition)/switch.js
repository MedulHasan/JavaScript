var date = new Date()

var today = date.getDay()

switch(today) {
    case 0:
        console.log('Tofay is Sunday')
        break
    case 1:
        console.log('Tofay is Monday')
        break
    case 2:
        console.log('Tofay is Tuesday')
        break
    case 3:
        console.log('Tofay is Wednesday')
        break
    case 4:
        console.log('Tofay is Thursday')
        break
    case 5:
        console.log('Tofay is Friday')
        break
    case 6:
        console.log('Tofay is Saturday')
        break
    default:
        console.log('Not a valid Number')
}