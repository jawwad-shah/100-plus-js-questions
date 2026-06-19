// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #85

// Problem Statement:
// Find the Second Largest unique number inside an Array.

// Requirements:
// Create an advanced data filtration utility that accepts an array of numerical elements, filters out any duplicate items to prevent mathematical shadowing, sorts the unique dataset in descending order, and extracts the second highest node.

// Approach:
// 1. Establish an optimization guard clause to protect against arrays with less than 2 unique data parameters.
// 2. Instantiated a native 'Set' data structure (`new Set(array)`) to instantly eliminate recurring duplicate integers.
// 3. Destructure the unique Set nodes back into an iterable array using the ES6 spread operator (`[...]`).
// 4. Chain the native '.sort((a, b) => b - a)' mechanics to logically organize numbers from largest to smallest.
// 5. Explicitly access index positioning '1' (`distinctSorted[1]`) to return the targeted second largest value.

// Code:
const secondLargestNumber = (array) => {
    if (!Array.isArray(array) || array.length < 2) return undefined;

    // Purging duplicates and executing descending arithmetic sorting inline
    const distinctSorted = [...new Set(array)].sort((a, b) => b - a);
    
    // Guarding against edge cases where array had multiple elements but all were identical duplicates
    return distinctSorted.length > 1 ? distinctSorted[1] : undefined;
};

// Running real-world portfolio testing metrics
console.log("Second Largest Node:", secondLargestNumber([10, 20, 30, 40, 50]));
console.log("Second Largest Node:", secondLargestNumber([10, 40, 40, 20, 30])); // Tracking duplicate-heavy bounds

// Output:
// Second Largest Node: 40
// Second Largest Node: 30

// What I Learned:
// - Shadowing Mitigation via Sets: Recognizing that sorting raw arrays with duplicate maximum configurations can corrupt target relative indexes, making 'Set' filtering essential for accurate rank-matching.
// - Explicit Functional Ordering: Re-enforcing descending numeric arrow sort controls (`b - a`) to consistently override default alphabetical sorting layers inside the V8 engine.