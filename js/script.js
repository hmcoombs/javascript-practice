// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number


let firstNumber = prompt("Please provide the first number", "0");

let secondNumber = prompt("Please provide the second number", "0");



// Convert the values to integers
// Store the two integers as variables
let intFN = Number(firstNumber);
let intSN = Number(secondNumber);
console.log(intFN)
console.log(secondNumber)

while(intFN === NaN) {
    prompt("Please input only a first number")
{
    if (intFN !== NaN) {
        break;
}
}

while(intSN === NaN) {
    prompt("Please input only a second number")
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