// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #32

// Problem Statement:
// Calculate the square of a number (Dual Implementation).

// Requirements:
// Create an optimization test showing both traditional built-in utility and modern ES6+ operators to compute exponential powers in a single codebase.

// Approach:
// 1. Version 1: Use the standard 'Math.pow(n, 2)' built-in method.
// 2. Version 2: Use the clean, modern exponentiation operator 'n ** 2'.
// 3. Print both results side-by-side to verify accuracy and syntax execution.

// Code:
// V1: Traditional Approach
const squareNumberV1 = n => Math.pow(n, 2);

// V2: Modern ES6+ Shorthand
const squareNumberV2 = n => n ** 2;

console.log("Using Math.pow():", squareNumberV1(6));
console.log("Using Exponentiation Operator:", squareNumberV2(6));

// Output:
// Using Math.pow(): 36
// Using Exponentiation Operator: 36

// What I Learned:
// - Comparative Syntax: Mapping the evolution of JavaScript from standard built-in objects ('Math.pow') to native mathematical symbols ('**').
// - Code Cleanliness: Implementing multiple structural approaches for a single logical problem to ensure comprehensive language knowledge.