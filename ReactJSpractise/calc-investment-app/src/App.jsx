// App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Output from "./components/Output";
import "./App.css";

/**
 * Main App component - holds results and input summary and renders main UI.
 */
const App = () => {
  // `calculation` will hold an object like:
  // { initialInvestment, annualInvestment, expectedReturn, duration, results }
  const [calculation, setCalculation] = useState(null);

  // Called from UserInput after successful calculation
  const handleCalculate = (inputValues, results) => {
    setCalculation({
      ...inputValues,
      results,
    });
  };

  return (
    <div className="app-root">
      <Header
        title="Smart Investment Calculator"
        subtitle="Plan, project & optimize your investments"
      />

      <main className="main-grid">
        {/* Form - performs calculation and passes data back to App */}
        <UserInput onCalculate={handleCalculate} />

        {/* Output - displays results and provides PDF export */}
        <Output data={calculation} />
      </main>
    </div>
  );
};

export default App;
