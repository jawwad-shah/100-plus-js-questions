// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #87

// Problem Statement:
// Reverse the elements of an Array and format them into a continuous string sequence.

// Requirements:
// Create an array inversion utility that flips the alignment sequence of collection nodes, guards the structural integrity of the original array tracking layout, and compiles the reversed layout into a clean, comma-delimited string token.

// Approach:
// 1. Establish absolute validation constraints to return an empty string sequence if the input array is invalid.
// 2. Clone the incoming array layout safely using the ES6 spread operator (`[...array]`) to mitigate reference mutation side effects.
// 3. Chain the native '.reverse()' algorithm block onto the cloned copy to invert node positioning maps from back to front.
// 4. Implement '.join(", ")' to merge the flipped array pointers back into a clean string sequence separated by commas.

// Code:
const reverseArr = (array) => {
  if (!Array.isArray(array) || array.length === 0) return '';

  // Creating a memory reference clone using spread operators before executing mutation rules
  return [...array].reverse().join(', ');
};

// Running production validation testing metrics
const professionalProfiles = ['Hello World', 'Jawwad Shah', 'JS', 'JavaScript'];
console.log("Formatted Reversed Array:", reverseArr(professionalProfiles));

// Verifying original source array state safety
console.log("Original Array Verification (Unmutated):", professionalProfiles);

// Output:
// Formatted Reversed Array: JavaScript, JS, Jawwad Shah, Hello World
// Original Array Verification (Unmutated): [ 'Hello World', 'Jawwad Shah', 'JS', 'JavaScript' ]

// What I Learned:
// - Reference Mutation Prevention: Recognizing that high-order operations like native '.reverse()' alter array layouts straight inside the live memory heap, making cloning wrappers ('[...]') necessary to prevent breaking global data properties.
// - Delimited Array Serialization: Applying chain-linked array filters to convert flipped memory streams into highly readable UI notification strings via structural formatting flags ('.join()').