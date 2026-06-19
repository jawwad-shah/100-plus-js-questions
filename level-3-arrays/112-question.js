// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #112

// Problem Statement:
// Move all Zeros to the End of an Array in-place while preserving the relative order of elements.

// Requirements:
// Create a memory-optimized data re-arrangement utility that parses an integer stream, shuffles all instances of neutral zeros straight to the final boundaries of the collection matrix, and processes the transformations entirely in-place without generating heavy memory clones.

// Approach:
// 1. Establish strict safety constraints to return an empty array literal `[]` early if input collections are falsy.
// 2. Instantiate a slow-moving tracking cursor pointer (`let nonZeroIndex = 0`) to mark the landing slots for non-zero integers.
// 3. Initiate a fast-moving pointer iterator loop (`i`) to scan the full span of the structural array list.
// 4. Implement an explicit validation constraint threshold (`if (array[i] !== 0)`).
// 5. When a non-zero element is caught, perform an immediate structural temporary value swap between the positions `array[i]` and `array[nonZeroIndex]`.
// 6. Increment the slow cursor pointer (`nonZeroIndex++`) incrementally to process the entire array layout stream in $O(N)$ runtime and $O(1)$ Space.

// Code:
function moveZeroEnd(array) {
  if (!Array.isArray(array) || array.length === 0) return [];

  let nonZeroIndex = 0;

  // Linear tracking execution using the Two-Pointer optimization pattern
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      // Executing clean in-place index mutation
      let temp = array[i];
      array[i] = array[nonZeroIndex];
      array[nonZeroIndex] = temp;

      nonZeroIndex++;
    }
  }

  return array;
}

// Running industrial production validation testing matching data dashboard schemas
const resourceBuffer = [10, 1, 0, 0, 1, 0];
console.log("Optimized Sequence Output Array:", moveZeroEnd(resourceBuffer));

const systemDataLogs = [0, 5, 0, 12, -3, 0, 89];
console.log("Optimized Sequence Output Array:", moveZeroEnd(systemDataLogs)); // Testing negative values and starting zeros

// Output:
// Optimized Sequence Output Array: [ 10, 1, 1, 0, 0, 0 ]
// Optimized Sequence Output Array: [ 5, 12, -3, 89, 0, 0, 0 ]

// What I Learned:
// - Two-Pointer Mutative In-Place Shifting: Understanding how pairing a stagnant placeholder index alongside an active loop scanner re-structures data queues cleanly without drawing additional memory buffers.
// - Auxiliary Space Suppression ($O(1)$): Realizing that swapping variable blocks inside initial array parameters preserves runtime hardware limits, matching elite corporate architecture protocols.
