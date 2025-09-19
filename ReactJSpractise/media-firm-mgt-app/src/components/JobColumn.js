import React from "react";
import JobCard from "./JobCard";
import "./../styles/JobManager.css";

function JobColumn({ title, status, jobs, deleteJob, startEditing }) {
  const filteredJobs = jobs.filter((job) => job.status === status);

  return (
    <div className="job-column">
      <h2>{title}</h2>
      {filteredJobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          deleteJob={deleteJob}
          startEditing={startEditing}
        />
      ))}
    </div>
  );
}

export default JobColumn;
