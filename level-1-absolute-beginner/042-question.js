// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #42

// Problem Statement:
// Print Even Numbers up to a specified limit.

// Requirements:
// Create an arrow function that loops from a starting baseline up to a dynamic boundary limit, filtering and printing only the even integers.

// Approach:
// 1. Declare an ES6 arrow function named 'printEvenNumbers' that accepts a parameter 'limit'.
// 2. Run a 'for' loop initializing 'i' at 0, tracking until it hits 'i <= limit'.
// 3. Apply a strict condition inside the loop using the remainder operator: 'i % 2 === 0' (fixed syntax typo).
// 4. Log the positive evaluation string along with the current even integer state.

// Code:
const printEvenNumbers = limit => {
    for (let i = 0; i <= limit; i++) {
        // Fixed the comparison operator syntax from '==- 0' to '=== 0'
        if (i % 2 === 0) {
            console.log('Even found:', i);
        }
    }
};

printEvenNumbers(30);

// Output:
// Even found: 0
// Even found: 2
// Even found: 4
// ...
// Even found: 30

// What I Learned:
// - Comparison Operator Precision: Recognizing that syntax typos inside logical evaluations (like '==-' instead of '===') crash the runtime engine parser.
// - Iterative Stream Filtering: Embedding mathematical conditional layers directly inside loop iterations to dynamically extract targeted dataset components.