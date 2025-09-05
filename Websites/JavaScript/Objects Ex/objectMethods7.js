// Daily School Run Simulation (Daily Weekdays)

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
  // Each child object has properties like 'name' (String), 'gender' (String), 'grade' (Number),
  // and a new 'attendance' object specifying their daily schedule.
  children: [
    {
      name: "Liam",
      gender: "boy",
      grade: 2,
      // Liam attends every weekday
      attendance: {
        "Monday": "full",
        "Tuesday": "full",
        "Wednesday": "full",
        "Thursday": "full",
        "Friday": "full"
      }
    },
    {
      name: "Sophia",
      gender: "girl",
      grade: 4,
      // Sophia attends Monday (full), Tuesday (full), and Wednesday (half)
      attendance: {
        "Monday": "full",
        "Tuesday": "full",
        "Wednesday": "half", // Half day means drop-off only
        "Thursday": "none",
        "Friday": "none"
      }
    }
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
   * Purpose: Orchestrates the entire daily school run for all children on a given day,
   * considering their individual attendance schedules.
   * Parameter: dayOfWeek (String) - The current day (e.g., "Monday", "Tuesday").
   * This method uses loops to iterate through the 'children' array and conditional logic
   * based on each child's attendance for the specific day.
   */
  runDailySchedule: function(dayOfWeek) {
    console.log(`\n=== Starting ${dayOfWeek}'s School Run ===`);

    // --- Drop-off Phase ---
    console.log(`\n--- Morning Drop-off (${this.dropOffTime}) ---`);
    let droppedOffChildren = []; // To keep track of who was dropped off
    // Using a 'for...of' loop to iterate through each child object in the 'children' array.
    for (const child of this.children) {
      const attendanceType = child.attendance[dayOfWeek]; // Get attendance type for the current day

      if (attendanceType === "full" || attendanceType === "half") {
        this.greetChild(child.name); // Greet child if attending
        this.performDropOff(child.name); // Perform drop-off
        droppedOffChildren.push({ name: child.name, attendanceType: attendanceType });
      } else {
        console.log(`- ${child.name} is not attending school today.`);
      }
    }
    if (droppedOffChildren.length > 0) {
      console.log("Children dropped off. Enjoy your day at school!");
    } else {
      console.log("No children attending school for drop-off today.");
    }


    // Simulate the school day passing
    console.log("\n--- School Day in Progress... ---");
    // In a real application, there might be a delay or other activities here.

    // --- Pick-up Phase ---
    console.log(`\n--- Afternoon Pick-up (${this.pickUpTime}) ---`);
    let pickedUpChildren = []; // To keep track of who was picked up
    // Using a traditional 'for' loop for variety, iterating by index.
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i]; // Accessing the child object by index
      const attendanceType = child.attendance[dayOfWeek]; // Get attendance type for the current day

      // Only pick up if attendance is 'full'
      if (attendanceType === "full") {
        this.performPickUp(child.name); // Perform pick-up
        console.log(`Welcome home, ${child.name}!`);
        pickedUpChildren.push(child.name);
      } else if (attendanceType === "half") {
        console.log(`- ${child.name} had a half-day and was picked up earlier (or not attending afternoon).`);
      } else {
        console.log(`- ${child.name} was not at school for pick-up today.`);
      }
    }
    if (pickedUpChildren.length > 0) {
      console.log("All attending children picked up.");
    } else {
      console.log("No children attending school for pick-up today.");
    }
    console.log("\n=== End of Daily School Run ===\n");
  }
};

// --- Simulating the Daily Routine for Monday to Friday ---

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

console.log(`\n--- Starting Daily School Run Simulation (Monday to Friday) ---`);

// Loop through each weekday and run the daily schedule
for (const day of weekdays) {
  ourDailyRoutine.runDailySchedule(day);
}

console.log(`\n--- Daily School Run Simulation Completed ---`);
