// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #55

// Problem Statement:
// Count Consonants in a given String.

// Requirements:
// Build a character evaluator that excludes vowels and non-alphabetic characters (like spaces or punctuation) to accurately count consonants.

// Approach:
// 1. Define a reference string 'vowels' containing all vowel cases.
// 2. Initialize a 'count' tracker at 0.
// 3. Loop through the string and first convert each character to lowercase to simplify the check.
// 4. Implement a dual-check condition: The character must NOT be in the vowel list AND it must be a valid alphabet (a-z).
// 5. Increment 'count' only when both conditions are met.

// Code:
const vowelsList = 'aeiou';

function countConsonants(str) {
    let count = 0;
    // Normalize string to lowercase for easier comparison
    const cleanStr = str.toLowerCase();

    for (const char of cleanStr) {
        // Check 1: Must be an alphabet | Check 2: Must NOT be a vowel
        if (char >= 'a' && char <= 'z' && !vowelsList.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log("Consonants in 'Hello World':", countConsonants('Hello World')); 

// Output:
// Consonants in 'Hello World': 7 (H, l, l, W, r, l, d)

// What I Learned:
// - Inverse Inclusion Logic: Correctly positioning the lookup (list.includes(item)) to avoid logical inversion errors.
// - Character Range Validation: Using comparison operators ('a' through 'z') to filter out spaces and special symbols from alphabetic logic counts.