// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #62

// Problem Statement:
// Extract Initials from a given Name or Phrase.

// Requirements:
// Create a dashboard avatar utility that processes a full name, pulls out the starting letter of each independent word, and merges them into an uppercase initial token.

// Approach:
// 1. Apply '.trim()' to sanitize whitespace and break down the string into individual words using '.split(' ')'.
// 2. Invoke '.map()' to loop through each word element ('e') and grab its first index character via '.charAt(0)'.
// 3. Compile the array of initials back into a single continuous token string with '.join('')'.
// 4. Chain '.toUpperCase()' to guarantee clean capitalization, regardless of how the user input their raw text.

// Code:
function extractInitials(str) {
    if (!str) return ""; // Guard clause for empty string validation
    return str.trim().split(' ').map(e => e.charAt(0)).join('').toUpperCase();
}

console.log("Initials for 'Jawwad Shah':", extractInitials('Jawwad Shah')); // Returns: JS
console.log("Initials for 'artificial intelligence':", extractInitials('artificial intelligence')); // Returns: AI

// Output:
// Initials for 'Jawwad Shah': JS
// Initials for 'artificial intelligence': AI\

// What I Learned:
// - Avatar Data Tokenization: Isolate vital string segments ('.charAt(0)') across nested collections to create clean visual tokens for UI dashboards.
// - Normalization Architecture: Forcing system outputs to uppercase format directly at the utility layer to enforce UI design aesthetics globally.