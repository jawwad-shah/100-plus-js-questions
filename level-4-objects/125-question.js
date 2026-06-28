// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #125

// Problem Statement:
// Count the total number of Properties (Keys) present inside a JavaScript Object.

// Requirements:
// Create an advanced object metadata utility that evaluates an entity layout, extracts its structural key-enumerable boundaries safely, and returns the absolute properties tally count while handling unexpected non-object anomalies gracefully.

// Approach:
// 1. Establish strict safety constraints: If the target input parameter is null, undefined, or not a valid structural object type, instantly return a safe count baseline of `0`.
// 2. Invoke the native reflection method `Object.keys(obj)` to capture a fresh array snapshot containing all the enumerable top-level key identifiers.
// 3. Chain the standard constant-time array property pointer `.length` straight onto the extracted array node list.
// 4. Return the calculated balance integer showing the total density properties of that target object module.

// Code:
function countObjectProperties(obj) {
    // Structural type checking guard to completely eliminate runtime script crashes
    if (typeof obj !== 'object' || obj === null) return 0;

    // Compiling keys array stream and fetching the absolute vector dimension length
    return Object.keys(obj).length;
}

// Initializing state database record matching schema parameters
const userProfileSnapshot = {
    name: "Jawwad Shah",
    role: "Web Developer",
    age: 17,
    favLanguage: "JavaScript"
};

// Running industrial production validation tracking flows matching dashboard analytics
console.log("Direct Count Evaluation:", Object.keys(userProfileSnapshot).length); // As implemented in Problem #126

// Running advanced type-safe utility testing across diverse parameters data streams
console.log("Safe Utility Property Count:", countObjectProperties(userProfileSnapshot));
console.log("Safe Utility Property Count (Corrupted Data Fallback):", countObjectProperties(null)); // Returns 0 instead of crashing

// Output:
// Direct Count Evaluation: 4
// Safe Utility Property Count: 4
// Safe Utility Property Count (Corrupted Data Fallback): 0

// What I Learned:
// - Object Enumerable Reflection: Mastering how static global objects utilities like 'Object.keys()' break down custom composite heap references into standard iterable array models.
// - Defensible Script Architecture: Reviewing how injecting runtime validation constraints (`typeof obj !== 'object'`) secures critical full-stack UI states and dashboard interfaces against fatal network data errors.