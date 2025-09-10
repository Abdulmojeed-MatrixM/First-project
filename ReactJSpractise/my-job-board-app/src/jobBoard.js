import React, { useState } from 'react';
import './JobBoard.css'; // Import CSS file

const JobBoard = () => {
  const companyName = "TechCorp";
  const [jobCount, setJobCount] = useState(5); // state for dynamic updates

  // Function to return messages based on jobCount
  const getJobMessage = () => {
    if (jobCount === 0) {
      return "No jobs to schedule today";
    } else if (jobCount > 0 && jobCount <= 5) {
      return `Jobs running today from bot: ${jobCount}`;
    } else {
      return `Busy day! More than 5 jobs running today (${jobCount} jobs)`;
    }
  };

  return (
    <div className="job-board">
      {/* Display company name */}
      <h1>{companyName} Job Board</h1>

      {/* Display job message */}
      <p className="job-message">{getJobMessage()}</p>

      {/* Bonus: Expected jobs next week */}
      <p className="job-forecast">
        Expected jobs next week: <strong>{Math.round(jobCount * 1.5)}</strong>
      </p>

      {/* Buttons to update jobCount */}
      <div className="buttons">
        <button onClick={() => setJobCount(jobCount - 1)} disabled={jobCount === 0}>
          - Decrease
        </button>
        <button onClick={() => setJobCount(jobCount + 1)}>
          + Increase
        </button>
      </div>
    </div>
  );
};

export default JobBoard;
