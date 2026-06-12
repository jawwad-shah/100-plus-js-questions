// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #41

// Problem Statement:
// Print sequential numbers from 1 to 100.

// Requirements:
// Construct a basic iteration loop that starts at a baseline integer of 1 and increments sequentially, logging each value to the console until it reaches 100.

// Approach:
// 1. Initialize a 'for' loop with a control variable 'i' set to 1.
// 2. Define the loop's upper boundary condition using 'i < 101' (or 'i <= 100') to guarantee inclusive execution up to 100.
// 3. Apply a post-fix increment operator 'i++' to advance the loop count by 1 on each iteration.
// 4. Log the dynamic state of 'i' straight to the output console inside the loop body.

// Code:
for (let i = 1; i < 101; i++) {
    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// ...
// 100

// What I Learned:
// - Linear Counter Controls: Structuring sequential loop boundaries to automate repetitive numeric operations cleanly.
// - Boundary Evaluation Variants: Understanding how boundary statements like 'i < 101' and 'i <= 100' yield identical runtime cycles but differ in code readability.