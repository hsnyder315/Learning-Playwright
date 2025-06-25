// Loops

// for(statement1 (what the condition starts with); statement2 (when to stop the loop); statement3 (what happens after each loop cycle)){
//   insert code to execute
// }

// console.log('Hello World!')
// console.log('Hello World!')
// console.log('Hello World!')
// console.log('Hello World!')
// console.log('Hello World!')

// for loop (for i loop)
for(let i=0; i<5; i=i+1 //i++ also works
    ){
    console.log('Hello World!' + i)
}

var cars = ["Volvo", "Volkswagon", "Mercedes-Benz"]
// for of loop
for(let car of cars){
    console.log(car)
    if(car == "Volkswagon"){
        break // breaks the loop at Volkswagon
    }
}

// ES6 syntax for each loop
cars.forEach( car => {
    console.log(car)
} )