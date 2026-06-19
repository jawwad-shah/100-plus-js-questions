// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #119

// Problem Statement:
// Implement a Prefix Sum array transformation mapping tool.

// Requirements:
// Create an advanced data structure calculation utility that parses a sequence of numbers, generates an accumulated prefix summation sequence array where each coordinate index represents the sum of all previous numbers inclusive, and handles the flow immutably.

// Approach:
// 1. Establish robust structural type safety validations to return an empty array literal `[]` early if input data parameters are non-iterable or falsy.
// 2. Map the technical standard naming convention explicitly onto the function token identifier (`prefixSum`).
// 3. Instantiate an internal local register parameter tracking variable to contain cumulative totals (`let trackingAccumulator = 0`).
// 4. Invoke the native performance-optimized high-order array engine method '.map()' to smoothly step through index layers.
// 5. On each iteration coordinate pass, compound the index integer onto the memory state via addition assignments (`trackingAccumulator += item`) to output a purified cumulative matrix.

// Code:
const prefixSum = (nums) => {
    if (!Array.isArray(nums) || nums.length === 0) return [];

    let trackingAccumulator = 0;

    // Direct linear pass map executing in strict O(N) Time Complexity
    return nums.map(item => trackingAccumulator += item);
};

// Running industrial production validation tracking flows matching dashboard analytic logs
const analyticsDataset = [1, 2, 3, 4];
console.log("Calculated Prefix Sum Stream Array:", prefixSum(analyticsDataset)); // Equivalent to Running Sum: [1, 3, 6, 10]

const highLoadBuffer = [10, -5, 20, 3, -8];
console.log("Calculated Prefix Sum Stream Array (Mixed Limits):", prefixSum(highLoadBuffer)); 

// Output:
// Calculated Prefix Sum Stream Array: [ 1, 3, 6, 10 ]
// Calculated Prefix Sum Stream Array (Mixed Limits): [ 10, 5, 25, 28, 20 ]

// What I Learned:
// - Concept Naming Conversions: Mastering how the industry terminology 'Prefix Sum' mirrors the functional 'Running Sum' configuration inside algorithmic database tracking architectures.
// - Immutable Matrix Traversal: Utilizing high-order single-pass loops to compute complex spatial math models without leaking reference memory footprints or mutating baseline dashboard variables.