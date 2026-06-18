// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #64

// Problem Statement:
// Create a basic Email Validator utility.

// Requirements:
// Build a secure pattern-matching evaluator that checks if an incoming text string conforms to standard email structures (username@domain.extension) using Regular Expressions.

// Approach:
// 1. Declare the 'validateEmail' function which accepts an 'email' string parameter.
// 2. Establish a strict Regular Expression matrix: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`.
// 3. Utilize the native JavaScript '.test()' regex method, which returns a direct boolean ('true' if matched, 'false' if failed).
// 4. Return the evaluation result directly to the execution pipeline.

// Code:
function validateEmail(email) {
  // Regular Expression for structural validation
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Running edge checks
console.log("Is 'example@example.com' valid?:", validateEmail('example@example.com')); // Returns: true
console.log("Is 'cwh.com' valid?:", validateEmail('cwh.com'));                         // Returns: false
console.log("Is 'jawwad@shah' valid?:", validateEmail('jawwad@shah'));                 // Returns: false (Missing dot/extension)

// Output:
// Is 'example@example.com' valid?: true
// Is 'cwh.com' valid?: false
// Is 'jawwad@shah' valid?: false

// What I Learned:
// - Structural RegEx Parsing: Mastering complex token evaluation strings to enforce data compliance rules for form inputs.
// - The '.test()' Method: Utilizing native RegExp prototype testing methods to efficiently fetch instant boolean flags across data models.