import React from "react";
import "./OnlineUsers.css";
function OnlineUsers({ users }) {
  return (
    <div className="textContainer">
      {users ? (
        <div>
          <h1>Active Users: </h1>
          <div className="activeContainer">
            <h2>
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  {name}
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default OnlineUsers;
