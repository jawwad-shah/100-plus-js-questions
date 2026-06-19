// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #86

// Problem Statement:
// Find the Second Smallest unique number inside an Array.

// Requirements:
// Create a specialized numeric sorting utility that processes an array collection, purges identical redundant elements to handle overlapping duplicates, orders the distinct values in ascending succession, and returns the target value at index position 1.

// Approach:
// 1. Install conditional length boundaries: return 'undefined' if the array length structure is insufficient to support relative lookups.
// 2. Instantiate a modern ES6 'Set' constructor (`new Set(array)`) to instantly strip away matching duplicate value entries.
// 3. Flatten the unique object nodes back down into an active operational array layout via the spread (`[...]`) pattern.
// 4. Implement a relative ascending array comparator arrow rule (`(a, b) => a - b`) to explicitly push the smallest items to the left boundary.
// 5. Access the second element slot (`distinctSorted[1]`) to return the valid second smallest scalar metric.

// Code:
const secondSmallest = (array) => {
  if (!Array.isArray(array) || array.length < 2) return undefined;

  // Stripping value collisions and sorting numerically from minimum to maximum inline
  const distinctSorted = [...new Set(array)].sort((a, b) => a - b);
  
  // Guarding against layout matrices where all initial array elements were identical numbers
  return distinctSorted.length > 1 ? distinctSorted[1] : undefined;
};

// Running production validation testing metrics
console.log("Second Smallest Node:", secondSmallest([5634, 34, 56, 78, 901]));
console.log("Second Smallest Node:", secondSmallest([12, 12, 45, 12, 89, 4])); // Testing duplicate minimum clusters

// Output:
// Second Smallest Node: 56
// Second Smallest Node: 12

// What I Learned:
// - Direct Mathematical Grid Flipping: Learning how modifying comparator polarity from 'b - a' to 'a - b' seamlessly switches array pipelines from tracking maximum structures to monitoring minimum structures.
// - Duplicate-Dense Bound Guards: Verifying the collection length post-filtration ('distinctSorted.length > 1') to prevent out-of-bounds index failures when array structures contain purely repetitive integers.