import React, { useState } from "react";
import JobList from "./JobComponent/JobList";
import "./App.css";

const App = () => {
  // 🔹 Jobs state managed at the top level
  const [jobs, setJobs] = useState([
    { id: 1, name: "Frontend Developer", status: "running" },
    { id: 2, name: "Backend Developer", status: "completed" },
    { id: 3, name: "Project Manager", status: "pending" },
  ]);

  // 🔹 Function to delete a job by ID
  const handleDeleteJob = (id) => { // Receive job ID from child
    setJobs(jobs.filter((job) => job.id !== id)); // Remove job with matching ID
  };

  // 🔹 (Optional) Function to add new jobs
  const handleAddJob = () => {
    const newJob = {
      id: Date.now(),
      name: `New Job ${jobs.length + 1}`,
      status: "pending",
    };
    setJobs([...jobs, newJob]);
  };

  return (
    <div className="app-container">
      <h1>Job Board</h1>
      <button className="btn" onClick={handleAddJob}>
        ➕ Add Job
      </button>

      {/* Pass jobs + delete handler to JobList via props */}
      <JobList jobs={jobs} onDeleteJob={handleDeleteJob} />
    </div>
  );
};

export default App;
