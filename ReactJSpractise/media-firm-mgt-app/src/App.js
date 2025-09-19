import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JobManager from "./components/JobManager";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <JobManager />
      </main>
      <Footer />
    </div>
  );
}

export default App;
