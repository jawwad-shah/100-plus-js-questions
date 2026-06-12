// Problem #21

// Problem Statement:
// Create a Body Mass Index (BMI) Calculator with health status classification.

// Requirements:
// Create a function that accepts weight (in pounds/lbs) and height (in total inches), converts them to metric units (KG and Meters), calculates the BMI score using the standard formula, and classifies the weight status.

// Approach:
// 1. Create a function named 'bmiCalculator' that accepts 'weight' and 'height'.
// 2. Convert pounds to kilograms by dividing weight by 2.2046.
// 3. Convert inches to meters by dividing height by 39.370.
// 4. Calculate BMI by dividing weightInKG by the square of heightInM (weight / height²).
// 5. Use conditional statements to determine the health category (Underweight, Normal, Overweight, Obese) based on standard BMI ranges.
// 6. Return an object containing both the formatted score and the health status.

// Code:
function bmiCalculator(weight, height) {
    let weightInKG = weight / 2.2046;
    let heightInM = height / 39.370;
    let BMI = weightInKG / Math.pow(heightInM, 2);

    let status = "";

    if (BMI < 18.5) {
        status = "Underweight";
    } else if (BMI >= 18.5 && BMI < 25.0) {
        status = "Normal";
    } else if (BMI >= 25.0 && BMI < 30.0) {
        status = "Overweight";
    } else {
        status = "Obese";
    }

    return {
        score: BMI.toFixed(2),
        status: status
    };
}

// Testing with 150 lbs (approx 68kg) and 65 inches (5 feet 5 inches)
const result = bmiCalculator(150, 65);
console.log(`Your BMI Score: ${result.score}`);
console.log(`Your Status: ${result.status}`);

// Output:
// Your BMI Score: 24.96
// Your Status: Normal

// What I Learned:
// - Division vs Multiplication in Formulas: Ensuring mathematical equations are accurately translated into code logic.
// - Unit Normalization: Converting diverse user inputs (imperial system) into standard scientific units (metric system) before processing data.
// - Structured Data Responses: Packaging multiple related diagnostic outcomes neatly inside a return object.