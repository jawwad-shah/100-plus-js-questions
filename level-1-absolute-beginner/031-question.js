// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #31

// Problem Statement:
// Create a universal Type Checker utility.

// Requirements:
// Create a concise arrow function that accepts any dynamic data type as an input parameter and evaluates its native JavaScript type structure using operator evaluation.

// Approach:
// 1. Declare a single-line ES6 arrow function named 'checkType' that accepts an input variable 'data'.
// 2. Use implicit return logic to evaluate and return the primitive type string using the 'typeof' operator.
// 3. Invoke the function with different data variants (e.g., numbers and string literals) to display dynamic runtime evaluations.

// Code:
const checkType = data => typeof data;

console.log("The data type of the input is:", checkType(72));
console.log("The data type of the input is:", checkType("Jawwad Shah (JS)"));

// Output:
// The data type of the input is: number
// The data type of the input is: string

// What I Learned:
// - Dynamic Type Reflection: Utilizing the 'typeof' operator as a standalone modular utility to inspect runtime data models.
// - Implicit Metadata Retrieval: Writing clean helper functions that return system structural details (like data types) smoothly.