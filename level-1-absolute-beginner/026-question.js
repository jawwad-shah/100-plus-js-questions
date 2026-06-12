// Problem #26

// Problem Statement:
// Convert minutes into seconds.

// Requirements:
// Create an implicit return arrow function that accepts minutes as a parameter, multiplies it by 60, and outputs the total seconds.

// Approach:
// 1. Declare a concise ES6 arrow function named 'minToSec' that accepts a single parameter 'min'.
// 2. Use implicit return logic to multiply 'min' by 60 (since 1 minute = 60 seconds).
// 3. Call the function with an argument (e.g., 10) and print the evaluated output using console.log().

// Code:
const minToSec = min => min * 60;
console.log(minToSec(10));

// Output:
// 600

// What I Learned:
// - ES6 Arrow Functions: Writing compact, single-line functions using implicit returns without curly braces or the 'return' keyword.
// - Time Unit Conversion: Applying basic time-scaling logic (Minutes to Seconds) cleanly within shorthand syntax.