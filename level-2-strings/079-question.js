// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #79

// Problem Statement:
// Extract User Mentions from a text stream (e.g., Profile Handles).

// Requirements:
// Build a system notification parsing utility that scans commit messages, pull requests, or feed data, isolates metadata handles preceded by an ampersand symbol ("@"), preserves nested naming boundaries, and aggregates them into a structured array pool.

// Approach:
// 1. Setup absolute guard constraints to handle null or empty string arguments safely.
// 2. Apply a clean evaluation expression via the native '.match()' global pattern string scanner.
// 3. Define the tracking regular expression (`/@[\w-]+/g`):
//    - Initialize search positioning via the static user token indicator ('@').
//    - Enclose alphanumeric assets alongside dash layouts (`[\w-]`) to protect profile handles containing hyphens.
//    - Append global flags ('/g') to parse the full context timeline.
// 4. Return the filtered string array or fall back cleanly to an empty array wrapper if zero tokens are matched.

// Code:
function extractMentionsFromTitle(text) {
    if (!text) return [];

    const mentions = text.match(/@[\w-]+/g);

    // Guard clause mapping against empty match results
    if (!mentions) return [];

    return mentions;
}

// Professional production test inputs matching enterprise project logs
const engineeringLog = "The production build optimization for the repository was reviewed by @Jawwad-Shah and approved for deployment.";

console.log("Extracted Mentions:", extractMentionsFromTitle(engineeringLog));
console.log("Extracted Mentions:", extractMentionsFromTitle("System update successfully compiled. No review actions requested."));

// Output:
// Extracted Mentions: [ '@Jawwad-Shah' ]
// Extracted Mentions: []

// What I Learned:
// - Specialized String Parsing Architecture: Applying dynamic metadata lookups ('@') to extract targeted user references directly from unstructured data blocks.
// - Handle Verification Arrays: Structuring multi-token collection gates to isolate naming variables while maintaining resilience against hyphen configurations.