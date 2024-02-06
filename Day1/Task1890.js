// Validation function to check for various scenarios
function validateArgs(func, args) {

    // check if function argument expectation is equal to argument length
    if (func.length !== args.length) {
        console.log(`Function '${func.name}' requires ${func.length} arguments, ${args.length} provided.`);
    }

    // Check if the function is there
    if (!func || typeof func !== 'function') {
        console.log('Invalid function provided.');
    }

    // Check if all arguments are numbers
    if (!args.every(arg => typeof arg === 'number' && !isNaN(arg))) {
        console.log('All arguments must be numbers.');
    }

   

    // Check if any argument is not declared
    if (args.some(arg => typeof arg === 'undefined')) {
        console.log('One or more arguments are not declared.');
    }

    // Check if any argument is not initialized
    if (args.some(arg => arg === undefined)) {
        console.log('One or more arguments are not initialized.');
    }
}

// Define the calculator function
function calculator(func, ...args) {
    // Validate the arguments
    validateArgs(func, args);

    return func(...args);
}

// Define functions for addition, subtraction, multiplication, and division
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

// Test the calculator with the basic functions

console.log("Addition:", calculator(add, 5, 3));     
console.log("Subtraction:", calculator(subtract, 8, 3)); 
console.log("Multiplication:", calculator(multiply, 4, 6)); 
console.log("Division:", calculator(divide, 10, 2));    
// functions for temperature conversion: Celsius to Fahrenheit and vice versa
const celsiusToFahrenheit = (c) => (c * 9/5) + 32;
const fahrenheitToCelsius = (f) => (f - 32) * 5/9;

// Test the temperature conversion functions

console.log("Celsius to Fahrenheit:", calculator(celsiusToFahrenheit, 25)); 
console.log("Fahrenheit to Celsius:", calculator(fahrenheitToCelsius, 77)); 


// function to calculate the area of a rectangle
const calculateArea = (length, width) => length * width;

// Test the area calculation function

console.log("Area of rectangle (length=5, width=4):", calculator(calculateArea, 5, 4)); 
