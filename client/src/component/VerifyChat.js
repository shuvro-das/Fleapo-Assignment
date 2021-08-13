import React, { useState } from "react";

import axios from "axios";
import "./JoinChat.css";

function VerifyChat(props) {
  const [otp, setotp] = useState("");
  const [firstname, setfirstName] = useState("");
  const [room, setroom] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = {
      otp,
      firstname,
    };
    try {
      const resp = await axios.post(`http://localhost:5000/verify`, data);

      props.history.push(`/chat?name=${firstname}&room=${room}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerCountainer">
        <h1 className="heading">Enter Firstname & The OTP from your Email</h1>
        <div>
          <input
            placeholder="First Name"
            onChange={(e) => setfirstName(e.target.value)}
            className="joinInput"
          />
        </div>
        <div>
          <input
            placeholder="Enter Room name"
            onChange={(e) => setroom(e.target.value)}
            className="joinInput"
          />
        </div>
        <div>
          <input
            placeholder="Otp"
            onChange={(e) => setotp(e.target.value)}
            className="joinInput"
          />
        </div>

        <button onClick={submitHandler} className="button mt-20" type="submit">
          Next
        </button>
      </div>
    </div>
  );
}

export default VerifyChat;
