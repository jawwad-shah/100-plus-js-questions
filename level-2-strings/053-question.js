// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #53

// Problem Statement:
// Count total words inside a given String.

// Requirements:
// Build a parser that isolates cluster combinations of characters separated by whitespaces, converting the text segment into an array structure to fetch accurate word counts.

// Approach:
// 1. Declare a constant string variable 'words' containing the sample text.
// 2. Sanitize and break the text stream apart at each space delimiter using '.split(" ")'.
// 3. Capture the total length of the newly generated array wrapper to output the actual word metrics.
// 4. (Pro-Tip Variant): Use '.trim().split(/\s+/)' to safeguard against consecutive duplicate spaces or trailing edge boundaries.

// Code:
const words = "Hello World";

// Basic Implementation (Standard Space Split)
const basicWordCount = words.split(" ").length;
console.log("Basic Count:", basicWordCount);

// Bulletproof Implementation (Handles double spaces and edges safely)
const complexText = " Hello   World  "; 
const safeWordCount = complexText.trim().split(/\s+/).length;
console.log("Safe Count with Regular Expression:", safeWordCount);

// Output:
// Basic Count: 2
// Safe Count with Regular Expression: 2

// What I Learned:
// - Delimiter Segmentation: Shifting from character splitting to delimiter-based splitting ('split(" ")') to break text into structural whole-word components.
// - RegEx Robustness: Recognizing that native static string splitting can break under irregular user white-spaces, which can be fixed using regex patterns ('/\s+/') for production-ready data validation.