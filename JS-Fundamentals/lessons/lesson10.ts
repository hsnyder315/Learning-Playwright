// Typescript
// TS Helps to control data stability by minimizing errors before running the code
// In Typescript, assigning a value to a variable locks in the value type so that a number cannot be used in a var using a string value, etc., but value types can be assigned before inputting the value
var customerFirstName: string = "John"
var customerLastName: string = "Smith"
var customerAge: number = 25

type Customer = {firstName: string, lastName: string, active: boolean}
var FirstCustomer: Customer = {
    firstName: "Mary",
    lastName: "Jones",
    active: true
}