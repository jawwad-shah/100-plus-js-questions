// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #106

// Problem Statement:
// Group Numbers into separate 'Even' and 'Odd' classification matrix structures.

// Requirements:
// Create an architectural layout grouping utility that takes a linear integer collection data stream, parses each discrete node coordinate, and partitions them cleanly into a structured dictionary layout with distinct keys without triggering unexpected method side-effects.

// Approach:
// 1. Establish structural fallback guards to instantly return empty bucket arrays if input parameters are non-iterable or faulty.
// 2. Instantiate isolated repository data pools inside a clean local context variable allocation (`even = []`, `odd = []`).
// 3. Instead of running a mutative '.filter()', use the standard native high-speed iteration layer **'.forEach()'** to map elements sequentially.
// 4. Implement a binary conditional remainder evaluation step (`item % 2 === 0`) to stream numbers exactly into their targeted classification matrix.
// 5. Return a clean comprehensive object container matching modern enterprise dashboard state properties.

// Code:
const groupNumbers = (array) => {
  if (!Array.isArray(array)) return { even: [], odd: [] };

  const even = [];
  const odd = [];

  // Utilizing high-speed explicit iteration streams instead of side-effect filtering loops
  array.forEach((item) => {
    if (item % 2 === 0) {
      even.push(item);
    } else {
      odd.push(item); // Safely absorbs both positive and negative odd integers
    }
  });

  return { even, odd };
};

// Running standard industrial production validation workflows matching structural requirements
const numbersPool = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = groupNumbers(numbersPool);

console.log("Grouped Matrix Node Dashboard Layout:");
console.log("Even Stream Archive:", result.even);
console.log("Odd Stream Archive:", result.odd);

// Output:
// Grouped Matrix Node Dashboard Layout:
// Even Stream Archive: [ 2, 4, 6, 8 ]
// Odd Stream Archive: [ 1, 3, 5, 7, 9 ]

// What I Learned:
// - Strategic Method Application: Understanding that high-order routines like '.filter()' should only be invoked for immutable extractions, whereas side-effect array tracking calls are natively assigned straight to '.forEach()'.
// - Categorized Multi-Queue Bundling: Composing organized structural layout models to group continuous numbers into explicit property sets cleanly without reference leakage.