// Problem #30

// Problem Statement:
// Convert a string into a number data type with type validation.

// Requirements:
// Create an arrow function that verifies if the input is strictly a string. If not, return an error message; otherwise, convert it into a native number type.

// Approach:
// 1. Declare an ES6 arrow function named 'strToNum' that accepts a parameter 'str'.
// 2. Add Type Validation: Use the 'typeof' operator to ensure the input is a string. If it fails, return an early guard clause string.
// 3. Process Conversion: Use the global 'Number()' constructor inside a template literal to cast the validated string into a number.
// 4. Test with both valid (string) and invalid (numeric) data types to confirm robust error-handling.

// Code:
const strToNum = str => {
  if (typeof str !== "string") return "Enter a string only.";
  return `Type changed to Number: ${Number(str)}`;
};

console.log(strToNum("78.34"));
console.log(strToNum(78.34));

// Output:
// Type changed to Number: 78.34
// Enter a string only.

// What I Learned:
// - Reverse Type Casting: Leveraging the global 'Number()' constructor to parse string primitives into mathematical numerical types.
// - Defensive String Verification: Constructing explicit string-only validation boundaries before executing conversion routines.
// - Type Coercion Safety: Understanding how early returns prevent runtime logical mismatches in type management pipelines.