import React, { useState } from "react"; // React and useState hook
import TicketInfo from "./TicketInfo"; // Reusable component
import completedImage from "../images/completed.jpg";   // ✅ Completed icon
import inProgressImage from "../images/in-progress.jpg"; // 🟦 In-progress icon
import failedImage from "../images/failed.jpg";         // ❌ Failed icon
import "./StatusBoard.css"; // CSS for styling


const StatusBoard = () => {
  // 🔹 Store actual tickets instead of just counts
  const [tickets, ] = useState([
    { id: 1, title: "Fix Login Bug", status: "completed" },
    { id: 2, title: "Implement Dashboard", status: "in-progress" },
    { id: 3, title: "Database Migration", status: "failed" },
    { id: 4, title: "Update User API", status: "completed" },
    { id: 5, title: "Design Landing Page", status: "in-progress" },
  ]);

  // 🔹 State to control modal visibility and selected status
  const [selectedStatus, setSelectedStatus] = useState(null);

  // Filter tickets by status for display in modal
  const filteredTickets = tickets.filter((ticket) => ticket.status === selectedStatus);

  return (
    <div className="status-board">
      {/* Completed */}
      <TicketInfo
        result="completed"
        image={completedImage}
        count={tickets.filter((t) => t.status === "completed").length}
        onClick={() => setSelectedStatus("completed")}
      >
        <p>Tickets Completed</p>
      </TicketInfo>

      {/* In-progress */}
      <TicketInfo
        result="in-progress"
        image={inProgressImage}
        count={tickets.filter((t) => t.status === "in-progress").length}
        onClick={() => setSelectedStatus("in-progress")}
      >
        <p>Tickets In Progress</p>
      </TicketInfo>

      {/* Failed */}
      <TicketInfo
        result="failed"
        image={failedImage}
        count={tickets.filter((t) => t.status === "failed").length}
        onClick={() => setSelectedStatus("failed")}
      >
        <p>Tickets Failed</p>
      </TicketInfo>

      {/* 🔹 Modal for showing ticket details */}
      {selectedStatus && (
        <div className="modal-overlay" onClick={() => setSelectedStatus(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">
              {selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)} Tickets
            </h2>
            <ul className="ticket-list">
              {filteredTickets.map((ticket) => (
                <li key={ticket.id} className={`ticket-item ${ticket.status}`}>
                  {ticket.title}
                </li>
              ))}
            </ul>
            <button className="close-btn" onClick={() => setSelectedStatus(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusBoard;

