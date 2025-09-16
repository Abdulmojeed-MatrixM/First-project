import React from "react";

// Reusable TicketInfo component
// Accepts props: result (status type), image (icon), count (# tickets), and children (status text)
// Accepts props: result (status), image, count, children (status text), onClick handler
const TicketInfo = ({ result, image, count, children, onClick }) => {
  return (
    <div className={`ticket-info ${result}`} onClick={onClick}>
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



