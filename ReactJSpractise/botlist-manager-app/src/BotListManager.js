import React, { useState, useEffect } from "react";
import "./BotListManager.css"; // Import styles

const BotListManager = () => {
  // Load from localStorage or fallback to default bots
  const [bots, setBots] = useState(() => {
    const savedBots = localStorage.getItem("bots");
    return savedBots
      ? JSON.parse(savedBots)
      : [
          { id: 1, name: "Email Extractor", status: "Running", task: "Extracting emails" },
          { id: 2, name: "Notification Sender", status: "Completed", task: "Sending notifications" },
          { id: 3, name: "Data Analyzer", status: "Stopped", task: "Analyzing data" },
        ];
  });

  const [filter, setFilter] = useState("All");
  const [editBotId, setEditBotId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editTask, setEditTask] = useState("");

  // Persist bots to localStorage
  useEffect(() => {
    localStorage.setItem("bots", JSON.stringify(bots));
  }, [bots]);

  // Trigger job (toggle status)
  const triggerJob = (id) => {
    setBots((prevBots) =>
      prevBots.map((bot) =>
        bot.id === id
          ? {
              ...bot,
              status:
                bot.status === "Running"
                  ? "Completed"
                  : bot.status === "Completed"
                  ? "Stopped"
                  : bot.status === "Stopped"
                  ? "Running"
                  : "Running",
            }
          : bot
      )
    );
  };

  // Delete bot
  const deleteBot = (id) => {
    setBots((prevBots) => prevBots.filter((bot) => bot.id !== id));
  };

  // Add new bot
  const addBot = () => {
    const newId = bots.length ? bots[bots.length - 1].id + 1 : 1;
    const newBot = {
      id: newId,
      name: `New Bot ${newId}`,
      status: "Stopped",
      task: "Idle",
    };
    setBots([...bots, newBot]);
  };

  // Enter edit mode
  const startEdit = (bot) => {
    setEditBotId(bot.id);
    setEditName(bot.name);
    setEditTask(bot.task);
  };

  // Save edits
  const saveEdit = (id) => {
    setBots((prevBots) =>
      prevBots.map((bot) =>
        bot.id === id ? { ...bot, name: editName, task: editTask } : bot
      )
    );
    setEditBotId(null);
    setEditName("");
    setEditTask("");
  };

  // Filtered bots
  const filteredBots =
    filter === "All" ? bots : bots.filter((bot) => bot.status === filter);

  return (
    <div className="bot-container">
      <h1 className="bot-header">🤖 Bot List Manager</h1>

      {/* Filter dropdown */}
      <select
        className="bot-filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Running">Running</option>
        <option value="Stopped">Stopped</option>
        <option value="Completed">Completed</option>
      </select>

      {/* Bot list */}
      <ul className="bot-list">
        {filteredBots.map((bot) => (
          <li key={bot.id} className="bot-item">
            {editBotId === bot.id ? (
              <>
                <input
                  className="bot-input"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <input
                  className="bot-input"
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                />
                <div className="bot-buttons">
                  <button className="btn save-btn" onClick={() => saveEdit(bot.id)}>
                    💾 Save
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <strong>{bot.name}</strong> (ID: {bot.id})
                </div>
                <p>Task: {bot.task}</p>
                <p>
                  Status:{" "}
                  <span className={`status ${bot.status.toLowerCase()}`}>
                    {bot.status}
                  </span>
                </p>
                <div className="bot-buttons">
                  <button className="btn primary-btn" onClick={() => triggerJob(bot.id)}>
                    🚀 Trigger Job
                  </button>
                  <button className="btn edit-btn" onClick={() => startEdit(bot)}>
                    ✏️ Edit
                  </button>
                  <button className="btn delete-btn" onClick={() => deleteBot(bot.id)}>
                    🗑 Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      <button className="btn add-btn" onClick={addBot}>
        ➕ Add New Bot
      </button>
    </div>
  );
};

export default BotListManager;
