// Functions
// Declarative Function - Can be called anytime in a file regardless of location of the function's definition
function helloOne(){
    console.log('Hello one!')
}
helloOne()

// Anonymous Function - Must be placed after the function's definition
var helloTwo = function(){
    console.log('Hello two!')
}
helloTwo()

// ES6 Function Syntax or Arrow function
var helloThree = () => {
    console.log('Hello three!')
}
helloThree()

// Function with Arguments
function printName(name, lastName){
    console.log(name + ' ' + lastName)
}
printName('Hunter', 'Snyder')

// Function with Return
function multiplyByTwo(number){
    var result = number * 2
    return result
}
var myResult = multiplyByTwo(90000000)
console.log(myResult)

// Functions can be set in one singular place that can be called in other places
// Import Function - Use import keyword to pull functions assigned with the export keyword out of the functions file
import {printAge} from '../helpers/printHelper.js'
printAge(5)

// Import Everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(10)