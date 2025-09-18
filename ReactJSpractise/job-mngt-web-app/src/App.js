// App.js
import React, { useState } from 'react';
import JobForm from './JobComponents/JobForm';
import JobColumn from './JobComponents/JobColumn';
import Header from './JobComponents/Header';
import Footer from './JobComponents/Footer';
import './App.css';

const App = () => {
  // Job state
  const [jobs, setJobs] = useState([
    // Sample jobs displayed on load
    { id: 1, title: 'Parse Emails', category: 'Read Emails', status: 'Need to Start' },
    { id: 2, title: 'SAP Extraction', category: 'Web Parsing', status: 'In Progress' },
    { id: 3, title: 'Generate Report', category: 'Send Emails', status: 'Completed' }
  ]);

  // Add new job
  const addJob = (job) => {
    setJobs([...jobs, { id: Date.now(), ...job }]);
  };

  // Delete job
  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  // Update status
  const updateJobStatus = (id, newStatus) => {
    setJobs(
      jobs.map(job =>
        job.id === id ? { ...job, status: newStatus } : job
      )
    );
  };

  return (
    <div className="app-container">
       {/* Header */}
      <Header />

      <main className="main-content">
        <h1 className="app-title">Job Management Application</h1>
      
        {/* Form */}
        <JobForm addJob={addJob} />

        {/* Job Columns */}
        <div className="columns-container">
          <JobColumn 
            title="Need to Start" 
            jobs={jobs.filter(job => job.status === 'Need to Start')}
            updateJobStatus={updateJobStatus}
            deleteJob={deleteJob}
          />
          <JobColumn 
            title="In Progress" 
            jobs={jobs.filter(job => job.status === 'In Progress')}
            updateJobStatus={updateJobStatus}
            deleteJob={deleteJob}
          />
          <JobColumn 
            title="Completed" 
            jobs={jobs.filter(job => job.status === 'Completed')}
            updateJobStatus={updateJobStatus}
            deleteJob={deleteJob}
          />
        </div>
      </main>

      {/* Footer */}
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default App;
