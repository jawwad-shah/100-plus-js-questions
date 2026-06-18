// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #68

// Problem Statement:
// Check if a given String is a Palindrome.

// Requirements:
// Create a validation function that verifies whether a text sequence reads the same backwards as forwards, keeping the algorithm immune to case disparities or edge space bugs.

// Approach:
// 1. Sanitize incoming inputs by chaining '.trim().toLowerCase()' to build an identical standard string 'originalStr'.
// 2. Form a secondary comparative text element 'palindrome' by breaking the sanitized string into character tokens via '.split("")', reversing their positions with '.reverse()', and compiling them back via '.join("")'.
// 3. Evaluate both variables using a strict comparison wrapper ('===').
// 4. Return 'Palindrome' upon confirmation, otherwise route the flow to return 'Not Palindrome'.

// Code:
function isPalindrome(str) {
    if (!str) return 'Not Palindrome'; // Safe guard check for empty/undefined strings
    
    let originalStr = str.trim().toLowerCase();
    let palindrome = originalStr.split('').reverse().join('');

    if (originalStr === palindrome) {
        return 'Palindrome';
    }

    return 'Not Palindrome';
}

console.log("Is 'Jawwad Shah' a palindrome?:", isPalindrome('Jawwad Shah')); 
console.log("Is 'Maham' a palindrome?:", isPalindrome('Maham'));             
console.log("Is 'radar' a palindrome?:", isPalindrome('radar'));             

// Output:
// Is 'Jawwad Shah' a palindrome?: Not Palindrome
// Is 'Maham' a palindrome?: Palindrome
// Is 'radar' a palindrome?: Palindrome

// What I Learned:
// - Structural Reversals: Utilizing built-in array prototype utilities ('.reverse()') by converting immutable string pipelines momentarily into mutable array buffers.
// - Comparative Mirroring: Mastering symmetric value verification tricks through early normalization blocks ('.toLowerCase()').