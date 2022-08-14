import React, { useState, useEffect } from "react";
import "./chat.css";
import { CgProfile } from "react-icons/cg";
import { GrAttachment } from "react-icons/gr";
import { BsFillEmojiSmileFill, BsFillMicFill } from "react-icons/bs";
import { AiOutlineMore, AiOutlineSearch } from "react-icons/ai";

import { useParams } from 'react-router-dom';
import db from "./firebase";

function Chat() {
  const [input, setinput] = useState("");
  const [roomName, setRoomName] = useState("")
  const { roomId } = useParams();
  useEffect(() => {
    if (roomId) {
      db.collection('room').doc(roomId).onSnapshot(snapshot => {
        setRoomName(snapshot.data().name)
        })
    }
  }, [roomId])

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input)
    setinput("")
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <CgProfile className="icon" />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>last seen at.........</p>
        </div>
        <div className="chat__headerRight">
          <AiOutlineSearch className="icon" />
          <GrAttachment className="icon" />
          <AiOutlineMore className="icon" />
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && "chat__reciever"}`}>
          <span className="chat__name">you</span>Assalamu Alaikum
          <span className="time__span">3:52</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">{roomName}</span>Walekum Asalam
          <span className="time__span">3:53</span>
        </p>
      </div>
      <div className="chat__footer">
        <BsFillEmojiSmileFill className="icon" />
        <form>
          <input
            type="text"
            value={input}
            placeholder="enter a message"
            onChange={(e) => setinput(e.target.value)}
          />
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <BsFillMicFill className="micIcon " />
      </div>
    </div>
  );
}

export default Chat;
