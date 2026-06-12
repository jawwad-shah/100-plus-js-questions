// Problem #28

// Problem Statement:
// Convert days into hours.

// Requirements:
// Create an implicit return arrow function that accepts the number of days as a parameter, multiplies it by 24, and outputs the total hours.

// Approach:
// 1. Declare a concise ES6 arrow function named 'daysToHours' that accepts a single parameter 'days'.
// 2. Use implicit return logic to multiply 'days' by 24 (since 1 day = 24 hours).
// 3. Call the function with an argument (e.g., 4) and print the evaluated output using console.log().

// Code:
const daysToHours = days => days * 24;
console.log(daysToHours(4));

// Output:
// 96

// What I Learned:
// - Time-Constant Validation: Ensuring real-world constants (24 hours in a full day) are accurately represented in calculation factors.
// - Implicit Return Continuation: Utilizing streamlined arrow syntax to process baseline unit shifts efficiently.