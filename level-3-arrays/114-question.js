// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #114

// Problem Statement:
// Calculate the statistical Median (absolute middle value) from a numerical Array collection.

// Requirements:
// Create an advanced data optimization utility that handles mutable data footprints, clones and sorts real number lines numerically, isolates explicit odd or even length structures, and computes the exact central coordinate safely.

// Approach:
// 1. Establish strict safety constraints to return a safe baseline zero `0` early if the data stream is invalid or empty.
// 2. Clone the initial source array immutably using the modern ES6 spread syntax (`[...array]`) to safeguard initial timeline parameters against accidental modifications.
// 3. Apply the native sorting engine using an explicit numeric comparison arrow rule (`(a, b) => a - b`) to bypass default lexicographical character tracking bugs.
// 4. Capture the linear dataset boundary scope limits (`length`) and divide by two using standard truncation (`Math.floor(length / 2)`).
// 5. Deploy a binary mathematical validation constraint rule (`if (length % 2 === 0)`):
//    - If the set is Even, return the average aggregate of the two surrounding center cell indices (`(sorted[mid - 1] + sorted[mid]) / 2`).
//    - If the set is Odd, instantly yield the clean standalone middle index node (`sorted[mid]`).

// Code:
function findMedian(array) {
    if (!Array.isArray(array) || array.length === 0) return 0;

    // Creating an isolated numeric sorted cluster wrapper to preserve the source footprint
    const sorted = [...array].sort((a, b) => a - b);
    const length = sorted.length; 
    const mid = Math.floor(length / 2);

    // Dynamic processing route handling depending on sequence matrix polarity
    if (length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    }

    return sorted[mid];
}

// Running industrial production logging workflows matching analytics dashboard requirements
const evenLengthPool = [10, 20, 30, 40, 90, 110];
console.log("Computed Statistical Median (Even Stream):", findMedian(evenLengthPool)); // (30 + 40) / 2 = 35

const oddLengthPool = [5, 12, 3, 21, 8]; 
console.log("Computed Statistical Median (Odd Stream):", findMedian(oddLengthPool)); // Sorted: [3, 5, 8, 12, 21] -> Middle: 8

// Output:
// Computed Statistical Median (Even Stream): 35
// Computed Statistical Median (Odd Stream): 8

// What I Learned:
// - Non-Destructive Numerical Sorting: Reviewing how pairing standard slice/spread cloning arrays alongside clear custom callback conditions ('a - b') secures arithmetic values against text sorting mutations.
// - Statistical Condition Splitting: Understanding the strict operational variance between parsing even-indexed mid points vs odd central coordinates to ensure absolute data tracking accuracy across enterprise calculation layers.