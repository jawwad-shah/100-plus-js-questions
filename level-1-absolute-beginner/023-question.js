// Problem #23

// Problem Statement:
// Create a Grade Calculator based on student marks.

// Requirements:
// Create a reusable function that calculates the percentage from obtained and total marks, and then determines the corresponding alphabetical grade using conditional ranges.

// Approach:
// 1. Create a function named 'calculateGrade' that accepts 'obtainedMarks' and 'totalMarks'.
// 2. Calculate the percentage first inside the function using the standard formula.
// 3. Initialize a dynamic variable named 'grade'.
// 4. Use an 'if/else if/else' structural ladder to evaluate the percentage against standard academic boundaries:
//    - 80% or above: A+
//    - 70% to 79%: A
//    - 60% to 69%: B
//    - 50% to 59%: C
//    - 40% to 49%: D
//    - Below 40%: F (Fail)
// 5. Return both the 'percentage' and 'grade' bundled inside an object.

// Code:
function calculateGrade(obtainedMarks, totalMarks) {
  const percentage = (obtainedMarks / totalMarks) * 100;
  let grade;

  if (percentage >= 80) {
    grade = "A+";
  } else if (percentage >= 70 && percentage < 80) {
    grade = "A";
  } else if (percentage >= 60 && percentage < 70) {
    grade = "B";
  } else if (percentage >= 50 && percentage < 60) {
    grade = "C";
  } else if (percentage >= 40 && percentage < 50) {
    grade = "D";
  } else {
    grade = "F (Fail)";
  }

  return { percentage, grade };
}

const result = calculateGrade(400, 500);
console.log("Percentage: " + result.percentage + "%");
console.log("Grade: " + result.grade);

// Output:
// Percentage: 80%
// Grade: A+

// What I Learned:
// - Logic Multi-layering: Combining basic arithmetic operations with complex conditional branches to build structured software tools.
// - Bound Checking: Using relational operators (>=, <) to evaluate numeric scores within precise range windows.
// - Compound Outputting: Constructing an object to return multiple processed fields synchronously from a single function execution.