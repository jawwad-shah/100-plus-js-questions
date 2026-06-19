// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #110

// Problem Statement:
// Calculate the relative Difference Array (A - B) between two distinct dataset streams.

// Requirements:
// Create an advanced architectural data exclusion utility that parses two numerical or string arrays, filters out elements from the primary array that exist inside the secondary array reference, and returns a unique collection of isolated values.

// Approach:
// 1. Establish strict safety verification guards to instantly return an empty array literal `[]` if input parameters are invalid.
// 2. To eliminate performance-heavy sequential array lookups ($O(N \times M)$), convert the secondary collection reference into a native engine tracking wrapper (`const baselineSet = new Set(array2)`).
// 3. Invoke the functional high-order array method '.filter()' on the master source reference tracking matrix ('array1').
// 4. Implement an inverted lookup condition using the logical NOT operator combined with set validation controls (`!baselineSet.has(element)`).
// 5. This lets elements pass through only if they do not exist within the baseline hash layout, executing in crisp linear time.
// 6. Enclose the output within an explicit modern destructuring token (`[...new Set(...)]`) to safely eliminate internal item repetitions.

// Code:
function differenceArray(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) return [];

    // Pre-compiling the exclusion baseline matrix to guarantee $O(1)$ lookups
    const baselineSet = new Set(array2);

    // Filtering out matching cross-references in a single rapid linear pass
    const distinctElements = array1.filter(element => !baselineSet.has(element));

    // Shielding the resulting dataset array snapshot from recurring duplicates
    return [...new Set(distinctElements)];
}

// Running industrial production validation testing matching layout structures
const primaryPool = [1, 2, 3, 4, 5, 6, 1]; // Added duplicate to test safety constraints
const secondaryPool = [2, 3, 4];

console.log("Calculated Difference Vector Node:", differenceArray(primaryPool, secondaryPool));
console.log("Calculated Difference Vector Node:", differenceArray(['React', 'Tailwind', 'SaaS', 'HTML'], ['Tailwind', 'HTML']));

// Output:
// Calculated Difference Vector Node: [ 1, 5, 6 ]
// Calculated Difference Vector Node: [ 'React', 'SaaS' ]

// What I Learned:
// - Relative Complement Data Parsing: Understanding how to isolate unique delta layers between separate memory collections using high-order tracking arrays.
// - Linear Exclusion Mapping ($O(N)$): Realizing that pairing inverted conditions ('!') straight with constant-time Set lookups ('.has()') guarantees elite operational efficiency across production dashboards.