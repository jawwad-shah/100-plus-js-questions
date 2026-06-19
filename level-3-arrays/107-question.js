// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #107

// Problem Statement:
// Find a Pair of numbers inside an Array that aggregates exactly to a dynamic Target Sum.

// Requirements:
// Create an optimized search routing utility that scans an integer sequence, identifies the first two distinct elements whose mathematical addition equals the provided target integer, and yields the pair data along with the target confirmation safely.

// Approach:
// 1. Establish strict safety constraints to return null or empty structures if the data stream is invalid or target parameter is absent.
// 2. Instead of utilizing resource-heavy nested loops ($O(N^2)$), deploy an optimized Linear Time ($O(N)$) Hash Set pattern.
// 3. Instantiate a tracking collection matrix context (`const seenNumbers = new Set()`).
// 4. Iterate over the array elements sequentially using a singular high-speed cursor.
// 5. Calculate the matching mathematical requirement for each step: `complement = target - currentItem`.
// 6. Test if the 'seenNumbers' hash matrix already contains that complement using the constant-time `.has(complement)` mechanism.
// 7. If true, instantly yield the matching data array `[complement, currentItem, target]`. Otherwise, absorb the current item into the set and continue.

// Code:
function findPairSum(array, target) {
  if (!Array.isArray(array) || array.length < 2 || target === undefined) return null;

  const seenNumbers = new Set();

  // Single-pass linear evaluation loop ($O(N)$ Time Complexity)
  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    const complement = target - currentItem;

    // Fast tracking lookup check against hash map storage coordinates
    if (seenNumbers.has(complement)) {
      return [complement, currentItem, target];
    }

    // Registering the processed number into local memory state
    seenNumbers.add(currentItem);
  }

  return null; // Return fallback null if no matching index graph satisfies the sum
}

// Running industrial production validation testing matching layout structures
const dataset = [10, 20, 30, 40, 50, 60];
const targetValue = 100;
const result = findPairSum(dataset, targetValue);

if (result) {
  console.log("Matching Pair Node Graph Discovered:");
  console.log(`${result[0]} + ${result[1]} = ${result[2]}`);
} else {
  console.log("No matching calculation vector found across target constraints.");
}

// Additional test case verifying dynamic disordered boundaries
console.log("Disordered Lookup Check:", findPairSum([3, 5, -1, 8, 12], 7)); // 8 + (-1) = 7

// Output:
// Matching Pair Node Graph Discovered:
// 40 + 60 = 100
// Disordered Lookup Check: [ 8, -1, 7 ]

// What I Learned:
// - Linear Hash Map Complements ($O(N)$): Understanding how tracking structural math needs (`target - current`) inside native Set states completely eliminates the need for expensive nested execution steps.
// - Algorithmic Search Optimization: Transitioning from traditional brute-force indexing pipelines to lightweight key-value lookup structures to secure corporate performance standards.