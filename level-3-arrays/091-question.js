// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #91

// Problem Statement:
// Merge two distinct Arrays into a unified collection stream.

// Requirements:
// Create an architectural layout utility that takes two separate array data sources, flattens their boundaries, and merges them into a single comprehensive array index without mutating the original source variables.

// Approach:
// 1. Establish parameter validation guards to convert missing or null inputs into safe empty arrays `[]`.
// 2. Leverage the ES6 spread operator framework (`[...array1, ...array2]`) to unpack elements of both collections sequentially inside a new array literal wrapper.
// 3. This approach serves as a highly readable, non-destructive modern alternative to the traditional native '.concat()' method.
// 4. Return the combined data stream array safely.

// Code:
const mergeArr = (array1, array2) => {
    // Array parsing fallback checks to enforce runtime safety
    const safeArray1 = Array.isArray(array1) ? array1 : [];
    const safeArray2 = Array.isArray(array2) ? array2 : [];

    // Merging arrays via explicit ES6 destructuring expansion patterns
    return [...safeArray1, ...safeArray2];
};

// Running standard enterprise production testing matrix
console.log("Unified Array Stream:", mergeArr(['Hello'], ['World']));
console.log("Unified Array Stream:", mergeArr([1, 2, 3], [4, 5, 6])); // Numeric dataset test

// Output:
// Unified Array Stream: [ 'Hello', 'World' ]
// Unified Array Stream: [ 1, 2, 3, 4, 5, 6 ]

// What I Learned:
// - Multi-Source Array Compounding: Understanding how to unpack separate memory segments inside a single array enclosure using the ES6 spread operator (`...`).
// - Immutability in Data Structures: Writing clean routing utility logic that yields an entirely fresh data snapshot without triggering destructive state mutations on the initial arguments.