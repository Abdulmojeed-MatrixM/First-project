import React, { useState } from "react"; 
import Header from "./JobComponent/Header";   // Header component
import Footer from "./JobComponent/Footer";   // Footer component
import JobList from "./JobComponent/JobList"; // Job list container
import "./App.css";                         // Global styles
//import StatusBoard from "./statusBoard (propschild)/StatusBoard"; // Status board component

const App = () => {
  // 🔹 State to hold list of jobs
  const [jobs, setJobs] = useState([
    { id: 1, title: "Frontend Developer", status: "running" },
    { id: 2, title: "Backend Developer", status: "completed" },
    { id: 3, title: "Project Manager", status: "pending" },
  ]);

  // 🔹 State to toggle showing/hiding jobs
  const [showJobs, setShowJobs] = useState(true);

  // 🔹 State for search input
  const [searchTerm, setSearchTerm] = useState("");

  // 🔹 State for new job title input
  const [newJob, setNewJob] = useState("");

  // Function to toggle showing job list
  const toggleJobs = () => setShowJobs(!showJobs);

  // Function to add a new job
  const addJob = () => {
    if (newJob.trim() === "") return; // Prevent empty jobs
    const newJobObj = {
      id: Date.now(),   // Unique ID using timestamp
      title: newJob,    // Title from input
      status: "pending" // Default new jobs as "pending"
    };
    setJobs([...jobs, newJobObj]); // Append new job
    setNewJob(""); // Reset input field
  };

  // Function to delete a job by ID
  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  // 🔹 Filter jobs based on search term
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header /> {/* App header */}

      <main className="main-content">
        {/* 🔹 Controls section with toggle + search */}
        <div className="controls">
          <button onClick={toggleJobs} className="btn">
            {showJobs ? "Hide Jobs" : "Show Jobs"}
          </button>

          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
        </div>

        {/* 🔹 Add Job Form */}
        <div className="add-job-form">
          <input
            type="text"
            placeholder="Enter job title"
            value={newJob}
            onChange={(e) => setNewJob(e.target.value)}
          />
          <button onClick={addJob} className="btn btn-primary">
            Add Job
          </button>
        </div>

        {/* 🔹 Conditionally render Job List */}
        {showJobs && (
          <JobList jobs={filteredJobs} deleteJob={deleteJob} />
        )}
      </main>

      <Footer /> {/* App footer */}
    </div>
  );
};

export default App;
