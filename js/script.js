// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number


let firstNumber = prompt("Please provide the first number", "");

let secondNumber = prompt("Please provide the second number", "");

// Convert the values to integers
// Store the two integers as variables
let intFN = Number(firstNumber);
let intSN = Number(secondNumber);
console.log(intFN)
console.log(intSN)

// Check if the user input anything other than a number
// If so, prompt the user again to input a number

while(isNaN(intFN)) {
    intFN = prompt("Please provide the first number again");
    
}

while(isNaN(intSN)) {
    intSN = prompt("Please provide the second number again");
}


// Compare the two numbers
// Alert the larger number
if (intFN === intSN) {
    alert(`The numbers are equal.: ${intFN} - ${intSN}`);
} else if (intFN > intSN) {
    alert(`The first number is larger ${intFN}`);
} else {
 alert(`The second number is larger ${intSN}`);
}






// ------------ TAKE HOME CHALLENGE ------------
// Add an edge case to your daily challenge code
// Check if the user input anything other than a number
// If so, prompt the user again to input a number



// things tried

// if (prompt === null)

// if (intFN === "") {
//     break 
// } else if (intFN === Number) {
// continue;
// }

// if (prompt === null) {
//     break; 
// }
