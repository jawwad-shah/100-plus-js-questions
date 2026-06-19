// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #97

// Problem Statement:
// Randomize the sequence of an Array using the Fisher-Yates Shuffle Paradigm.

// Requirements:
// Create an unbiased mathematical randomization utility that takes an array collection, rearranges its internal nodes with uniform probability distribution, and ensures no structural pattern bias occurs across long dataset execution cycles.

// Approach:
// 1. Establish defensive validation controls to return empty arrays if the input data parameter is invalid or null.
// 2. Clone the original source array instantly (`const shuffled = [...arr]`) to preserve the immutability of the source variables.
// 3. Implement the Fisher-Yates algorithm framework running a decrementing loop from the final index down to the first boundary (`i > 0`).
// 4. In every iteration, generate a random lower bound index address pointer `j` using `Math.floor(Math.random() * (i + 1))`.
// 5. Utilize modern ES6 Array Destructuring mechanics (`[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]`) to execute clean in-place index value swaps without using explicit 'temp' variable buffers.

// Code:
function shuffleArray(arr) {
  if (!Array.isArray(arr)) return [];
  if (arr.length <= 1) return [...arr];

  // Instantiating a clean memory snapshot clone to prevent input reference mutation
  const shuffled = [...arr];

  // Linear execution loop shifting boundaries backwards ($O(N)$ Complexity)
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Generate a secure relative random index map target
    const j = Math.floor(Math.random() * (i + 1));

    // Executing lightning-fast structural destructuring swap inline
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

// Running production validation testing metrics matching dashboard workflows
const numbersDataset = [1, 2, 3, 4, 5];
console.log("Randomized Array Distribution 1:", shuffleArray(numbersDataset));
console.log("Randomized Array Distribution 2:", shuffleArray(numbersDataset));

// Verifying original source data timeline remains clean and untouched
console.log("Original Source Architecture Check:", numbersDataset);

// Output: (Output values will change dynamically on every runtime instance)
// Randomized Array Distribution 1: [ 4, 1, 5, 2, 3 ]
// Randomized Array Distribution 2: [ 2, 5, 3, 1, 4 ]
// Original Source Architecture Check: [ 1, 2, 3, 4, 5 ]

// What I Learned:
// - Fisher-Yates Matrix Shuffling: Understanding that structural element shuffling needs a decrementing index track paired with relative random indexing loops to prevent statistical placement skewing.
// - Destructuring Value Swaps: Using clean variable grouping assignments (`[a, b] = [b, a]`) to skip old memory allocation protocols, making code look pristine and highly optimized.