import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

const Chat = ({location}) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const URL = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(URL);

    setName(name);
    setRoom(room);


    socket.emit("join", { name, room }, (error) => {
        if(error){
            alert(error);
        }
    });

    console.log("TCL: Chat -> socket", socket);

    
  }, [URL,location.search]);

  useEffect(() => {

    console.log("useefect called");
    
    console.log(socket);
    
    socket.on('message', (message) => {
      setMessages([...messages, message ]);
    },[]);

    // socket.on('roomData', ({ users }) => {
    //   setUsers(users);
    // })

    return () => {
      socket.emit('disconnect');

      socket.off();
    }
  })

  //function for sending messages
  const sendMessages = (event)=>{

    event.preventDefault();
    console.log(message);
    
    if(message){
        console.log("if ran");
        
        socket.emit("sendMessage",message,()=> setMessage(""))
    }

  }
//   console.log("TCL: message", message)
  console.log("TCL: messages", messages)


  
  return (
    <div className="">
      <div className="">
        <input
          value={message}
          onChange={event => setMessage(event.target.value)}
          onKeyPress={(event)=>event.key==="Enter" ? sendMessages(event):null}
        />
      </div>
    </div>
  );
};

export default Chat;
