// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// @jawwad-shah — github.com/jawwad-shah
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Problem #132

// Problem Statement:
// Implement an Object-Oriented Student Grading and Analytics Management System.

// Requirements:
// Create an enterprise OOP class model that encapsulates student tracking metadata, dynamically computes multi-subject cumulative totals, derives standardized scaling percentage thresholds, determines performance brackets, and outputs a purified report dashboard block layout.

// Approach:
// 1. Declare a structured Blueprint blueprint using the core modern JavaScript ES6 syntax (`class Student`).
// 2. Map incoming parameters into enclosed data layers using an architectural constructor (`this.name`, `this.marks`).
// 3. Deploy high-order aggregation utilities combining static descriptors and iterations (`Object.values(this.marks).reduce(...)`) to aggregate overall points dynamically in linear $O(N)$ runtime.
// 4. Compute fractional percentage metrics cleanly, preserving float structures securely before final key transformations.
// 5. Structure conditional gatekeeper checks to isolate specific performance brackets ('A+ (Elite)' down to 'F (Fail)').
// 6. Leverage `console.table()` schemas to stream output structures directly as clear structured data matrices.

class Student {
  constructor(name, rollNo, marks) {
    this.name = name;
    this.rollNo = rollNo;
    this.marks = typeof marks === 'object' && marks !== null ? marks : {};
  }

  // Linear accumulation loop tracking scalar values map
  calculateTotal() {
    return Object.values(this.marks).reduce((sum, mark) => sum + mark, 0);
  }

  // Processes scales dynamic normalization metrics returning clean numeric balances
  calculatePercentage() {
    const subjectsCount = Object.keys(this.marks).length;
    if (subjectsCount === 0) return 0;

    const maxMarks = subjectsCount * 100;
    const obtained = this.calculateTotal();

    // Computing rounded data balance safely
    return Math.round((obtained / maxMarks) * 100);
  }

  // Evaluates performance limits boundaries sequentially
  getGrade() {
    const percentage = this.calculatePercentage();

    if (percentage >= 90) return 'A+ (Elite)';
    if (percentage >= 80) return 'A (Excellent)';
    if (percentage >= 70) return 'B (Good)';
    if (percentage >= 60) return 'C (Average)';
    if (percentage >= 50) return 'D (Pass)';
    return 'F (Fail) - Keep trying, bro!';
  }

  // Compiles localized data snapshots into a formatted production object literal layout
  generateReportCard() {
    return {
      "Student Name": this.name,
      "Roll No": this.rollNo,
      "Total Score": `${this.calculateTotal()} Marks`,
      "Percentage": `${this.calculatePercentage()}%`,
      "Final Grade": this.getGrade(),
    };
  }
}

// Spawning scalable distinct class instances into memory spaces safely
const student1 = new Student("Jawwad Shah", "DEV-101", {
    html: 95,
    tailwind: 92,
    javascript: 88,
    react: 91
});

const student2 = new Student("Zain", "DEV-102", {
    html: 45,
    tailwind: 55,
    javascript: 48,
    react: 50
});

// Rendering dynamic dashboard tabular interfaces cleanly
console.log("--- System Analytics Portal Generated Report Logs ---");
console.table(student1.generateReportCard());
console.table(student2.generateReportCard());

// Output:
// --- System Analytics Portal Generated Report Logs ---
// (Outputs explicit data grid layers showing Student Names, Totals, Percentages, and Final Grades)

// What I Learned:
// 1. Dynamic Attribute Aggregation: Extracting property values dynamically via object reflection utilities (`Object.values()`) combined with accumulator arrays (`.reduce()`) isolates calculations from rigid, hard-coded key definitions.
// 2. Fractional Threshold Scaling: Decoupling raw mathematical calculations from presentation formatting ensures high-precision float accuracy throughout the analytical evaluation lifecycle.
// 3. Multi-Tiered Conditional Brackets: Structuring fall-through boundary checks inside logical branching chains establishes explicit performance gates that sort multi-variant records into deterministic string categories.