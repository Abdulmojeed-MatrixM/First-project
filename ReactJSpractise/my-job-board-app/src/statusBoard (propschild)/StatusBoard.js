import React, { useState } from "react";
import TicketInfo from "./TicketInfo"; // Reusable component
import completedImage from "../images/completed.jpg";   // ✅ Completed icon
import inProgressImage from "../images/in-progress.jpg"; // 🟦 In-progress icon
import failedImage from "../images/failed.jpg";         // ❌ Failed icon
import "./StatusBoard.css"; // CSS for styling

const StatusBoard = () => {
  // 🔹 State to track ticket counts
  const [tickets, setTickets] = useState({
    completed: 12,
    "in-progress": 7,
    failed: 3,
  });

  return (
    <div className="status-board">
      {/* Completed tickets */}
      <TicketInfo result="completed" image={completedImage} count={tickets.completed}>
        <p>Tickets Completed</p>
      </TicketInfo>

      {/* In-progress tickets */}
      <TicketInfo result="in-progress" image={inProgressImage} count={tickets["in-progress"]}>
        <p>Tickets In Progress</p>
      </TicketInfo>

      {/* Failed tickets */}
      <TicketInfo result="failed" image={failedImage} count={tickets.failed}>
        <p>Tickets Failed</p>
      </TicketInfo>
    </div>
  );
};

export default StatusBoard;
