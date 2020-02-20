import React, { useEffect, useState } from "react";
import "./Messages.css";
import ScrollToBottom from 'react-scroll-to-bottom';
import Message  from "./Message/Message"

const Messages = ({ messages,name}) => {




  return (
  <ScrollToBottom className="messages" >
      {messages.map((message,id)=><div><Message key={id} message={message} name={name} /></div>)}
  </ScrollToBottom>
  );
};

export default Messages;
