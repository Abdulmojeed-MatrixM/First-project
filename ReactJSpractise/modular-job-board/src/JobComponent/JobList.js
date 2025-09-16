import React from "react";
import JobItem from "./JobItem";

// JobList receives jobs + delete function from App
const JobList = ({ jobs, onDeleteJob }) => { // Destructure props
  // Bonus: handle empty job list
  if (!jobs || jobs.length === 0) {
    return <p>No jobs available.</p>;
  }

  return (
    <div className="job-list">
      {jobs.map((job) => ( // Iterate over jobs array
        <JobItem
          key={job.id} // ✅ unique key
          job={job}
          onDelete={onDeleteJob} // pass delete function down
        />
      ))}
    </div>
  );
};

export default JobList;
