<!-- <div align="center"> -->

# 🧠 100+ JavaScript Problem Solving Challenges

[![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Runtime-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![ES6+](https://img.shields.io/badge/Spec-ES6+-blue?style=for-the-badge)](https://tc39.es/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)
[![Open Source](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red?style=for-the-badge)](https://github.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge)](https://github.com/)

<br/>

**Sirf syntax yaad karna kaafi nahi — asli game logic ka hai.**  
Yeh repository isi soch ke sath bani hai.

<!-- </div> -->

---

## 📌 About This Repository

Maine yeh repository isliye banayi kyunki ek waqt aaya jab mujhe laga ke tutorials dekh dekh ke kuch nahi hoga. Jab tak blank file kholke khud problem solve nahi karte, programming "samajh" mein nahi aati — sirf "pata" hoti hai.

Toh maine decide kiya ke ek structured approach se, problem by problem, apni logical thinking ko actually build karna hai. Koi shortcut nahi, koi copy-paste nahi. Sirf clean code, clear logic, aur documented learning.

Yeh repository **open-source** isliye rakhi hai taake community ke doosre developers aur absolute beginners bhi is structured flow se faida utha sakein — clean code patterns seekhein aur programming fundamentals properly samjhein.

---

## 📊 Overall Progress

| Level | Topic | Problems | Status | Progress |
|-------|-------|----------|--------|----------|
| 1 | Absolute Beginner | 1–50 | 🔄 In Progress | `████░░░░░░` 21/50 |
| 2 | Strings | 51–80 | 🔒 Not Started | `░░░░░░░░░░` 0/30 |
| 3 | Arrays | 81–120 | 🔒 Not Started | `░░░░░░░░░░` 0/40 |
| 4 | Objects | 121–140 | 🔒 Not Started | `░░░░░░░░░░` 0/20 |
| 5 | DOM Projects | 141–170 | 🔒 Not Started | `░░░░░░░░░░` 0/30 |
| 6 | Advanced / Core CS | 171–200 | 🔒 Not Started | `░░░░░░░░░░` 0/30 |
| | | **Total** | | **21 / 200 Completed** |

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

Har problem file is exact structured flow ko strictly follow karti hai:

```js
// Problem #[Number]

// Problem Statement:
// [Kya solve karna hai]

// Requirements:
// [Validation rules aur constraints]

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
// - [Core concept jo is problem se seekha]
```

---

## 🚀 How to Use

```bash
# Step 1: Repository clone karo
git clone https://github.com/your-username/100+-js-questions.git

# Step 2: Folder mein jao
cd 100+-js-questions

# Step 3: Koi bhi file run karo
node level-1-absolute-beginner/001-question.js
```

> **Note:** Sirf Node.js installed hona chahiye. Koi extra package ya dependency nahi hai.

---

## 📁 Level 1 — Absolute Beginner (1–50)

**Status: 🔄 In Progress — 21/50 Completed**

| # | Problem | Status | What I Learned |
|---|---------|--------|----------------|
| 01 | [Hello World](./level-1-absolute-beginner/001-question.js) | ✅ Done | JavaScript execution environment aur basic console output debug karna |
| 02 | [Print Name](./level-1-absolute-beginner/002-question.js) | ✅ Done | Variables declare karna aur string concatenation ko handle karna |
| 03 | [Add Numbers](./level-1-absolute-beginner/003-question.js) | ✅ Done | Basic arithmetic operators aur numbers ka addition logic |
| 04 | [Subtract Numbers](./level-1-absolute-beginner/004-question.js) | ✅ Done | Arithmetic subtraction operation aur numerical evaluation handling |
| 05 | [Multiply Numbers](./level-1-absolute-beginner/005-question.js) | ✅ Done | Multiplication algorithm execution aur product calculation techniques |
| 06 | [Divide Numbers](./level-1-absolute-beginner/006-question.js) | ✅ Done | Division operation control aur quotients ko perfectly handle karna |
| 07 | [Remainder](./level-1-absolute-beginner/007-question.js) | ✅ Done | Modulus operator `%` ka istemal cycle checks aur tracking mein |
| 08 | [Even Odd](./level-1-absolute-beginner/008-question.js) | ✅ Done | Modulus algorithm use karte hue conditional control structures implement karna |
| 09 | [Positive Negative](./level-1-absolute-beginner/009-question.js) | ✅ Done | Sign comparisons aur logic gates check for numeric inputs boundary cases |
| 10 | [Swap Numbers](./level-1-absolute-beginner/010-question.js) | ✅ Done | Third variable ke bagair arithmetic shifting aur standard swapping logic |
| 11 | [Largest of Two](./level-1-absolute-beginner/011-question.js) | ✅ Done | Binary logic comparison operators aur maximum value detect karna |
| 12 | [Smallest of Two](./level-1-absolute-beginner/012-question.js) | ✅ Done | Binary minification filtering checks implement karna function core mein |
| 13 | [Largest of Three](./level-1-absolute-beginner/013-question.js) | ✅ Done | Nested logical operators `&&` `\|\|` ka use complex comparisons mein |
| 14 | [Leap Year](./level-1-absolute-beginner/014-question.js) | ✅ Done | Complex nested divisibility conditions check execution on calendar modules |
| 15 | [Voting Eligibility](./level-1-absolute-beginner/015-question.js) | ✅ Done | Conditional age gate threshold filtering standard validations handle karna |
| 16 | [Age Calculator](./level-1-absolute-beginner/016-question.js) | ✅ Done | Date objects manipulation aur temporal difference arithmetic calculation |
| 17 | [Area Rectangle](./level-1-absolute-beginner/017-question.js) | ✅ Done | Formulas adaptation processing aur functional return pipeline operations |
| 18 | [Area Circle](./level-1-absolute-beginner/018-question.js) | ✅ Done | Mathematical constants ka use dynamically jaise `Math.PI` |
| 19 | [Perimeter Rectangle](./level-1-absolute-beginner/019-question.js) | ✅ Done | Defensive code constraints aur arithmetic operators hierarchy logic |
| 20 | [Temperature Converter](./level-1-absolute-beginner/020-question.js) | ✅ Done | Formula coefficient transformation scaling logic dynamic precision ke sath |
| 21 | [BMI Calculator](./level-1-absolute-beginner/021-question.js) | ✅ Done | Exponential numeric weight metric parsing aur evaluation ranges |
| 22 | [Percentage Calculator](./level-1-absolute-beginner/022-question.js) | ⏳ Pending | — |
| 23 | [Grade Calculator](./level-1-absolute-beginner/023-question.js) | ⏳ Pending | — |
| 24 | [Simple Interest](./level-1-absolute-beginner/024-question.js) | ⏳ Pending | — |
| 25 | [Compound Interest](./level-1-absolute-beginner/025-question.js) | ⏳ Pending | — |
| 26 | [Minutes to Seconds](./level-1-absolute-beginner/026-question.js) | ⏳ Pending | — |
| 27 | [Hours to Minutes](./level-1-absolute-beginner/027-question.js) | ⏳ Pending | — |
| 28 | [Days to Hours](./level-1-absolute-beginner/028-question.js) | ⏳ Pending | — |
| 29 | [Number to String](./level-1-absolute-beginner/029-question.js) | ⏳ Pending | — |
| 30 | [String to Number](./level-1-absolute-beginner/030-question.js) | ⏳ Pending | — |
| 31 | [Type Checker](./level-1-absolute-beginner/031-question.js) | ⏳ Pending | — |
| 32 | [Square Number](./level-1-absolute-beginner/032-question.js) | ⏳ Pending | — |
| 33 | [Cube Number](./level-1-absolute-beginner/033-question.js) | ⏳ Pending | — |
| 34 | [Power Calculator](./level-1-absolute-beginner/034-question.js) | ⏳ Pending | — |
| 35 | [Random Number](./level-1-absolute-beginner/035-question.js) | ⏳ Pending | — |
| 36 | [Dice Roll](./level-1-absolute-beginner/036-question.js) | ⏳ Pending | — |
| 37 | [Coin Toss](./level-1-absolute-beginner/037-question.js) | ⏳ Pending | — |
| 38 | [OTP Generator](./level-1-absolute-beginner/038-question.js) | ⏳ Pending | — |
| 39 | [Password Generator](./level-1-absolute-beginner/039-question.js) | ⏳ Pending | — |
| 40 | [Multiplication Table](./level-1-absolute-beginner/040-question.js) | ⏳ Pending | — |
| 41 | [Print 1–100](./level-1-absolute-beginner/041-question.js) | ⏳ Pending | — |
| 42 | [Print Even Numbers](./level-1-absolute-beginner/042-question.js) | ⏳ Pending | — |
| 43 | [Print Odd Numbers](./level-1-absolute-beginner/043-question.js) | ⏳ Pending | — |
| 44 | [Sum 1–100](./level-1-absolute-beginner/044-question.js) | ⏳ Pending | — |
| 45 | [Factorial](./level-1-absolute-beginner/045-question.js) | ⏳ Pending | — |
| 46 | [Fibonacci](./level-1-absolute-beginner/046-question.js) | ⏳ Pending | — |
| 47 | [Prime Number](./level-1-absolute-beginner/047-question.js) | ⏳ Pending | — |
| 48 | [Armstrong Number](./level-1-absolute-beginner/048-question.js) | ⏳ Pending | — |
| 49 | [Reverse Number](./level-1-absolute-beginner/049-question.js) | ⏳ Pending | — |
| 50 | [Palindrome Number](./level-1-absolute-beginner/050-question.js) | ⏳ Pending | — |

---

## 📁 Level 2 — Strings (51–80)

**Status: 🔒 Not Started Yet**

| # | Problem | Status |
|---|---------|--------|
| 51 | [Reverse String](./level-2-strings/051-question.js) | ⏳ Pending |
| 52 | [Count Characters](./level-2-strings/052-question.js) | ⏳ Pending |
| 53 | [Count Words](./level-2-strings/053-question.js) | ⏳ Pending |
| 54 | [Count Vowels](./level-2-strings/054-question.js) | ⏳ Pending |
| 55 | [Count Consonants](./level-2-strings/055-question.js) | ⏳ Pending |
| 56 | [Convert Uppercase](./level-2-strings/056-question.js) | ⏳ Pending |
| 57 | [Convert Lowercase](./level-2-strings/057-question.js) | ⏳ Pending |
| 58 | [Capitalize First Letter](./level-2-strings/058-question.js) | ⏳ Pending |
| 59 | [Capitalize Every Word](./level-2-strings/059-question.js) | ⏳ Pending |
| 60 | [Remove Spaces](./level-2-strings/060-question.js) | ⏳ Pending |
| 61 | [Replace Word](./level-2-strings/061-question.js) | ⏳ Pending |
| 62 | [Extract Initials](./level-2-strings/062-question.js) | ⏳ Pending |
| 63 | [Username Generator](./level-2-strings/063-question.js) | ⏳ Pending |
| 64 | [Email Validator](./level-2-strings/064-question.js) | ⏳ Pending |
| 65 | [URL Validator](./level-2-strings/065-question.js) | ⏳ Pending |
| 66 | [Find Longest Word](./level-2-strings/066-question.js) | ⏳ Pending |
| 67 | [Find Shortest Word](./level-2-strings/067-question.js) | ⏳ Pending |
| 68 | [Check Palindrome String](./level-2-strings/068-question.js) | ⏳ Pending |
| 69 | [Check Anagram](./level-2-strings/069-question.js) | ⏳ Pending |
| 70 | [Count Occurrences](./level-2-strings/070-question.js) | ⏳ Pending |
| 71 | [Remove Duplicate Characters](./level-2-strings/071-question.js) | ⏳ Pending |
| 72 | [String Compression](./level-2-strings/072-question.js) | ⏳ Pending |
| 73 | [Character Frequency](./level-2-strings/073-question.js) | ⏳ Pending |
| 74 | [Reverse Words](./level-2-strings/074-question.js) | ⏳ Pending |
| 75 | [Truncate String](./level-2-strings/075-question.js) | ⏳ Pending |
| 76 | [Mask Credit Card](./level-2-strings/076-question.js) | ⏳ Pending |
| 77 | [Generate Slug](./level-2-strings/077-question.js) | ⏳ Pending |
| 78 | [Extract Hashtags](./level-2-strings/078-question.js) | ⏳ Pending |
| 79 | [Extract Mentions](./level-2-strings/079-question.js) | ⏳ Pending |
| 80 | [Word Frequency Counter](./level-2-strings/080-question.js) | ⏳ Pending |

---

## 📁 Level 3 — Arrays (81–120)

**Status: 🔒 Not Started Yet**

| # | Problem | Status |
|---|---------|--------|
| 81 | [Sum Array](./level-3-arrays/081-question.js) | ⏳ Pending |
| 82 | [Average Array](./level-3-arrays/082-question.js) | ⏳ Pending |
| 83 | [Largest Element](./level-3-arrays/083-question.js) | ⏳ Pending |
| 84 | [Smallest Element](./level-3-arrays/084-question.js) | ⏳ Pending |
| 85 | [Second Largest](./level-3-arrays/085-question.js) | ⏳ Pending |
| 86 | [Second Smallest](./level-3-arrays/086-question.js) | ⏳ Pending |
| 87 | [Reverse Array](./level-3-arrays/087-question.js) | ⏳ Pending |
| 88 | [Sort Ascending](./level-3-arrays/088-question.js) | ⏳ Pending |
| 89 | [Sort Descending](./level-3-arrays/089-question.js) | ⏳ Pending |
| 90 | [Remove Duplicates](./level-3-arrays/090-question.js) | ⏳ Pending |
| 91 | [Merge Arrays](./level-3-arrays/091-question.js) | ⏳ Pending |
| 92 | [Common Elements](./level-3-arrays/092-question.js) | ⏳ Pending |
| 93 | [Missing Number](./level-3-arrays/093-question.js) | ⏳ Pending |
| 94 | [Rotate Array](./level-3-arrays/094-question.js) | ⏳ Pending |
| 95 | [Flatten Array](./level-3-arrays/095-question.js) | ⏳ Pending |
| 96 | [Chunk Array](./level-3-arrays/096-question.js) | ⏳ Pending |
| 97 | [Shuffle Array](./level-3-arrays/097-question.js) | ⏳ Pending |
| 98 | [Find Max Frequency](./level-3-arrays/098-question.js) | ⏳ Pending |
| 99 | [Count Occurrences](./level-3-arrays/099-question.js) | ⏳ Pending |
| 100 | [Remove Falsy Values](./level-3-arrays/100-question.js) | ⏳ Pending |
| 101 | [Filter Even Numbers](./level-3-arrays/101-question.js) | ⏳ Pending |
| 102 | [Filter Odd Numbers](./level-3-arrays/102-question.js) | ⏳ Pending |
| 103 | [Find Positive Numbers](./level-3-arrays/103-question.js) | ⏳ Pending |
| 104 | [Find Negative Numbers](./level-3-arrays/104-question.js) | ⏳ Pending |
| 105 | [Find Sum Greater Than X](./level-3-arrays/105-question.js) | ⏳ Pending |
| 106 | [Group Numbers](./level-3-arrays/106-question.js) | ⏳ Pending |
| 107 | [Find Pair Sum](./level-3-arrays/107-question.js) | ⏳ Pending |
| 108 | [Find Duplicate Values](./level-3-arrays/108-question.js) | ⏳ Pending |
| 109 | [Intersection Array](./level-3-arrays/109-question.js) | ⏳ Pending |
| 110 | [Difference Array](./level-3-arrays/110-question.js) | ⏳ Pending |
| 111 | [Unique Elements](./level-3-arrays/111-question.js) | ⏳ Pending |
| 112 | [Move Zeros End](./level-3-arrays/112-question.js) | ⏳ Pending |
| 113 | [Move Zeros Start](./level-3-arrays/113-question.js) | ⏳ Pending |
| 114 | [Find Median](./level-3-arrays/114-question.js) | ⏳ Pending |
| 115 | [Find Mode](./level-3-arrays/115-question.js) | ⏳ Pending |
| 116 | [Find Range](./level-3-arrays/116-question.js) | ⏳ Pending |
| 117 | [Product Array](./level-3-arrays/117-question.js) | ⏳ Pending |
| 118 | [Running Sum](./level-3-arrays/118-question.js) | ⏳ Pending |
| 119 | [Prefix Sum](./level-3-arrays/119-question.js) | ⏳ Pending |
| 120 | [Sliding Window Sum](./level-3-arrays/120-question.js) | ⏳ Pending |

---

## 📁 Level 4 — Objects (121–140)

**Status: 🔒 Not Started Yet**

| # | Problem | Status |
|---|---------|--------|
| 121 | [Create User Object](./level-4-objects/121-question.js) | ⏳ Pending |
| 122 | [Add Property](./level-4-objects/122-question.js) | ⏳ Pending |
| 123 | [Delete Property](./level-4-objects/123-question.js) | ⏳ Pending |
| 124 | [Update Property](./level-4-objects/124-question.js) | ⏳ Pending |
| 125 | [Count Properties](./level-4-objects/125-question.js) | ⏳ Pending |
| 126 | [Merge Objects](./level-4-objects/126-question.js) | ⏳ Pending |
| 127 | [Clone Object](./level-4-objects/127-question.js) | ⏳ Pending |
| 128 | [Object to Array](./level-4-objects/128-question.js) | ⏳ Pending |
| 129 | [Array to Object](./level-4-objects/129-question.js) | ⏳ Pending |
| 130 | [Deep Copy Object](./level-4-objects/130-question.js) | ⏳ Pending |
| 131 | [Nested Object Access](./level-4-objects/131-question.js) | ⏳ Pending |
| 132 | [Student Grade System](./level-4-objects/132-question.js) | ⏳ Pending |
| 133 | [Product Inventory](./level-4-objects/133-question.js) | ⏳ Pending |
| 134 | [Shopping Cart](./level-4-objects/134-question.js) | ⏳ Pending |
| 135 | [Expense Tracker Logic](./level-4-objects/135-question.js) | ⏳ Pending |
| 136 | [Employee Management](./level-4-objects/136-question.js) | ⏳ Pending |
| 137 | [Library Management](./level-4-objects/137-question.js) | ⏳ Pending |
| 138 | [Contact Book](./level-4-objects/138-question.js) | ⏳ Pending |
| 139 | [User Authentication Logic](./level-4-objects/139-question.js) | ⏳ Pending |
| 140 | [Blog Post Object](./level-4-objects/140-question.js) | ⏳ Pending |

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

Agar aap koi better solution ya alternative approach dena chahte hain toh PRs bilkul welcome hain.

```bash
# Fork karo → Clone karo → Branch banao → PR bhejo
git checkout -b fix/001-better-approach
```

Sirf yeh ensure karo ke aapka code file template structure follow kare aur "What I Learned" section filled ho.

---

## 👨‍💻 Author

**[Your Name]**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/your-username)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/your-profile)

---

## 📄 License

```
MIT License

Copyright (c) 2025 [Your Name]

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

**Agar yeh repository aapke kaam aayi toh ek ⭐ zaroor do — motivation milti hai aage badhte rehne ki.**

*Built with consistency, not shortcuts.*

</div>
