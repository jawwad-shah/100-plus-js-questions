// Problem #19

// Problem Statement:
// Calculate the perimeter of a rectangle.

// Requirements:
// Create a reusable function that takes length and width, validates that they are positive numbers, and returns the perimeter using the formula 2 * (length + width).

// Approach:
// 1. Create a function named 'rectanglePerimeterCalculator' that accepts two parameters: 'l' (length) and 'w' (width).
// 2. Add validation handling: If length or width is less than or equal to 0, throw a custom runtime error to prevent invalid calculations.
// 3. Implement the geometric formula: Add length and width together first, then multiply the sum by 2.
// 4. Call the function with valid dimensions (e.g., 10 and 50) and log the returned perimeter.

// Code:
function rectanglePerimeterCalculator(l, w) {
    if (l <= 0 || w <= 0) {
        throw new Error("Length and width must be positive values.");
    }
    return 2 * (l + w);
}

let result = rectanglePerimeterCalculator(10, 50);
console.log(result);

// Output:
// 120

// What I Learned:
// - Geometric Perimeter Logic: Implementing the 2(l + w) formula smoothly in JavaScript.
// - Defensive Programming (throw new Error): Learning how to intentionally halt execution and throw clean error messages when invalid data is supplied.
// - Order of Operations: Using parentheses correctly to ensure addition happens before multiplication.