// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #102

// Problem Statement:
// Filter and isolate all Odd Numbers from a numerical Array collection safely.

// Requirements:
// Create an optimized mathematical parsing utility that screens an integer dataset stream, handles both positive and negative mathematical boundaries, and extracts a fresh subset containing purely odd integers.

// Approach:
// 1. Establish strict structural data guard validations to return an empty array wrapper `[]` early if the incoming parameter is invalid.
// 2. Invoke the functional high-order engine operation method '.filter()' directly on the source dataset.
// 3. Instead of testing explicitly for a remainder of 1 (`item % 2 === 1`), apply the highly secure inequality condition check (`item % 2 !== 0`).
// 4. This ensures that any integer yielding a non-zero remainder—regardless of whether it evaluates to 1 or -1 inside the JavaScript runtime engine—is successfully preserved as an odd integer.

// Code:
const filterOddNumbers = (array) => {
  if (!Array.isArray(array)) return [];

  // Applying comprehensive arithmetic inequality rules to catch all odd variations safely
  return array.filter((item) => item % 2 !== 0);
};

// Running industrial production validation workflows matching code architecture test patterns
const positivePool = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Isolated Odd Number Array:", filterOddNumbers(positivePool));

const mixedSignPool = [-11, -4, 0, 7, 15, -23];
console.log("Isolated Odd Number Array (With Negatives):", filterOddNumbers(mixedSignPool));

// Output:
// Isolated Odd Number Array: [ 1, 3, 5, 7 ]
// Isolated Odd Number Array (With Negatives): [ -11, 7, 15, -23 ]

// What I Learned:
// - Remainder Polarity Variances: Recognizing that the JavaScript modulo engine preserves operational signs (yielding -1 for negative odd values), making inequality testing ('!== 0') the safest enterprise routing design pattern.
// - Pure Array Stream Filtration: Composing high-order callback parameters to partition integers cleanly in linear $O(N)$ runtime without causing reference leakage over the initial data source.