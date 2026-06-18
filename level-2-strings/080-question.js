// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #80

// Problem Statement:
// Build a high-performance Word Frequency Counter.

// Requirements:
// Create an advanced text analytics utility that parses raw textual sentences, isolates clean individual words by purging punctuation elements while keeping compound hyphenated words intact, and aggregates recurring words into a concise key-value frequency map.

// Approach:
// 1. Setup structural fallback constraints to return an empty map object `{}` if the input is falsy.
// 2. Normalize text bounds via '.toLowerCase()' and extract clean words via a targeted regex matcher (`/[a-z0-9-]+/g`).
// 3. Chain an optimization fallback (`|| []`) to securely avoid runtime errors if the regex finds no matches.
// 4. Implement a high-order array '.reduce()' accumulator, mapping initial states straight into a literal empty dictionary object.
// 5. Leverage the JavaScript comma operator syntax to execute inline state property assignments (`(map[word] || 0) + 1`) and explicitly return the mutation reference layer ('map') within a single operational cycle.

// Code:
function shortWordCounter(text) {
  if (!text) return {};

  // Extracts alphanumeric groups and hyphen patterns while dropping punctuation rules
  const words = text.toLowerCase().match(/[a-z0-9-]+/g) || [];

  // Advanced one-liner reducer pattern applying comma operational expressions
  return words.reduce(
    (map, word) => ((map[word] = (map[map[word] ? word : word] || 0) + 1), map),
    {},
  );
}

// Running industrial test scenarios matching modern application workflows
const sampleText =
  "The best javascript repo is problem-solving repo in pakistan";
console.log("Calculated Word Map:", shortWordCounter(sampleText));

// Output:
// Calculated Word Map: {
//   the: 1,
//   best: 1,
//   javascript: 1,
//   repo: 2,
//   is: 1,
//   'problem-solving': 1,
//   in: 1,
//   pakistan: 1
// }

// What I Learned:
// - Comma Operator Multi-Tasking: Understanding how the binary comma operator evaluates multiple inline instructions from left-to-right and returns the final node segment, optimizing reducer pipeline structures.
// - Complex Word Group Filtering: Utilizing refined regular expressions (`/[a-z0-9-]+/g`) to preserve necessary compound sentence components while stripping away dirty structural markers.
