// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #43

// Problem Statement:
// Print Odd Numbers up to a specified limit.

// Requirements:
// Construct an iteration system that executes a dynamic limit test, evaluating numbers using remainder constraints to extract and print odd mathematical values.

// Approach:
// 1. Declare an ES6 arrow function named 'printOddNumbers' that accepts a dynamic boundary parameter 'limit'.
// 2. Set up a standard 'for' loop initializing 'i' at 0, terminating inclusive at 'i <= limit'.
// 3. Implement a conditional evaluation check: 'i % 2 === 1' to isolate values that leave a remainder of 1 when divided by 2.
// 4. Stream the positive odd results to the console with structured logging.

// Code:
const printOddNumbers = (limit) => {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 1) {
      console.log("Odd Found:", i);
    }
  }
};

printOddNumbers(30);

// Output:
// Odd Found: 1
// Odd Found: 3
// Odd Found: 5
// ...
// Odd Found: 29

// What I Learned:
// - Odd Parity Extraction: Using explicit remainder checks ('=== 1') to single out non-divisible binary states across sequential index datasets.
// - Algorithmic Replicability: Applying previously mastered loop structures and tweaking core conditional states to solve completely opposite functional requirements.