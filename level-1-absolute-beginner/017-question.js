// Problem #17

// Problem Statement:
// Calculate the area of a rectangle.

// Requirements:
// Create a reusable function that takes the length and width of a rectangle as parameters, multiplies them to find the area, and returns the result.

// Approach:
// 1. Create a function named 'calculateRectangleArea' that accepts two parameters: 'length' and 'width'.
// 2. Inside the function, declare a variable named 'area' and assign it the product of 'length' and 'width' using the multiplication operator (*).
// 3. Return the 'area' variable from the function.
// 4. Call the function by passing specific dimensions (e.g., 100 and 50) as arguments.
// 5. Store the output in a variable named 'result' and print it using console.log().

// Code:
function calculateRectangleArea(length, width) {
    let area = length * width;
    return area;
}

let result = calculateRectangleArea(100, 50);
console.log(result);

// Output:
// 5000

// What I Learned:
// - Geometric Algorithms: Mapping real-world mathematical formulas (Area = length × width) into programmatic functions.
// - Multi-Parameter Computation: Passing and processing multiple independent numerical dimensions within a single block.
// - Clear Variable Labeling: Using descriptive naming conventions like 'length', 'width', and 'area' to ensure high code readability.