// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #77

// Problem Statement:
// Generate an SEO-Friendly URL Slug from a given Title string.

// Requirements:
// Build a structural routing utility that converts raw post titles into web-safe URL slugs. The function must normalize case lines, discard special symbols/punctuation completely, and replace dynamic spacing blocks with unified single hyphens.

// Approach:
// 1. Force overall character normalization using '.toLowerCase()' and extract edge padding through '.trim()'.
// 2. Apply a strict regular expression filter (`/[^a-z0-9\s-]/g`) to strip out invalid URI nodes like punctuation marks, dots, or exclamation symbols.
// 3. Swap out multi-space cluster configurations (`/\s+/g`) with a baseline hyphen character ('-').
// 4. Implement a defensive regex compress map (`/-+/g`) to squash consecutive duplicate hyphens down into a single clean hyphen delimiter.

// Code:
function generateSlug(title) {
    if (!title) return '';

    return title
        .toLowerCase()                           
        .trim()                                  
        .replace(/[^a-z0-9\s-]/g, '')             // Purges non-alphanumeric/non-space elements
        .replace(/\s+/g, '-')                     // Converts active whitespace tokens into dashes
        .replace(/-+/g, '-');                     // Collapses multiple trailing hyphens into one
}

// Running structural portfolio testing metrics
console.log("Generated URI Slug:", generateSlug("Tailwind CSS UI Dashboard v2.0!!!"));
console.log("Generated URI Slug:", generateSlug("  Open-Source JavaScript Logic Building Challenge 100+  "));

// Output:
// Generated URI Slug: tailwind-css-ui-dashboard-v20
// Generated URI Slug: open-source-javascript-logic-building-challenge-100

// What I Learned:
// - Regular Expression Sanitation Chaining: Designing robust string transformation graphs by layering distinct regular expression steps to eliminate dirty database text feeds safely.
// - Content Route Flattening: Structuring uniform asset addresses (slugs) to maximize application route visibility and conform to standard SEO indexing patterns.