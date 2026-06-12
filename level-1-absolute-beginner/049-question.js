// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #49

// Problem Statement:
// Reverse the digits of an Integer (Handling Negative States).

// Requirements:
// Create a modern conversion utility that completely reverses any input integer's numeric order while maintaining its mathematical sign state (positive or negative).

// Approach:
// 1. Cast the input number 'n' to a string using '.toString()' to expose its individual structural indexes.
// 2. Chain '.split('')' to slice characters into an isolated array, then invoke '.reverse()' to invert the index array positions.
// 3. Re-compile the elements back into a continuous string structure using '.join('')'.
// 4. Wrap the inverted sequence inside 'parseFloat()' to extract its absolute numerical value, purging any unwanted leading zeros.
// 5. Multiply the reversed integer by 'Math.sign(n)' to cleanly re-apply the original positive/negative boundary state.

// Code:
function reversedFnc(n) {
    let reversed = parseFloat(n.toString().split('').reverse().join(''));
    return reversed * Math.sign(n);
}

// Testing the milestone integrity across numeric sign variants
console.log("Reversing -667:", reversedFnc(-667)); // Returns: -766
console.log("Reversing 520:", reversedFnc(520));   // Returns: 25 (Clears leading zero)
console.log("Reversing 894:", reversedFnc(894));   // Returns: 498

// Output:
// Reversing -667: -766
// Reversing 520: 25
// Reversing 894: 498

// What I Learned:
// - Native Array Inversion Pipelines: Chaining continuous array manipulation operations (split/reverse/join) to execute complex text/data re-ordering tasks.
// - Sign State Persistence: Using mathematical operators like 'Math.sign()' to secure original structural properties across intense datatype casting updates.