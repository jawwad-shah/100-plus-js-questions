// Problem #11

// Problem Statement:
// Find the largest of two numbers.

// Requirements:
// Compare two numbers and return the larger one. Handle this using two different methods: conditional logic and a built-in JavaScript method.

// Approach:
// Method 1 (Ternary Operator): Use a chained ternary operator to check if 'a > b', 'a < b', or if they are equal.
// Method 2 (Built-in Method): Use JavaScript's native Math.max() method to directly get the highest value.

// Code:
// Method 1: Custom Function with Ternary Operator
function largestOfTwoFnx(a, b) {
   return a > b ? `A: ${a}` : a < b ? `B: ${b}` : `A and B are equal`;
}

const result = largestOfTwoFnx(10, 20);
console.log(result);

// Method 2: Using Built-in Math Object
const largestOfTwoVar = Math.max(10, 30);
console.log(largestOfTwoVar);


// Output:
// B: 20
// 30

// What I Learned:
// - Advanced Comparison: Comparing numbers efficiently using conditional expressions.
// - Math.max(): Utilizing JavaScript's built-in Math object to find the maximum value among provided numbers.
// - Code Flexibility: Realizing there are multiple paths to solve a single logical problem.