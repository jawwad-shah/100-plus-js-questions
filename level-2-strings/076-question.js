// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #76

// Problem Statement:
// Securely Mask Credit Card numbers, leaving only the last 4 digits visible.

// Requirements:
// Build a secure financial data sanitization utility that inputs raw credit card strings or numeric data streams, strips away custom styling spaces/hyphens, validates minimum processing lengths, masks preceding blocks with masking symbols ("*"), and returns the compiled safe output token.

// Approach:
// 1. Enforce a string fallback wrapper via '.toString()' to smoothly ingest numerical entries.
// 2. Clear out formatting spaces and hyphens globally using specific regular expressions (`/[\s-]/g`).
// 3. Implement an early structure check: Reject values with length structures under 12 characters.
// 4. Extract the visible terminal nodes safely by targeting negative index slicing parameters via '.slice(-4)'.
// 5. Deduct the visible count from the total string length to evaluate the masking footprint, then loop symbol repetitions with '.repeat()'.
// 6. Concatenate the tokenized mask string with the raw 4 digits and return the secured sequence.

// Code:
function maskCreditCard(cardNumber) {
  if (!cardNumber) return "";

  // Sanitize card structure from numbers/strings and purge layout decorators
  const cleanCardNumber = cardNumber.toString().replace(/[\s-]/g, "");

  // Basic layout structural validation gate
  if (cleanCardNumber.length < 12) {
    return "Invalid Card Number Structure";
  }

  // Isolate final four explicit data characters
  const lastFourDigits = cleanCardNumber.slice(-4);

  // Compute balance footprint and synthesize mask string
  const maskLength = cleanCardNumber.length - 4;
  const maskedBuffer = "*".repeat(maskLength);

  // Return the compiled secure token string
  return maskedBuffer + lastFourDigits;
}

// Running structural verification testing loops
console.log("Secured Token:", maskCreditCard(1234567890123456)); // Numeric parsing test
console.log("Secured Token:", maskCreditCard("4321 - 8765 - 0987 - 5432")); // Formatting hyphen string test
console.log("Secured Token:", maskCreditCard(98765)); // Length verification failure test

// Output:
// Secured Token: ************3456
// Secured Token: ************5432
// Secured Token: Invalid Card Number Structure

// What I Learned:
// - Data Token Masking: Understanding structural encryption simulations via built-in string allocation operators ('.repeat()') to guard sensitive user variables at the display tier.
// - Offset Negative Slicing: Leveraging negative baseline offsets ('.slice(-4)') to isolate target end tokens dynamically without breaking layout bounds.