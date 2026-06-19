// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #120

// Problem Statement:
// Implement a Sliding Window Sum utility to calculate the Maximum Subarray Sum of size 'k'.

// Requirements:
// Create an enterprise-grade performance algorithm that processes a continuous array dataset stream, scans consecutive linear intervals of size 'k', isolates the highest summation sequence value, and handles the operations in a strict $O(N)$ Time Complexity profile.

// Approach:
// 1. Establish strict safety constraints to return a defensive baseline `0` early if the baseline array is invalid, or if the size limit parameter 'k' breaks logical boundaries (`arr.length < k || k <= 0`).
// 2. Pre-compute the baseline sum matrix tracking points for the absolute first window instance using an initial linear iteration up to limit 'k'.
// 3. Slide the analytical window forward across the tracking matrix via a second single-pass linear loop starting directly from position index 'k'.
// 4. Update the running window value dynamically using the highly efficient constant time operational formula: `windowSum = windowSum - arr[i - k] + arr[i]`.
// 5. This avoids resource-heavy nested re-calculation spikes, computing updates instantly in constant $O(1)$ step intervals.
// 6. Leverage `Math.max()` directly to register the peak aggregate threshold before returning the final metric.

// Code:
function maxSubarraySum(arr, k) {
  if (!Array.isArray(arr) || arr.length < k || k <= 0) return 0;

  let maxSum = 0;
  let windowSum = 0;

  // Step 1: Initialize the tracking baseline footprint for the first 'k' element window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  // Step 2: Slide the processing window boundaries across the array length linearly
  for (let i = k; i < arr.length; i++) {
    // Drop the old leftmost element trailing behind the frame edge and compound the incoming node coordinate
    windowSum = windowSum - arr[i - k] + arr[i];

    // Locking the absolute winner state parameter configuration metrics
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

// Running industrial production validation tracking flows matching dashboard analytic logs
const dailyRevenue = [1, 3, 2, 6, -1, 4, 1, 8];
const windowSize = 3;

console.log(
  "Calculated Peak Window Sum Metrics:",
  maxSubarraySum(dailyRevenue, windowSize),
);
// Windows checked: [1,3,2]->6, [3,2,6]->11, [2,6,-1]->7, [6,-1,4]->9, [-1,4,1]->4, [4,1,8]->13. Max is 13.

const dynamicStockSignals = [100, 200, 300, 400];
console.log(
  "Calculated Peak Window Sum Metrics (High Balances):",
  maxSubarraySum(dynamicStockSignals, 2),
); // [300, 400] -> 700

// Output:
// Calculated Peak Window Sum Metrics: 13
// Calculated Peak Window Sum Metrics (High Balances): 700

// What I Learned:
// - Slidable Frame Computations ($O(1)$ Shifts): Mastering how caching the historical prefix memory balances completely eliminates structural nested looping vulnerabilities.
// - Algorithmic Envelope Control: Understanding the critical integration value of two-stage loop systems inside streaming dashboard pipelines to trace continuous time-series analytics like stock prices or revenue logs.
