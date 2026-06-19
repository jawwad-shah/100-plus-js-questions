// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #111

// Problem Statement:
// Extract and isolate all Unique Elements from an Array collection.

// Requirements:
// Create an enterprise-grade optimization utility that parses a linear array stream containing repetitive primitive tokens, purges all internal redundant overlapping elements, and yields a filtered array layout tracking only distinct coordinates.

// Approach:
// 1. Establish structural fallback guards to return a clean empty array literal `[]` instantly if the input parameter is null or non-iterable.
// 2. Instantiate a modern native ES6 engine Set wrapper pointer (`new Set(array)`).
// 3. Since Set data layers automatically enforce strict value uniqueness internally, all redundant value positions are truncated natively in high-speed linear $O(N)$ runtime.
// 4. Deploy the array destructuring spread syntax (`[...]`) to unpack the elements of that temporary Set instance cleanly back into a standard array structural layout.

// Code:
const uniqueElements = (array) => {
  if (!Array.isArray(array)) return [];

  // Transforming collection matrix directly into a pure unique collection subset
  return [...new Set(array)];
};

// Running production validation verification testing workflows matching data logs
const repetitivePool = [23, 23, 23, 1];
console.log("Purified Unique Output Cluster:", uniqueElements(repetitivePool));

const frameworkLogs = ['React', 'React', 'Tailwind', 'SaaS', 'Tailwind', 'HTML'];
console.log("Purified Unique Output Cluster:", uniqueElements(frameworkLogs));

// Output:
// Purified Unique Output Cluster: [ 23, 1 ]
// Purified Unique Output Cluster: [ 'React', 'Tailwind', 'SaaS', 'HTML' ]

// What I Learned:
// - Native Hash Set Deduplication: Understanding how delegating element filtering down to engine-level Set instances creates clean code architecture that runs drastically faster than manually controlled indexing layers.
// - Spread Element Conversion: Leveraging standard structural unpack operators ('...') to shift unique hash streams directly into arrays without executing native looping protocols.