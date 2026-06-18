// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #71

// Problem Statement:
// Remove Duplicate Characters from a String using ES6 Sets.

// Requirements:
// Build a structural filter utility that scans an incoming string stream, strips out all recurring character occurrences, and returns a unique-only character sequence.

// Approach:
// 1. Leverage the native ES6 'Set' constructor, which inherently rejects duplicate values, forcing uniqueness across the collection.
// 2. Wrap the 'Set' instantiation inside an array spread pattern (`[...]`) to instantly convert the set iterator back into a standard array pool.
// 3. Chain the native '.join('')' method to compress the clean array tokens back into a final formatted string sequence.

// Code:
function removeDuplicateChars(str) {
    if (!str) return '';

    // Normalizing case variations or spaces is optional, here we preserve user formatting
    return [...new Set(str)].join('');
}

// Running structural testing metrics
console.log("Unique Stream (Hello World):", removeDuplicateChars("Hello World"));
console.log("Unique Stream (javascript):", removeDuplicateChars("javascript"));

// Output:
// Unique Stream (Hello World): Helo Wrd
// Unique Stream (javascript): javscrip

// What I Learned:
// - Set Data Structures: Understanding how native collection wrappers ('new Set()') enforce absolute unique value registration automatically at the engine layer.
// - Iteration Unpacking: Utilizing the ES6 spread operator ('...') to seamlessly convert custom collection objects straight back into standard iterable array nodes.