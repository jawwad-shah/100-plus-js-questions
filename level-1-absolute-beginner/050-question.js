// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #50

// Problem Statement:
// Check if a given Integer is a Palindrome.

// Requirements:
// Create an optimization utility that checks if an integer reads the same backward as forward by utilizing string mutation chains and strict boolean evaluations.

// Approach:
// 1. Store the incoming number 'n' inside a local reference variable 'originalNum'.
// 2. Cast, split, reverse, and join the number to create its absolute inverted state.
// 3. Multiply the parsed integer directly by 'Math.sign(n)' and re-assign it to 'reversed' to lock down parity states (fixed processing bug).
// 4. Return the evaluation result directly using strict comparison ('===') instead of stacking redundant ternary expressions.

// Code:
function isPalindrome(n) {
    let originalNum = n;
    let reversed = parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n);
    return originalNum === reversed;
}

// Testing evaluation conditions
console.log("Is 789 Palindrome?:", isPalindrome(789)); // Returns: false
console.log("Is 121 Palindrome?:", isPalindrome(121)); // Returns: true
console.log("Is -121 Palindrome?:", isPalindrome(-121)); // Returns: false (Math standards)

// Output:
// Is 789 Palindrome?: false
// Is 121 Palindrome?: true
// Is -121 Palindrome?: false

// What I Learned:
// - Return Statement Pruning: Eliminating redundant ternary syntax wrappers ('? true : false') when dealing with native boolean comparisons.
// - Reference State Comparisons: Validating mutations against pristine historical variable copies to determine algorithmic matching properties.