// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #47

// Problem Statement:
// Determine if a number is a Prime Number (Optimized).

// Requirements:
// Create an efficient evaluation block using a loop to test divisibility boundaries up to the square root of 'n', returning accurate prime states.

// Approach:
// 1. Establish guard clauses: numbers <= 1 are instantly "Not Prime".
// 2. Run a loop starting from 2 up to the square root boundary ('i * i <= n').
// 3. If any index divides 'n' perfectly ('n % i === 0'), terminate the function immediately with "Not Prime".
// 4. Remove internal 'else' blocks to prevent premature functional returns on the first loop cycle.
// 5. If the loop completes without finding any divisor, return "Prime" as a final statement outside the loop block.

// Code:
const isPrime = (n) => {
    if (n <= 1) return "Not Prime";

    // Loop optimized to run only up to the square root of n (i * i <= n)
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return "Not Prime"; // Found a factor, so it's definitely not prime
        }
    }

    return "Prime"; // Loop finished without breaking, so it is a prime number
};

// Testing the evaluation integrity
console.log("Is 6 Prime?:", isPrime(6));   // Correctly logs: Not Prime
console.log("Is 9 Prime?:", isPrime(9));   // Correctly logs: Not Prime (Bug Fixed!)
console.log("Is 11 Prime?:", isPrime(11)); // Correctly logs: Prime

// Output:
// Is 6 Prime?: Not Prime
// Is 9 Prime?: Not Prime
// Is 11 Prime?: Prime

// What I Learned:
// - Premature Return Management: Understanding how early 'return' scopes inside conditional loop layers catch and break the execution stream incorrectly.
// - Square Root Optimization ($\sqrt{n}$): Limiting iterative checks to mathematical square root factors to turn heavy $O(n)$ search scales into ultra-fast $O(\sqrt{n})$ performance blocks.