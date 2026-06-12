// Problem #14

// Problem Statement:
// Create a Leap Year checker using a function.

// Requirements:
// Create a reusable function that takes a year as an input and returns whether it is a leap year or a normal year based on mathematical rules.

// Approach:
// A year is a leap year if it is divisible by 4, but century years (ending in 00) must also be divisible by 400 and not just 100.
// 1. Create a function named 'leapYear' that accepts a 'year' parameter.
// 2. Inside the 'if' condition, check:
//    - If 'year % 4 === 0' AND 'year % 100 !== 0' (It's a regular leap year).
//    - OR if 'year % 400 === 0' (It's a century leap year).
// 3. Return the appropriate string using template literals.
// 4. Call the function with a year (e.g., 2024) and log the output.

// Code:
function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a leap year`;
    }
    return `${year} is not a leap year`;
}

const result = leapYear(2026);
console.log(result);

// Output:
// 2024 is a leap year

// What I Learned:
// - Complex Conditional Logic: Combining Logical AND (&&) and Logical OR (||) operators to solve multi-layered problems.
// - Strict Inequality (!==): Checking if a value is NOT equal to another value.
// - Real-World Edge Cases: Understanding that some problems (like calendar tracking) have specific historical rules that require nested or precise conditions.