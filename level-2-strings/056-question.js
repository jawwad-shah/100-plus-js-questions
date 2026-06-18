// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #56

// Problem Statement:
// Convert a given String to Uppercase.

// Requirements:
// Build a utility function that sanitizes input text by removing edge whitespaces and transforms all alphabetic characters into their uppercase equivalent.

// Approach:
// 1. Declare the function 'convertUppercase' which accepts a string 'str' as a parameter.
// 2. Apply the '.trim()' method first to ensure no trailing or leading spaces affect the output.
// 3. Chain the native '.toUpperCase()' method to transform the character stream into capital casing.
// 4. Return the final formatted string for console logging.

// Code:
function convertUppercase(str) {
    return str.trim().toUpperCase();
}

console.log(convertUppercase("Hello World")); 

// Output:
// HELLO WORLD

// What I Learned:
// - Native Casing Transformation: Utilizing built-in prototype methods like '.toUpperCase()' for rapid text formatting without manual ASCII manipulation.
// - Sanitization Chaining: Combining '.trim()' with transformation methods to ensure the final data output is clean and professional.