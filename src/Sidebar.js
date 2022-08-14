import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Sidebarchat from "./Sidebarchat";
import { CgProfile } from "react-icons/cg";
import { RiDonutChartLine } from "react-icons/ri";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { AiOutlineMore, AiOutlineSearch } from "react-icons/ai";
import db from "./firebase";

function Sidebar() {
    const [room, setroom] = useState([]);
    useEffect(() => {
       const unsubscribe =  db.collection("room").onSnapshot(snapshot => (
            setroom(
                snapshot.docs.map(doc =>
                ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        ));

        return ()=>{
            unsubscribe();
            
        }
    }, []);
    return (
        <div className="sidebar">
            {/* header section  */}
            <div className="sidebar__header">
                <CgProfile className="icon" />
                <div className="sidebar__headerRight">
                    <RiDonutChartLine className="icon" />
                    <BsFillChatLeftTextFill className="icon" />
                    <AiOutlineMore className="icon" />
                </div>
            </div>

            {/* search section  */}
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <AiOutlineSearch className="searchIcon" />
                    <input type="text" placeholder="Search or start a new chat" />
                </div>
            </div>

            {/* chat section  */}
            <div className="sidebar__chats">
                <Sidebarchat addNewChat/>
                {room.map(room => (
                    <Sidebarchat key={room.id} id={room.id} name={room.data.name} addNewchat/>
                    ))}
            </div>
        </div>
    );
}

export default Sidebar;
