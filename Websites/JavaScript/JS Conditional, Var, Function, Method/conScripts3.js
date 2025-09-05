

// Traffic speed limit Offense and fine Simulation
var speedLimit = 80; // Speed limit in km/h
var vehicleSpeed = 90; // Speed of the vehicle in km/h
var fineAmount = 0; // Variable to store the fine amount

if (vehicleSpeed > speedLimit) {
    //calc fine amount based on the difference between vehicle speed and speed limit.
    console.log("Speeding Offense Detected.");
    var speedDifference = vehicleSpeed - speedLimit;
    //fine calc logic: for every 5km/hr over the speed limit, issue a $50 fine.
    var fineAmount = Math.ceil (speedDifference / 5) * 50;
    console.log("You were driving at " + vehicleSpeed + " km/hr, exceeding the speed limit of " + "km/hr ");
    console.log("You have been fined $ " + fineAmount + ".");
} else {
    console.log("You were driving within the speed limit of " + speedLimit + "km/hr.");
}

// Function to calculate fine based on speed
function calculateFine(speed) {
    var baseFine = 100; // Base fine amount
    var additionalFine = Math.floor(speed / 10) * 20; // Additional fine for every 10 km/h over the limit
    return baseFine + additionalFine;
}
