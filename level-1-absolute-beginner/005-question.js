// Problem #5

// Problem Statement:
// Multiply two numbers using a function and print the result.

// Requirements:
// Create a reusable function that takes two numbers as inputs, multiplies them, and returns the product.

// Approach:
// 1. Create a function named 'multiplyNumbers' that accepts two parameters (a, b).
// 2. Inside the function, use the arithmetic multiplication operator (*) to multiply 'a' by 'b' and return the result.
// 3. Declare a constant variable named 'result' to store the function's output.
// 4. Call the function by passing two specific numbers as arguments (e.g., 2 and 5) and assign the value to 'result'.
// 5. Use console.log() to print the final product.

// Code:
function multiplyNumbers(a, b) {
    return a * b;
}

const result = multiplyNumbers(2, 5);
console.log(result);

// Output:
// 10

// What I Learned:
// - Multiplication Operator (*): How to use the asterisk symbol for mathematical multiplication.
// - Dynamic Functions: Avoiding hardcoded values inside functions to make them reusable for any numbers.
// - Passing Arguments: Remembering to provide actual values when calling a function that expects parameters.