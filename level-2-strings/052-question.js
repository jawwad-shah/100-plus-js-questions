// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #52

// Problem Statement:
// Count the characters inside a given String.

// Requirements:
// Extract the total character count (including alphabets, symbols, and whitespaces) of a targeted text sequence using native property accessors.

// Approach:
// 1. Declare a constant variable 'char' holding the string value "Hello World".
// 2. Access the native '.length' property of the string wrapper.
// 3. Log the calculated integer directly to the console environment.

// Code:
const char = "Hello World";
console.log(char.length);

// Output:
// 11

// What I Learned:
// - Indexing vs Length Parity: Understanding that while string index positioning is zero-based (0 to length - 1), the '.length' property returns the absolute 1-based human count of all elements.
// - Space Inclusions: Realizing that native string evaluation metrics count empty whitespaces as active single-byte characters.