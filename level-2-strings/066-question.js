// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #66

// Problem Statement:
// Find the Longest Word within a given String.

// Requirements:
// Create an analysis utility that parses a sentence, evaluates the character length of each individual word block, and isolates the single word with the maximum length.

// Approach:
// 1. Clean edge spaces with '.trim()' and break the sentence into a words array via '.split(" ")'.
// 2. Initialize a reference tracker 'longest' as an empty string ("") to safely hold the largest word found so far.
// 3. Implement a '.forEach()' loop to stream through each individual word ('element').
// 4. In each iteration, check if the current word's length is strictly greater than the length of our tracked 'longest' word.
// 5. If true, overwrite the 'longest' variable with the current word. Return 'longest' at the end.

// Code:
function longestWord(str) {
    if (!str) return ""; // Guard clause for empty inputs
    
    let longest = ""; 
    
    str.trim().split(" ").forEach(element => {
        // Compare lengths of the current word and the longest word tracked so far
        if (element.length > longest.length) {
            longest = element; // Store the actual word string, not a boolean
        }
    });

    return longest;
}

console.log("Longest word is:", longestWord('Hello World From JavaScript'));

// Output:
// Longest word is: JavaScript

// What I Learned:
// - State Reference Initializations: Understanding that comparison metrics require properly initialized data types (like an empty string "" or 0) to avoid tracking bugs with 'undefined'.
// - Value Preservation vs Evaluation: Learning to store the actual structural node (the word string) during iteration rather than storing the comparison's boolean outcome.