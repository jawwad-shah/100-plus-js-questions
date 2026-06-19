// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #101

// Problem Statement:
// Filter and extract all Even Numbers from a numerical Array collection.

// Requirements:
// Create an optimized mathematical filtering utility that parses an integer dataset stream, evaluates the structural divisibility constraints of each discrete coordinate entry, and extracts a new array sequence tracking purely even integers.

// Approach:
// 1. Establish structural guard conditions to return a clean empty array container `[]` early if the parameter input is invalid.
// 2. Invoke the functional high-order engine array method '.filter()' directly on the target collection snapshot data source.
// 3. Implement an inline comparison callback rule utilizing the remainder modulo operator (`item % 2 === 0`).
// 4. This explicitly tests if dividing the integer entry by 2 yields a clean zero residue, letting matching even integers pass into the output matrix seamlessly in linear $O(N)$ runtime.

// Code:
const filterEvenNumbers = (array) => {
  if (!Array.isArray(array)) return [];

  // Filtering data nodes via precise arithmetic equality criteria
  return array.filter((item) => item % 2 === 0);
};

// Running enterprise manufacturing production test logs matching analytics dashboard schemas
const continuousPool = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Purified Even Number Array:", filterEvenNumbers(continuousPool));

const mixedNegativePool = [-10, 15, 22, 33, -44, 0];
console.log("Purified Even Number Array:", filterEvenNumbers(mixedNegativePool)); // Edge-case verification containing 0 and negatives

// Output:
// Purified Even Number Array: [ 2, 4, 6, 8 ]
// Purified Even Number Array: [ -10, 22, -44, 0 ]

// What I Learned:
// - Exact Modulo Division Rules: Verifying how linking strict equality comparison flags ('===') together with modulo components ('%') filters arithmetic values safely without data leakage.
// - Non-Destructive Filtering Routines: Building clean component state tracking pipelines that slice out desired numbers while leaving initial master arrays completely intact.