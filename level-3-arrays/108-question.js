// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #108

// Problem Statement:
// Find and isolate all Duplicate Values from a single linear Array collection.

// Requirements:
// Create an optimized string or numerical scanning utility that evaluates a dataset stream, identifies any matching data items that appear more than once within the sequence boundaries, and consolidates them into a unique duplicate results array pool.

// Approach:
// 1. Establish strict safety constraints to instantly return an empty array literal `[]` if incoming inputs are invalid.
// 2. Invoke the functional high-order array '.filter()' operation on the target collection.
// 3. Apply the positional index evaluation rule: `arr.indexOf(item) !== index`.
// 4. Since '.indexOf()' natively returns only the absolute first matching index coordinates of an element, any subsequent matching nodes will yield a mismatch against their current iterator 'index' pointer, smoothly flagging them as duplicates.
// 5. Wrap the final filtered output with an explicit modern ES6 Set structure (`[...new Set(...)]`) to guarantee that the filtered duplicates collection itself contains no repetitive elements.

// Code:
const findDuplicatesShort = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return [];
    
    // Filtering overlapping occurrences and stripping secondary duplicate clusters via Set
    const duplicatesList = arr.filter((item, index) => arr.indexOf(item) !== index);
    return [...new Set(duplicatesList)];
};

// Running standard industrial production-grade dataset validation workflow metrics
const trackingNumbers = [10, 20, 30, 20, 40, 10, 50, 20];
console.log("Isolated Unique Duplicates Pool:", findDuplicatesShort(trackingNumbers));

const techStackLogs = ['React', 'Tailwind', 'HTML', 'React', 'SaaS', 'Tailwind'];
console.log("Isolated Unique Duplicates Pool:", findDuplicatesShort(techStackLogs));

// Output:
// Isolated Unique Duplicates Pool: [ 20, 10 ]
// Isolated Unique Duplicates Pool: [ 'React', 'Tailwind' ]

// What I Learned:
// - Index Mismatch Detection: Mastering how tracking natural engine search offsets ('.indexOf()') against actual looping variables captures recurring collection segments elegantly in functional syntax.
// - Multi-Layer Data Purification: Compounding high-order filtering steps together with hash wrappers ('new Set') to yield structural result matrices that remain completely free of redundant data garbage.