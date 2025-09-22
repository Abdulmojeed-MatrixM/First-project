import React from "react";
import Header from "./components/Header";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 justify-center p-10">
      <Header
        title="Advanced Password Generator"
        subtitle="Secure. Random. Reliable."
      />
      {/* Centered Password Generator */}
      <div className="flex-grow flex items-center justify-center">
        <PasswordGenerator />
      </div>
    </div>
  );
}

export default App;
