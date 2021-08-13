import React from "react";
import "./InfoBar.css";

// import closeIcon from "./icons/";
// import onlineIcon from "../../public/icons/";

function InfoBar({ room }) {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <h3>Room: {room}</h3>
      </div>
      <div className="RightInnerContainer">
        <a href="/">
          <button style={{ color: "white", backgroundColor: "green" }}>
            Close Chat
          </button>
        </a>
      </div>
    </div>
  );
}

export default InfoBar;
