import React, { useState, useEffect } from "react";
import CategorySelector from "./CategorySelector";
import "./../styles/JobForm.css";

function JobForm({ addJob, editingJob, updateJob }) {
  const [activity, setActivity] = useState("");
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState("Need to Complete");

  useEffect(() => {
    if (editingJob) {
      setActivity(editingJob.activity);
      setCategories(editingJob.categories);
      setStatus(editingJob.status);
    }
  }, [editingJob]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!activity.trim()) {
      alert("Please enter a job activity.");
      return;
    }
    if (categories.length === 0) {
      alert("Please select at least one category.");
      return;
    }

    if (editingJob) {
      updateJob({ ...editingJob, activity, categories, status });
    } else {
      addJob({ activity, categories, status });
    }

    resetForm();
  };

  const resetForm = () => {
    setActivity("");
    setCategories([]);
    setStatus("Need to Complete");
  };

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        placeholder="Enter job activity"
      />

      <CategorySelector categories={categories} setCategories={setCategories} />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Need to Complete">Need to Complete</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <button type="submit">{editingJob ? "Update Job" : "Add Job"}</button>
      {editingJob && <button onClick={resetForm}>Cancel</button>}
    </form>
  );
}

export default JobForm;
