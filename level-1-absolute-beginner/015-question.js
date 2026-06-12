// Problem #15

// Problem Statement:
// Create a Voting Eligibility checker with meaningful response messages.

// Requirements:
// Create a reusable function that takes an age, validates it against voting laws (18+), handles a toddler edge case with a relevant joke, and returns clear, professional feedback.

// Approach:
// 1. Create a function named 'votingEligibilityChecker' that accepts an 'age' parameter.
// 2. Handle the toddler edge case: If age is 5 or below, return a funny, situation-based joke about toys/cartoons instead of voting.
// 3. Handle the minor case: If age is under 18, return a clear message showing they are not eligible yet.
// 4. Handle the adult case: If age is 18 or above, return a professional confirmation message that they can vote.

// Code:
function votingEligibilityChecker(age) {
    if (age <= 5) {
        return "You are too young! Go watch cartoons, voting booths don't have toy boxes.";
    }
    if (age < 18) {
        return "Access Denied: You must be 18 or older to cast a vote.";
    }
    return "Access Granted: You are eligible to vote. Please proceed to the booth.";
}

const result = votingEligibilityChecker(18);
console.log(result);

// Output:
// Access Granted: You are eligible to vote. Please proceed to the booth.

// What I Learned:
// - User-Centric Messaging: Writing meaningful and realistic response strings instead of dummy text.
// - Contextual Logic: Tailoring edge-case responses (like the toddler joke) to perfectly fit the theme of the application.
// - Clean Range Splitting: Using relational operators (<, <=) to smoothly divide logic into three distinct age groups.