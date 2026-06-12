// Problem #20

// Problem Statement:
// Create a multi-unit Temperature Converter.

// Requirements:
// Create a single function that accepts Celsius, Fahrenheit, and Kelvin values, performs all mutual temperature conversions, and returns the results bundled inside an object.

// Approach:
// 1. Create a function named 'temperatureConverter' that accepts three parameters: 'c', 'f', and 'k'.
// 2. Apply standard physics formulas to compute all four essential temperature conversion variations.
// 3. Return an ES6 shorthand object containing all the calculated fields.
// 4. Call the function with test values, store the returned object, and log each property cleanly (using .toFixed(2) where necessary to handle long decimals).

// Code:
function temperatureConverter(c, f, k) {
    let celsiusToFahrenheit = (c * 9/5) + 32;
    let fahrenheitToCelsius = (f - 32) * 5/9;
    let celsiusToKelvin = c + 273.15;
    let kelvinToCelsius = k - 273.15;

    return {
        celsiusToFahrenheit,
        fahrenheitToCelsius, 
        celsiusToKelvin, 
        kelvinToCelsius
    };
}

const result = temperatureConverter(2, 3, 4);
console.log(`Celsius to Fahrenheit is: ${result.celsiusToFahrenheit.toFixed(1)}`);
console.log(`Fahrenheit to Celsius is: ${result.fahrenheitToCelsius.toFixed(2)}`);
console.log(`Celsius to Kelvin is: ${result.celsiusToKelvin}`);
console.log(`Kelvin to Celsius is: ${result.kelvinToCelsius}`);

// Output:
// Celsius to Fahrenheit is: 35.6
// Fahrenheit to Celsius is: -16.11
// Celsius to Kelvin is: 275.15
// Kelvin to Celsius is: -269.15

// What I Learned:
// - Object-Oriented Returns: Returning multiple key-value pairs grouped dynamically inside a single JavaScript object.
// - Advanced String Injection: Printing structured values smoothly using complex template literals.
// - Scientific Computing: Applying core thermal physics conversion equations accurately within programming syntax.