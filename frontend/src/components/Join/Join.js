import React, { useState } from "react";
import {Link} from "react-router-dom"
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleJoin = (event) =>{
      
    if(!name || !room){
        event.preventDefault();
        alert("Please Enter Name and Room")
    }

  }

  return (
    <div className="Container">
      <div className="innerContainer">
        <h2>Just-Talk</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={event => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          name="room"
          placeholder="Room"
          value={room}
          onChange={event => {
            setRoom(event.target.value);
          }}
        />
        <Link onClick={(event)=>handleJoin(event)} to={`/chat?name=${name}&room=${room}`}>
        <button type="submit">Join</button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
