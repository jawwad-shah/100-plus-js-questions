// Problem #29

// Problem Statement:
// Convert a number into a string data type with type validation.

// Requirements:
// Create a function that checks if the input is strictly a number. If not, return an error message; otherwise, convert it into a string using template literals.

// Approach:
// 1. Declare an ES6 arrow function named 'numToStr' that accepts a parameter 'n'.
// 2. Add Type Validation: Use the 'typeof' operator to check if 'n' is not a number. If true, return a friendly warning string.
// 3. Process Conversion: If validation passes, use a template literal alongside '.toString()' to return the formatted string.
// 4. Test with both invalid (string) and valid (number) arguments to observe the robust control flow.

// Code:
const numToStr = n => {
  if (typeof n !== "number") return "Enter a number only.";
  return `Type changed to string: ${n.toString()}`;
};

console.log(numToStr("78.34"));
console.log(numToStr(78.34));

// Output:
// Enter a number only.
// Type changed to string: 78.34

// What I Learned:
// - Defensive Type Checking: Utilizing the 'typeof' operator to explicitly filter out improper data types before executing core functionality.
// - Robust Conditional Returns: Implementing early guard clauses to handle improper runtime parameters cleanly.
// - String Interpolation: Combining template literals with explicit '.toString()' casting to produce rich, readable outputs.