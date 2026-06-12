// Problem #12

// Problem Statement:
// Find the smallest of two numbers.

// Requirements:
// Compare two numbers and return the smaller one. Handle this using two different methods: conditional logic and a built-in JavaScript method.

// Approach:
// Method 1 (Ternary Operator): Use a chained ternary operator to check if 'a < b', 'a > b', or if they are equal.
// Method 2 (Built-in Method): Use JavaScript's native Math.min() method to directly get the lowest value.

// Code:
// Method 1: Custom Function with Ternary Operator
function smallestOfTwoFnx(a, b) {
   return a < b ? `A: ${a}` : a > b ? `B: ${b}` : `A and B are equal`;
}

const result = smallestOfTwoFnx(10, 20);
console.log(result);

// Method 2: Using Built-in Math Object
const smallestOfTwoVar = Math.min(10, 30);
console.log(smallestOfTwoVar);


// Output:
// A: 10
// 10

// What I Learned:
// - Minimum Value Comparison: Evaluating numbers to find the smallest value using expressions.
// - Math.min(): Utilizing JavaScript's built-in Math object to find the minimum value among provided numbers.
// - Template Reusability: Learning to carefully audit copied templates to ensure accurate documentation.