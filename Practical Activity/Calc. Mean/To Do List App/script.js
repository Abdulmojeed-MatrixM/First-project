// Math Assignment: SELF
let sampless = [{"sample1": 4.2}, {"sample2": 5.1}, 
    {"sample3": 3.8}, {"sample4": 4.7}, {"sample5": 5.3}];
    let sum = 0;
//let sampleValues = Object.values(samples);
for (let i = 0; i < sampless.length; i++) {
    console.log("Sample " + (i + 1) + ": " + sampless[i]["sample" + (i + 1)]);
    sum += sampless[i]["sample" + (i + 1)];
}

let meanSamples = sum / sampless.length;
console.log("Mean of samples: " + meanSamples);
console.log("Mean of samples: " + Math.round(meanSamples));
