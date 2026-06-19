// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #117

// Problem Statement:
// Construct a Product Array Except Self where each index contains the multiplication product of all elements except the one at the current index position.

// Requirements:
// Create an advanced algorithmic processing utility that solves the exclusion product problem in strict O(N) runtime complexity and O(1) auxiliary spatial footprint, without utilizing the division operator ('/') to guarantee absolute structural safety against zero-division errors.

// Approach:
// 1. Establish strict safety constraints to return an empty array literal `[]` instantly if the input parameter dataset is null or invalid.
// 2. Instantiate a fixed-length output container (`new Array(length)`) and seed the initial tracking baseline address with `output[0] = 1`.
// 3. Forward Pass (Prefix Scan): Run a linear loop from left to right, computing the cumulative prefix products where `output[i] = output[i - 1] * nums[i - 1]`.
// 4. Inverted Pass (Suffix Scan): Establish a tracking accumulator (`let rightProduct = 1`) and scan backwards from the tail to the head edge (`i--`).
// 5. Multiply the existing prefix score stored at the target slot by the dynamic `rightProduct` stream, then update the accumulator block continuously.

// Code:
function productExceptSelf(nums) {
    if (!Array.isArray(nums) || nums.length === 0) return [];

    const length = nums.length;
    const output = new Array(length);
    
    // Step 1: Accumulate prefix coordinates tracking from left-to-front
    output[0] = 1;
    for (let i = 1; i < length; i++) {
        output[i] = output[i - 1] * nums[i - 1];
    }
    
    // Step 2: Concurrently compound suffix boundaries scanning right-to-left
    let rightProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
        output[i] = output[i] * rightProduct;
        rightProduct = rightProduct * nums[i]; 
    }

    return output;
}

// Running industrial production validation tracking loops matching dashboard configurations
const cleanPool = [1, 2, 3, 4];
console.log("Computed Product Vectors:", productExceptSelf(cleanPool)); // Output: [24, 12, 8, 6]

const zeroContainPool = [2, 3, 0, 5];
console.log("Computed Product Vectors (With Zero):", productExceptSelf(zeroContainPool)); // Output: [0, 0, 30, 0]

// Output:
// Computed Product Vectors: [ 24, 12, 8, 6 ]
// Computed Product Vectors (With Zero): [ 0, 0, 30, 0 ]

// What I Learned:
// - Prefix/Suffix Array Partitioning: Mastering how merging split accumulation maps allows developers to exclude individual targeted elements without wiping computational memory traces.
// - Divisionless Math Protection: Understanding how avoiding conditional division constraints ensures data integrity across enterprise pipelines when filtering fields containing neutral zeros.