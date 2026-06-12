// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #40

// Problem Statement:
// Generate a Multiplication Table for a given number.

// Requirements:
// Create a reusable function that utilizes a deterministic 'for' loop to iterate from 1 to 10, computing and displaying a standardized multiplication sequence.

// Approach:
// 1. Declare a modern ES6 arrow function named 'multiplicationTable' that accepts a dynamic multiplier integer 'n'.
// 2. Implement a standard 'for' loop initializing an iterator 'i' at 1, running with an inclusive upper bound condition of 'i <= 10', and incrementing by 1 on each step.
// 3. Inside the loop block, use string interpolation (template literals) to format and output the calculation layout dynamically.
// 4. Invoke the function directly using an argument (e.g., 2) to execute the matrix generation cleanly without printing an undefined evaluation return.

// Code:
const multiplicationTable = n => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
};

multiplicationTable(2);

// Output:
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18
// 2 x 10 = 20

// What I Learned:
// - Deterministic Loop Iteration: Structuring rigid linear data loops using standardized boundary conditions to execute a exact block count.
// - Clean Side-Effect Execution: Executing terminal mutations (logging logs) directly via functional invocations instead of triggering empty or void functional returns.