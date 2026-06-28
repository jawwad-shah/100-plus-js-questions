// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #123

// Problem Statement:
// Safely remove/delete a Property Key-Value configuration from a JavaScript Object instance.

// Requirements:
// Create an object restructuring utility that instantiates a baseline developer configuration profile, purges a specified metadata entry block, and evaluates the final object layout safely using standard structural tracking patterns.

// Approach:
// 1. Establish strict safety verification guards to confirm that the input reference is a valid object before executing destructive operations.
// 2. Deploy the native keyword operator (`delete object.property`) to remove target properties directly in a mutative execution layer.
// 3. Alternatively, implement an immutable rest destructuring method (`const { key, ...rest } = obj`) as a clean production alternative that drops properties without triggering shape-shifting overhead inside runtime hidden classes.
// 4. Return the sanitized data structure to update corporate state trees smoothly.

// Code:
function sanitizeProfile(profile, keyToRemove) {
    if (typeof profile !== 'object' || profile === null) return {};

    // Standard Imperative Deletion (As implemented in Problem #124)
    // delete profile.favLanguage; // Explicit target wipe

    // Modern Enterprise Immutable Alternative:
    // Destructuring splits the target key into an isolated block, and collects everything else into 'rest'
    const { [keyToRemove]: discarded, ...cleanedProfile } = profile;

    return cleanedProfile;
}

// Defining initial layout matrix data points matching schema requirements
const activeUser = {
    name: "Jawwad Shah",
    role: "Web Developer",
    age: 17,
    favLanguage: "JavaScript"
};

// Running industrial production logging workflows matching dashboard analytics
console.log("Initial Unsanitized State Record:", activeUser);

// Method A: Direct In-Place Mutation Execution Flow
delete activeUser.favLanguage;
console.log("Post Mutative Deletion Snapshot:", activeUser);

// Method B: Processing Clean Immutable Sanitation Flow on the remaining layout
const finalSanitizedUser = sanitizeProfile(activeUser, 'age');
console.log("Post Immutable Sanitation Snapshot:", finalSanitizedUser);

// Output:
// Initial Unsanitized State Record: { name: 'Jawwad Shah', role: 'Web Developer', age: 17, favLanguage: 'JavaScript' }
// Post Mutative Deletion Snapshot: { name: 'Jawwad Shah', role: 'Web Developer', age: 17 }
// Post Immutable Sanitation Snapshot: { name: 'Jawwad Shah', role: 'Web Developer' }

// What I Learned:
// - Memory Map Alterations: Understanding how the 'delete' operator explicitly un-binds key mappings directly from heap memory records, modifying the object structure in real-time execution.
// - Immutable Rest Sanitization: Mastering how pairing dynamic variable destructuring with the rest token ('...') lets developers extract clean data models without breaking baseline system layouts or causing execution delays in full-stack states.