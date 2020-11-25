// ------object destructuring

let obj = {
    name: 'medul',
    email: 'medul.cse@gmail.com',
    address: {
        city: 'dhaka',
        country: 'bd'
    }
}
// console.log(obj.name, obj.email); //old version object call
let { name, email, address: {city, country} } = obj
console.log(name, email, city, country)



// ------array destructuring
let arr = [1, 2, 3, 4, 5]

let [a, b, , , e] = arr
console.log(a, b, e);
