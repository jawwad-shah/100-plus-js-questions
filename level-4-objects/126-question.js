// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #126

// Problem Statement:
// Merge multiple JavaScript Objects into a single unified Object structure.

// Requirements:
// Create an optimized data synthesis utility that takes two separate object dictionary footprints, unpacks their internal properties cleanly, merges them into a brand-new composite object reference, and safely resolves any key collisions using standard overriding rules.

// Approach:
// 1. Establish structural fallback guards to ensure that if any parameter is non-iterable, the utility defaults back onto valid empty literal maps `{}` smoothly.
// 2. Deploy modern functional ES6 Object Spread syntax (`{ ...obj1, ...obj2 }`) to perform high-speed element unpacking.
// 3. This operation creates a clean shallow copy configuration, ensuring the original source inputs (`obj1` and `obj2`) stay fully pristine and unmutated in stack memory.
// 4. Return the consolidated destination reference to update dependent state trees instantly.

// Code:
const mergeObjects = (obj1, obj2) => {
    if (typeof obj1 !== 'object' || obj1 === null) obj1 = {};
    if (typeof obj2 !== 'object' || obj2 === null) obj2 = {};

    // Combining key-value parameters sequentially in $O(N)$ runtime performance
    return { ...obj1, ...obj2 };
};

// Defining core input data boundaries matching problem test parameters
const firstDataset = { 1: "a", 2: "b" };
const secondDataset = { 3: "c", 4: "d" };

// Running production validation testing workflows matching data logs
console.log("Synthesized Merged Output Model:", mergeObjects(firstDataset, secondDataset));

// Advanced Verification Test Case: Handling Key Collisions Overwriting
const userBaseDetails = { name: "Jawwad Shah", role: "Web Developer" };
const userExtendedDetails = { role: "Full Stack Web Developer", activeStatus: true };

console.log("Collision Overridden Output Model:", mergeObjects(userBaseDetails, userExtendedDetails));
// Notice how the 'role' property from the second object seamlessly overwrote the first one!

// Output:
// Synthesized Merged Output Model: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// Collision Overridden Output Model: { name: 'Jawwad Shah', role: 'Full Stack Web Developer', activeStatus: true }

// What I Learned:
// - Shallow Reference Spreading: Mastering how the spread token ('...') extracts structural parameters into a fresh heap space pointer without mutating baseline initial parameters.
// - Property Overwrite Ordering: Understanding that right-side objects in a spread chain dictate the final state value during key collision conflicts, which is a critical mechanic inside full-stack component state updates.