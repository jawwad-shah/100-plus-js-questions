// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #84

// Problem Statement:
// Find the Smallest Element inside an Array using ES6 spread operators.

// Requirements:
// Create an optimization utility that accepts an array of numerical integers, flattens the dataset collection efficiently, and evaluates the absolute minimum value present inside the structure.

// Approach:
// 1. Establish structural fallback rules to return 'undefined' if the array reference is empty or invalid.
// 2. Invoke the native global utility method 'Math.min()', which computes the lowest value from a series of individual numeric arguments.
// 3. Apply the ES6 spread operator (`...array`) to dynamically unpack the continuous array container into separate discrete parameter arguments.
// 4. Return the smallest extracted integer token as the final operational result.

// Code:
const findSmallestElement = array => {
    // Structural guard clause protecting against empty collections
    if (!Array.isArray(array) || array.length === 0) return undefined;

    // Destructuring array data nodes directly into the global execution engine
    return Math.min(...array);
};

// Running real-world portfolio testing metrics
console.log("Extracted Min Value:", findSmallestElement([1, 2, 7, 3, 5, 7]));
console.log("Extracted Min Value:", findSmallestElement([12, 45, 78, 4, 90])); // Checking multi-digit bounds

// Output:
// Extracted Min Value: 1
// Extracted Min Value: 4

// What I Learned:
// - Precise Semantic Naming: Recognizing that production-grade utility declarations must explicitly match their logical outcome (e.g., using 'findSmallestElement' instead of 'largestElement') to maintain codebase readability.
// - Engine-Level Stream Minification: Leveraging standard compiler assets ('Math.min()') paired with array expanding spread patterns to discard old nested imperative counter structures.