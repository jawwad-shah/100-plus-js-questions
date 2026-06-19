// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #113

// Problem Statement:
// Move all Zeros to the Start of an Array in-place while preserving the initial sequence order of non-zero elements.

// Requirements:
// Create a memory-optimized data processing utility that evaluates an integer matrix queue, flushes all neutral zero elements down to the starting indices of the track layout, and handles the operation in reverse order with zero external helper objects.

// Approach:
// 1. Establish structural fallback guards to return an empty array snapshot `[]` early if input data channels are invalid or null.
// 2. Instantiate a right-bound slow cursor tracking pointer (`let nonZeroIndex = array.length - 1`) to mark placement slots for non-zero integers from the back.
// 3. Initiate an inverted structural loop counter (`let i = array.length - 1; i >= 0; i--`) scanning elements from the absolute tail edge towards the front.
// 4. Deploy an exact numeric check constraint parameter (`if (array[i] !== 0)`).
// 5. When a valid integer is captured, execute an immediate inline swap between the indices `array[i]` and `array[nonZeroIndex]`, then decrement the pointer target (`nonZeroIndex--`).
// 6. This natively floats all zeros to the left side in $O(N)$ runtime complexity and $O(1)$ auxiliary storage footprint.

// Code:
function moveZerosStart(array) {
  if (!Array.isArray(array) || array.length === 0) return [];

  let nonZeroIndex = array.length - 1;

  // Running high-speed backward scan tracking elements in-place safely
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] !== 0) {
      // Processing destructive swap assignment using structural references
      let temp = array[i];
      array[i] = array[nonZeroIndex];
      array[nonZeroIndex] = temp;

      nonZeroIndex--;
    }
  }

  return array;
}

// Running industrial production validation testing matching layout dashboards
const sequenceBuffer = [10, 0, 90, 0, 80, 90, 0];
console.log(
  "Rearranged Head Zero Layout Matrix:",
  moveZerosStart(sequenceBuffer),
);

const hardwareStateLogs = [0, -5, 12, 0, 0, 43, -1];
console.log(
  "Rearranged Head Zero Layout Matrix:",
  moveZerosStart(hardwareStateLogs),
); // Verifying mixed signs and trailing positions

// Output:
// Rearranged Head Zero Layout Matrix: [ 0, 0, 0, 10, 90, 80, 90 ]
// Rearranged Head Zero Layout Matrix: [ 0, 0, 0, -5, 12, 43, -1 ]

// What I Learned:
// - Backward In-Place Pointer Adjustments: Mastering how running inverted iteration sequences enables programmers to alter arrays towards opposite boundaries elegantly without flipping elements or losing sequence history.
// - Hardware Micro-Optimization ($O(1)$ Space): Reviewing how standard linear element swaps eliminate auxiliary tracking layers, making execution speed drastically faster for large dataset streams.
