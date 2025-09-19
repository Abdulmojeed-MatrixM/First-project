import React, { useState, useEffect } from "react";
import JobColumn from "./JobColumn";
import JobForm from "./JobForm";
import "./../styles/JobManager.css";

function JobManager() {
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");
    return savedJobs ? JSON.parse(savedJobs) : [];
  });

  const [editingJob, setEditingJob] = useState(null);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => {
    setJobs((prevJobs) => [...prevJobs, { ...job, id: Date.now() }]);
  };

  const deleteJob = (jobId) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
  };

  const clearAllJobs = () => {
    setJobs([]);
    localStorage.removeItem("jobs");
  };

  const startEditing = (job) => {
    setEditingJob(job);
  };

  const updateJob = (updatedJob) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    );
    setEditingJob(null);
  };

  return (
    <div className="job-manager">
      <JobForm addJob={addJob} editingJob={editingJob} updateJob={updateJob} />
      <button className="clear-btn" onClick={clearAllJobs}>
        Clear All Jobs
      </button>
      <div className="job-columns">
        <JobColumn
          title="Need to Complete"
          status="Need to Complete"
          jobs={jobs}
          deleteJob={deleteJob}
          startEditing={startEditing}
        />
        <JobColumn
          title="In Progress"
          status="In Progress"
          jobs={jobs}
          deleteJob={deleteJob}
          startEditing={startEditing}
        />
        <JobColumn
          title="Completed"
          status="Completed"
          jobs={jobs}
          deleteJob={deleteJob}
          startEditing={startEditing}
        />
      </div>
    </div>
  );
}

export default JobManager;
