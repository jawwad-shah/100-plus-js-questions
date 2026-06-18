// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #69

// Problem Statement:
// Check if two strings are Anagrams of each other (Optimized Version).

// Requirements:
// Build a high-performance verification utility that determines if two separate text strings contain the exact same characters in identical frequencies, regardless of casing or inline spacing gaps.

// Approach:
// 1. Sanitize both inputs using dynamic regex ('.replace(/\s+/g, "")') to remove all spaces, and force standard casing via '.toLowerCase()'.
// 2. Enforce an optimization Guard Clause: If the lengths of the sanitized strings do not match, return false instantly to bypass redundant operations.
// 3. Transform the strings into single-character tokens via '.split("")', order them alphabetically using '.sort()', and stitch them back into unified strings with '.join("")'.
// 4. Perform a final strict comparison ('===') on the sorted outputs and return the boolean flag.

// Code:
function checkAnagram(firstString, secondString) {
    if (!firstString || !secondString) return false;
    
    const cleanFirstStr = firstString.replace(/\s+/g, '').toLowerCase();
    const cleanSecondStr = secondString.replace(/\s+/g, '').toLowerCase();

    // Early optimization check (Guard Clause)
    if (cleanFirstStr.length !== cleanSecondStr.length) return false;

    // Sorting and Formatting Matrix
    const sortedFirstStr = cleanFirstStr.split('').sort().join('');
    const sortedSecondStr = cleanSecondStr.split('').sort().join('');

    // Strict Comparison Return
    return sortedFirstStr === sortedSecondStr;
}

// Test Cases for Verification
console.log("Test 1 (Acer, Care):", checkAnagram('Acer', 'Care')); 
console.log("Test 2 (Hello, World):", checkAnagram('Hello', 'World'));
console.log("Test 3 (Slot Machines, Cash Lost):", checkAnagram('Slot Machines', 'Cash Lost'));

// Output:
// Test 1 (Acer, Care): true
// Test 2 (Hello, World): false
// Test 3 (Slot Machines, Cash Lost): true

// What I Learned:
// - Structural Structural Alignment: Leveraging optimization gates (length matching) to kill resource-heavy processing operations early in execution streams.
// - Deterministic Sorting Matches: Converting character arrangements into alphabetic strings to neutralize position variances across text collections.