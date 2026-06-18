// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #72

// Problem Statement:
// Implement basic String Compression (Run-Length Encoding).

// Requirements:
// Create a data-compression utility that counts consecutive repeating characters and replaces them with the character followed by its count. If the compressed string is not shorter than the original, return the original string.

// Approach:
// 1. Initialize an empty string 'compressedStr' and a sequential token repeater weight variable 'count = 1'.
// 2. Execute a single 'for' loop to scan each character index iteratively.
// 3. Leverage look-ahead character validations (`str[i] === str[i + 1]`):
//    - If true, scale up the active multiplier token ('count++').
//    - If false and count is 1, append the lone character node directly.
//    - Otherwise, append both the character and the multiplier count, then reset 'count = 1'.
// 4. Implement a storage optimization check: Return the compressed sequence only if its overall length is strictly lower than the source string length.

// Code:
function compressStr(str) {
    if (!str) return '';

    let compressedStr = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        // Look-ahead matching condition
        if (str[i] === str[i + 1]) {
            count++;
        } else if (count === 1) {
            compressedStr += str[i];
        } else {
            compressedStr += str[i] + count;
            count = 1; // Reset marker
        }
    }

    // Professional Optimization Rule: Return the shorter version
    return compressedStr.length < str.length ? compressedStr : str;
}

// Running structural testing metrics
console.log("Compressed (aabcccccaaa):", compressStr('aabcccccaaa')); // Returns: a2bc5a3 (Compressed)
console.log("Compressed (Hello World):", compressStr('Hello World')); // Returns: Hello World (Original preserved because length didn't reduce)

// Output:
// Compressed (aabcccccaaa): a2bc5a3
// Compressed (Hello World): Hello World

// What I Learned:
// - Look-Ahead Evaluation Patterns: Utilizing boundary extensions (`str[i + 1]`) within clean iterative arrays to track dynamic sequence groups without multi-nested loop configurations.
// - Algorithmic Value Safeguards: Learning that optimization protocols must audit string compression metrics (`compressed.length < original.length`) to protect storage efficiency pipelines.