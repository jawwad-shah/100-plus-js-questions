// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #88

// Problem Statement:
// Sort a numeric Array in Ascending Order safely without modifying the original source.

// Requirements:
// Create an array organization utility that arranges numbers from lowest to highest, overrides default character string comparison behaviors inside the JavaScript engine, and preserves the unmutated state of the original dataset.

// Approach:
// 1. Establish an early validation safeguard to handle falsy inputs or empty array anomalies safely.
// 2. Clone the original array structure dynamically using the ES6 spread operator (`[...array]`) to block side-effect mutations.
// 3. Chain the native high-order '.sort()' engine onto the shallow clone.
// 4. Implement an explicit ascending numeric evaluation comparator rule (`(a, b) => a - b`):
//    - If the result is negative, 'a' is sorted before 'b'.
//    - If the result is positive, 'b' is sorted before 'a'.
//    - If zero, the positioning remains unchanged.

// Code:
const sortAscending = (array) => {
  if (!Array.isArray(array) || array.length === 0) return [];

  // Cloning memory reference pointers before triggering native engine-level sort cycles
  return [...array].sort((a, b) => a - b);
};

// Running production validation testing metrics
const numericalDataPool = [45, 21, 10, 67, 22];
console.log("Ordered Array (Ascending):", sortAscending(numericalDataPool));

// Validating that the source array timeline remains intact and clean
console.log("Original Array State Check:", numericalDataPool);

// Output:
// Ordered Array (Ascending): [ 10, 21, 22, 45, 67 ]
// Original Array State Check: [ 45, 21, 10, 67, 22 ]

// What I Learned:
// - Numeric Sorting Overrides: Understanding that native '.sort()' without parameters processes items as string points, which requires custom evaluation logic functions (`a - b`) to guarantee correct mathematical layouts.
// - Pure Functional Data Ingestion: Standardizing data cloning operations before invoking destructive layout transformations to keep application component state tracking clean.