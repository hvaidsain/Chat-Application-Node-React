import React, { useEffect, useState } from "react";
import "./Message.css";
import ReactEmoji from 'react-emoji';

const Message = ({ message, name }) => {
  const { user, text } = message;

  const trimmedName = name.trim().toLowerCase();

  let currentUser = trimmedName == user;

  return currentUser ? (
    <div className="inuserMessageContainer"> 
      <p className="displayName">{trimmedName}</p>
      <div className="intextContainer">
        <p style={{color:"#ffffff",wordWrap:"break-word"}}>{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="outuserMessageContainer"> 
      <div className="outtextContainer">
        <p style={{color:"#000000",wordWrap:"break-word"}}>{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="displayName">{user}</p>
    </div>
  );
};

export default Message;
