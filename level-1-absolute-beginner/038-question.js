// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #38

// Problem Statement:
// Create a Secure 4-Digit OTP Generator.

// Requirements:
// Create a standalone arrow function that dynamically generates a strict 4-digit numeric One-Time Password (OTP) within the safe integer range of 1000 to 9999.

// Approach:
// 1. Declare an ES6 arrow function named 'generateOTP'.
// 2. Multiply 'Math.random()' by 9000 to define a total dynamic span range of 9000 possible values.
// 3. Drop floating-point values using 'Math.floor()' to secure numbers between 0 and 8999.
// 4. Offset the range by adding 1000, enforcing a strict structural baseline from 1000 (minimum) to 9999 (maximum).
// 5. Invoke the utility inside console.log() using a clear verification message.

// Code:
const generateOTP = () => Math.floor(1000 + Math.random() * 9000);

console.log("Your secure OTP code is:", generateOTP());

// Output:
// Your secure OTP code is: 4829 (or any random strict 4-digit number)

// What I Learned:
// - Boundary Containment Logic: Designing mathematical constraints to avoid leading-zero drops in multi-digit generation routines.
// - Authentic Security Utilities: Implementing pseudo-random generation logic useful for verification layers and multi-factor authentication modules.