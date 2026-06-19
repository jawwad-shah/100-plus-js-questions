// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #100

// Problem Statement:
// Remove all Falsy Values from an Array (Sanitize Dataset).

// Requirements:
// Create an input cleanup utility that parses an array containing mixed datasets, identifies and purges all JavaScript native falsy tokens (such as 0, false, null, undefined, NaN, and ""), and returns a purified array cluster of truthy nodes.

// Approach:
// 1. Establish defensive parameter constraint checks to instantly return an empty array literal `[]` if inputs are invalid.
// 2. Invoke the high-order native array operation method '.filter()'.
// 3. Instead of using manually inverted arrow condition parameters, pass the global engine constructor method **'Boolean'** directly as the single callback argument mapping reference.
// 4. This automatically evaluates the boolean truthiness of each continuous item data node, elegantly filtering away non-truthy structures in linear time.

// Code:
const removeFalsyValue = (arr) => {
    if (!Array.isArray(arr)) return [];

    // Utilizing engine-level Boolean coercion routing filters to drop falsy elements cleanly
    return arr.filter(Boolean);
};

// Running standard industrial production-grade dataset validation workflow metrics
const mixedGarbagePool = [12, -1, 0, false, "Hello", "", null, undefined, NaN];
console.log("Sanitized Dataset Output:", removeFalsyValue(mixedGarbagePool));

// Output:
// Sanitized Dataset Output: [ 12, -1, 'Hello' ]

// What I Learned:
// - Boolean Constructor Filtering: Understanding that passing the native 'Boolean' wrapper straight into high-order operations like '.filter()' serves as a pristine industry standard template to purge data gaps without executing explicit conditional statements.
// - Dynamic Value Coercion Constraints: Reviewing how the logical NOT token inversion controls (`!el`) can invert matching logic boundaries, making custom function checks vital before pushing to git pipelines.