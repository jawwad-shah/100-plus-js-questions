// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #46

// Problem Statement:
// Calculate the N-th Fibonacci number using Tree Recursion.

// Requirements:
// Build an explicit recursive model that maps binary operational branches to resolve sum calculations for sequential elements inside the Fibonacci matrix.

// Approach:
// 1. Establish structural base constraints: if 'n <= 0' return 0, and if 'n === 1' return 1 to arrest recursion down-scaling.
// 2. For inputs greater than 1, break execution into a dual-branch tree structure, calculating both 'fibonacci(n - 2)' and 'fibonacci(n - 1)'.
// 3. Accumulate returned integers cascading upward from base nodes to evaluate the final contextual element value.

// Code:
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 2) + fibonacci(n - 1); // Cleaned 'else' redundancy since previous nodes trigger hard returns
}

console.log(fibonacci(8));

// Output:
// 21

// What I Learned:
// - Tree Recursion Overheads: Analyzing how split self-invocation statements spawn layered branching structures, impacting runtime time complexity ($O(2^n)$).
// - Base Case Architecture: Constructing strict boundary checkpoints to split cascading calculations safely without triggering endless execution loops.