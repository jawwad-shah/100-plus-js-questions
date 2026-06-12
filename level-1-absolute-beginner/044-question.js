// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #44

// Problem Statement:
// Calculate the cumulative sum of numbers from 1 to 100 (Dual Approach).

// Requirements:
// Implement two strategies—an iterative loop strategy and a constant-time mathematical formula—to compute the total sum of a sequential integer series.

// Approach:
// 1. Version 1 (Iterative): Initialize a tracking variable 'sum' at 0, run a linear loop up to 100, and compound each index onto the tracker.
// 2. Version 2 (Formula): Apply Gauss's summation equation: n * (n + 1) / 2 to instantly resolve the sum without iteration overhead.

// Code:
// V1: Loop Iteration Method - O(n) Time Complexity
const sumUsingLoop = () => {
    let total = 0;
    for (let i = 1; i <= 100; i++) {
        total += i;
    }
    return total;
};

// V2: Mathematical Formula Method - O(1) Time Complexity
const sumUsingFormula = (n) => (n * (n + 1)) / 2;

console.log("Result using Linear Loop:", sumUsingLoop());
console.log("Result using Gauss Formula:", sumUsingFormula(100));

// Output:
// Result using Linear Loop: 5050
// Result using Gauss Formula: 5050

// What I Learned:
// - Accumulator Pattern: Managing local mutating states ('total += i') inside synchronous execution contexts to accumulate computed streams.
// - Algorithmic Optimization: Comparing iterative runtime structures (O(n)) against instant algebraic formulas (O(1)) to write performance-first code modules.