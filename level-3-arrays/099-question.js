// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #99

// Problem Statement:
// Count the frequency of all recurring occurrences inside an Array and map them to a Dictionary.

// Requirements:
// Create an optimized statistical indexing utility that processes an array collection of elements, aggregates the runtime appearance frequencies of each distinct item, and maps the total calculations into a clean metadata tracking object.

// Approach:
// 1. Establish absolute verification parameters to output a safe fallback object `{}` if the input data stream is falsy.
// 2. Invoke the functional high-order array '.reduce()' loop method using an initial empty object snapshot seed (`{}`).
// 3. Utilize the short-circuit logical OR operator (`acc[el] || 0`) to seamlessly initialize missing property keys without triggering reference exceptions.
// 4. Implement a clean comma evaluation statement expression to increment the dynamic property value tracking scale while returning the accumulator instance pointer (`acc`) continuously across intervals.

// Code:
function countOccurrences(arr) {
    if (!Array.isArray(arr)) return {};

    // Building a comprehensive linear analytical frequency dictionary map inline
    return arr.reduce((acc, el) => (acc[el] = (acc[el] || 0) + 1, acc), {});
}

// Running historical final challenge portfolio test matrices
const professionalLogs = ['Hello World', 'Hello World', 'JS', 'React', 'JS', 'JS'];
console.log("Compiled Occurrences Index Map:", countOccurrences(professionalLogs));

const techStackMetrics = ['Tailwind', 'HTML', 'Tailwind', 'Tailwind', 'CSS'];
console.log("Compiled Occurrences Index Map:", countOccurrences(techStackMetrics));

// Output:
// Compiled Occurrences Index Map: { 'Hello World': 2, JS: 3, React: 1 }
// Compiled Occurrences Index Map: { Tailwind: 3, HTML: 1, CSS: 1 }

// What I Learned:
// - Comma-Chained Dictionary Synthesis: Mastering how native accumulator objects function as continuous key-value hashes without using multi-line imperative control blocks.
// - Short-Circuit Object Instantiation: Leveraging JavaScript expression fallbacks ('|| 0') to seamlessly manage variable counter initialization rules over production-tier data logging schemas.