import React from "react";
import JobItem from "./JobItem";
import "./JobList.css";

const JobList = ({ jobs, deleteJob }) => {
  return (
    <div className="job-list">
      {jobs.length === 0 ? (
        <p className="empty-text">No jobs found.</p>
      ) : (
        jobs.map((job) => (
          <JobItem key={job.id} job={job} deleteJob={deleteJob} />
        ))
      )}
    </div>
  );
};

export default JobList;
