// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #124

// Problem Statement:
// Update an existing Property/Key within a JavaScript Object instance.

// Requirements:
// Create an advanced data manipulation utility that targets an established user profile state document, mutates a specific property parameter safely, and provides an immutable production-alternative tracking mechanism.

// Approach:
// 1. Establish strict validation parameter guards to return an empty container literal `[]` or object early if the source target reference is corrupted or non-object.
// 2. Deploy standard direct Dot Notation assignment syntax (`object.property = newValue`) to alter the value node coordinate directly inside the execution heap map memory.
// 3. Alternatively, implement the professional functional ES6 object spread pipeline (`{ ...object, key: value }`) to support immutable state transformations common in enterprise architectures.
// 4. Return the synchronized structural configuration document to update reactive client layouts cleanly.

// Code:
function updateUserState(profile, targetKey, updatedValue) {
    if (typeof profile !== 'object' || profile === null) return {};

    // Standard Imperative Update Engine Flow (As deployed in Problem #125)
    // profile.role = "Full Stack Web Developer";

    // Modern Immutable State Pipeline Alternative:
    // Spreads the initial properties cleanly and overrides/appends the targeted key context smoothly
    return {
        ...profile,
        [targetKey]: updatedValue
    };
}

// Initializing state database records matching schema parameters
const liveUserSession = {
    name: "Jawwad Shah",
    role: "Web Developer",
    age: 17,
    favLanguage: "JavaScript"
};

// Running industrial production logging workflows matching dashboard analytics
console.log("Baseline Initial State Profile:", liveUserSession);

// Execution Method A: In-Place Direct Value Mutation
liveUserSession.role = "Full Stack Web Developer";
console.log("Post Mutative Re-assignment Frame:", liveUserSession);

// Execution Method B: Pure Immutable State Transformation Check
const nextGenProfile = updateUserState(liveUserSession, 'favLanguage', 'TypeScript / JavaScript');
console.log("Post Immutable Transformation Frame:", nextGenProfile);

// Output:
// Baseline Initial State Profile: { name: 'Jawwad Shah', role: 'Web Developer', age: 17, favLanguage: 'JavaScript' }
// Post Mutative Re-assignment Frame: { name: 'Jawwad Shah', role: 'Full Stack Web Developer', age: 17, favLanguage: 'JavaScript' }
// Post Immutable Transformation Frame: { name: 'Jawwad Shah', role: 'Full Stack Web Developer', age: 17, favLanguage: 'TypeScript / JavaScript' }

// What I Learned:
// - Heap Value Redirection: Understanding how re-assigning values inside specific object keys modifies the reference mapping value directly without shifting the core stack memory coordinate.
// - Immutable Context Overriding: Mastering how the object spread notation ('...') compounds properties seamlessly, giving full-stack dashboards the capability to track and reverse state updates without database data contamination.