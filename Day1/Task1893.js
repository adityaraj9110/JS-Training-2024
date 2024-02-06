// calculator function
function calculator(func, ...args) {
    // Check if the number of arguments matches the required number for the function
    if (func.length !== args.length) {
        console.log(`Function '${func.name}' requires ${func.length} arguments, ${args.length} provided.`);
    }
    return func(...args);
}

// functions for addition, subtraction, multiplication, and division
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

// functions for temperature conversion: Celsius to Fahrenheit and vice versa
const celsiusToFahrenheit = (c) => (c * 9/5) + 32;
const fahrenheitToCelsius = (f) => (f - 32) * 5/9;

// function to calculate the area of a rectangle
const calculateArea = (length, width) => length * width;

// Test the calculator with the basic functions
console.log("Addition:", calculator(add, 5, 3));       
console.log("Subtraction:", calculator(subtract, 8, 3)); 
console.log("Multiplication:", calculator(multiply, 4, 6)); 
console.log("Division:", calculator(divide, 10, 2));

// Test the temperature conversion functions
console.log("Celsius to Fahrenheit:", calculator(celsiusToFahrenheit, 25)); 
console.log("Fahrenheit to Celsius:", calculator(fahrenheitToCelsius, 77)); 

// Test the area calculation function
console.log("Area of rectangle (length=5, width=4):", calculator(calculateArea, 5, 4)); 
