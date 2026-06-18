// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #57

// Problem Statement:
// Convert a given String to Lowercase.

// Requirements:
// Create a functional utility that clears unnecessary whitespaces and transforms the entire character sequence into lowercase format using native string methods.

// Approach:
// 1. Establish the function 'convertLowercase' with a string parameter.
// 2. Chain '.trim()' to purge accidental leading or trailing space characters.
// 3. Utilize the '.toLowerCase()' native method to normalize all alphabetic characters to their small-case variants.
// 4. Return the processed result for immediate output.

// Code:
function convertLowercase(str) {
    return str.trim().toLowerCase();
}

console.log(convertLowercase("Hello World")); 

// Output:
// hello world

// What I Learned:
// - Case Normalization: Mastering '.toLowerCase()' to ensure data consistency, which is crucial for tasks like case-insensitive string comparisons in real-world apps.
// - Functional Cleanliness: Maintaining a standardized pattern of sanitizing (trimming) and then transforming data strings.