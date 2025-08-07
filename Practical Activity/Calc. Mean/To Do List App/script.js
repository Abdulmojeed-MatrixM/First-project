//Math Assignment: SELF
let sampless = [{"sample1": 4.2}, {"sample2": 5.1}, 
    {"sample3": 3.8}, {"sample4": 4.7}, {"sample5": 5.3}];
    let summ = 0;
//let sampleValues = Object.values(samples);
for (let i = 0; i < sampless.length; i++) {
    console.log("Sample " + (i + 1) + ": " + sampless[i]["sample" + (i + 1)]);
    summ += sampless[i]["sample" + (i + 1)];
}

let mmeanSamples = summ / sampless.length;
console.log("Mean of samples: " + mmeanSamples);
console.log("Mean of samples: " + Math.round(mmeanSamples));




// Sample data for the experiment
let samples = [4.2, 5.1, 3.8, 4.7, 5.3];
let sum = 0;
for (let i = 0; i < samples.length; i++) {
    console.log("Sample " + (i + 1) + ": " + samples[i]);
    sum += samples[i];
}

let meanSamples = sum / samples.length;
console.log("Mean of samples: " + meanSamples);
console.log("Mean of samples: " + Math.round(meanSamples));
console.log("Mean of samples: " + meanSamples);
console.log("Rounded mean of samples: " + Math.round(meanSamples));

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
var stadDev = calculateStandardDeviation(values);
var stadDevMessage = "Standard Deviation: " + stadDev;
console.log(stadDevMessage);


