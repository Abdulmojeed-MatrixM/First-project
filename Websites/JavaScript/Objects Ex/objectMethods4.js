/**
 * This object, 'ourDailyRoutine', encapsulates all the data (properties)
 * and actions (methods) related to managing a daily school run for children.
 */
const ourDailyRoutine = {
  // --- PROPERTIES (Storing Data using various Datatypes) ---

  // String datatype: Name of the parent/guardian
  parentName: "Alex Johnson",

  // String datatype: Name of the school
  schoolName: "Bright Minds Academy",

  // String datatype: Scheduled drop-off time
  dropOffTime: "8:15 AM",

  // String datatype: Scheduled pick-up time
  pickUpTime: "3:30 PM",

  // Array datatype: Contains objects, each representing a child.
  // Each child object has properties like 'name' (String), 'gender' (String), 'grade' (Number).
  children: [
    { name: "Liam", gender: "boy", grade: 2 },
    { name: "Sophia", gender: "girl", grade: 4 }
  ],

  // --- METHODS (Functions associated with the object, performing actions) ---

  /**
   * Method: greetChild
   * Purpose: Greets a specific child.
   * Parameter: childName (String) - The name of the child to greet.
   */
  greetChild: function(childName) {
    console.log(`👋 Good morning, ${childName}! Time for school.`);
  },

  /**
   * Method: performDropOff
   * Purpose: Simulates dropping off a child at school.
   * Parameter: childName (String) - The name of the child being dropped off.
   * Uses 'this' to access other properties of the 'ourDailyRoutine' object.
   */
  performDropOff: function(childName) {
    console.log(
      `🚗 ${this.parentName} is dropping off ${childName} at ${this.schoolName} at ${this.dropOffTime}.`
    );
  },

  /**
   * Method: performPickUp
   * Purpose: Simulates picking up a child from school.
   * Parameter: childName (String) - The name of the child being picked up.
   * Uses 'this' to access other properties of the 'ourDailyRoutine' object.
   */
  performPickUp: function(childName) {
    console.log(
      `🚶‍♀️ ${this.parentName} is picking up ${childName} from ${this.schoolName} at ${this.pickUpTime}.`
    );
  },

  /**
   * Method: runDailySchedule
   * Purpose: Orchestrates the entire daily school run for all children.
   * Parameter: dayOfWeek (String) - The current day (e.g., "Monday", "Tuesday").
   * This method uses loops to iterate through the 'children' array.
   */
  runDailySchedule: function(dayOfWeek) {
    console.log(`\n=== Starting ${dayOfWeek}'s School Run ===`);

    // --- Drop-off Phase ---
    console.log(`\n--- Morning Drop-off (${this.dropOffTime}) ---`);
    // Using a 'for...of' loop to iterate through each child object in the 'children' array.
    for (const child of this.children) {
      this.greetChild(child.name); // Calling another method within this object
      this.performDropOff(child.name); // Calling the 'performDropOff' method with 'child.name' as a parameter
    }
    console.log("All children dropped off. Enjoy your day at school!");

    // Simulate the school day passing
    console.log("\n--- School Day in Progress... ---");
    // In a real application, there might be a delay or other activities here.

    // --- Pick-up Phase ---
    console.log(`\n--- Afternoon Pick-up (${this.pickUpTime}) ---`);
    // Using a traditional 'for' loop for variety, iterating by index.
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i]; // Accessing the child object by index
      this.performPickUp(child.name); // Calling the 'performPickUp' method with 'child.name' as a parameter
      console.log(`Welcome home, ${child.name}!`);
    }
    console.log("\n=== End of Daily School Run ===\n");
  }
};

// --- Simulating the Daily Routine for a few days ---

// Calling the 'runDailySchedule' method of the 'ourDailyRoutine' object,
// passing the day of the week as a parameter.
ourDailyRoutine.runDailySchedule("Monday");
ourDailyRoutine.runDailySchedule("Tuesday");
ourDailyRoutine.runDailySchedule("Wednesday");
