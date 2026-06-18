// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #58

// Problem Statement:
// Capitalize the first letter of a given String.

// Requirements:
// Create a formatting utility that isolates the initial character of a text string, transforms it to uppercase, and merges it back with the remaining substring.

// Approach:
// 1. Utilize '.charAt(0)' to target the character at the zero-based index of the input string.
// 2. Chain '.toUpperCase()' to this single character to fulfill the capitalization requirement.
// 3. Use '.slice(1)' to extract the entire remaining portion of the string starting from the second character (index 1) onward.
// 4. Concatenate both segments using the '+' operator and return the final formatted result.

// Code:
function capitalizeFirstLetter(str) {
    if (!str) return ""; // Guard clause for empty strings
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter('hello world')); 

// Output:
// Hello world

// What I Learned:
// - Substring Segmentation: Mastering '.slice()' to dynamically extract specific segments of a character stream based on index boundaries.
// - Character Isolation: Using '.charAt()' for precise targeting of string elements before applying specific transformations.