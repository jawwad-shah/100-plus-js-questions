// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #73

// Problem Statement:
// Character Frequency Map.

// Note: 
// This utility serves as an alternate semantic mapping of Problem #71 (Count Occurrences).
// Both tasks leverage an identical core algorithmic approach and architectural data flow, 
// returning matching key-value frequency objects.

// Referenced File / Twin Utility:
// -> 070-question.js

// Code (Re-utilizing the optimized functional reducer pool):
function getCharacterFrequency(str) {
    if (!str) return {};
    
    // Normalizing case structures and stripping out global whitespace gaps
    const cleanStr = str.trim().toLowerCase().replace(/\s+/g, '');
    
    return [...cleanStr].reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
}

// Running verification test metrics
console.log("Frequency Table (apple):", getCharacterFrequency("apple")); 

// Output:
// Frequency Table (apple): { a: 1, p: 2, l: 1, e: 1 }

// What I Learned:
// - Structural Redundancy Elimination: Mapping identical algorithmic procedures under separate conceptual names to keep a clean, uniform project index while reusing efficient logic.