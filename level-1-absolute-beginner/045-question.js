// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #45

// Problem Statement:
// Calculate the Factorial of a number using Recursion.

// Requirements:
// Create an elegant recursive function that leverages the execution stack to resolve downstream mathematical factorials through self-referencing functional layers.

// Approach:
// 1. Declare a functional layout 'factorial' accepting an integer argument 'n'.
// 2. Insert a definitive recursion base case condition: 'n <= 1' to return 1 instantly, breaking the recursion loop.
// 3. For any number higher than 1, return 'n' multiplied by a self-invoking call to the same function passing the decremented argument 'n - 1'.
// 4. Trace calculations downwards until the base condition returns, then resolve the call stack upwards to output the terminal value.

// Code:
function factorial(n) {
  if (n <= 1) return 1; 
  return n * factorial(n - 1);
}

console.log(factorial(5));

// Output:
// 120

// What I Learned:
// - Functional Recursion: Understanding how a code block can reference itself to break complex loops down into clean conditional processes.
// - Call Stack Evaluation: Managing programmatic execution stacks where operations are deferred until a terminal base condition triggers stack resolution.