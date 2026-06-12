// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #37

// Problem Statement:
// Simulate a Coin Toss.

// Requirements:
// Create an efficient conditional statement using probability distribution to return either "Heads" or "Tails" dynamically inside a descriptive sentence.

// Approach:
// 1. Evaluate a random decimal using 'Math.random()'.
// 2. Apply a 50% probability threshold check by benchmarking the decimal against '< 0.5'.
// 3. Utilize a ternary operator (? :) as a shorthand control flow to return "Heads" if true, or "Tails" if false.
// 4. Output the evaluated result inside an explicit string literal template.

// Code:
const coinToss = Math.random() < 0.5 ? "Heads" : "Tails";
console.log(`🪙 The coin is flipped, and the result is: ${coinToss}`);

// Output:
// 🪙 The coin is flipped, and the result is: Heads (or Tails)

// What I Learned:
// - Boolean Probability Mapping: Using mathematical threshold boundaries (< 0.5) to split random fractional data into equal binary outcomes.
// - Clean Control Flow: Deploying ternary operators instead of heavy if-else blocks for micro-conditional return operations.