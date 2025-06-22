// Logical Operators
// "AND" - &&
console.log(true && true) // all values have to be TRUE for this expression to be TRUE

// "OR" - ||
console.log(true || false) // any value should be TRUE for this expression to be TRUE

var ageIsMoreThanEighteen = false
var isUSCitizen = true

var elegibilityForDriversLicense = ageIsMoreThanEighteen || isUSCitizen
console.log('This customer is eligible for DL: ' + elegibilityForDriversLicense)

// "NOT" - !
console.log(!true)
console.log(6 !== 10)