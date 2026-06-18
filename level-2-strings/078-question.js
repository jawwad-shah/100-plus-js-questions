// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #78

// Problem Statement:
// Extract all Hashtags from a given text string.

// Requirements:
// Build a social media feed parsing utility that scans a post string structure, isolates all metadata keywords preceded by a hash symbol ("#"), allows underscores and hyphens within the token, and returns them as a compiled string array.

// Approach:
// 1. Establish an optimization guard clause to manage empty string anomalies immediately.
// 2. Invoke the native '.match()' utility matching string structures against a tailored global regular expression.
// 3. Formulate the regex pattern (`/#[\w-]+/g`):
//    - Target the explicit anchor character ('#').
//    - Group alphanumeric word characters (`\w`) alongside explicit hyphens (`-`) into a selective set.
//    - Force continuous matching (`+`) and scan globally across the string timeline using the global flag (`/g`).
// 4. Return the matched array pool, or an empty array fallback if zero hashes are isolated.

// Code:
function extractHashtags(str) {
    if (!str) return [];

    // Global match targeting hashtags including compound words with dashes
    const hashMatches = str.match(/#[\w-]+/g);
    
    // Fallback array handler if no hashtags match the evaluation criteria
    return hashMatches ? hashMatches : [];
}

// Running structural portfolio testing metrics
const postDescription = "The #best #javascript #problem-solving repo in #pakistan";
console.log("Extracted Hashtags:", extractHashtags(postDescription));
console.log("Extracted Hashtags:", extractHashtags("Coding updates without any metadata anchors."));

// Output:
// Extracted Hashtags: [ '#best', '#javascript', '#problem-solving', '#pakistan' ]
// Extracted Hashtags: []

// What I Learned:
// - Global Token Mining Patterns: Using native compilation matching engines ('string.match()') to instantly scrape sub-content arrays without managing mechanical pointer loop configurations.
// - Compound Character Boundary Extensions: Extending regex boundary character classes (`[\w-]`) to capture specialized social media tags seamlessly without dropping hyphen segments.