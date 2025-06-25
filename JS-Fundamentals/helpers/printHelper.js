// "Helper" files is good for storing variables and functions to help code in more important files be cleaner
// lesson8: Functions
export function printAge(age){
    console.log(age)
}

// lesson9: Class and Methods
// Class: class <InsertText - must use capital letter in the first letter>
class CustomerDetails {
    printFirstName(firstName){
        console.log(firstName)
    }


    /**
     * This method will print the last name
     * @param {string} lastName 
     */
    printLastName(lastName){
        console.log(lastName)
    }
}
export const customerDetails = new CustomerDetails()