/*  both AdvancedJobCounter and DynamicForm merged into the same webpage,

import React from 'react';
import AdvancedJobCounter from './AdvancedJobCounter';
import DynamicForm from './DynamicForm';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="main-title">Dashboard</h1>
      <div className="components-grid">
        <AdvancedJobCounter />
        <DynamicForm />
      </div>
    </div>
  );
};

export default App;

*/

// build both into a tabbed interface so users can switch and interract between AdvancedJobCounter and DynamicForm easily.
import React, { useState } from 'react';
import AdvancedJobCounter from './AdvancedJobCounter';
import DynamicForm from './DynamicForm';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState("counter");

  return (
    <div className="app-container">
      <h1 className="main-title">Interactive Dashboard</h1>

      {/* Navigation Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "counter" ? "tab active" : "tab"}
          onClick={() => setActiveTab("counter")}
        >
          ⚙️ Job Counter
        </button>
        <button
          className={activeTab === "form" ? "tab active" : "tab"}
          onClick={() => setActiveTab("form")}
        >
          📝 Dynamic Form
        </button>
      </div>

      {/* Content Area */}
      <div className="tab-content">
        {activeTab === "counter" && <AdvancedJobCounter />}
        {activeTab === "form" && <DynamicForm />}
      </div>
    </div>
  );
};

export default App;
