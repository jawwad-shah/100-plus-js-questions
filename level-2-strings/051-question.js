// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #51

// Problem Statement:
// Reverse a given String.

// Requirements:
// Create an efficient utility that trims whitespace and fully inverts the order of characters in a text string using native JavaScript methods.

// Approach:
// 1. Take the input string 'str' and apply '.trim()' to sanitize any leading or trailing whitespace.
// 2. Chain '.split('')' to split the character stream into an array of individual string elements.
// 3. Invoke '.reverse()' to invert the array's index positioning seamlessly.
// 4. Use '.join('')' to merge the inverted array elements back into a single structured string output.

// Code:
let str = "Hello World";
let reversedStr = str.trim().split('').reverse().join('');

console.log(reversedStr);

// Output:
// dlroW olleH

// What I Learned:
// - String Sanitization: Utilizing '.trim()' to purge accidental edge spaces before processing core character operations.
// - Text Decomposition & Composition: Mastering the native pipeline of splitting strings into iterable arrays, manipulating indices, and compiling them back cleanly into strings.