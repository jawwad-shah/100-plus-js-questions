// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #96

// Problem Statement:
// Split a linear Array into smaller fixed-size multi-dimensional sub-arrays (Chunking).

// Requirements:
// Create an advanced data pagination utility that breaks down a single long collection stream into uniform segment matrices based on a specified chunk scale, handling irregular trailing elements cleanly.

// Approach:
// 1. Establish strict safety constraints to block negative index values or missing array exceptions early.
// 2. Instantiate a master results storage array wrapper (`chunked = []`) and an incremental pointer address (`index = 0`).
// 3. Deploy a high-speed execution constraint wrapper (`while (index < arr.length)`).
// 4. Implement native '.slice(index, index + size)' to non-destructively isolate small sequential blocks from the source database tracking array.
// 5. Instantly push each sub-block into the parent cluster and increment the cursor by the step size argument (`index += size`).

// Code:
function chunkArray(arr, size) {
  // Guard clauses ensuring valid input boundaries to prevent runtime out-of-memory lockups
  if (!Array.isArray(arr) || size <= 0) return [];
  
  const chunked = [];
  let index = 0;

  // Slicing and compiling separate segment matrix blocks continuously
  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size));
    index += size;
  }

  return chunked;
}

// Running structural enterprise tests matching pagination dash scenarios
const continuousNumbers = [1, 2, 3, 4, 5, 6, 7];
console.log("Chunked Structural Layout:", chunkArray(continuousNumbers, 3));

const frontendFrameworks = ['React', 'Tailwind', 'HTML', 'JavaScript', 'Node', 'SaaS'];
console.log("Chunked Layout (Size 2):", chunkArray(frontendFrameworks, 2));

// Output:
// Chunked Structural Layout: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]
// Chunked Layout (Size 2): [ [ 'React', 'Tailwind' ], [ 'HTML', 'JavaScript' ], [ 'Node', 'SaaS' ] ]

// What I Learned:
// - Non-Destructive Data Segmentation: Understanding how to create balanced grid nodes from unified linear arrays by linking sliding dynamic index counters straight with native '.slice()' bounds.
// - Edge-Case Boundary Truncation: Verifying that '.slice()' natively tracks array end limits automatically when the remaining elements are smaller than the step size, preventing out-of-bound errors.