// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #95

// Problem Statement:
// Flatten a highly nested Multi-Dimensional Array into a single-dimensional layout.

// Requirements:
// Create an advanced data normalization utility that takes an array containing infinite layers of nested arrays, recursively breaks down all inner structural boundaries, and aligns all individual nodes into a clean linear sequence.

// Approach:
// 1. Establish strict structural guard checks to instantly return an empty array literal `[]` if the incoming argument is invalid.
// 2. Invoke the modern high-order native algorithm layer '.flat()' directly on the source array target.
// 3. Pass the global JavaScript mathematical constant **'Infinity'** as the depth extraction parameter argument.
// 4. This explicitly instructs the V8 compilation engine to execute deep recursive flattening loops across infinite nesting levels without needing custom loop stacks or manual conditional recursions.

// Code:
const flattenArray = (array) => {
    if (!Array.isArray(array)) return [];

    // Invoking deep engine-level recursive flattening via Infinity parameter bounds
    return array.flat(Infinity);
};

// Running standard industrial dataset validation test workflows
const multiDimensionalPool = [34, 45, 67, [4, 78, [5, 7, [99, 100]]]];
console.log("Flattened Linear Array:", flattenArray(multiDimensionalPool));

const complexNestedStrings = [['HTML', 'Tailwind'], ['React', ['JavaScript', ['UI/UX', 'SaaS']]]];
console.log("Flattened Linear Array:", flattenArray(complexNestedStrings));

// Output:
// Flattened Linear Array: [ 34, 45, 67, 4, 78, 5, 7, 99, 100 ]
// Flattened Linear Array: [ 'HTML', 'Tailwind', 'React', 'JavaScript', 'UI/UX', 'SaaS' ]

// What I Learned:
// - Dynamic Depth Matrix Disruption: Understanding how the 'Infinity' control token instructs native collection wrappers ('.flat()') to completely override fixed integer boundaries, eliminating custom multi-layered code recursion engines.
// - Complex Node Normalization: Structuring clean, human-readable input sanitation streams to smoothly handle structural layout compression across multi-tiered corporate tracking records.