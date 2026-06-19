// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #104

// Problem Statement:
// Filter and extract all strictly Negative Numbers from a numerical Array dataset.

// Requirements:
// Create an optimized mathematical filtering utility that evaluates an incoming array data stream, isolates numbers residing strictly below the zero baseline threshold on the number line, and constructs a fresh subset array tracking those items.

// Approach:
// 1. Establish defensive parameter checks to return an empty array literal `[]` early if the argument is null or non-iterable.
// 2. Rename tracking tokens to match standard code documentation guidelines precisely (`getNegativeNumbers`).
// 3. Invoke the high-order array '.filter()' operation block on the source dataset snapshot.
// 4. Implement a strict relational less-than evaluation comparison rule (`item < 0`).
// 5. This ensures that any integer containing a value below zero passes the conditional filter gate seamlessly, omitting neutral zero and positive numbers.

// Code:
const getNegativeNumbers = (array) => {
  if (!Array.isArray(array)) return [];

  // Isolating elements via strict less-than relational operators
  return array.filter((item) => item < 0);
};

// Running standard industrial production logging verification workflows
const mixNumPool = [1, 2, 3, 0, -1, -2];
console.log("Purified Negative Array Pool:", getNegativeNumbers(mixNumPool));

const complexBoundaryDataset = [-45.8, 102, -0, 0, -0.001, 89];
console.log("Purified Negative Array Pool:", getNegativeNumbers(complexBoundaryDataset)); // Testing floating points and boundaries

// Output:
// Purified Negative Array Pool: [ -1, -2 ]
// Purified Negative Array Pool: [ -45.8, -0.001 ]

// What I Learned:
// - Exact Threshold Mapping: Realizing that using the strict less-than token ('<') establishes a crisp numerical ceiling that filters out positive integers and neutral nodes naturally.
// - Clean Architectural Token Labeling: Recognizing the crucial importance of matching operational function names directly with problem statements to prevent developer confusion inside enterprise codebases.