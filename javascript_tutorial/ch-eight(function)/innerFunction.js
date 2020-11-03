function parent (greet, name) {

    function innerFunction () {
        console.log(greet, name)
    }
    innerFunction()
}
parent('Hei', 'Medul')

// another function

function fun(greet, name) {
    function getFirstName() {
        if(name) {
            return name.split(' ')[0]
        } else {
            return ''
        }
    }

    var res = greet + ' ' +getFirstName()
    console.log(res)
}

fun ('good Morning', 'Medul Hasan')