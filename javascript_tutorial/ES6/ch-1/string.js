var str = `Hi there,
how are you

What are you doing now`
console.log(str);

var age = 23
var name = 'Medul'

console.log(`My name is ${name} and i am ${age} years  old. i am ${ (age < 18) ? 'not ' : ''}adult`);

console.log(name.padStart(20)); //added a splace/any symble in start
console.log(name.padEnd(20, '+')); //added a splace/any symble in end
console.log('A'.repeat(20)); //repear multiple time