/*import React from "react";
import "./JobItem.css";

const JobItem = ({ job, deleteJob }) => {
  return (
    <div
      className={`job-item ${
        job.status === "completed" ? "completed" : "running"
      }`}
    >
      <div>
        <h3>{job.title}</h3>
        <p>Status: {job.status}</p>
      </div>
      <button
        onClick={() => deleteJob(job.id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </div>
  );
};

export default JobItem;
*/

import React from "react";
import "./JobItem.css";

// JobItem component receives job details + delete function via props
const JobItem = ({ job, deleteJob }) => {
  return (
    <div
      // Apply different styles based on job status
      className={`job-item ${job.status}`}
    >
      <div>
        <h3>{job.title}</h3>
        <p>Status: {job.status}</p>
      </div>

      {/* Delete button calls deleteJob with job.id */}
      <button
        onClick={() => deleteJob(job.id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </div>
  );
};

export default JobItem;
