// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #34

// Problem Statement:
// Create a dynamic Power Calculator (Dual Implementation).

// Requirements:
// Create two dynamic arrow functions that accept both a base number and an exponent power, evaluating the total calculation using traditional and modern methods.

// Approach:
// 1. Version 1: Accept 'base' and 'exponent' as parameters, using 'Math.pow(base, exponent)'.
// 2. Version 2: Accept parameters and apply the modern exponentiation operator 'base ** exponent'.
// 3. Invoke both versions with sample arguments (e.g., base=2, exponent=3) to verify identical outputs.

// Code:
// V1: Traditional Approach
const powerCalculatorV1 = (base, exponent) => Math.pow(base, exponent);
console.log("Using Math.pow():", powerCalculatorV1(2, 3));

// V2: Modern ES6+ Shorthand
const powerCalculatorV2 = (base, exponent) => base ** exponent;
console.log("Using Exponentiation Operator:", powerCalculatorV2(2, 3));

// Output:
// Using Math.pow(): 8
// Using Exponentiation Operator: 8

// What I Learned:
// - Functional Dynamism: Moving from hardcoded operational bounds (like square/cube constants) to a multi-parameter layout handling highly flexible arguments.
// - Abstracted Operators: Deepening understanding of how core runtime engines process programmatic variables inside exponential structures.