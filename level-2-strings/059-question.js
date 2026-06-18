// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #59

// Problem Statement:
// Capitalize the first letter of every word inside a String (Title Case).

// Requirements:
// Create an advanced text transformer that breaks strings down into isolated word arrays, maps capitalization logic across every independent element, and reconstructs the text pool cleanly.

// Approach:
// 1. Sanitize edge whitespaces with '.trim()' and break the sentence structure into a word array using '.split(' ')'.
// 2. Invoke the high-order array method '.map()' to sequentially loop over each individual word ('e').
// 3. For every word element, isolate index 0 via '.charAt(0).toUpperCase()' and attach the remaining string chunk extracted via '.slice(1)'.
// 4. Chain '.join(' ')' at the end of the array map to merge the capitalized array nodes back into a standard spaced sentence.

// Code:
function capitalizeEveryWord(str) {
    if (!str) return ""; // Guard clause for empty edge strings
    return str.trim().split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ');
}

console.log(capitalizeEveryWord('hello world from js'));

// Output:
// Hello World From Js

// What I Learned:
// - High-Order Functional Mapping: Combining string parsing tokens with array iteration processes ('.map()') to execute continuous cell transformations.
// - Complex Chaining Models: Synchronizing separate functional streams (split, map, and join) into a unified single-line architectural layout.