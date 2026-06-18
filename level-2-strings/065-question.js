// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #65

// Problem Statement:
// Complete URL Structure Validator.

// Approach:
// 1. We added 'localhost' as an explicit alternative mapping alongside standard domain strings and IP patterns.
// 2. Modified the pattern to: 'localhost|((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,})'
// 3. This ensures that when you test standard production apps or local vite/react dev servers, the verification passes seamlessly.

// Code:
function isValidUrl(url) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' +                          // 1. Protocol (http or https)
    '(localhost|' +                                // 2. PATCH: Explicitly allow 'localhost' OR...
    '(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // ...Standard domains (e.g., netlify.app)
    '((\\d{1,3}\\.){3}\\d{1,3}))' +                // 3. IP (v4) address alternate
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +            // 4. Port numbers (like :5173) and routing paths
    '(\\?[;&a-z\\d%_.~+=-]*)?' +                   // 5. Query string parameters
    '(\\#[-a-z\\d_]*)?$',                          // 6. Fragment locators/hashes
    'i'                                            // Case-insensitive compilation flag
  );
  
  return pattern.test(url);
}

// Re-testing the edge environments
console.log("Local Dev Link:", isValidUrl('http://localhost:5173/dashboard')); // Returns: true (FIXED!)
console.log("Portfolio Link:", isValidUrl('https://jawwad-shah.netlify.app/')); // Returns: true
console.log("Invalid Extension:", isValidUrl('http://eroor.i'));                  // Returns: false

// Output:
// Local Dev Link: true
// Portfolio Link: true
// Invalid Extension: false

// What I Learned (Bug Fix Addition):
// - Local Environment Edge Cases: Realizing that development hostnames like 'localhost' bypass standard TLD dot-casing structures, requiring explicit alternation pipes ('|') inside validation algorithms.