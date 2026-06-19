// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #93

// Problem Statement:
// Identify and extract all missing numbers from an un-ordered sequence array range.

// Requirements:
// Create an analytical numeric logic utility that scans an array of non-consecutive integers, identifies any missing intermediate values inside the numerical bounds, and aggregates the missing numbers sequentially into a separate results array.

// Approach:
// 1. Establish defensive validations to handle empty datasets or single element snapshots safely.
// 2. Clone and order the primary dataset via non-destructive numeric sorting (`[...arr].sort((a, b) => a - b)`) to align elements in ascending progression.
// 3. Initiate an outer pointer loop tracking adjacent index nodes: 'current' (`sorted[i]`) and 'next' (`sorted[i + 1]`).
// 4. Implement an inner state conditional loop (`while (current + 1 < next)`) to incrementally log intermediate values into the 'missing' array array container until the sequence gap collapses.
// 5. Return the comprehensive collection of missing elements.

// Code:
function findMissingNumbers(arr) {
    if (!Array.isArray(arr) || arr.length < 2) return [];

    // Sorting elements numerically to establish seamless linear step testing bounds
    const sorted = [...arr].sort((a, b) => a - b);
    const missing = [];

    for (let i = 0; i < sorted.length - 1; i++) {
        let current = sorted[i];
        let next = sorted[i + 1];

        // Fill consecutive step spaces globally between the values
        while (current + 1 < next) {
            current++;
            missing.push(current);
        }
    }

    return missing;
}

// Running edge-case and sequence validation tests on enterprise streams
const sampleDataset = [1, 5, 2, 8];
console.log("Extracted Gaps Pool:", findMissingNumbers(sampleDataset)); 
// Output gaps: [3, 4, 6, 7]

const massiveGapArray = [1, 89, 34, 2];
const generatedGaps = findMissingNumbers(massiveGapArray);
console.log(`Extracted Gaps Count: ${generatedGaps.length} elements found between 1 and 89.`);
console.log("Snapshot of Missing Gap Elements:", generatedGaps.slice(0, 10), "...and more.");

// Output:
// Extracted Gaps Pool: [ 3, 4, 6, 7 ]
// Extracted Gaps Count: 85 elements found between 1 and 89.
// Snapshot of Missing Gap Elements: [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] ...and more.

// What I Learned:
// - Sequential Value Interception: Designing combined 'for-while' tracking pointers to calculate dynamic intermediate spacing across separate discrete digits inside memory clusters.
// - Ordered Boundary Map Compacting: Recognizing that array layout order normalization is required before checking numeric bounds to ensure consistent step tracking outputs.