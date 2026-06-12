// Problem #13

// Problem Statement:
// Find the largest of three numbers.

// Requirements:
// Compare three different numbers and determine which one has the highest value. Handle this using conditional logic and a built-in method.

// Approach:
// Method 1 (Logical Operators): Use 'if/else if/else' structural blocks combined with the Logical AND (&&) operator to check multiple conditions simultaneously.
// Method 2 (Built-in Method): Use JavaScript's native Math.max() method to directly find the highest value among all three numbers.

// Code:
// Method 1: Using Conditional Logic with Logical AND (&&)
let num1 = 10;
let num2 = 30;
let num3 = 50;
let largest;

if (num1 >= num2 && num1 >= num3) {
    largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
} else {
    largest = num3;
}

console.log("Using Logic:", largest);

// Method 2: Using Built-in Math Object
const quickLargest = Math.max(num1, num2, num3);
console.log("Using Math.max:", quickLargest);


// Output:
// Using Logic: 50
// Using Math.max: 50

// What I Learned:
// - Logical AND Operator (&&): How to group multiple comparison conditions inside a single 'if' statement.
// - Conditional Branching (else if): Creating clean execution paths when dealing with more than two potential outcomes.
// - Math.max() with Multiple Arguments: Understanding that Math.max() can accept more than two parameters to find the maximum value in a dataset.