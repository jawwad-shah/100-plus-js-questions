// Problem #8

// Problem Statement:
// Create an Even and Odd number checker using a function.

// Requirements:
// Create a reusable function that takes a single number, checks if it is perfectly divisible by 2, and returns 'Even' or 'Odd'.

// Approach:
// 1. Create a function named 'evenOddChecker' that accepts one parameter (number).
// 2. Use the modulus operator (%) to check the remainder of the number when divided by 2.
// 3. Apply a conditional statement: If the remainder is strictly equal to 0, return the string 'Even'.
// 4. If the condition fails, use an early return to immediately return the string 'Odd'.
// 5. Call the function with an argument (e.g., 7), store it in a variable, and log the output.

// Code:
function evenOddChecker(number) {
    if ((number % 2) === 0) return 'Even';
    return 'Odd';
}

const result = evenOddChecker(7);
console.log(result);

// Output:
// Odd

// What I Learned:
// - Conditional Logic (if statement): How to execute specific blocks of code based on conditions.
// - Strict Equality (===): Comparing both value and data type in JavaScript for accurate results.
// - Early Return Pattern: Avoiding bulky 'else' blocks by returning a value immediately when a condition is met.
// - Mathematical Logic for Parity: Using 'number % 2 === 0' to identify even numbers.