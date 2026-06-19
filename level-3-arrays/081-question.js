// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #81

// Problem Statement:
// Calculate the Sum of all numbers in an Array using Functional Reducers.

// Requirements:
// Build an optimization utility that takes an array of numeric data items and aggregates them into a single comprehensive total using functional programming paradigms.

// Approach:
// 1. Enforce safety checks to ensure the array exists and contains elements.
// 2. Invoke the high-order array '.reduce()' method to loop through the value collection.
// 3. Assign two clear parameter tags to the callback signature: 'accumulator' (acc) to store the ongoing running tally, and 'current' (curr) to reference the active iteration element.
// 4. Return the combined arithmetic expression (`acc + curr`) continuously on every loop interval.

// Code:
function computeArraySum(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) return 0;

    // Streamlined functional execution array accumulator loop
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

// Running structural verification metrics
const numericDataset = [1, 2, 3, 5, 7];
console.log("Calculated Total Sum:", computeArraySum(numericDataset));
console.log("Calculated Total Sum:", computeArraySum([])); // Empty boundary array check

// Output:
// Calculated Total Sum: 18
// Calculated Total Sum: 0

// What I Learned:
// - Reducer Callback Isolation: Understanding that high-order operations like '.reduce()' require distinctive variable names for the accumulator and current state slots to prevent reference collisions.
// - Defensive Array Fallbacks: Configuring baseline initial seed metrics (setting the second parameter of reduce to '0') to ensure empty datasets resolve smoothly without system crashes.