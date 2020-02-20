import React, { useEffect, useState } from "react";
import "./Message.css";
import ReactEmoji from 'react-emoji';

const Message = ({ message, name }) => {
  const { user, text } = message;

  const trimmedName = name.trim().toLowerCase();

  let currentUser = trimmedName == user;

  return currentUser ? (
    <div className="messageContainer"> 
      <p>{trimmedName}</p>
      <div>
        <p>{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer"> 
      <div>
        <p>{ReactEmoji.emojify(text)}</p>
      </div>
      <p>{trimmedName}</p>
    </div>
  );
};

export default Message;
