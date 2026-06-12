// Problem #6

// Problem Statement:
// Divide two numbers using a function and print the result.

// Requirements:
// Create a reusable function that takes two numbers, divides the first number by the second number, and returns the result.

// Approach:
// 1. Create a function named 'divideNumbers' that accepts two parameters (a, b).
// 2. Inside the function, use the arithmetic division operator (/) to divide 'a' by 'b' and return the quotient.
// 3. Declare a constant variable named 'result' to store the function's output.
// 4. Call the function by passing two numbers as arguments (2 and 5) and assign the returned value to 'result'.
// 5. Use console.log() to print the final output.

// Code:
function divideNumbers(a, b) {
    return a / b;
}

const result = divideNumbers(2, 5);
console.log(result);

// Output:
// 0.4

// What I Learned:
// - Division Operator (/): How to perform mathematical division in JavaScript.
// - Floating-Point Output: Understanding that JavaScript automatically handles decimal results without needing extra configuration.
// - Dynamic Reusability: Successfully mapping arguments to parameters for accurate calculations.