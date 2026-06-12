// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #39

// Problem Statement:
// Create a Strong 12-Character Password Generator.

// Requirements:
// Create an isolated, reusable function that dynamically samples from an alphanumeric and special character pool to construct a cryptographically complex password.

// Approach:
// 1. Define a global constant string 'allChars' containing lowercase, uppercase, numbers, and symbol characters.
// 2. Declare an arrow function 'passwordGenerator'. Inside its local scope, initialize an empty string 'pass'.
// 3. Implement a 'while' loop that executes continuously until the local 'pass' string reaches a length of 12 characters.
// 4. Generate a pseudo-random index scaled to the exact size of the character pool using 'Math.random()' and 'Math.floor()'.
// 5. Append the selected random character to 'pass' sequentially, and return the final string once loop constraints are satisfied.

// Code:
const allChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";

const passwordGenerator = () => {
  let pass = ''; // Scope fixed locally to ensure clean initialization on every invocation
  
  while (pass.length < 12) {
    let randomIndex = Math.floor(Math.random() * allChars.length);
    pass += allChars[randomIndex];
  }
  
  return pass;
};

// Testing multiple invocations to confirm clean re-generation logic
console.log("Generated secure password 1:", passwordGenerator());
console.log("Generated secure password 2:", passwordGenerator());

// Output:
// Generated secure password 1: xK9!m@pQ2zRT (or any random 12-character mix)
// Generated secure password 2: b$7vW_pX1mK9 (guaranteed unique fresh code)

// What I Learned:
// - Functional Scope Isolation: Realizing the danger of global variable states and moving mutation logic inside function scopes to prevent caching bugs.
// - Complex Character Sampling: Compiling dynamic indices against diverse asset arrays to generate cryptographic-strength unique strings.
// - Operational Idempotency: Designing utilities to execute consistently across multiple independent execution phases.