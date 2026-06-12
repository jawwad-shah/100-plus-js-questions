// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #36

// Problem Statement:
// Simulate a 6-sided Dice Roll.

// Requirements:
// Create an operational math statement that returns a pseudo-random integer between 1 and 6, simulating a realistic dice face value inside a contextual output message.

// Approach:
// 1. Generate a floating-point number using 'Math.random()'.
// 2. Scale the range up to 6 by multiplying the fraction by 6.
// 3. Drop decimal places using 'Math.floor()' to secure integers from 0 to 5.
// 4. Offset the baseline zero-index by adding 1 to map values cleanly from 1 to 6.
// 5. Wrap the result in a meaningful sentence inside console.log().

// Code:
const rollDice = Math.floor(Math.random() * 6) + 1;
console.log(`🎲 You rolled the dice and got a: ${rollDice}`);

// Output:
// 🎲 You rolled the dice and got a: 5 (or any random number from 1 to 6)

// What I Learned:
// - Dynamic Message Interpolation: Merging computational variable results smoothly into descriptive text strings using template literals.
// - Fixed-Interval Mapping: Customizing random baseline scales specifically to replicate physical objects (like a 6-sided dice) in software logic.