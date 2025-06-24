// Conditional Statement
// Needed to split the flow of the application based on the defined conditions

// if(condition){
    // insert executable code
// } else(condition){
    // insert executable code
// }

// If hour between 6 and 12 print "Good Morning"
// IF hour between 12 and 18 print "Good Afternoon"
// Otherwise: print "Good Evening"

var hour = 15
if(hour >= 6 && hour < 12){
    console.log('Good Morning')
} else if (hour >=12 && hour < 18){
    console.log('Good Afternoon')
} else{
    console.log('Good Evening')
}

var ageIsMoreThanEighteen = true
var isUSCitizen = false

if(ageIsMoreThanEighteen && isUSCitizen){
    console.log('Customer is elegible for DL')
} else {
    console.log('Customer is NOT eleigible for DL')
}