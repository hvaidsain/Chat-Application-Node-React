import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.css";
import Infobar from "../Infobar/Infobar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

let socket;
let options = {
  rememberUpgrade:true,
  transports: ['websocket'],
  secure:true, 
  rejectUnauthorized: true
}

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const URL = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io.connect(URL,options);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, error => {
      if (error) {
        alert(error);
      }
    });

    // console.log("TCL: Chat -> socket", socket);
  }, [URL, location.search]);

  useEffect(() => {
    // console.log("useefect called");

    // console.log(socket);

    socket.on("message", message => {
      setMessages([...messages, message]);
    });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [messages]);

  //function for sending messages
  const sendMessages = event => {
    event.preventDefault();
    // console.log(message);

    if (message) {
      // console.log("if ran");

      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };
  //   console.log("TCL: message", message)
  // console.log("TCL: messages", messages);

  return (
    <div className="outerContainer">
      <div className="container">
        <Infobar room={room} />

        <Messages messages={messages} name={name} />

        <Input
          message={message}
          setMessage={setMessage}
          sendMessages={sendMessages}
        />
      </div>
    </div>
  );
};

export default Chat;
