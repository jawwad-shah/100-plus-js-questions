// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #67

// Problem Statement:
// Find the Shortest Word within a given String.

// Requirements:
// Build an evaluation algorithm that splits a text line into isolated words and correctly identifies the absolute smallest word by length metrics.

// Approach:
// 1. Check for empty string inputs via an immediate guard clause.
// 2. Convert the text into an array of individual words using '.trim().split(" ")'.
// 3. Initialize the 'shortest' variable with the VERY FIRST word of that array ('words[0]') instead of an empty string.
// 4. Loop through the rest of the elements. If any word's length is smaller than our current 'shortest' word, overwrite it.

// Code:
function shortestWord(str) {
    if (!str) return '';
    
    const words = str.trim().split(" ");
    // Seed the tracker with the first word as the baseline benchmark
    let shortest = words[0]; 

    words.forEach(e => {
        // Now real comparisons work perfectly (e.g., 2 < 5 is True)
        if (e.length < shortest.length) {
            shortest = e;
        }
    });

    return shortest;
}

console.log("Shortest word is:", shortestWord('Hello World From JS'));

// Output:
// Shortest word is: JS

// What I Learned:
// - Baseline Seeding Concepts: Realizing that minimum value trackers cannot be initialized at zero/empty boundaries, and should instead be seeded with the first collection node ('array[0]') to ensure valid scaling logic.
// - Algorithmic Comparison Directions: Understanding how initial bounds impact mathematical comparisons inside iterative loops.