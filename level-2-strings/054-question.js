// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #54

// Problem Statement:
// Count Vowels inside a given String.

// Requirements:
// Build an evaluation filter that iterates over a string segment to find and count all occurrences of vowel alphabets (a, e, i, o, u), managing case sensitivity constraints flawlessly.

// Approach:
// 1. Establish a constant string wrapper 'vowels' containing both lowercase and uppercase vowel sets ('aeiouAEIOU') for rapid lookups.
// 2. Initialize a mutable state tracker 'count' at 0.
// 3. Utilize a modern 'for...of' loop to seamlessly stream through every single character ('char') of the target string.
// 4. Use the native '.includes()' array/string evaluation method to check if the current character matches the vowel sequence matrix.
// 5. If true, increment the tracking count, returning the final computed count once the loop sequence terminates.

// Code:
const vowels = 'aeiouAEIOU';

function countVowels(str) {
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log("Vowels in 'Hello World':", countVowels("Hello World")); // Output: 3
console.log("Vowels in 'Programming':", countVowels("Programming is fun!")); // Output: 5

// Output:
// Vowels in 'Hello World': 3
// Vowels in 'Programming': 5

// What I Learned:
// - Standard Lookup Matching: Utilizing strict containment checks ('.includes()') against static reference keys to isolate specific data patterns.
// - Modern String Iteration: Leveraging 'for...of' loop structures to cleanly stream individual text characters without standard index counters management overheads.