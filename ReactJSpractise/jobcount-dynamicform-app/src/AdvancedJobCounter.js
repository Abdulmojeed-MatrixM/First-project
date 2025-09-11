import React, { useState } from 'react';
import './App.css';

const AdvancedJobCounter = () => {
  const [jobCount, setJobCount] = useState(0);
  const [environment, setEnvironment] = useState("Production");

  const handleAddJob = () => setJobCount(jobCount + 1);
  const handleRemoveJob = () => jobCount > 0 && setJobCount(jobCount - 1);
  const handleResetJobs = () => setJobCount(0);
  const toggleEnvironment = () =>
    setEnvironment((prevEnv) => (prevEnv === "Production" ? "UAT" : "Production"));

  const getJobMessage = () => {
    if (jobCount === 0) return "No jobs available";
    if (jobCount <= 5) return "Few jobs available";
    return "Many jobs available";
  };

  return (
    <div className="card">
      <h2>Advanced Job Counter</h2>
      <p>Current Jobs: <strong>{jobCount}</strong></p>
      <p>Environment: <strong>{environment}</strong></p>
      <p className="status">{getJobMessage()}</p>

      <div className="button-group">
        <button onClick={handleAddJob}>➕ Add Job</button>
        <button onClick={handleRemoveJob} disabled={jobCount === 0}>
          ➖ Remove Job
        </button>
        <button onClick={handleResetJobs}>🔄 Reset Jobs</button>
        <button onClick={toggleEnvironment}>🌍 Toggle Environment</button>
      </div>
    </div>
  );
};

export default AdvancedJobCounter;
