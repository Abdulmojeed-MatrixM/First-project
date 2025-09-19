import React from "react";
import "./../styles/JobCard.css";

function JobCard({ job, deleteJob, startEditing }) {
  return (
    <div className="job-card">
      <h3>{job.activity}</h3>
      <div className="categories">
        {job.categories.map((category, index) => (
          <span key={index} className="category-tag">
            {category}
          </span>
        ))}
      </div>
      <div className="card-actions">
        <button className="edit-btn" onClick={() => startEditing(job)}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => deleteJob(job.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default JobCard;
