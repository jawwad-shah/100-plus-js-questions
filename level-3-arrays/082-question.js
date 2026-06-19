// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #82

// Problem Statement:
// Calculate the Average (Mean) of all numbers inside an Array.

// Requirements:
// Create a mathematical collection utility that processes an array of numerical integers, computes the total aggregate sum using high-order loops, and divides it dynamically by the collection size to evaluate the precise arithmetic mean.

// Approach:
// 1. Establish an structural guard clause to catch empty arrays or missing references, avoiding invalid '0 / 0' mathematical executions.
// 2. Invoke the native '.reduce()' method on the incoming array pool to compute the complete numerical accumulation target.
// 3. Immediately divide the total output sum by the dynamic length property ('array.length') of the target source collection.
// 4. Return the final division outcome as a precise float or integer coordinate.

// Code:
const calculateArrayAverage = (array) => {
    // Structural guard clause protecting against division-by-zero anomalies
    if (!Array.isArray(array) || array.length === 0) return 0;

    // Aggregating elements and scaling down by array dimensions inline
    return array.reduce((accumulator, current) => accumulator + current, 0) / array.length;
};

// Running portfolio test metrics matching real-world dataset computations
const numericDataset = [1, 2, 7, 3, 5, 6];
console.log("Calculated Average Metric:", calculateArrayAverage(numericDataset));
console.log("Calculated Average Metric:", calculateArrayAverage([])); // Empty cluster validation check

// Output:
// Calculated Average Metric: 4
// Calculated Average Metric: 0

// What I Learned:
// - Direct Mathematical Compacting: Streamlining multiple calculation processes (sum reduction and length division) directly within a single operational arrow block.
// - Zero-Division Fail-Safes: Managing database empty cluster vulnerabilities early by deploying length gates to intercept potential runtime 'NaN' computational states.