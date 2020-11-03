
var isrunning = true
while(isrunning) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand == 9) {
        console.log(rand)
        isrunning = false
    } else {
        console.log(rand)
    }
}
