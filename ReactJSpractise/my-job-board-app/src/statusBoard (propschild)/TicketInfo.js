import React from "react";

// Reusable TicketInfo component
// Accepts props: result (status type), image (icon), count (# tickets), and children (status text)
const TicketInfo = ({ result, image, count, children }) => {
  return (
    <div className={`ticket-info ${result}`}>
      {/* Status Icon */}
      <img src={image} alt={`${result} icon`} className="ticket-icon" />

      {/* Status Description (from props.children) */}
      <div className="ticket-text">{children}</div>

      {/* Ticket Count */}
      <span className="ticket-count">{count}</span>
    </div>
  );
};

export default TicketInfo;
