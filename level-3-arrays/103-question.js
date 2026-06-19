// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #103

// Problem Statement:
// Filter and extract all strictly Positive Numbers from a numerical Array dataset.

// Requirements:
// Create an optimized mathematical filtering utility that evaluates a dataset stream, isolates integers residing strictly above the zero baseline threshold on the number line, and outputs them into a separate clean collection.

// Approach:
// 1. Establish defensive validation controls to return an empty array literal `[]` if the input parameter is non-iterable or faulty.
// 2. Invoke the modern functional high-order engine array method '.filter()' on the target array instance copy.
// 3. Implement an explicit relational expression evaluation rule (`item > 0`).
// 4. This ensures that only values strictly greater than zero pass into the resulting array layout, automatically keeping negative numbers and the neutral zero element out.

// Code:
const positiveNumbers = (array) => {
  if (!Array.isArray(array)) return [];

  // Filtering integers via strict greater-than threshold boundaries
  return array.filter((item) => item > 0);
};

// Running standard production logging verification workflows
const mixedIntegerPool = [1, 2, 3, 0, -1, -2];
console.log("Purified Positive Array Pool:", positiveNumbers(mixedIntegerPool));

const floatAndNegativeDataset = [-15.5, 42, 0.25, -0, -99, 7];
console.log("Purified Positive Array Pool:", positiveNumbers(floatAndNegativeDataset)); // Testing decimals, negative zero, and large limits

// Output:
// Purified Positive Array Pool: [ 1, 2, 3 ]
// Purified Positive Array Pool: [ 42, 0.25, 7 ]

// What I Learned:
// - Strict Boundary Exclusions: Recognizing that using the strict relational greater-than token ('>') establishes an exact conditional floor that excludes neutral elements like zero natively.
// - Immutable Memory Pipeline Chains: Composing optimized conditional filter pipelines to derive specialized numerical sub-matrices safely without modifying the state tracking history of the master array.