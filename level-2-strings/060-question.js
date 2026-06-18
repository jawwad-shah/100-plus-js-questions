// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #60

// Problem Statement:
// Remove all spaces (whitespaces) from a given String.

// Requirements:
// Create a global sanitization utility that strips away every single whitespace character, including leading, trailing, and inter-word spaces, from a text segment.

// Approach:
// 1. Define a function 'removeSpaces' taking a string 'str'.
// 2. Utilize the native '.replace()' method paired with a Regular Expression.
// 3. Implement the regex pattern '/\s/g' where '\s' matches any whitespace character and the 'g' (global) flag ensures the operation replaces all occurrences rather than just the first one.
// 4. Swap all matched spaces with an empty string character sequence ('') and return the result.

// Code:
function removeSpaces(str) {
    return str.replace(/\s/g, '');
}

console.log(removeSpaces('                    Hello world from js'));

// Output:
// Helloworldfromjs

// What I Learned:
// - Global Regex Replacement: Mastering the global flag ('/g') inside evaluation sequences to execute exhaustive search-and-replace patterns across data lines.
// - Whitespace Tokens ('\s'): Utilizing foundational regex character definitions to grab hidden or compound whitespace formatting clusters instantly.