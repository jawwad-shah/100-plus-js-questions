// Problem #9

// Problem Statement:
// Create a Positive, Negative, or Zero number checker using a ternary operator.

// Requirements:
// Create a reusable function that takes a number, evaluates it using a conditional operator, and returns whether it is positive, negative, or zero.

// Approach:
// 1. Create a function named 'negativePositiveChecker' that accepts one parameter (n).
// 2. Use a chained ternary operator (? :) to handle three possibilities:
//    - Check if 'n < 0'. If true, return 'negative'.
//    - If false, check if 'n > 0'. If true, return 'positive'.
//    - If both are false, it means the number is 'zero'.
// 3. Call the function with an argument (e.g., 0) and print the output using console.log().

// Code:
function negativePositiveChecker(n) {
    return n < 0 ? `${n} is negative` : n > 0 ? `${n} is positive` : `${n} is zero`;
}

const result = negativePositiveChecker(0);
console.log(result);

// Output:
// 0 is zero

// What I Learned:
// - Chained Ternary Operator (? :): How to link multiple conditional operators together to handle more than two outcomes in a single line.
// - Clean Code Practices: Reducing code lines while maintaining multi-conditional logic.
// - Neutral Edge Cases: Correctly handling '0' as neither positive nor negative.