import React from "react";
import "./JobItem.css";

// JobItem displays single job details
const JobItem = ({ job, onDelete }) => {
  if (!job) return null; // Bonus: handle undefined props

  return (
    <div className={`job-item ${job.status}`}>
      <div>
        <h3>{job.name}</h3>
        <p>Status: {job.status}</p>
      </div>

      {/* Call delete function with job.id */}
      <button
        onClick={() => onDelete(job.id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </div>
  );
};

export default JobItem;
