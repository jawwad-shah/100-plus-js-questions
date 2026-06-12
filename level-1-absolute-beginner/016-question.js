// Problem #16

// Problem Statement:
// Calculate a person's age based on their birth year.

// Requirements:
// Create a reusable function that dynamically fetches the current calendar year and subtracts the user's birth year to output their exact age.

// Approach:
// 1. Create a function named 'ageCalculator' that accepts a 'birthDate' (birth year) as a parameter.
// 2. Inside the function, instantiate the JavaScript native 'Date' object and use the '.getFullYear()' method to dynamically retrieve the current year.
// 3. Subtract the 'birthDate' from the dynamic 'currentYear' and store the result in a variable named 'calculate'.
// 4. Return the calculated age from the function.
// 5. Call the function with a birth year (e.g., 2000) and log the output.

// Code:
function ageCalculator(birthDate) {
    let currentYear = new Date().getFullYear();
    let calculate = currentYear - birthDate;
    return calculate;
}

let result = ageCalculator(2000);
console.log(result);

// Output:
// 26

// What I Learned:
// - Dynamic Date Handling: Utilizing the built-in 'Date' object and the '.getFullYear()' method to avoid hardcoding dates.
// - Future-Proof Logic: Writing code that adapts automatically as the calendar year changes over time.
// - Mathematical Evaluation: Successfully combining runtime variables with historical parameters to solve real-world calculation problems.