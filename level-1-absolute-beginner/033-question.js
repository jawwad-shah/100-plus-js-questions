// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #33

// Problem Statement:
// Calculate the cube of a number (Dual Implementation).

// Requirements:
// Create an optimization workflow utilizing both the legacy global math object and modern ES6+ operators to compute third-degree exponential powers.

// Approach:
// 1. Version 1: Use the native 'Math.pow(n, 3)' method.
// 2. Version 2: Use the modern exponentiation operator 'n ** 3'.
// 3. Print both outputs to verify identical runtime evaluation.

// Code:
// V1: Traditional Approach
const cubeNumberV1 = n => Math.pow(n, 3);

// V2: Modern ES6+ Shorthand
const cubeNumberV2 = n => n ** 3;

console.log("Using Math.pow():", cubeNumberV1(9));
console.log("Using Exponentiation Operator:", cubeNumberV2(9));

// Output:
// Using Math.pow(): 729
// Using Exponentiation Operator: 729

// What I Learned:
// - Exponential Scaling: Transitioning from square scaling (power of 2) to cubic scaling (power of 3) using identical structural patterns.
// - Core Reusability: Reapplying the dual-version testing model cleanly across different algebraic operations.