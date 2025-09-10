
/* 
Step 1: Basic Implementation with Regular Variable
What happens here:

Clicking the button does increment jobCount in memory.

You’ll see the correct increasing values in the console.

❌ But the displayed <p>Current Jobs: {jobCount}</p> never changes on the screen.
*/

/*import React from 'react';

const JobCounter = () => {
  let jobCount = 0;

  const handleAddJob = () => {
    jobCount++;
    console.log("New job count:", jobCount);
  };

  return (
    <div>
      <h1>Job Counter</h1>
      <p>Current Jobs: {jobCount}</p>
      <button onClick={handleAddJob}>Add Job</button>
    </div>
  );
};

export default JobCounter;
*/

/*
Step 2: Why doesn’t it update?

React only re-renders the component when state or props change.

A regular variable (let jobCount = 0) is reset to 0 every time the component re-renders.

Updating it inside a function doesn’t tell React to update the UI.

That’s why the console works (you see it increment), but the UI stays frozen.

Step 3: Fix with useState

To fix this, we use React’s useState hook, which stores values that survive re-renders and trigger UI updates.
*/

import React, { useState } from 'react';

const JobCounter = () => {
  const [jobCount, setJobCount] = useState(0); // jobCount = state variable

  const handleAddJob = () => {
    setJobCount(jobCount + 1); // update state
    console.log("New job count:", jobCount + 1);
  };

  return (
    <div>
      <h1>Job Counter</h1>
      <p>Current Jobs: {jobCount}</p>
      <button onClick={handleAddJob}>Add Job</button>
    </div>
  );
};

export default JobCounter;


/* 
Key Discussion Points

Why doesn’t the displayed job count update in the first version?
Because React doesn’t track regular variables—only state changes trigger re-renders.

Difference between variable vs. state:

Regular variable → temporary, resets on re-render, doesn’t update UI.

State (useState) → persistent across renders, tells React to update the UI when changed.

How does state solve the problem?
setJobCount() updates the state and triggers React to re-render the component with the new value.
*/