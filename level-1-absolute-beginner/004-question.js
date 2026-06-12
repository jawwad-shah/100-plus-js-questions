// Problem #4

// Problem Statement:
// Subtract one number from another using a function and print the result.

// Requirements:
// Create a reusable function that takes two numbers, subtracts the second number from the first, and outputs the final result.

// Approach:
// 1. Create a function named 'subtractNumber' that accepts two parameters (a, b).
// 2. Inside the function, use the arithmetic subtraction operator (-) to subtract 'b' from 'a' and return the result.
// 3. Declare a constant variable named 'result' to store the output of the function.
// 4. Call the function by passing two number arguments (10 and 20) and assign the returned value to the 'result' variable.
// 5. Use console.log() to print the final result.

// Code:
function subtractNumber(a, b) {
    return a - b;
}

const result = subtractNumber(10, 20);
console.log(result);

// Output:
// -10

// What I Learned:
// - Function Declaration & Invocation: How to properly define a function and execute it with arguments.
// - Parameter Handling: Passing multiple inputs (a, b) into a function block.
// - Subtraction Operator (-): Utilizing arithmetic operators to perform mathematical subtraction.
// - Negative Return Values: Understanding how JavaScript handles operations that result in negative numbers.