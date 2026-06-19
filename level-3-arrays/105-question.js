// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #105

// Problem Statement:
// Calculate the Sum of all elements inside an Array that are strictly Greater than a target value 'X'.

// Requirements:
// Create an optimization accumulation utility that parses an integer collection dataset, compares each entry node against a dynamic threshold baseline barrier 'X', isolates matching higher integers, and returns their collective summation metrics.

// Approach:
// 1. Establish strict safety fallback parameters to return a sum of 0 instantly if the array parameter is invalid or empty.
// 2. Instantiate a local accumulator variable mapping context (`let sum = 0`).
// 3. Initiate a traditional standard high-speed imperative loop mapping over the index points of the array reference.
// 4. Implement a clean strict conditional threshold evaluation step (`if (array[i] > X)`).
// 5. If the individual integer entry breaks above the 'X' baseline boundary, accumulate its value onto the total sum buffer, then yield the final calculated result.

// Code:
const sumGreaterThanX = (array, X) => {
  if (!Array.isArray(array) || array.length === 0) return 0;
  
  let sum = 0;

  // Running a linear step iteration cursor across dataset limits
  for (let i = 0; i < array.length; i++) {
    if (array[i] > X) {
      sum += array[i];
    }
  }

  return sum;
};

// Running standard production logging verification workflows matching grid patterns
const metricsPool = [10, 20, 30];
console.log("Calculated Sum Aggregation:", sumGreaterThanX(metricsPool, 7)); // Elements > 7: 10 + 20 + 30 = 60

const complexMixedPool = [5, 12, 1, 8, 20, 3];
console.log("Calculated Sum Aggregation:", sumGreaterThanX(complexMixedPool, 10)); // Elements > 10: 12 + 20 = 32

// Output:
// Calculated Sum Aggregation: 60
// Calculated Sum Aggregation: 32

// What I Learned:
// - Conditional Accumulator Routing: Understanding how to create a guarded calculation boundary that selectively absorbs scalar integers while bypassing non-matching index numbers on the line graph.
// - Parameter Threshold Screening: Realizing that utilizing dynamic limits (`X`) instead of hardcoded numbers scales utility code efficiently across enterprise data pipelines.