// Objects & Arrays
// Objects
// Defined by {}

var customer = {
    firstName: 'Hunter',
    lastName: 'Snyder',
    cars: ["Volvo", "Volkswagon", "Germany"]
}
// Dot notation
customer.firstName = 'John'
// Bracket notation
customer['lastName'] = 'Silver'
console.log(`${customer.firstName} ${customer.lastName}`)

// Arrays
// Defined by []
var car = ["Volvo", "Volkswagon", "Germany"]
car[1] = "BMW"
console.log(car[1])
console.log(customer.cars[0])