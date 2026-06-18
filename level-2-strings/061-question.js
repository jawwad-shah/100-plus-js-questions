// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #61

// Problem Statement:
// Replace a specific word within a String.

// Requirements:
// Create a dynamic utility that searches for a targeted substring within a text segment and swaps it with a new provided string value.

// Approach:
// 1. Define 'replaceWord' with three parameters: the original string, the target word to find, and the new word to insert.
// 2. Use the native '.replace()' method. To replace ALL occurrences of that word, we can use a global Regex or the modern '.replaceAll()' method.
// 3. Pass the target and replacement values into the method and return the updated string.

// Code:
function replaceWord(str, target, replacement) {
    // Using .replace() to swap the target word with the new one
    return str.replace(target, replacement);
}

// Example: Replacing 'World' with 'JS'
console.log(replaceWord('Hello World', 'World', 'JS')); 

// Output:
// Hello JS

// What I Learned:
// - Dynamic Parameter Mapping: Understanding that specific string replacement requires targeting a sub-segment (substring) rather than the whole original reference.
// - Pattern Matching: Utilizing native search-and-replace methods to perform targeted data updates within larger text clusters.