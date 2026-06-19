// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #116

// Problem Statement:
// Calculate the statistical Range (dispersion metric) from a numerical Array collection.

// Requirements:
// Create an optimized mathematical analysis utility that parses a real number series, extracts the absolute maximum and minimum coordinates, and computes their relational difference to gauge dataset spread safely.

// Approach:
// 1. Establish strict safety constraints to return a defensive zero `0` early if the parameter layout is empty or non-iterable.
// 2. Deploy modern math compilation hooks (`Math.max` and `Math.min`) coupled with array destructured spread syntax to capture edge limits dynamically.
// 3. Subtract the calculated minimum baseline from the maximum ceiling threshold node.
// 4. Return the resulting scalar numerical range metric representing structural data variability in linear execution time.

// Code:
function findRange(array) {
  if (!Array.isArray(array) || array.length === 0) return 0;

  // Extracting operational boundaries using built-in math utility layers
  const max = Math.max(...array);
  const min = Math.min(...array);

  // Computing total spread dispersion
  return max - min;
}

// Running industrial production validation tracking loops matching dashboard configurations
const simpleDataset = [10, 20, 30, 110];
console.log("Calculated Statistical Range Spread:", findRange(simpleDataset)); // 110 - 10 = 100

const temperatureLogs = [-15, 0, 42, 8, -3, 27];
console.log("Calculated Statistical Range Spread:", findRange(temperatureLogs)); // 42 - (-15) = 57

// Output:
// Calculated Statistical Range Spread: 100
// Calculated Statistical Range Spread: 57

// What I Learned:
// - Range Dispersion Calculations: Understanding how measuring extreme boundary deviations ('max - min') assists full-stack analytics portals in processing distribution analytics.
// - Spread Boundary Restrictions: Recognizing that while destructuring syntax is excellent for small-to-medium matrices, huge data sets require iterative pointer tracks to shield runtime engines against call stack overflows.