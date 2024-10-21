import React from "react";
import "./AllMessages.css";

function AllMessages() {
  return (
    <div className="message-container">
      <div className="msg-left">
        <div className="message-bar">
          <div className="search-message">
            <h4>Messages</h4>
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-sliders"></i>
          </div>
          <div className="all-message">
            <p className="message-all">
              All <i className="fa-solid fa-angle-down"></i>
            </p>
            <p>Unread</p>
          </div>
        </div>
        <div className="message-box">
          <i className="fa-regular fa-comment"></i>
          <p style={{fontWeight: "500", color: "#000", fontSize: "0.9rem"}}>You don’t have any messages</p>
          <p>When you receive a new message, it will appear here.</p>
        </div>
      </div>
      <div className="msg-middle"></div>
      <div className="msg-right"></div>
    </div>
  );
}

export default AllMessages;
