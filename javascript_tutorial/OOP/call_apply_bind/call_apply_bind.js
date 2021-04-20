function abc(c, d) {
    console.log(this);
    console.log(this.a + this.b + c + d);
}
abc.call({ a: 10, b: 5 }, 5, 10)
abc.apply({ a: 5, b: 5 }, [10, 5])
abc()
var x = abc.bind({ a: 2, b: 8 })
x(10, 20)