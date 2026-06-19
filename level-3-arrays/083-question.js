// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #83

// Problem Statement:
// Find the Largest Element inside an Array using ES6 spread operators.

// Requirements:
// Create an optimization utility that accepts an array of numerical integers, unpacks the dataset collection efficiently, and evaluates the absolute maximum value present inside the structure.

// Approach:
// 1. Establish structural fallback rules to return zero or negative boundary flags if the array reference is empty.
// 2. Invoke the native global utility method 'Math.max()', which computes the highest value from a series of individual numeric arguments.
// 3. Apply the ES6 spread operator (`...arr`) to dynamically unpack the continuous array container into separate discrete parameter arguments.
// 4. Return the largest extracted integer token as the final operational result.

// Code:
function findLargestElement(array) {
    // Structural guard clause protecting against empty collections
    if (!Array.isArray(array) || array.length === 0) return undefined;

    // Destructuring array data nodes directly into the global evaluation engine
    return Math.max(...array);
}

// Running real-world portfolio testing metrics
const dataset = [1, 2, 7, 3, 5, 7];
console.log("Extracted Max Value:", findLargestElement(dataset));
console.log("Extracted Max Value:", findLargestElement([-10, -50, -2, -5])); // Testing negative bounds

// Output:
// Extracted Max Value: 7
// Extracted Max Value: -2

// What I Learned:
// - Element List Unpacking: Understanding how the ES6 spread operator ('...') flattens array boundaries, allowing collection streams to seamlessly interface with parameter-driven core functions.
// - Algorithmic Value Extraction: Leveraging native engine-level utilities ('Math.max()') to perform fast value inspections without writing manual loop pointer states.