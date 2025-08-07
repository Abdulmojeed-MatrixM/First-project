//Math Assignment: SELF
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