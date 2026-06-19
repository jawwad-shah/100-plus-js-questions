// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #115

// Problem Statement:
// Identify and extract the statistical Mode (most frequently occurring element) from an Array.

// Requirements:
// Create an advanced data indexing utility that compiles individual instance metrics via key-value hash stores, scans occurrence scores linearly, and returns the absolute dominant value with dynamic data type preservation.

// Approach:
// 1. Establish strict structural boundary guards to safely return null if the incoming dataset reference is falsy or blank.
// 2. Instantiate an empty occurrence dictionary mapping bucket (`const freqMap = {}`) to aggregate raw matrix tokens.
// 3. Deploy a high-speed linear tracking loop to iterate across index coordinates (`array.length`), incrementing frequency balances: `freqMap[item] = (freqMap[item] || 0) + 1`.
// 4. Run an object reference analysis loop (`for...in`) across the accumulated keys mapping database.
// 5. If a property score breaks past the local `maxCount` threshold window, instantly scale the reference values up and bind the structural winner element natively.

// Code:
function findMode(array) {
    if (!Array.isArray(array) || array.length === 0) return null;

    const freqMap = {};
    let maxCount = 0;
    let mode = null;

    // First Pass: Building linear occurrences analytics matrix database
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        freqMap[item] = (freqMap[item] || 0) + 1;
    }

    // Second Pass: Evaluating tracking metrics to isolate the highest coordinate frequency
    for (const key in freqMap) {
        if (freqMap[key] > maxCount) {
            maxCount = freqMap[key];
            
            // Checking if the key represents a valid structural base integer to prevent NaN bugs on string arrays
            mode = !isNaN(key) && key.trim() !== "" ? Number(key) : key;
        }
    }

    return mode;
}

// Running industrial production validation testing matching layout dashboard requirements
const numbersPool = [1, 3, 3, 3, 2, 1, 1, 3, 2, 4];
console.log("Calculated Analytical Mode (Integers):", findMode(numbersPool)); // Output: 3

const stringMetricsPool = ['React', 'Tailwind', 'JS', 'React', 'SaaS', 'React'];
console.log("Calculated Analytical Mode (Strings Pool):", findMode(stringMetricsPool)); // Output: 'React'

// Output:
// Calculated Analytical Mode (Integers): 3
// Calculated Analytical Mode (Strings Pool): React

// What I Learned:
// - Linear Hash Map Analysis ($O(N)$): Mastering how breaking down continuous array collections into indexable object frequencies removes the bottleneck of resource-heavy nested iterations.
// - Type-Safe Property Coercion: Understanding how testing property metadata boundaries ('isNaN') prevents structural string inputs from falling back to runtime execution failures inside full-stack dashboard configurations.