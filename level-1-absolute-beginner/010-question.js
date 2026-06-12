// Problem #10

// Problem Statement:
// Swap the values of two variables so that they exchange their data.

// Requirements:
// Take two variables with different values and swap them using a third temporary variable. Use 'let' instead of 'const' since values need to be reassigned.

// Approach:
// 1. Declare two variables 'a' and 'b' using the 'let' keyword and assign them initial values.
// 2. Create a temporary variable named 'temp' and store the value of 'a' inside it.
// 3. Assign the value of 'b' to 'a' (overwriting a's original value).
// 4. Assign the value stored in 'temp' (which is a's original value) to 'b'.
// 5. Log both variables to confirm the swap was successful.

// Code:
let a = 20;
let b = 10;

// Swapping using a temporary variable
let temp = a;
a = b;
b = temp;

console.log("A:", a, "B:", b);

// Output:
// A: 10 B: 20

// What I Learned:
// - Mutability with let: Using 'let' instead of 'const' when variable values need to change over time.
// - Temporary Storage Logic: Using a placeholder variable ('temp') to prevent data loss during reassignment.
// - Modern JavaScript Pro-Tip (Destructuring): You can also swap values in one line without a temp variable using: [a, b] = [b, a];