# 🧠 100+ JavaScript Problem Solving Challenges

[![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Runtime-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![ES6+](https://img.shields.io/badge/Spec-ES6+-blue?style=for-the-badge)](https://tc39.es/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)
[![Open Source](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red?style=for-the-badge)](https://github.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge)](https://github.com/)

<br/>

**Just memorizing syntax is not enough — the real game is about logic.**  
This repository was built with exactly that mindset.

---

## 📌 About This Repository

I created this repository because there came a point where I felt that just watching tutorials wasn't going to cut it. Programming doesn't truly "make sense" until you open a blank file and solve problems yourself — you only "know about" it, you don't actually understand it.

So I decided to take a structured, problem-by-problem approach to genuinely build my logical thinking. No shortcuts, no copy-paste. Just clean code, clear logic, and documented learning.

This repository is kept **open-source** so that other developers and absolute beginners in the community can also benefit from this structured flow — learn clean code patterns and properly understand programming fundamentals.

---

## 📊 Overall Progress

| Level | Topic | Problems | Status | Progress |
|-------|-------|----------|--------|----------|
| 1 | Absolute Beginner | 1–50 | ✅ Completed | `██████████` 50/50 |
| 2 | Strings | 51–80 | ✅ Completed | `██████████` 30/30 |
| 3 | Arrays | 81–120 | ✅ Completed | `██████████` 40/40 |
| 4 | Objects | 121–140 | ✅ Completed | `██████████` 20/20 |
| 5 | DOM Projects | 141–170 | 🔒 Not Started | `░░░░░░░░░░` 0/30 |
| 6 | Advanced / Core CS | 171–200 | 🔒 Not Started | `░░░░░░░░░░` 0/30 |
| | | **Total** | | **140 / 200 Completed** |

---

## 🗂️ Repository Structure

```
100+-js-questions/
├── level-1-absolute-beginner/
│   ├── 001-question.js
│   ├── 002-question.js
│   └── ...
├── level-2-strings/
├── level-3-arrays/
├── level-4-objects/
├── level-5-dom/
├── level-6-advanced/
├── LICENSE
└── README.md
```

---

## 📐 File Architecture Template

Every problem file strictly follows this exact structured flow:

```js
// Problem #[Number]

// Problem Statement:
// [What needs to be solved]

// Requirements:
// [Validation rules and constraints]

// Approach:
// 1. [Step-by-step logic plan]

// Code:
function solve(param) {
    if (invalidCondition) {
        throw new Error("Clear error message.");
    }
    return result;
}

console.log(solve(value));

// Output:
// [Expected result]

// What I Learned:
// - [Core concept learned from this problem]
```

---

## 🚀 How to Use

```bash
# Step 1: Clone the repository
git clone https://github.com/your-username/100-plus-js-questions.git

# Step 2: Navigate into the folder
cd 100-plus-js-questions

# Step 3: Run any file
node level-1-absolute-beginner/001-question.js
```

> **Note:** Only Node.js needs to be installed. No extra packages or dependencies required.

---

## 📁 Level 1 — Absolute Beginner (1–50)

**Status: ✅ Completed**

| # | Problem | Status | What I Learned |
|---|---------|--------|----------------|
| 01 | [Hello World](./level-1-absolute-beginner/001-question.js) | ✅ Done | I learned to use const for fixed variables, double quotes for strings, and console.log() to print output. |
| 02 | [Print Name](./level-1-absolute-beginner/002-question.js) | ✅ Done | I learned variable declaration, handling text strings, and printing them to the console using console.log(). |
| 03 | [Add Numbers](./level-1-absolute-beginner/003-question.js) | ✅ Done | I learned functions, parameters, return values, addition, and template literals. |
| 04 | [Subtract Numbers](./level-1-absolute-beginner/004-question.js) | ✅ Done | I learned how to declare and execute functions, pass multiple parameters, use the subtraction operator, and handle negative return values in JavaScript. |
| 05 | [Multiply Numbers](./level-1-absolute-beginner/005-question.js) | ✅ Done | I learned to use the multiplication operator, create dynamic and reusable functions, and pass actual arguments when calling functions with parameters. |
| 06 | [Divide Numbers](./level-1-absolute-beginner/006-question.js) | ✅ Done | I learned to use the division operator, handle automatic floating-point decimal outputs, and map arguments to parameters for dynamic function reusability. |
| 07 | [Remainder](./level-1-absolute-beginner/007-question.js) | ✅ Done | I learned how to use the modulus operator to extract the remainder of a division operation and apply its practical logic in JavaScript. |
| 08 | [Even Odd](./level-1-absolute-beginner/008-question.js) | ✅ Done | I learned to implement conditional `if` statements, use strict equality (`===`), apply the early return pattern to avoid `else` blocks, and check for even numbers using modulus parity logic. |
| 09 | [Positive Negative](./level-1-absolute-beginner/009-question.js) | ✅ Done | I learned to chain ternary operators for handling multiple conditions in a single line, write cleaner multi-conditional logic, and correctly manage neutral edge cases like zero. |
| 10 | [Swap Numbers](./level-1-absolute-beginner/010-question.js) | ✅ Done | I learned to use `let` for mutable variables, apply temporary storage logic (`temp`) to swap values safely, and utilize modern array destructuring (`[a, b] = [b, a]`) for one-line swaps. |
| 11 | [Largest of Two](./level-1-absolute-beginner/011-question.js) | ✅ Done | I learned to compare numbers efficiently using conditional expressions, utilize the built-in `Math.max()` method to find maximum values, and apply multiple flexible approaches to solve a single logical problem. |
| 12 | [Smallest of Two](./level-1-absolute-beginner/012-question.js) | ✅ Done | I learned to compare numbers to find the smallest value using expressions, utilize the built-in `Math.min()` method, and carefully audit copied templates to ensure accurate documentation. |
| 13 | [Largest of Three](./level-1-absolute-beginner/013-question.js) | ✅ Done | I learned to use the logical AND (`&&`) operator to group multiple conditions, apply `else if` for clean conditional branching, and pass multiple arguments into `Math.max()` to find the highest value. |
| 14 | [Leap Year](./level-1-absolute-beginner/014-question.js) | ✅ Done | I learned to combine logical AND (`&&`) and OR (`||`) operators for complex conditional logic, use strict inequality (`!==`), and handle real-world edge cases like historical calendar tracking rules. |
| 15 | [Voting Eligibility](./level-1-absolute-beginner/015-question.js) | ✅ Done | I learned to write meaningful user-centric response strings, tailor edge-case logic to fit the application theme, and use relational operators (`<`, `<=`) to cleanly split logic into distinct age groups. |
| 16 | [Age Calculator](./level-1-absolute-beginner/016-question.js) | ✅ Done | I learned to utilize the built-in `Date` object and `.getFullYear()` for dynamic date handling, write future-proof logic that adapts automatically over time, and combine runtime variables with historical parameters for real-world calculations. |
| 17 | [Area Rectangle](./level-1-absolute-beginner/017-question.js) | ✅ Done | I learned to map geometric formulas into programmatic functions, process multiple independent numerical dimensions using multi-parameter computation, and use clear variable labeling like `length` and `width` to ensure high code readability. |
| 18 | [Area Circle](./level-1-absolute-beginner/018-question.js) | ✅ Done | I learned `Math.PI` for precision, `Math.pow()` for exponents, and `.toFixed()` for decimals. |
| 19 | [Perimeter Rectangle](./level-1-absolute-beginner/019-question.js) | ✅ Done | I learned perimeter logic, `throw new Error` for safety, and parenthesis precedence. |
| 20 | [Temperature Converter](./level-1-absolute-beginner/020-question.js) | ✅ Done | I learned to return objects, use advanced string injection, and code thermal physics. |
| 21 | [BMI Calculator](./level-1-absolute-beginner/021-question.js) | ✅ Done | I learned formula translation, unit normalization, and structured data returns. |
| 22 | [Percentage Calculator](./level-1-absolute-beginner/022-question.js) | ✅ Done | I learned formula mapping, appending strings for context, and operator precedence. |
| 23 | [Grade Calculator](./level-1-absolute-beginner/023-question.js) | ✅ Done | I learned logic multi-layering, range bound checking, and compound object outputs. |
| 24 | [Simple Interest](./level-1-absolute-beginner/024-question.js) | ✅ Done | I learned financial algorithms, pro-rata breakdowns, and text humanization. |
| 25 | [Compound Interest](./level-1-absolute-beginner/025-question.js) | ✅ Done | I learned formula documentation, compounding frequencies, `Math.pow()`, and financial logic precision. |
| 26 | [Minutes to Seconds](./level-1-absolute-beginner/026-question.js) | ✅ Done | I learned ES6 arrow functions with implicit returns and shorthand time conversion. |
| 27 | [Hours to Minutes](./level-1-absolute-beginner/027-question.js) | ✅ Done | I learned arrow function shorthand syntax and programmatic time scaling. |
| 28 | [Days to Hours](./level-1-absolute-beginner/028-question.js) | ✅ Done | I learned time-constant validation and implicit return arrow syntax. |
| 29 | [Number to String](./level-1-absolute-beginner/029-question.js) | ✅ Done | I learned defensive type checking with `typeof`, guard clauses, and string interpolation. |
| 30 | [String to Number](./level-1-absolute-beginner/030-question.js) | ✅ Done | I learned reverse type casting with `Number()`, string validation, and type coercion safety. |
| 31 | [Type Checker](./level-1-absolute-beginner/031-question.js) | ✅ Done | I learned dynamic type reflection using `typeof` and implicit metadata retrieval. |
| 32 | [Square Number](./level-1-absolute-beginner/032-question.js) | ✅ Done | I learned comparative syntax using `` over `Math.pow`, and code cleanliness. |
| 33 | [Cube Number](./level-1-absolute-beginner/033-question.js) | ✅ Done | I learned exponential scaling (cube vs square) and core reusability in testing. |
| 34 | [Power Calculator](./level-1-absolute-beginner/034-question.js) | ✅ Done | I learned functional dynamism via flexible arguments and abstracted exponential structures. |
| 35 | [Random Number](./level-1-absolute-beginner/035-question.js) | ✅ Done | I learned randomization mechanics and numeric range scaling to specific intervals. |
| 36 | [Dice Roll](./level-1-absolute-beginner/036-question.js) | ✅ Done | Constraining random output to 1–6 using floor and scaling |
| 37 | [Coin Toss](./level-1-absolute-beginner/037-question.js) | ✅ Done | Binary random outcome simulation with conditional branching |
| 38 | [OTP Generator](./level-1-absolute-beginner/038-question.js) | ✅ Done | Generating fixed-length numeric codes using random math |
| 39 | [Password Generator](./level-1-absolute-beginner/039-question.js) | ✅ Done | Combining character sets and looping for secure random strings |
| 40 | [Multiplication Table](./level-1-absolute-beginner/040-question.js) | ✅ Done | Loop-based output formatting and iterative multiplication |
| 41 | [Print 1–100](./level-1-absolute-beginner/041-question.js) | ✅ Done | Basic for-loop iteration and sequential console output |
| 42 | [Print Even Numbers](./level-1-absolute-beginner/042-question.js) | ✅ Done | Filtering loop output using modulus condition |
| 43 | [Print Odd Numbers](./level-1-absolute-beginner/043-question.js) | ✅ Done | Inverted modulus filter for odd number detection |
| 44 | [Sum 1–100](./level-1-absolute-beginner/044-question.js) | ✅ Done | Accumulator pattern and loop-based summation |
| 45 | [Factorial](./level-1-absolute-beginner/045-question.js) | ✅ Done | Recursive and iterative approaches to factorial computation |
| 46 | [Fibonacci](./level-1-absolute-beginner/046-question.js) | ✅ Done | Sequence generation using loop state variables |
| 47 | [Prime Number](./level-1-absolute-beginner/047-question.js) | ✅ Done | Divisibility checks and early exit optimization |
| 48 | [Armstrong Number](./level-1-absolute-beginner/048-question.js) | ✅ Done | Digit extraction and power-sum comparison logic |
| 49 | [Reverse Number](./level-1-absolute-beginner/049-question.js) | ✅ Done | Modulus-based digit reversal algorithm |
| 50 | [Palindrome Number](./level-1-absolute-beginner/050-question.js) | ✅ Done | Comparing original vs reversed number for palindrome check |

---

## 📁 Level 2 — Strings (51–80)

**Status: ✅ Completed**

| # | Problem | Status | What I Learned |
|---|---------|--------|----------------|
| 51 | [Reverse String](./level-2-strings/051-question.js) | ✅ Done | Used `.trim()` to remove edge spaces, then split, reversed, and joined the string back. |
| 52 | [Count Characters](./level-2-strings/052-question.js) | ✅ Done | `.length` gives a 1-based count and spaces are counted as characters too. |
| 53 | [Count Words](./level-2-strings/053-question.js) | ✅ Done | Used `split(" ")` for word splitting and `/\s+/` regex for handling irregular spaces. |
| 54 | [Count Vowels](./level-2-strings/054-question.js) | ✅ Done | Used `.includes()` to check each character against vowels with a `for...of` loop. |
| 55 | [Count Consonants](./level-2-strings/055-question.js) | ✅ Done | Used `!includes()` to skip vowels and comparison operators to filter non-alphabetic characters. |
| 56 | [Convert Uppercase](./level-2-strings/056-question.js) | ✅ Done | Chained `.trim()` with `.toUpperCase()` for clean output. |
| 57 | [Convert Lowercase](./level-2-strings/057-question.js) | ✅ Done | Used `.toLowerCase()` after trimming for consistent, case-normalized output. |
| 58 | [Capitalize First Letter](./level-2-strings/058-question.js) | ✅ Done | Used `.charAt(0)` to isolate the first character and `.slice()` for the rest. |
| 59 | [Capitalize Every Word](./level-2-strings/059-question.js) | ✅ Done | Combined `split`, `map`, and `join` to capitalize the first letter of each word. |
| 60 | [Remove Spaces](./level-2-strings/060-question.js) | ✅ Done | Used `/\s/g` regex with `.replace()` to remove all whitespace globally. |
| 61 | [Replace Word](./level-2-strings/061-question.js) | ✅ Done | Used `.replace()` targeting the exact substring to swap words inside a string. |
| 62 | [Extract Initials](./level-2-strings/062-question.js) | ✅ Done | Used `.charAt(0).toUpperCase()` on each word to extract and format initials. |
| 63 | [Username Generator](./level-2-strings/063-question.js) | ✅ Done | Used nested object lookups, `Math.random()` for variety, and `/\s+/g` to strip spaces. |
| 64 | [Email Validator](./level-2-strings/064-question.js) | ✅ Done | Built a regex pattern and used `.test()` to return a boolean validation result. |
| 65 | [URL Validator](./level-2-strings/065-question.js) | ✅ Done | Added `localhost` as an explicit alternation in the regex to handle dev environment edge cases. |
| 66 | [Find Longest Word](./level-2-strings/066-question.js) | ✅ Done | Initialized tracker with `""` and stored the actual word, not the boolean result. |
| 67 | [Find Shortest Word](./level-2-strings/067-question.js) | ✅ Done | Seeded the tracker with `array[0]` instead of zero to avoid false minimum comparisons. |
| 68 | [Check Palindrome String](./level-2-strings/068-question.js) | ✅ Done | Converted string to array, used `.reverse()`, then compared with the lowercased original. |
| 69 | [Check Anagram](./level-2-strings/069-question.js) | ✅ Done | Checked length equality first, then sorted both strings and compared them. |
| 70 | [Count Occurrences](./level-2-strings/070-question.js) | ✅ Done | Used `.reduce()` to build a frequency object with `|| 0` fallback for safe increments. |
| 71 | [Remove Duplicate Characters](./level-2-strings/071-question.js) | ✅ Done | Passed string into `new Set()` for auto-deduplication, then spread back into an array. |
| 72 | [String Compression](./level-2-strings/072-question.js) | ✅ Done | Used `str[i + 1]` look-ahead to group repeated chars, and compared lengths before returning. |
| 73 | [Character Frequency](./level-2-strings/073-question.js) | ✅ Done | Reused the same frequency-map logic from problem 70 under a different context. |
| 74 | [Reverse Words](./level-2-strings/074-question.js) | ✅ Done | Split on spaces to get words as array nodes, reversed the array, then joined back. |
| 75 | [Truncate String](./level-2-strings/075-question.js) | ✅ Done | Used `.slice()` with a length limit and appended `...` when the string exceeded the threshold. |
| 76 | [Mask Credit Card](./level-2-strings/076-question.js) | ✅ Done | Used `.repeat()` for masking and `.slice(-4)` to keep only the last four digits visible. |
| 77 | [Generate Slug](./level-2-strings/077-question.js) | ✅ Done | Chained multiple regex replacements to lowercase and hyphenate the string into a URL slug. |
| 78 | [Extract Hashtags](./level-2-strings/078-question.js) | ✅ Done | Used `string.match()` with a global regex including `[\w-]` to capture full hashtag tokens. |
| 79 | [Extract Mentions](./level-2-strings/079-question.js) | ✅ Done | Used `@` as a lookup anchor in regex to extract user handles from unstructured text. |
| 80 | [Word Frequency Counter](./level-2-strings/080-question.js) | ✅ Done | Used `.reduce()` with `/[a-z0-9-]+/g` regex to count clean word tokens from raw text. |

---

## 📁 Level 3 — Arrays (81–120)

**Status: ✅ Completed**

| # | Problem | Status | What I Learned |
|---|---------|--------|----------------|
| 51 | [Reverse String](./level-2-strings/051-question.js) | ✅ Done | Used `.trim()` to remove edge spaces, then split, reversed, and joined the string back. |
| 52 | [Count Characters](./level-2-strings/052-question.js) | ✅ Done | `.length` gives a 1-based count and spaces are counted as characters too. |
| 53 | [Count Words](./level-2-strings/053-question.js) | ✅ Done | Used `split(" ")` for word splitting and `/\s+/` regex for handling irregular spaces. |
| 54 | [Count Vowels](./level-2-strings/054-question.js) | ✅ Done | Used `.includes()` to check each character against vowels with a `for...of` loop. |
| 55 | [Count Consonants](./level-2-strings/055-question.js) | ✅ Done | Used `!includes()` to skip vowels and comparison operators to filter non-alphabetic characters. |
| 56 | [Convert Uppercase](./level-2-strings/056-question.js) | ✅ Done | Chained `.trim()` with `.toUpperCase()` for clean output. |
| 57 | [Convert Lowercase](./level-2-strings/057-question.js) | ✅ Done | Used `.toLowerCase()` after trimming for consistent, case-normalized output. |
| 58 | [Capitalize First Letter](./level-2-strings/058-question.js) | ✅ Done | Used `.charAt(0)` to isolate the first character and `.slice()` for the rest. |
| 59 | [Capitalize Every Word](./level-2-strings/059-question.js) | ✅ Done | Combined `split`, `map`, and `join` to capitalize the first letter of each word. |
| 60 | [Remove Spaces](./level-2-strings/060-question.js) | ✅ Done | Used `/\s/g` regex with `.replace()` to remove all whitespace globally. |
| 61 | [Replace Word](./level-2-strings/061-question.js) | ✅ Done | Used `.replace()` targeting the exact substring to swap words inside a string. |
| 62 | [Extract Initials](./level-2-strings/062-question.js) | ✅ Done | Used `.charAt(0).toUpperCase()` on each word to extract and format initials. |
| 63 | [Username Generator](./level-2-strings/063-question.js) | ✅ Done | Used nested object lookups, `Math.random()` for variety, and `/\s+/g` to strip spaces. |
| 64 | [Email Validator](./level-2-strings/064-question.js) | ✅ Done | Built a regex pattern and used `.test()` to return a boolean validation result. |
| 65 | [URL Validator](./level-2-strings/065-question.js) | ✅ Done | Added `localhost` as an explicit alternation in the regex to handle dev environment edge cases. |
| 66 | [Find Longest Word](./level-2-strings/066-question.js) | ✅ Done | Initialized tracker with `""` and stored the actual word, not the boolean result. |
| 67 | [Find Shortest Word](./level-2-strings/067-question.js) | ✅ Done | Seeded the tracker with `array[0]` instead of zero to avoid false minimum comparisons. |
| 68 | [Check Palindrome String](./level-2-strings/068-question.js) | ✅ Done | Converted string to array, used `.reverse()`, then compared with the lowercased original. |
| 69 | [Check Anagram](./level-2-strings/069-question.js) | ✅ Done | Checked length equality first, then sorted both strings and compared them. |
| 70 | [Count Occurrences](./level-2-strings/070-question.js) | ✅ Done | Used `.reduce()` to build a frequency object with `\|\| 0` fallback for safe increments. |
| 71 | [Remove Duplicate Characters](./level-2-strings/071-question.js) | ✅ Done | Passed string into `new Set()` for auto-deduplication, then spread back into an array. |
| 72 | [String Compression](./level-2-strings/072-question.js) | ✅ Done | Used `str[i + 1]` look-ahead to group repeated chars, and compared lengths before returning. |
| 73 | [Character Frequency](./level-2-strings/073-question.js) | ✅ Done | Reused the same frequency-map logic from problem 70 under a different context. |
| 74 | [Reverse Words](./level-2-strings/074-question.js) | ✅ Done | Split on spaces to get words as array nodes, reversed the array, then joined back. |
| 75 | [Truncate String](./level-2-strings/075-question.js) | ✅ Done | Used `.slice()` with a length limit and appended `...` when the string exceeded the threshold. |
| 76 | [Mask Credit Card](./level-2-strings/076-question.js) | ✅ Done | Used `.repeat()` for masking and `.slice(-4)` to keep only the last four digits visible. |
| 77 | [Generate Slug](./level-2-strings/077-question.js) | ✅ Done | Chained multiple regex replacements to lowercase and hyphenate the string into a URL slug. |
| 78 | [Extract Hashtags](./level-2-strings/078-question.js) | ✅ Done | Used `string.match()` with a global regex including `[\w-]` to capture full hashtag tokens. |
| 79 | [Extract Mentions](./level-2-strings/079-question.js) | ✅ Done | Used `@` as a lookup anchor in regex to extract user handles from unstructured text. |
| 80 | [Word Frequency Counter](./level-2-strings/080-question.js) | ✅ Done | Used `.reduce()` with `/[a-z0-9-]+/g` regex to count clean word tokens from raw text. |

## Level 3 - Arrays

**Status: ✅ Completed**

| # | Problem | Status | What I Learned |
|---|---------|--------|----------------|
| 81 | [Sum Array](./level-3-arrays/081-question.js) | ✅ Done | Used `.reduce()` with `0` as the initial value to safely sum all elements including empty arrays. |
| 82 | [Average Array](./level-3-arrays/082-question.js) | ✅ Done | Divided the reduced sum by array length and added a length check to avoid `NaN` on empty arrays. |
| 83 | [Largest Element](./level-3-arrays/083-question.js) | ✅ Done | Spread the array into `Math.max()` to get the largest value without writing a manual loop. |
| 84 | [Smallest Element](./level-3-arrays/084-question.js) | ✅ Done | Same as above but with `Math.min()`, and kept the function name matching its actual purpose. |
| 85 | [Second Largest](./level-3-arrays/085-question.js) | ✅ Done | Removed duplicates with `Set` first, then sorted descending with `b - a` and picked index `[1]`. |
| 86 | [Second Smallest](./level-3-arrays/086-question.js) | ✅ Done | Sorted ascending with `a - b` and checked length after filtering to avoid out-of-bounds on duplicate arrays. |
| 87 | [Reverse Array](./level-3-arrays/087-question.js) | ✅ Done | Cloned the array with `[...]` before calling `.reverse()` to avoid mutating the original. |
| 88 | [Sort Ascending](./level-3-arrays/088-question.js) | ✅ Done | Passed `a - b` to `.sort()` to force numeric order instead of the default string-based sorting. |
| 89 | [Sort Descending](./level-3-arrays/089-question.js) | ✅ Done | Flipped the comparator to `b - a` for high-to-low ordering, and cloned first to keep the original intact. |
| 90 | [Remove Duplicates](./level-3-arrays/090-question.js) | ✅ Done | Passed the array into `new Set()` and spread it back to get unique values in O(N) time. |
| 91 | [Merge Arrays](./level-3-arrays/091-question.js) | ✅ Done | Used the spread operator inside a new array to combine two arrays without mutating either. |
| 92 | [Common Elements](./level-3-arrays/092-question.js) | ✅ Done | Converted one array to a `Set` for O(1) lookups, then filtered the other array against it. |
| 93 | [Missing Number](./level-3-arrays/093-question.js) | ✅ Done | Sorted the array first, then looped to find gaps between consecutive values. |
| 94 | [Rotate Array](./level-3-arrays/094-question.js) | ✅ Done | Used `% length` to wrap the rotation count, then split and rejoined with `.slice()`. |
| 95 | [Flatten Array](./level-3-arrays/095-question.js) | ✅ Done | Used `.flat(Infinity)` to collapse all nested layers regardless of depth. |
| 96 | [Chunk Array](./level-3-arrays/096-question.js) | ✅ Done | Looped with a step equal to chunk size and used `.slice()` to cut segments, which handles the leftover tail automatically. |
| 97 | [Shuffle Array](./level-3-arrays/097-question.js) | ✅ Done | Implemented Fisher-Yates shuffle with a decrementing loop and destructuring swap `[a, b] = [b, a]`. |
| 98 | [Find Max Frequency](./level-3-arrays/098-question.js) | ✅ Done | Built a frequency object with `.reduce()`, then used `Object.entries()` to find the highest count. |
| 99 | [Count Occurrences](./level-3-arrays/099-question.js) | ✅ Done | Used `.reduce()` with `\|\| 0` fallback to build a key-value frequency map cleanly. |
| 100 | [Remove Falsy Values](./level-3-arrays/100-question.js) | ✅ Done | Passed `Boolean` directly into `.filter()` to remove all falsy values without writing a manual condition. |
| 101 | [Filter Even Numbers](./level-3-arrays/101-question.js) | ✅ Done | Used `% 2 === 0` inside `.filter()` to extract even numbers without touching the original array. |
| 102 | [Filter Odd Numbers](./level-3-arrays/102-question.js) | ✅ Done | Used `!== 0` with modulo instead of `=== 1` to safely handle negative odd numbers too. |
| 103 | [Find Positive Numbers](./level-3-arrays/103-question.js) | ✅ Done | Used `> 0` in `.filter()` to exclude zero and negatives cleanly. |
| 104 | [Find Negative Numbers](./level-3-arrays/104-question.js) | ✅ Done | Used `< 0` in `.filter()` to exclude zero and positives, and kept the function name descriptive. |
| 105 | [Find Sum Greater Than X](./level-3-arrays/105-question.js) | ✅ Done | Used a conditional inside `.reduce()` to only add values greater than the given threshold `X`. |
| 106 | [Group Numbers](./level-3-arrays/106-question.js) | ✅ Done | Used `.forEach()` for side-effect grouping into separate arrays instead of `.filter()`. |
| 107 | [Find Pair Sum](./level-3-arrays/107-question.js) | ✅ Done | Tracked `target - current` in a `Set` for O(N) pair lookup instead of a nested loop. |
| 108 | [Find Duplicate Values](./level-3-arrays/108-question.js) | ✅ Done | Used `.indexOf()` vs loop index mismatch to detect duplicates, then deduped results with `Set`. |
| 109 | [Intersection Array](./level-3-arrays/109-question.js) | ✅ Done | Converted one array to a `Set` and used `.has()` inside `.filter()` for fast intersection. |
| 110 | [Difference Array](./level-3-arrays/110-question.js) | ✅ Done | Used `!set.has()` inside `.filter()` to isolate elements unique to one array in O(N). |
| 111 | [Unique Elements](./level-3-arrays/111-question.js) | ✅ Done | Passed the array into `new Set()` and spread it back to remove all duplicates. |
| 112 | [Move Zeros End](./level-3-arrays/112-question.js) | ✅ Done | Used a two-pointer approach to shift non-zero values forward in-place without extra memory. |
| 113 | [Move Zeros Start](./level-3-arrays/113-question.js) | ✅ Done | Ran the loop backwards to shift zeros toward the front without reversing or losing order. |
| 114 | [Find Median](./level-3-arrays/114-question.js) | ✅ Done | Sorted a cloned array with `a - b`, then picked the middle index or averaged the two middle values for even lengths. |
| 115 | [Find Mode](./level-3-arrays/115-question.js) | ✅ Done | Built a frequency map in O(N), then used `Object.entries()` to find the highest occurring value. |
| 116 | [Find Range](./level-3-arrays/116-question.js) | ✅ Done | Subtracted `min` from `max` using spread with `Math.min/max` to get the range in one line. |
| 117 | [Product Array](./level-3-arrays/117-question.js) | ✅ Done | Used prefix and suffix passes to compute the product of all elements except the current one without division. |
| 118 | [Running Sum](./level-3-arrays/118-question.js) | ✅ Done | Used `.map()` with an external cumulative variable to build the running total array in one pass. |
| 119 | [Prefix Sum](./level-3-arrays/119-question.js) | ✅ Done | Same logic as running sum — just a different name used in algorithmic contexts. |
| 120 | [Sliding Window Sum](./level-3-arrays/120-question.js) | ✅ Done | Cached the first window sum, then slid it forward by adding the next element and dropping the first to avoid nested loops. |

---

## 📁 Level 4 — Objects (121–140)

**Status: ✅ Completed**

| # | Problem | Status | What I Learned |
|---|---------|--------|----------------|
| 121 | [Create User Object](./level-4-objects/121-question.js) | ✅ Done | Structured flat data into objects and used `this` context to dynamic lookup internal properties cleanly. |
| 122 | [Add Property](./level-4-objects/122-question.js) | ✅ Done | Added new keys to mutable objects and used bracket syntax `obj[key]` for dynamic property mapping. |
| 123 | [Delete Property](./level-4-objects/123-question.js) | ✅ Done | Used `delete` operator to modify heap references directly and rest `...` syntax for immutable data removal. |
| 124 | [Update Property](./level-4-objects/124-question.js) | ✅ Done | Updated keys directly via reference pointers and leveraged object spread `...` to handle safe state modifications. |
| 125 | [Count Properties](./level-4-objects/125-question.js) | ✅ Done | Converted object keys into iterable arrays using `Object.keys()` and injected runtime `typeof` guard checks. |
| 126 | [Merge Objects](./level-4-objects/126-question.js) | ✅ Done | Combined multiple objects using spread `...` operator where right-side properties override matching keys during conflicts. |
| 127 | [Clone Object](./level-4-objects/127-question.js) | ✅ Done | Learned that shallow copies leak nested reference pointers, and resolved it using `structuredClone()` for deep isolation. |
| 128 | [Object to Array](./level-4-objects/128-question.js) | ✅ Done | Transformed flat objects into multi-dimensional key-value pairs using native `Object.entries()` utility. |
| 129 | [Array to Object](./level-4-objects/129-question.js) | ✅ Done | Converted index-tracked arrays into structured object hashes to perform instantaneous O(1) key lookups. |
| 130 | [Deep Copy Object](./level-4-objects/130-question.js) | ✅ Done | Replaced outdated `JSON` parsing hacks with native `structuredClone()` to copy deeply nested data structures safely. |
| 131 | [Nested Object Access](./level-4-objects/131-question.js) | ✅ Done | Traversed multi-layered JSON payload trees safely using optional chaining `?.` to prevent application crashes. |
| 132 | [Student Grade System](./level-4-objects/132-question.js) | ✅ Done | Computed dynamic scores via `Object.values().reduce()` and sorted records into standard performance brackets. |
| 133 | [Product Inventory](./level-4-objects/133-question.js) | ✅ Done | Evaluated real-time inventory balances via `.reduce()` and used `.filter()` to capture low-stock alerts. |
| 134 | [Shopping Cart](./level-4-objects/134-question.js) | ✅ Done | Managed checkout array mutations using `.findIndex()` and enforced safety bounds using `Math.max()` parameters. |
| 135 | [Expense Tracker Logic](./level-4-objects/135-question.js) | ✅ Done | Optimized aggregations into a single-pass `.reduce()` loop and generated lightweight custom ID strings using base-36 tracking. |
| 136 | [Employee Management](./level-4-objects/136-question.js) | ✅ Done | Implemented soft-delete patterns by updating status strings instead of destructively dropping dataset arrays. |
| 137 | [Library Management](./level-4-objects/137-question.js) | ✅ Done | Handled resource allocations with inline availability booleans and synced entities across different memory registries. |
| 138 | [Contact Book](./level-4-objects/138-question.js) | ✅ Done | Checked duplicate keys via `.some()`, built multi-field search inputs, and used `Object.assign()` for pointer updates. |
| 139 | [User Authentication Logic](./level-4-objects/139-question.js) | ✅ Done | Masked custom hash structures behind private logic, applied uniform login errors, and managed dynamic active sessions. |
| 140 | [Blog Post Object](./level-4-objects/140-question.js) | ✅ Done | Used regex to auto-generate SEO slugs, filtered draft lifecycles, and nested structured feedback comment arrays. |

---

## 📁 Level 5 — DOM Projects (141–170)

**Status: 🔒 Not Started Yet**

| # | Problem | Status |
|---|---------|--------|
| 141 | [Counter App](./level-5-dom/141-question.js) | ⏳ Pending |
| 142 | [Color Generator](./level-5-dom/142-question.js) | ⏳ Pending |
| 143 | [Character Counter](./level-5-dom/143-question.js) | ⏳ Pending |
| 144 | [Live Clock](./level-5-dom/144-question.js) | ⏳ Pending |
| 145 | [Stopwatch](./level-5-dom/145-question.js) | ⏳ Pending |
| 146 | [Countdown Timer](./level-5-dom/146-question.js) | ⏳ Pending |
| 147 | [Password Generator UI](./level-5-dom/147-question.js) | ⏳ Pending |
| 148 | [Clipboard App](./level-5-dom/148-question.js) | ⏳ Pending |
| 149 | [Calculator](./level-5-dom/149-question.js) | ⏳ Pending |
| 150 | [Todo App](./level-5-dom/150-question.js) | ⏳ Pending |
| 151 | [Notes App](./level-5-dom/151-question.js) | ⏳ Pending |
| 152 | [Quiz App](./level-5-dom/152-question.js) | ⏳ Pending |
| 153 | [Accordion](./level-5-dom/153-question.js) | ⏳ Pending |
| 154 | [Tabs Component](./level-5-dom/154-question.js) | ⏳ Pending |
| 155 | [Modal Popup](./level-5-dom/155-question.js) | ⏳ Pending |
| 156 | [Image Slider](./level-5-dom/156-question.js) | ⏳ Pending |
| 157 | [FAQ Section](./level-5-dom/157-question.js) | ⏳ Pending |
| 158 | [Dark Mode Toggle](./level-5-dom/158-question.js) | ⏳ Pending |
| 159 | [Form Validation](./level-5-dom/159-question.js) | ⏳ Pending |
| 160 | [Typing Speed Test](./level-5-dom/160-question.js) | ⏳ Pending |
| 161 | [Weather App](./level-5-dom/161-question.js) | ⏳ Pending |
| 162 | [GitHub Finder](./level-5-dom/162-question.js) | ⏳ Pending |
| 163 | [QR Generator](./level-5-dom/163-question.js) | ⏳ Pending |
| 164 | [Expense Tracker](./level-5-dom/164-question.js) | ⏳ Pending |
| 165 | [Habit Tracker](./level-5-dom/165-question.js) | ⏳ Pending |
| 166 | [Currency Converter](./level-5-dom/166-question.js) | ⏳ Pending |
| 167 | [Movie Search](./level-5-dom/167-question.js) | ⏳ Pending |
| 168 | [Music Player](./level-5-dom/168-question.js) | ⏳ Pending |
| 169 | [Bookmark Manager](./level-5-dom/169-question.js) | ⏳ Pending |
| 170 | [Kanban Board](./level-5-dom/170-question.js) | ⏳ Pending |

---

## 📁 Level 6 — Advanced Logic & Core CS (171–200)

**Status: 🔒 Not Started Yet**

| # | Problem | Status |
|---|---------|--------|
| 171 | [Debounce Function](./level-6-advanced/171-question.js) | ⏳ Pending |
| 172 | [Throttle Function](./level-6-advanced/172-question.js) | ⏳ Pending |
| 173 | [Memoization](./level-6-advanced/173-question.js) | ⏳ Pending |
| 174 | [Custom Map](./level-6-advanced/174-question.js) | ⏳ Pending |
| 175 | [Custom Filter](./level-6-advanced/175-question.js) | ⏳ Pending |
| 176 | [Custom Reduce](./level-6-advanced/176-question.js) | ⏳ Pending |
| 177 | [Promise Simulator](./level-6-advanced/177-question.js) | ⏳ Pending |
| 178 | [Async Retry](./level-6-advanced/178-question.js) | ⏳ Pending |
| 179 | [Event Emitter](./level-6-advanced/179-question.js) | ⏳ Pending |
| 180 | [Deep Clone](./level-6-advanced/180-question.js) | ⏳ Pending |
| 181 | [Flatten Object](./level-6-advanced/181-question.js) | ⏳ Pending |
| 182 | [JSON Parser Logic](./level-6-advanced/182-question.js) | ⏳ Pending |
| 183 | [LRU Cache](./level-6-advanced/183-question.js) | ⏳ Pending |
| 184 | [Binary Search](./level-6-advanced/184-question.js) | ⏳ Pending |
| 185 | [Bubble Sort](./level-6-advanced/185-question.js) | ⏳ Pending |
| 186 | [Selection Sort](./level-6-advanced/186-question.js) | ⏳ Pending |
| 187 | [Insertion Sort](./level-6-advanced/187-question.js) | ⏳ Pending |
| 188 | [Merge Sort](./level-6-advanced/188-question.js) | ⏳ Pending |
| 189 | [Quick Sort](./level-6-advanced/189-question.js) | ⏳ Pending |
| 190 | [BFS](./level-6-advanced/190-question.js) | ⏳ Pending |
| 191 | [DFS](./level-6-advanced/191-question.js) | ⏳ Pending |
| 192 | [Queue Implementation](./level-6-advanced/192-question.js) | ⏳ Pending |
| 193 | [Stack Implementation](./level-6-advanced/193-question.js) | ⏳ Pending |
| 194 | [Linked List](./level-6-advanced/194-question.js) | ⏳ Pending |
| 195 | [Hash Table](./level-6-advanced/195-question.js) | ⏳ Pending |
| 196 | [Tree Traversal](./level-6-advanced/196-question.js) | ⏳ Pending |
| 197 | [Graph Traversal](./level-6-advanced/197-question.js) | ⏳ Pending |
| 198 | [Rate Limiter](./level-6-advanced/198-question.js) | ⏳ Pending |
| 199 | [Infinite Scroll Logic](./level-6-advanced/199-question.js) | ⏳ Pending |
| 200 | [Mini JavaScript Framework](./level-6-advanced/200-question.js) | ⏳ Pending |

---

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| JavaScript | ES6+ | Core language |
| Node.js | Latest LTS | Runtime environment |
| VS Code | — | Editor |

**Methodology:** Defensive Programming · Step-by-step documented logic · No external dependencies

---

## 🤝 Contributing

If you have a better solution or an alternative approach, PRs are absolutely welcome.

```bash
# Fork → Clone → Create Branch → Submit PR
git checkout -b fix/001-better-approach
```

Just make sure your code follows the file template structure and the "What I Learned" section is filled in.

---

## 👨‍💻 Author

**Jawwad Shah**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jawwad-shah)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/jawwad-shah-js)

---

## 📄 License

```
MIT License

Copyright (c) 2025 Jawwad Shah

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so.
```

Full license: [LICENSE](./LICENSE)

---

<div align="center">

**If this repository helped you, drop a ⭐ — it keeps the motivation alive to keep going.**

*Built with consistency, not shortcuts.*

</div>
