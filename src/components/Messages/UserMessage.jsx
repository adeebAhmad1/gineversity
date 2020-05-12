import React from "react";

const UserMessage = ({ name, time, message, active }) => {
  return (
    <div className={`user_messages ${active ? "active_chat" : ""}`}>
      <div className="icon_message">H</div>
      <div className="message_user_wrapper">
        <div className="user_name">{name}</div>
        <div className="time_messages">{time}</div>
        <div className="message">{message}</div>
      </div>
    </div>
  );
};

export default UserMessage;
