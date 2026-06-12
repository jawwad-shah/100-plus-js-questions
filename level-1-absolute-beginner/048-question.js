// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #48

// Problem Statement:
// Check if a given number is an Armstrong Number.

// Requirements:
// Create a function that dynamically calculates the power-sum of a number's individual digits based on its total digit count, verifying if the sum equals the original integer.

// Approach:
// 1. Convert the input number 'n' to a string using '.toString()' to easily capture its length (which represents the 'order' or power).
// 2. Initialize an accumulator variable 'sum' at 0.
// 3. Run a 'for' loop across the characters of the stringified number.
// 4. Extract each character, parse it back to an integer using 'parseInt()', and raise it to the power of the calculated 'order'.
// 5. Accumulate the values and perform a strict boolean comparison ('sum === n') to return the true/false verdict.

// Code:
function armstrongNumber(n) {
   let numStr = n.toString();
   let order = numStr.length; 

   let sum = 0;

   for (let i = 0; i < order; i++) {
       let digit = parseInt(numStr[i]);
       // Using modern ES6+ Exponentiation Operator (**) instead of Math.pow()
       sum += digit ** order;
   }

   return sum === n;
}

console.log("Is 153 Armstrong?:", armstrongNumber(153)); // Returns: true
console.log("Is 123 Armstrong?:", armstrongNumber(123)); // Returns: false

// Output:
// Is 153 Armstrong?: true
// Is 123 Armstrong?: false

// What I Learned:
// - Type Coercion for Extraction: Leveraging string casting structures to extract mathematical digits sequentially from integrated integers.
// - Exponentiation Formatting: Shifting from legacy math methods to the clean modern exponentiation operator ('**') to handle complex structural powering loops.