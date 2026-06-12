// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #35

// Problem Statement:
// Generate a Random Number between 1 and 100.

// Requirements:
// Create a core statement utilizing built-in mathematical functions to calculate a pseudo-random integer within a specified range boundary.

// Approach:
// 1. Generate a baseline fractional decimal value between 0 and 1 using 'Math.random()'.
// 2. Scale the random fractional boundary upwards by multiplying it by 100.
// 3. Drop the fractional remainder decimals using 'Math.floor()' to force a strict integer between 0 and 99.
// 4. Offset the entire zero-indexed baseline by adding 1 to secure a final range output between 1 and 100.

// Code:
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

// Output:
// (Any random integer value from 1 to 100, e.g., 42)

// What I Learned:
// - Randomization Mechanics: Understanding how JavaScript evaluates pseudo-random floating-point numbers using global methods.
// - Numeric Range Scaling: Transforming baseline statistical ranges (0-1) into concrete integer intervals (1-100) through targeted arithmetic shifting and floor truncation.