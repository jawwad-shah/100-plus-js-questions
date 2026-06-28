// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #127

// Problem Statement:
// Create a structural Clone of an existing JavaScript Object instance.

// Requirements:
// Create an advanced memory management utility that clones an input object reference configuration, highlights the functional limitations of shallow copying nested pointers, and implements premium production deep-cloning guards.

// Approach:
// 1. Establish initial structural validations to ensure corrupted data inputs default safely onto valid empty objects `{}`.
// 2. Deploy standard ES6 Object Spread syntax (`{ ...object }`) to create a high-speed Shallow Copy for flat property values.
// 3. Highlight and document the reference leak bug inherent to nesting layouts when mutating embedded multi-level child objects.
// 4. Implement the modern native engine method `structuredClone(object)` to completely break underlying memory links, creating a total isolated deep clone layout in linear time.

// Code:
function executeObjectClone(sourceObj) {
    if (typeof sourceObj !== 'object' || sourceObj === null) return {};

    // Method A: Shallow Copy (As implemented in Problem #128)
    const shallowCopy = { ...sourceObj };

    // Method B: Enterprise Deep Copy (Bypasses nested reference mutations completely)
    const deepCopy = structuredClone(sourceObj);

    return { shallowCopy, deepCopy };
}

// Defining multi-layered input properties matching test specs
const personObject = { 
    name: 'Alice', 
    info: { city: 'Wonderland' }
};

// Running production validation testing workflows matching data logs
const { shallowCopy, deepCopy } = executeObjectClone(personObject);

console.log("Initial Core State Map Registered:", personObject);

// Processing a test mutation on the shallow copy layer to expose the pointer leak
shallowCopy.info.city = 'Karachi';
console.log("\n--- Post Shallow Mutation Logs ---");
console.log("Shallow Copy Info State:", shallowCopy.info);
console.log("Original Object Info State (MUTATED ACCIDENTALLY):", personObject.info);

// Processing a test mutation on the deep copy layer to show perfect isolation
deepCopy.info.city = 'Lahore';
console.log("\n--- Post Deep Mutation Logs ---");
console.log("Deep Copy Info State:", deepCopy.info);
console.log("Original Object Info State (PERFECTLY SECURED):", personObject.info);

// Output:
// Initial Core State Map Registered: { name: 'Alice', info: { city: 'Wonderland' } }
// 
// --- Post Shallow Mutation Logs ---
// Shallow Copy Info State: { city: 'Karachi' }
// Original Object Info State (MUTATED ACCIDENTALLY): { city: 'Karachi' }
// 
// --- Post Deep Mutation Logs ---
// Deep Copy Info State: { city: 'Lahore' }
// Original Object Info State (PERFECTLY SECURED): { city: 'Karachi' }

// What I Learned:
// - Shallow Copy Pointers Leakage: Understanding how basic spread syntax fails to replicate deep heap memory branches, creating shared address links that cause unwanted bugs across reactive dashboard components.
// - Modern Engine Deep Isolation: Mastering how 'structuredClone()' generates an autonomous node structure from scratch, allowing developers to safely change cloned state snapshots without corrupting global data tables.