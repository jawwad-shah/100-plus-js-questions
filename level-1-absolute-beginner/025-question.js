// Problem #25

// Problem Statement:
// Calculate Compound Interest and Total Amount for different compounding frequencies (Annually, Monthly, and Daily).

// Requirements:
// Create a reusable function that takes principal, annual rate, and time (in years), applies the standard compounding formula, and returns both the total accumulated amounts and the net profit/interest.

// Math Formula:
// A = P × Math.pow((1 + (r / n)), (n × t))
// Where:
// - A = Total Accumulated Amount
// - P = Principal Amount
// - r = Annual Interest Rate (in decimal form, i.e., rate / 100)
// - n = Number of compounding periods per year (Annually = 1, Monthly = 12, Daily = 365)
// - t = Time (Duration in years)
// Interest Earned = A - P

// Approach:
// 1. Create a function named 'calculateCompoundInterest' accepting 'p', 'r', and 't'.
// 2. Convert annual rate percentage to decimal: decimalRate = r / 100.
// 3. For Annual compounding (n=1): Amount = p × Math.pow(1 + decimalRate / 1, 1 × t).
// 4. For Monthly compounding (n=12): Divide rate by 12, multiply time by 12 inside the exponent.
// 5. For Daily compounding (n=365): Divide rate by 365, multiply time by 365 inside the exponent.
// 6. Subtract the original principal from each final amount to isolate the net profit (interest).
// 7. Return all computed metrics inside a structured object using ES6 shorthands.

// Code:
function calculateCompoundInterest(p, r, t) {
  const decimalRate = r / 100;

  // Annual Compounding (n = 1)
  // Formula applied: p × (1 + decimalRate / 1)^(1 * t)
  const amountInYears = p * Math.pow(1 + decimalRate / 1, 1 * t);

  // Monthly Compounding (n = 12)
  // Formula applied: p × (1 + decimalRate / 12)^(12 * t)
  const amountInMonths = p * Math.pow(1 + decimalRate / 12, 12 * t);

  // Daily Compounding (n = 365)
  // Formula applied: p × (1 + decimalRate / 365)^(365 * t)
  const amountInDays = p * Math.pow(1 + decimalRate / 365, 365 * t);

  // Isolate Net Profit (Interest Earned)
  const interestInYears = amountInYears - p;
  const interestInMonths = amountInMonths - p;
  const interestInDays = amountInDays - p;

  return {
    amountInYears,
    amountInMonths,
    amountInDays,
    interestInYears,
    interestInMonths,
    interestInDays
  };
}

const result = calculateCompoundInterest(1000, 10, 3);

console.log(`Annual Compounding -> Total Profit: $${result.interestInYears.toFixed(2)} | Accumulated Balance: $${result.amountInYears.toFixed(2)}`);
console.log(`Monthly Compounding -> Total Profit: $${result.interestInMonths.toFixed(2)} | Accumulated Balance: $${result.amountInMonths.toFixed(2)}`);
console.log(`Daily Compounding -> Total Profit: $${result.interestInDays.toFixed(2)} | Accumulated Balance: $${result.amountInDays.toFixed(2)}`);

// Output:
// Annual Compounding -> Total Profit: $331.00 | Accumulated Balance: $1331.00
// Monthly Compounding -> Total Profit: $348.18 | Accumulated Balance: $1348.18
// Daily Compounding -> Total Profit: $349.81 | Accumulated Balance: $1349.81

// What I Learned:
// - Formula Documentation: Embedding exact algebraic models in code comments to ensure logic transparency.
// - Compounding Frequencies: Understanding how interest accumulates differently when applied on annual, monthly, or daily schedules.
// - Advanced Exponential Formulations: Implementing multi-variable equations accurately using 'Math.pow()'.
// - Financial Logic Precision: Learning that breaking down financial cycles requires modifying both interest rate fractions and operational durations simultaneously.