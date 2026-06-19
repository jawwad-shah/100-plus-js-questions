// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #94

// Problem Statement:
// Rotate an Array to the right by 'k' dynamic positional steps.

// Requirements:
// Create an optimization cyclic routing utility that shifts elements of an array to the right by a specified step variable 'k', optimizes step counts larger than the target array matrix using modular mathematics, and maps out the newly adjusted positioning array cleanly.

// Approach:
// 1. Establish structural fallback rules to return the array instantly if empty or containing a single element.
// 2. Normalize the rotation steps using the remainder modulo operator (`k = k % arr.length`). This shields the code from heavy performance degradation when 'k' scales infinitely.
// 3. To maintain non-destructive data immutability, apply structural slices instead of resource-heavy imperative loops:
//    - Extract the ending nodes that will wrap around using `.slice(-k)`.
//    - Extract the balance front nodes using `.slice(0, -k)`.
//    - Combine them sequentially using the ES6 spread operator (`[...]`).

// Code:
function rotateArrayRight(arr, k) {
    if (!Array.isArray(arr) || arr.length <= 1) return arr;
    
    // Normalizing steps to keep computation constraints within bounds
    const shiftSteps = k % arr.length; 
    if (shiftSteps === 0) return [...arr];

    // Slicing the target sections cleanly without running mutative loops
    return [
        ...arr.slice(-shiftSteps), 
        ...arr.slice(0, -shiftSteps)
    ];
}

// Running production validation testing workflows matching enterprise pipelines
const layoutData = [1, 2, 3, 4, 5];
console.log("Cyclic Rotated Array:", rotateArrayRight(layoutData, 2)); // Shift steps: 2
console.log("Cyclic Rotated Array:", rotateArrayRight(layoutData, 12)); // Large step check: 12 % 5 = 2 steps

// Ensuring original source timeline architecture remains pure
console.log("Original Source Architecture Check:", layoutData);

// Output:
// Cyclic Rotated Array: [ 4, 5, 1, 2, 3 ]
// Cyclic Rotated Array: [ 4, 5, 1, 2, 3 ]
// Original Source Architecture Check: [ 1, 2, 3, 4, 5 ]

// What I Learned:
// - Modulo Scaling Optimizations: Understanding how the remainder operator (`%`) cuts down execution loops by wrapping infinite cyclic counts straight into relative bounds.
// - Complex Slice Point Extraction: Utilizing positive and negative parameter boundaries on `.slice()` to split, shift, and re-compile data indices without triggering structural side effects.