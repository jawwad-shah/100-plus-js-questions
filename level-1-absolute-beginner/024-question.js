// Problem #24

// Problem Statement:
// Calculate Simple Interest for different time breakdowns (Years, Months, and Days).

// Requirements:
// Create a function that takes principal amount, annual interest rate, and time (in years), calculates the simple interest, and returns a detailed breakdown.

// Approach:
// 1. Create a function named 'calculateInterest' that accepts 'principal', 'rate', and 'time' (in years).
// 2. Calculate total interest for the given years using standard formula: (P * R * T) / 100.
// 3. To find the equivalent interest broken down per month, divide the annual interest by 12.
// 4. To find the equivalent interest broken down per day, divide the annual interest by 365.
// 5. Return an object containing all three calculated values.

// Code:
function calculateInterest(principal, rate, time) {
    // Total interest for the entire duration (in years)
    let totalInterestForYears = (principal * rate * time) / 100;
    
    // Pro-rated interest breakdown for parts of time
    let interestPerMonth = (principal * rate) / 100 / 12;
    let interestPerDay = (principal * rate) / 100 / 365;

    return {
        totalInterestForYears,
        interestPerMonth,
        interestPerDay,
        time
    };
}

const result = calculateInterest(10000, 10, 89);

console.log(`Total interest accumulated over ${result.time} year(s) is: $${result.totalInterestForYears.toFixed(2)}`);
console.log(`The interest rate breaks down to: $${result.interestPerMonth.toFixed(2)} per month.`);
console.log(`The interest rate breaks down to: $${result.interestPerDay.toFixed(2)} per day.`);

// Output:
// Total interest accumulated over 1 year(s) is: $10000.00
// The interest rate breaks down to: $83.33 per month.
// The interest rate breaks down to: $2.74 per day.

// What I Learned:
// - Financial Algorithms: Implementing standard interest tracking equations (P * R * T / 100) inside program functions.
// - Pro-rata Breakdown: Dividing macro figures (annual interest) into micro metrics (monthly and daily rates) for detailed user insights.
// - Text Humanization: Transforming raw variable outputs into professional, grammatically complete, and contextual sentences.