import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

function Join() {
  const [room, setRoom] = useState("");
  const [name, setFullname] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerCountainer">
        <h1 className="heading">Join Now</h1>

        <div>
          <input
            placeholder="Name"
            onChange={(e) => setFullname(e.target.value)}
            className="joinInput"
          />
        </div>
        <div>
          <input
            placeholder="Room"
            onChange={(e) => setRoom(e.target.value)}
            className="joinInput"
          />
        </div>

        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Join;
