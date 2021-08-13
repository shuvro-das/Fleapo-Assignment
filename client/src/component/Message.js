import React from "react";
import "./Message.css";

function Message({ message: { user, text }, name }) {
  let isSendByCurrentUSer = false;

  const trimedName = name.trim().toLowerCase();

  if (user === trimedName) {
    isSendByCurrentUSer = true;
  }
  return isSendByCurrentUSer ? (
    <div className="messageContainer justifyEnd">
      <p className="sendText pr-10">{trimedName}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite"> {text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark"> {text}</p>
      </div>
      <p className="sendText pl-10">{user}</p>
    </div>
  );
}

export default Message;
