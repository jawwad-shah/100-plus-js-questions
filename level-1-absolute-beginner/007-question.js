// Problem #7

// Problem Statement:
// Find the remainder of two numbers using a function and print the result.

// Requirements:
// Create a reusable function that takes two numbers, performs a modulus operation, and returns the remainder.

// Approach:
// 1. Create a function named 'remainder' that accepts two parameters (a, b).
// 2. Inside the function, use the arithmetic modulus operator (%) to find the remainder when 'a' is divided by 'b'.
// 3. Declare a constant variable named 'result' to store the function's output.
// 4. Call the function by passing 10 and 3 as arguments (where 3 goes into 10 three times, leaving a remainder of 1).
// 5. Use console.log() to print the final remainder.

// Code:
function remainder(a, b) {
    return a % b;
}

const result = remainder(10, 3);
console.log(result);

// Output:
// 1

// What I Learned:
// - Modulus Operator (%): How to extract the leftover/remainder value of a division operation in JavaScript.
// - Practical Modulus Logic: Understanding how numbers like 10 and 3 divide and leave a clean remainder.