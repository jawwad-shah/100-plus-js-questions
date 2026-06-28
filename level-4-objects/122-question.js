// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #122

// Problem Statement:
// Dynamically append an external Property/Key-Value pair into an existing JavaScript Object instance.

// Requirements:
// Create an object transformation tracking utility that instantiates a baseline developer identity profile snapshot, injects a secondary alias identifier parameter dynamically via mutation syntax, and safely validates the output model.

// Approach:
// 1. Establish an early parameter check to ensure that the target profile is a valid, non-null object reference before attempting modifications.
// 2. Utilize standard direct Dot Notation lookup mapping syntax (`object.newKey = value`) to append the properties directly.
// 3. Alternatively, handle adaptive situations using Bracket Notation syntax (`object['key']`) to show multi-pattern fluency suited for dynamic input streams.
// 4. Return the augmented resulting data structure securely to update downstream application states.

// Code:
function augmentUserProfile(profile, dynamicKey, dynamicValue) {
    if (typeof profile !== 'object' || profile === null) return {};

    // Standard Direct Append Execution via Dot Notation as used in Problem #123
    profile.nickname = 'JS';

    // Advanced Adaptive Append Execution via Bracket Notation to support dynamic keys inputs
    if (dynamicKey && dynamicValue) {
        profile[dynamicKey] = dynamicValue;
    }

    return profile;
}

// Defining baseline structure layout parameters matching data registries
const userProfile = {
    name: "Jawwad Shah",
    role: "Web Developer",
    age: 17,
    favLanguage: "JavaScript"
};

// Running industrial production validation tracking flows matching portfolio schemas
console.log("Before Property Augmentation Pipeline:", { ...userProfile });

// Augmenting properties safely in real-time execution flow
const augmentedUser = augmentUserProfile(userProfile, 'githubActive', true);
console.log("After Property Augmentation Pipeline:", augmentedUser);

// Output:
// Before Property Augmentation Pipeline: { name: 'Jawwad Shah', role: 'Web Developer', age: 17, favLanguage: 'JavaScript' }
// After Property Augmentation Pipeline: { name: 'Jawwad Shah', role: 'Web Developer', age: 17, favLanguage: 'JavaScript', nickname: 'JS', githubActive: true }

// What I Learned:
// - Object Mutability Mapping: Mastering how JavaScript stores object structures as open heap records, allowing seamless key injections without breaking the constant memory address layout.
// - Dot vs Bracket Syntax Selection: Understanding when to deploy explicit dot assignments for static structures vs bracket key variables (`profile[dynamicKey]`) to accommodate flexible data inputs from external client payloads safely.