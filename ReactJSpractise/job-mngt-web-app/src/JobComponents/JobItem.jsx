// components/JobItem.js
import React from 'react';
import './JobItem.css';

const JobItem = ({ job, updateJobStatus, deleteJob }) => {
  const statusColors = {
    "Need to Start": "grey",
    "In Progress": "skyblue",
    "Completed": "green"
  };

  return (
    <div className="job-item" style={{ borderLeft: `5px solid ${statusColors[job.status]}` }}>
      <div>
        <h3 className="job-title">{job.title}</h3>
        <p className="job-category">{job.category}</p>
      </div>
      <div className="job-actions">
        <select 
          value={job.status}
          onChange={(e) => updateJobStatus(job.id, e.target.value)}
          className="status-dropdown"
        >
          <option value="Need to Start">Need to Start</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button onClick={() => deleteJob(job.id)} className="delete-btn">X</button>
      </div>
    </div>
  );
};

export default JobItem;
