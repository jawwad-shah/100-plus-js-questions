// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #118

// Problem Statement:
// Calculate the Running Sum (Cumulative Prefix Sum) of a linear numerical Array sequence.

// Requirements:
// Create an optimized accumulation mathematical utility that takes an integer dataset stream, continuously compounds the rolling summation index coordinates, and maps them directly into an identical length output matrix snapshot.

// Approach:
// 1. Establish strict parameter verification guards to instantly return an empty container literal `[]` if incoming inputs are faulty or empty.
// 2. Leverage the functional high-order array engine method '.map()' to perform an immutable data transformation sequence.
// 3. Keep an isolated external tracker state register variable (`let cumulativeSum = 0`).
// 4. On each item iteration pass, compound the scalar values onto the accumulator buffer inline via the addition assignment operator (`cumulativeSum += num`), letting the map method natively collect the state transitions in linear $O(N)$ execution runtime.

// Code:
const runningSumOptimized = (nums) => {
    if (!Array.isArray(nums) || nums.length === 0) return [];

    let cumulativeSum = 0;
    
    // Compounding numeric state indices into an immutable resulting snapshot data stream
    return nums.map(num => cumulativeSum += num);
};

// Running industrial production validation tracking flows matching dashboard analytical logs
const standardPool = [1, 2, 3, 4];
console.log("Calculated Rolling Summary Sequence:", runningSumOptimized(standardPool)); 

const financialLedgerLogs = [3, 1, 2, 10, 1];
console.log("Calculated Rolling Summary Sequence:", runningSumOptimized(financialLedgerLogs));

const negativeBoundaryPool = [-5, 10, -2, 4, 0];
console.log("Calculated Rolling Summary Sequence (With Negatives):", runningSumOptimized(negativeBoundaryPool)); // Testing signed integers variance

// Output:
// Calculated Rolling Summary Sequence: [ 1, 3, 6, 10 ]
// Calculated Rolling Summary Sequence: [ 3, 4, 6, 16, 17 ]
// Calculated Rolling Summary Sequence (With Negatives): [ -5, 5, 3, 7, 7 ]

// What I Learned:
// - Functional Accumulator Interception: Mastering how to map local state variables ('cumulativeSum') straight through functional callbacks like '.map()' to capture array transitions cleanly without side-effect leaks.
// - Cumulative Pipeline Scaling: Understanding the performance value of single-pass linear maps in updating live telemetry charts and streaming transactional counters smoothly inside full-stack dashboard layouts.