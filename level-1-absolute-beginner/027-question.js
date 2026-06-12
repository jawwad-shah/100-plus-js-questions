// Problem #27

// Problem Statement:
// Convert hours into minutes.

// Requirements:
// Create an implicit return arrow function that accepts hours as a parameter, multiplies it by 60, and outputs the total minutes.

// Approach:
// 1. Declare a concise ES6 arrow function named 'hourToMin' that accepts a single parameter 'hour'.
// 2. Use implicit return logic to multiply 'hour' by 60 (since 1 hour = 60 minutes).
// 3. Call the function with an argument (e.g., 2) and print the evaluated output using console.log().

// Code:
const hourToMin = hour => hour * 60;
console.log(hourToMin(2));

// Output:
// 120

// What I Learned:
// - Shorthand Syntax Mastery: Reinforcing the use of single-parameter ES6 arrow functions without parentheses or explicit brackets.
// - Mathematical Scaling: Translating basic hourly units into micro-time dimensions (minutes) programmatically.