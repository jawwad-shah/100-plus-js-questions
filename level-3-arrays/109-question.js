// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #109

// Problem Statement:
// Calculate the unique Intersection Array between two separate data collection streams.

// Requirements:
// Create an advanced collection extraction utility that evaluates two input arrays, filters out matching values that exist simultaneously in both source references, and eliminates redundant duplicate matches to return a unique mathematical intersection set.

// Approach:
// 1. Establish structural fallback verification guards to return a clean empty array container `[]` if input fields are non-iterable.
// 2. To optimize element lookups from quadratic time ($O(N \times M)$) down to linear processing time ($O(N)$), wrap the secondary dataset stream inside a high-speed lookup set mapping pointer (`const lookupSet = new Set(array2)`).
// 3. Invoke the functional high-order array '.filter()' operation directly on the primary source tracking matrix ('array1').
// 4. Test elements continuously against the hash state using the native performance-optimized operational gate (`lookupSet.has(elem)`).
// 5. Wrap the final filtered response array array block inside a global array destructuring unique wrapper (`[...new Set(...)]`) to shield the output metrics from recurring duplicate items.

// Code:
function intersectionArray(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) return [];

    // Pre-compiling secondary collection map into a hash lookup state for absolute optimal lookup times
    const lookupSet = new Set(array2);
    
    // Filtering overlapping elements sequentially via constant time data queries
    const commonElements = array1.filter(elem => lookupSet.has(elem));
    
    // Purging edge-case internal element repetitions cleanly
    return [...new Set(commonElements)];
}

// Running industrial production-grade dataset validation workflow streams
const datasetAlpha = [1, 2, 3, 4, 5, 2]; // Added duplicate to test safety constraints
const datasetBeta = [1, 78, 90, 2, 2];

console.log("Unique Intersection Stream Vector:", intersectionArray(datasetAlpha, datasetBeta));
console.log("Unique Intersection Stream Vector:", intersectionArray(['HTML', 'CSS', 'React'], ['SaaS', 'React', 'Tailwind']));

// Output:
// Unique Intersection Stream Vector: [ 1, 2 ]
// Unique Intersection Stream Vector: [ 'React' ]

// What I Learned:
// - Cross-Collection Intersection Routing: Mastering how to distill two distinct layout matrices down into a singular common coordinate set using high-order tracking arrays.
// - Algorithmic Complexity Suppression: Shifting processing filters from structural array scans ('.includes()') over to direct hash lookups ('.has()') to enforce maximum speed scales across production dashboards.