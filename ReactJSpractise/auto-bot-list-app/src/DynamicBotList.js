import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [bots, setBots] = useState([
    { id: "1", name: "Email Bot", status: "Active" },
    { id: "2", name: "Data Bot", status: "Inactive" },
  ]);

  const [newBot, setNewBot] = useState({ id: "", name: "", status: "" });
  const [darkMode, setDarkMode] = useState(false);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  // Save theme preference to localStorage
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Handles input changes for new bot form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBot({ ...newBot, [name]: value });
  };

  // Adds a new bot to the list
  const addBotToList = () => {
    if (
      newBot.id.trim() === "" ||
      newBot.name.trim() === "" ||
      newBot.status.trim() === ""
    ) {
      alert("Please fill in all fields before adding a new bot.");
      return;
    }
    setBots([...bots, newBot]);
    setNewBot({ id: "", name: "", status: "" });
  };

  // Deletes a bot by ID
  const deleteBot = (id) => {
    const updatedBots = bots.filter((bot) => bot.id !== id);
    setBots(updatedBots);
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="app-card">
        {/* Header */}
        <div className="header">
          <h1>Dynamic Bot Manager</h1>
          <button
            className="theme-toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
        <p>Add, view, and manage your bot list.</p>

        {/* Input Section */}
        <div className="section-box">
          <h2>Add a New Bot</h2>
          <div className="form-grid">
            <input
              type="text"
              name="id"
              placeholder="Bot ID"
              value={newBot.id}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Bot Name"
              value={newBot.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="status"
              placeholder="Status (Active/Inactive)"
              value={newBot.status}
              onChange={handleInputChange}
            />
          </div>
          <button onClick={addBotToList} className="btn btn-primary">
            Add Bot
          </button>
        </div>

        {/* Bot List Section */}
        <div>
          <h2>Current Bots</h2>
          {bots.length === 0 ? (
            <p className="empty-text">No bots in the list. Add one above!</p>
          ) : (
            <ul className="bot-list">
              {bots.map((bot) => (
                <li key={bot.id} className="bot-item">
                  <div>
                    <p>
                      <strong>ID:</strong> {bot.id}
                    </p>
                    <p>
                      <strong>Name:</strong> {bot.name}
                    </p>
                    <p
                      className={
                        bot.status === "Active"
                          ? "status-active"
                          : "status-inactive"
                      }
                    >
                      <strong>Status:</strong> {bot.status}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteBot(bot.id)}
                    className="delete-btn"
                    aria-label={`Delete ${bot.name}`}
                  >
                    🗑
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
