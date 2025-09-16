// components/JobForm.js
import React, { useState } from 'react';
import './JobForm.css';

const JobForm = ({ addJob }) => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    category: '',
    status: 'Need to Start'
  });

  const categories = ['Read Emails', 'Web Parsing', 'Send Emails'];

  const handleChange = (e) => {
    setJobDetails({ ...jobDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (jobDetails.title && jobDetails.category) {
      addJob(jobDetails);
      setJobDetails({ title: '', category: '', status: 'Need to Start' });
    } else {
      alert('Please fill all fields!');
    }
  };

  return (
    <form className="form-header" onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title"
        value={jobDetails.title}
        onChange={handleChange}
        className="bot-input" 
        placeholder="Enter job title"
      />

      <select 
        name="category" 
        value={jobDetails.category} 
        onChange={handleChange} 
        className="job-category"
      >
        <option value="">Select Category</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <select 
        name="status" 
        value={jobDetails.status} 
        onChange={handleChange} 
        className="job-status"
      >
        <option value="Need to Start">Need to Start</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <button type="submit" className="submit-data">Add Job</button>
    </form>
  );
};

export default JobForm;
