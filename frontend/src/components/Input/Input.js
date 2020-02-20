import React, { useEffect, useState } from "react";
import "./Input.css";

const Input = ({ message, setMessage, sendMessages }) => {
  return (
    <form className="inputContainer">
      <input
        className="input"
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={event => setMessage(event.target.value)}
        onKeyPress={event =>
          event.key === "Enter" ? sendMessages(event) : null
        }
      />

      <button className="sendButton" onClick={(event)=>sendMessages(event)}>
          Send
      </button>
    </form>
  );
};

export default Input;
