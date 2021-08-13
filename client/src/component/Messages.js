import React from "react";
import ScrollableFeed from "react-scrollable-feed";
import "./Messages.css";
import Message from "./Message.js";

function Messages({ messages, message, name }) {
  return (
    <ScrollableFeed className="messages">
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollableFeed>
  );
}

export default Messages;
