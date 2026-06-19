// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #89

// Problem Statement:
// Sort a numeric Array in Descending Order safely using non-destructive memory wrappers.

// Requirements:
// Create an array formatting utility that organizes integers from highest to lowest, bypasses default browser string evaluation matrices, and encapsulates data arrays safely to avoid global data mutation side effects.

// Approach:
// 1. Establish strict parameter verification constraints to isolate and catch invalid array references early.
// 2. Clone the core dataset structure via the ES6 spread operator (`[...array]`) to decouple operational changes from the source memory heap.
// 3. Chain the native high-order '.sort()' layout system onto the shallow array snapshot copy.
// 4. Implement an explicit descending numeric comparator expression rule (`(a, b) => b - a`) to force larger integers to position on left boundary indexes.

// Code:
const sortDescending = (array) => {
  if (!Array.isArray(array) || array.length === 0) return [];

  // Sanitizing typo anomalies and performing non-destructive descending sorting safely
  return [...array].sort((a, b) => b - a);
};

// Running standard enterprise production logging validation workflows
const valuesPool = [45, 21, 10, 67, 22];
console.log("Ordered Array (Descending):", sortDescending(valuesPool));

// Ensuring the original input stream remains completely untouched and stable
console.log("Original Source State Check:", valuesPool);

// Output:
// Ordered Array (Descending): [ 67, 45, 22, 21, 10 ]
// Original Source State Check: [ 45, 21, 10, 67, 22 ]

// What I Learned:
// - Sort Polarity Reversals: Understanding how flipping the inline comparison logic from 'a - b' to 'b - a' targets structural weights dynamically to switch arrays into high-to-low numeric pipelines.
// - Clean Variable References: Realizing the vital importance of tracking keyboard typo injection vulnerabilities (like accidental 'AbortSignal' strings) to prevent unexpected system compilation collapses.