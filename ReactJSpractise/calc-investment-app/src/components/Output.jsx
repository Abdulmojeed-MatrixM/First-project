// Output.jsx
import React from "react";
import { generatepdf } from "../util/generatereport";
import "../App.css";

/**
 * Output component: shows the results table and provides PDF export.
 * Props:
 *  - data: { initialInvestment, annualInvestment, expectedReturn, duration, results }
 */
const Output = ({ data }) => {
  if (!data || !data.results || data.results.length === 0) {
    return (
      <section className="card">
        <h2>Results</h2>
        <p>No results yet. Fill the form and click <strong>Calculate</strong>.</p>
      </section>
    );
  }

  const { initialInvestment, annualInvestment, expectedReturn, duration, results } = data;
  const final = results[results.length - 1];

  const handleDownloadPDF = () => {
    generatepdf({
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration,
      results,
    });
  };

  return (
    <section className="card results-card">
      <h2>Calculation Results</h2>

      <div className="summary-row">
        <div className="summary-item">
          <div className="summary-label">Final Value</div>
          <div className="summary-value">£{final.investmentValue.toFixed(2)}</div>
        </div>
        <div className="summary-item">
          <div className="summary-label">Total Interest</div>
          <div className="summary-value">£{final.totalInterest.toFixed(2)}</div>
        </div>
        <div className="summary-item">
          <div className="summary-label">Invested Capital</div>
          <div className="summary-value">£{final.investedCapital.toFixed(2)}</div>
        </div>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
              <th>Investment Value</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r) => (
              <tr key={r.year}>
                <td className="align-right">{r.year}</td>
                <td className="align-right">£{r.interest.toFixed(2)}</td>
                <td className="align-right">£{r.totalInterest.toFixed(2)}</td>
                <td className="align-right">£{r.investedCapital.toFixed(2)}</td>
                <td className="align-right">£{r.investmentValue.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="form-actions">
        <button className="btn primary" onClick={handleDownloadPDF}>Download PDF</button>
      </div>
    </section>
  );
};

export default Output;
