var a = 'abc'

function fun() {
    // var a =20
    function x() {
        var a = 10
        console.log(a);
    }
    console.log(a);
    x()
}
fun()

function s(n) {
    function a() {
        return n % 3 === 0
    }
    function b() {
        return n % 5 === 0
    }
    if(a() && b()) {
        console.log(n + ' is divisible by 3 & 5');
    } else {
        console.log(n + ' is not divisible by 3 & 5');
    }
}

s(10)
