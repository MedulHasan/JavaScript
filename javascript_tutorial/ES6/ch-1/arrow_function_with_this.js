
function testme() {
    console.log(this);
}
testme.call({})


// ----arrow function with this----
let obj = {
    name: 'medul',
    print: function () {
        let x = (msg) => {
            let m = msg
            console.log(this);
            console.log(`My name is ${this.name} and i give a massage ${m}`);
        }
        x('send meaasge')

        setTimeout(() => {
            alert(`hi ${this.name}`)
        }, 1000)
    }
}
obj.print()


// function expresstion

let obj = {
    name: 'medul hasan',
    print: function() {
        setTimeout(function() {
            console.log(`hello, ${this.name}`);
        }.bind(this), 1000)
    }
}
obj.print()