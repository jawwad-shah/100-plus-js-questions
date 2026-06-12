// Problem #3

// Problem Statement:
// Add two numbers using a function and print the result.

// Requirements:
// Create a reusable function that takes two numbers, adds them together, and outputs the final result.

// Approach:
// 1. Create a function named 'addNumbers' that accepts two parameters.
// 2. Inside the function, use the arithmetic addition operator (+) to add the numbers and return the value.
// 3. Declare a constant variable named 'result' to store the output of the function.
// 4. Call the function with two number arguments (e.g., 10 and 20) and assign it to the 'result' variable.
// 5. Use console.log() with template literals to print the final result.

// Code:
function addNumbers(a, b) {
  return a + b;
}

const result = addNumbers(10, 20);
console.log(`Result: ${result}`);

// Output:
// Result: 30

// What I Learned:
// - Functions: How to declare and call reusable blocks of code.
// - Parameters & Arguments: Passing data into functions (a, b) and receiving values (10, 20).
// - Return Statement: How to pass a value back from a function to where it was called.
// - Arithmetic Operators: Using the '+' operator for addition.
// - Template Literals: Using backticks (``) and ${} to embed variables directly into strings.