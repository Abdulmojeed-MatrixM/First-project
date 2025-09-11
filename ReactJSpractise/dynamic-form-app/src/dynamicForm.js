import React, { useState } from 'react';

const DynamicForm = () => {
  console.log("🔄 Component re-rendered");

  // 1. Initialize state
  const [inputValue, setInputValue] = useState("");
  const [submittedItems, setSubmittedItems] = useState([]);
  const [error, setError] = useState("");

  // 2. Handle input change
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    console.log("✍️ Input changed:", value);

    // Basic validation (min length = 3)
    if (value.length > 0 && value.length < 3) {
      setError("Input must be at least 3 characters long.");
    } else {
      setError("");
    }
  };

  // 3. Handle reset
  const handleReset = () => {
    setInputValue("");
    setError("");
    console.log("🔄 Input reset");
  };

  // 4. Handle submit
  const handleSubmit = () => {
    if (inputValue.trim().length < 3) {
      setError("Please enter at least 3 characters before submitting.");
      return;
    }
    setSubmittedItems([...submittedItems, inputValue]);
    setInputValue("");
    setError("");
    console.log("✅ Submitted:", inputValue);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", textAlign: "center" }}>
      <h1>Dynamic Form</h1>

      {/* Input Field */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
        style={{
          padding: "8px",
          fontSize: "16px",
          width: "100%",
          marginBottom: "10px",
        }}
      />

      {/* Buttons */}
      <div style={{ marginBottom: "15px" }}>
        <button onClick={handleReset} style={{ marginRight: "10px" }}>
          Reset
        </button>
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display Current Input */}
      <div style={{ marginTop: "20px" }}>
        <h2>Current Input:</h2>
        <p>{inputValue || "Nothing typed yet..."}</p>
        <p>Character Count: {inputValue.length}</p>
      </div>

      {/* Submitted Items */}
      <div style={{ marginTop: "20px" }}>
        <h2>Submitted Items:</h2>
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
