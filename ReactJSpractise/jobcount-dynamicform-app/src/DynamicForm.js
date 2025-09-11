import React, { useState } from 'react';
import './App.css';

const DynamicForm = () => {
  console.log("Component re-rendered");

  const [inputValue, setInputValue] = useState("");
  const [submittedItems, setSubmittedItems] = useState([]);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.length > 0 && value.length < 3) {
      setError("Input must be at least 3 characters long.");
    } else {
      setError("");
    }
  };

  const handleReset = () => {
    setInputValue("");
    setError("");
  };

  const handleSubmit = () => {
    if (inputValue.trim().length < 3) {
      setError("Please enter at least 3 characters before submitting.");
      return;
    }
    setSubmittedItems([...submittedItems, inputValue]);
    setInputValue("");
    setError("");
  };

  return (
    <div className="card">
      <h2>Dynamic Form</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
        className="input-field"
      />

      <div className="button-group">
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="display-section">
        <h3>Current Input:</h3>
        <p>{inputValue || "Nothing typed yet..."}</p>
        <p>Character Count: {inputValue.length}</p>
      </div>

      <div className="display-section">
        <h3>Submitted Items:</h3>
        {submittedItems.length > 0 ? (
          <ul>
            {submittedItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>No items submitted yet.</p>
        )}
      </div>
    </div>
  );
};

export default DynamicForm;
