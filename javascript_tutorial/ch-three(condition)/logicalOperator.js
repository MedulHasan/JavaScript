 var a = 10, 
    b = 20, 
    c = 30, 
    d = 40


 if(a < b && c > d) {
     console.log("Both are true")
 }
 else {
     console.log('At least one condition is false')
 }

 if(a > b || c > d) {
     console.log("one or Both are true")
 }
 else {
     console.log('both condition are false')
 }

 var check = !(a > b)
 console.log(check)