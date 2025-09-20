// UserInput.jsx
import React, { useState } from "react";
import { calculateInvestmentResults } from "../util/investments";
import "../App.css";

/**
 * UserInput form component.
 * Props:
 *  - onCalculate(inputs, results) : function to send calculation results to parent
 */
const UserInput = ({ onCalculate }) => {
  // Form state
  const [initialInvestment, setInitialInvestment] = useState("1000");
  const [annualInvestment, setAnnualInvestment] = useState("100");
  const [expectedReturn, setExpectedReturn] = useState("5"); // percent
  const [duration, setDuration] = useState("10"); // years

  const [error, setError] = useState("");
  const [lastRunMsg, setLastRunMsg] = useState("");

  // Validate and compute
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLastRunMsg("");

    // Basic validation
    const iv = parseFloat(initialInvestment);
    const av = parseFloat(annualInvestment);
    const er = parseFloat(expectedReturn);
    const dur = parseInt(duration, 10);

    if (isNaN(iv) || isNaN(av) || isNaN(er) || isNaN(dur)) {
      setError("Please provide valid numeric values for all fields.");
      return;
    }
    if (iv < 0 || av < 0 || er < 0 || dur <= 0) {
      setError("Values must be non-negative and duration must be at least 1.");
      return;
    }

    // Build input object
    const inputs = {
      initialInvestment: iv,
      annualInvestment: av,
      expectedReturn: er,
      duration: dur,
    };

    // Call util function to compute yearly data
    const results = calculateInvestmentResults(inputs);
    // Send results to parent (App)
    if (typeof onCalculate === "function") {
      onCalculate(inputs, results);
    }

    setLastRunMsg(`Calculated ${dur} years - final value: ${results[results.length - 1].investmentValue.toFixed(2)}`);
  };

  const handleReset = () => {
    setInitialInvestment("1000");
    setAnnualInvestment("100");
    setExpectedReturn("5");
    setDuration("10");
    setError("");
    setLastRunMsg("");
  };

  return (
    <section id="user-input" className="card">
      <h2>Investment inputs</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.value)}
            step="any"
            min="0"
          />
        </div>

        <div className="input-group">
          <label>Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={annualInvestment}
            onChange={(e) => setAnnualInvestment(e.target.value)}
            step="any"
            min="0"
          />
        </div>

        <div className="input-group">
          <label>Expected Return (%)</label>
          <input
            type="number"
            name="expectedReturn"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(e.target.value)}
            step="any"
            min="0"
          />
        </div>

        <div className="input-group">
          <label>Duration (years)</label>
          <input
            type="number"
            name="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            min="1"
          />
        </div>

        {error && <p className="error">{error}</p>}

        <div className="form-actions">
          <button type="submit" className="btn primary">Calculate</button>
          <button type="button" className="btn muted" onClick={handleReset}>Reset</button>
        </div>

        {lastRunMsg && <p className="success">{lastRunMsg}</p>}
      </form>
    </section>
  );
};

export default UserInput;
