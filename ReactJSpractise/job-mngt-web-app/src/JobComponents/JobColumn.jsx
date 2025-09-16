// components/JobColumn.js
import React from 'react';
import JobItem from './JobItem';
import './JobColumn.css';

const JobColumn = ({ title, jobs, updateJobStatus, deleteJob }) => {
  return (
    <div className="job-column">
      <h2 className="column-title">{title}</h2>
      {jobs.length === 0 ? (
        <p className="empty-message">No jobs here</p>
      ) : (
        jobs.map(job => (
          <JobItem 
            key={job.id} 
            job={job} 
            updateJobStatus={updateJobStatus} 
            deleteJob={deleteJob} 
          />
        ))
      )}
    </div>
  );
};

export default JobColumn;
