//String: Represents sequences of characters enclosed in single quotes ('') or double quotes ("").
let name = "AbduLLah";
let message = "Hi, Welcome to this course";

//Number: This represents numeruc values, including integers and floating-point numbers.
let age = 45;
let price = 20.99;

//Boolean: This represents a logical value, either true or false. Booleans are often used in conditional statements and comparisons.

let isActive = true;
let hasPassed = true;
let isBullied = false;

//Undefined: This represents a variable that has been declared but not assigned a value.

let myVariable;
console.log(myVariable); // Output: undefined


//Null: This represents a deliberate non-value or null value. It is often used to intentionally assign a variable to a non-value.

let myVariables = null;

//Object: This represents a collection of key-value pairs. Ojects can contain properties and methods. They are used to store and manipulate more complex data structures.

let person = {
    name: "AbduLLah",
    age: 45,
    city: "Bristol",
    isActive: true,
    hobbies: ["reading", "gaming", "coding"]
};

//Array: This represents an ordered list of values. Arrays can contain elements of any data type including other arrays. They are eused to store and manipulate collections of data.
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];

//Function: This represents a reusable block of code that performs a specific task. Functions can accept parameters and return values. They are used to encapsulate and organize code.
function greet(name) {
    console.log("Hello, " + name + "!");
}


let a = 40;
let b = 20;

let remainder = a % b;
console.log(remainder);
console.log("Remainder of " + a + " divided by " + b + " is: " + remainder);


let m = 2;
let product = m *= 5;
console.log(product);
console.log("Product of " + m  + " is: " + product);

let value = -3.147;
let absoluteValue = Math.abs(value);
let roundedValue = Math.round(value);
let randomValue = Math.random();
console.log(absoluteValue);
console.log(roundedValue);
console.log(randomValue);
console.log("Absolute value of " + value + " is: " + absoluteValue);


let numberr = [5, 10, 15, 20, 25];
let summ = 0;

// Calculate the sum of the numbers
for (let i = 0; i < numberr.length; i++) {
    summ += numberr[i];
}

// Calculate the average
let average = summ / numberr.length;
console.log("Average:", average);

// Initialize a variable to hold the sum of squared differences
let sumOfSquaredDifferences = 0;

// Calculate the sum of squared differences from the average
for (let i = 0; i < numberr.length; i++) {
    // Subtract the average from each number, square the result, and add to the sum
    sumOfSquaredDifferences += Math.pow(numberr[i] - average, 2);
    //console.log("Sum of squared differences:", sumOfSquaredDifferences);
}

// Calculate the variance by dividing the sum of squared differences by the number of elements
let variance = sumOfSquaredDifferences / numberr.length;
console.log("Variance:", variance);

// Calculate the standard deviation by taking the square root of the variance
let standardDeviation = Math.sqrt(variance);

// Output the standard deviation
console.log("Standard Deviation:", standardDeviation);


//Array manipulation example
let fruit = ["apple", "banana", "orange"];
fruit.push("grape");


let number = [5, 10, 15, 20, 25];
let sum = 0;

// Function to calculate the mean
function calculateMean(arr) {
    let total = arr.reduce((acc, val) => acc + val, 0);
    return total / arr.length;
}

// Function to calculate the variance
function calculateVariance(arr, mean) {
    let variance = arr.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0);
    return variance / arr.length;
}

// Function to calculate the standard deviation
function calculateStandardDeviation(arr) {
    let mean = calculateMean(arr);
    let variance = calculateVariance(arr, mean);
    return Math.sqrt(variance);
}

// Calculate standard deviation
let stdDev = calculateStandardDeviation(number);
console.log("Standard Deviation:", stdDev);







//Math Assignment:
let samples = [{"sample1": 4.2}, {"sample2": 5.1}, 
    {"sample3": 3.8}, {"sample4": 4.7}, {"sample5": 5.3}];
//let sampleValues = Object.values(samples);
for (let i = 0; i < samples.length; i++) {
    console.log("Sample " + (i + 1) + ": " + samples[i]["sample" + (i + 1)]);
    sum += samples[i]["sample" + (i + 1)];
}

let meanSamples = sum / samples.length;
console.log("Mean of samples: " + meanSamples);
console.log("Mean of samples: " + Math.round(meanSamples));






// Sample data for the experiment
let values = [4.2, 5.1, 3.8, 4.7, 5.3];
// Function to calculate the mean of an array
function calculateMean(values) {
    var sum = 0;
    for (i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum / values.length;
}

//calculate the mean
var mean = calculateMean(values);
var roundedMean = Math.round(mean * 100) / 100; // Round to two decimal places
var resultMessage = "Mean: " + roundedMean;
console.log(resultMessage);

// Function to calculate the standard deviation of an array
function calculateStandardDeviation(values) {
    var mean = calculateMean(values);
    var squaredDifferences = values.map(function(value) {
        var difference = value - mean;
        return difference * difference;
    });
    var variance = calculateMean(squaredDifferences);
    return Math.round(Math.sqrt(variance) * 100) / 100; // Round to two decimal places
}
