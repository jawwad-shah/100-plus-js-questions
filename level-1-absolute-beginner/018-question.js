// Problem #18

// Problem Statement:
// Calculate the area of a circle based on its radius.

// Requirements:
// Create a reusable function that takes the radius of a circle, applies the standard geometric formula (πr²), and returns the area formatted to two decimal places.

// Approach:
// 1. Create a function named 'circleAreaCalculator' that accepts a 'radius' parameter.
// 2. Use 'Math.PI' to get the precise value of Pi (π).
// 3. Use 'Math.pow(radius, 2)' to square the radius value (r²).
// 4. Multiply Pi with the squared radius, store the result in the 'area' variable, and return it.
// 5. Call the function with a radius of 5, apply '.toFixed(2)' to round the result to 2 decimal places, and log it.

// Code:
function circleAreaCalculator(radius) {
    let area = Math.PI * Math.pow(radius, 2);
    return area;
}

let result = circleAreaCalculator(5);
console.log(result.toFixed(2));

// Output:
// 78.54

// What I Learned:
// - Math.PI: Accessing the native mathematical constant for Pi (π) to ensure absolute precision.
// - Math.pow(): Utilizing the power function to handle exponents (squaring numbers) efficiently.
// - .toFixed() Method: Formatting floating-point numbers to control the number of digits displayed after the decimal point.