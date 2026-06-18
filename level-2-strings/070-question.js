// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #70

// Problem Statement:
// Count Character Occurrences in a String using Functional Array Reducers.

// Requirements:
// Build a character map utility that analyzes a stream of text, computes the total recurrence frequency of every unique individual character, and registers the compilation into a clean key-value object map.

// Approach:
// 1. Convert the incoming string reference into an iterable character array via the modern spread operator (`[...str]`).
// 2. Invoke the high-order collection accumulator method '.reduce()' initialized with an empty literal object container (`{}`).
// 3. For each sequential element ('char'), evaluate its active registration inside the accumulator map ('acc').
// 4. Use short-circuit optimization fallback semantics (`acc[char] || 0`) to dynamically increment character tracking nodes securely.
// 5. Explicitly return the mutation reference accumulator node ('acc') at the calculation cycle tail.

// Code:
function countOccurrences(str) {
    if (!str) return {}; // Guard clause handling empty or structural omissions

    const cleanStr = str.trim().toLowerCase().replace(/\s+/g, ''); // Normalizing spaces/case rules
    
    return [...cleanStr].reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
}

// Running structural testing metrics
console.log("Occurrence Map (apple):", countOccurrences('apple'));
console.log("Occurrence Map (Jawwad):", countOccurrences('Jawwad'));

// Output:
// Occurrence Map (apple): { a: 1, p: 2, l: 1, e: 1 }
// Occurrence Map (Jawwad): { j: 1, a: 2, w: 2, d: 1 }

// What I Learned:
// - Functional Accumulation Pipelines: Utilizing high-performance '.reduce()' array controllers to shape incoming sequential streams directly into complex lookup dictionary matrices.
// - Short-Circuit State Increments: Implementing logical fallback evaluations ('|| 0') to safely declare and mutate state variables without encountering reference crash states.