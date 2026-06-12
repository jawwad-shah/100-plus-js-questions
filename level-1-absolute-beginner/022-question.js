// Problem #22

// Problem Statement:
// Calculate the percentage of an obtained value relative to a total value.

// Requirements:
// Create a reusable function that takes an obtained score and a total score, applies the standard percentage formula, and returns the computed numeric result.

// Approach:
// 1. Create a function named 'calculatePercentage' that accepts two parameters: 'obtainedValue' and 'totalValue'.
// 2. Inside the function, declare a constant named 'percentage'.
// 3. Implement the mathematical percentage formula: divide the obtained value by the total value, and multiply the quotient by 100.
// 4. Return the 'percentage' variable from the function.
// 5. Call the function with specific test parameters (e.g., 450 and 500), append the '%' symbol to the result, and print it using console.log().

// Code:
function calculatePercentage(obtainedValue, totalValue) {
    const percentage = (obtainedValue / totalValue) * 100;
    return percentage;
}

const result = calculatePercentage(450, 500);
console.log(result + '%');

// Output:
// 90%

// What I Learned:
// - Mathematical Formula Integration: Mapping standard arithmetic formulas directly into reusable JavaScript logic.
// - Clean String Concatenation: Appending text symbols (like '%') to dynamic numeric results to deliver explicit context in the final output.
// - Operational Precedence: Relying on parentheses to ensure division resolves correctly before executing the multiplication.