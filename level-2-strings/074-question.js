// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #74

// Problem Statement:
// Reverse the order of Words in a given String.

// Requirements:
// Create a text modification utility that takes a full multi-word sentence and reverses the sequential order of the independent words while preserving single inline space gaps.

// Approach:
// 1. Sanitize incoming text by executing '.trim()' to eliminate outer bounding spaces.
// 2. Split the string into an array of full words by targeting space parameters via '.split(" ")'.
// 3. Invoke '.reverse()' to invert the index positions of the elements inside the word array pool.
// 4. Re-compile the inverted array back into a continuous string with space separators using '.join(" ")'.

// Code:
function reverseWord(str) {
    if (!str) return '';
    
    let reverseWordStr = str.trim().split(' ').reverse().join(' ');
    return reverseWordStr;
}

// Running structural verification metrics
console.log("Reversed Sentence:", reverseWord('Hello World')); // Returns: "World Hello"
console.log("Reversed Sentence:", reverseWord('JavaScript is amazing')); // Returns: "amazing is JavaScript"

// Output:
// Reversed Sentence: World Hello
// Reversed Sentence: amazing is JavaScript

// What I Learned:
// - Delimiter-Driven Tokenization: Understanding how explicit string token delimiters like empty spaces (' ') in '.split()' shape array nodes as full words instead of loose single characters.
// - Positional Inversion Matrices: Applying high-order array layout wrappers to quickly toggle word directions inside data streams.