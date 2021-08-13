import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./JoinChat.css";

function JoinChat(props) {
  const [email, setEmail] = useState("");
  const [name, setFullname] = useState("");

  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   const data = {
  //     email,
  //   };
  //   try {
  //     const resp = await axios.post(`http://localhost:5000/joining`, data);

  //     props.history.push(`/verify`);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const submitHandler = () => {
    const data = {
      email,
      name,
    };
    axios
      .post("http://localhost:5000/joining", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerCountainer">
        <h1 className="heading">Log In With Email & Name</h1>
        <div>
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="joinInput"
          />
        </div>
        <div>
          <input
            placeholder="Full Name"
            onChange={(e) => setFullname(e.target.value)}
            className="joinInput"
          />
        </div>

        <Link onClick={submitHandler} to={`/verify`}>
          <button className="button mt-20" type="submit">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}

export default JoinChat;
