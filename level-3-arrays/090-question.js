// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #90

// Problem Statement:
// Remove all recurring Duplicate Elements from an Array.

// Requirements:
// Create a data optimization utility that processes an array collection containing potential string or numerical redundancies, utilizes specialized linear data structures to filter duplicates instantly, and reconstructs a pristine array layout.

// Approach:
// 1. Establish defensive validation constraints to return an empty array wrapper if the input reference is invalid.
// 2. Instantiate a native ES6 'Set' constructor (`new Set(array)`), leveraging its engine-level uniqueness constraint to automatically discard matching value items.
// 3. Unpack the filtered distinct Set nodes back down into a standard iterable array stream using the ES6 spread operator (`[...]`).
// 4. Return the consolidated array block containing only isolated unique items.

// Code:
const removeDuplicates = (array) => {
    if (!Array.isArray(array)) return [];

    // Synthesizing a hash-set snapshot and flattening it back into an active array
    const sanitize = [...new Set(array)];
    return sanitize;
};

// Running standard production logging verification workflows
const mixedDataset = ['Hello World', 'Jawwad Shah', 'Hello World', 'JS', 'JS'];
console.log("De-duplicated Array Pool:", removeDuplicates(mixedDataset));

const numericDataset = [1, 2, 2, 3, 4, 4, 5, 1];
console.log("De-duplicated Array Pool:", removeDuplicates(numericDataset));

// Output:
// De-duplicated Array Pool: [ 'Hello World', 'Jawwad Shah', 'JS' ]
// De-duplicated Array Pool: [ 1, 2, 3, 4, 5 ]

// What I Learned:
// - Linear-Time De-duplication ($O(N)$): Realizing that leveraging native engine collections like 'Set' avoids resource-heavy nested indexing loops ($O(N^2)$), boosting application speed over extensive data streams.
// - Spread Unpacking Sequences: Understanding how to transform abstract iterable object layers back into standard array nodes using shallow memory expanding patterns (`[...]`).