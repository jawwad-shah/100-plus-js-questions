// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #75

// Problem Statement:
// Truncate a String based on a character limit.

// Requirements:
// Create a UI utility function that monitors incoming text lengths. If a string exceeds a specific length constraint (e.g., 25 characters), slice the text down to that boundary and append an ellipsis ("...") to protect layout scaling.

// Approach:
// 1. Enforce a guard clause to instantly catch and return empty strings safely.
// 2. Clear out unnecessary surrounding whitespace variations by invoking '.trim()'.
// 3. Establish a static character boundary index threshold via a 'limit' constant variable.
// 4. Implement a length conditional evaluation:
//    - If the string's length is strictly greater than the limit, cut it using '.slice(0, limit)' and concat '...'.
//    - Otherwise, pass the original sanitized string forward directly.

// Code:
function truncateStrFnc(str) {
  if (!str) return "";

  const limit = 25;
  const sanitize = str.trim();

  // Checking if length strictly exceeds the visual limit bounds
  if (sanitize.length > limit) {
    return sanitize.slice(0, limit) + "...";
  } else {
    return sanitize;
  }
}

// Running structural testing metrics
console.log(truncateStrFnc("How to build scalable website in 2026")); // Length 37 > 25 -> Truncated
console.log(truncateStrFnc("JavaScript")); // Length 10 <= 25 -> Preserved

// Output:
// How to build scalable website in 2026 -> How to build scalable web...
// JavaScript                           -> JavaScript

// What I Learned:
// - Layout Buffer Preservations: Learning how string slicing operations ('.slice()') prevent raw, unmanaged database text feeds from breaking responsive UI elements.
// - Bounding Threshold Determinations: Formatting discrete length gates to inject visual continuity tokens ('...') dynamically inside data pipelines.
