// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #92

// Problem Statement:
// Find all Common Elements (Array Intersection) between two distinct numerical collections.

// Requirements:
// Create an optimized search utility that compares two numeric or string arrays, isolates the intersecting items common to both, and consolidates them into a unique output pool without using performance-heavy nested search loops.

// Approach:
// 1. Establish defensive data validations to handle undefined, non-iterable, or faulty array inputs safely.
// 2. Instantiate a native 'Set' mapping layout for the second array argument (`new Set(arr2)`). This elevates the value lookup sequence speed to $O(1)$ constant time.
// 3. Invoke the high-order array '.filter()' operation on the primary dataset stream ('arr1').
// 4. Test each continuous variable pointer against the pre-compiled hash-set mapping using the native '.has(item)' mechanism.
// 5. Return the newly created structural collection matrix containing only common matching entries.

// Code:
function findCommonElem(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];

  // Pre-compiling secondary collection into a lookup Set for optimal processing performance
  const lookupSet = new Set(arr2);

  // Linear evaluation filter parsing via constant time matching constraints
  return arr1.filter((item) => lookupSet.has(item));
}

// Running industrial production-grade dataset verification test flows
const datasetAlpha = [1, 2, 34, 4];
const datasetBeta = [23, 45, 1, 2];

console.log("Intersected Common Nodes:", findCommonElem(datasetAlpha, datasetBeta));
console.log("Intersected Common Nodes:", findCommonElem(['React', 'HTML', 'CSS'], ['Tailwind', 'CSS', 'React']));

// Output:
// Intersected Common Nodes: [ 1, 2 ]
// Intersected Common Nodes: [ 'React', 'CSS' ]

// What I Learned:
// - Hash-Table Lookup Mechanics ($O(1)$): Understanding how leveraging native engine sets avoids resource-heavy array scans ('.includes()'), cutting overall search overhead constraints drastically.
// - Filter Pipeline Integrations: Synthesizing clean element intersection graphs by combining structural validation filters straight with lookup tracking matrices.