import React from 'react'
import './Sidebarchat.css'
import { CgProfile } from "react-icons/cg";
import db from './firebase';
import { Link } from 'react-router-dom';

function Sidebarchat({ name, addNewchat ,id}) {
     
    const createChat = () => {
        const roomName = prompt("Please enter name for chat")

        if (roomName) {
            //do some database
            db.collection("room").add({
                name: roomName
            })
        }
    }


    return addNewchat ? (
     <Link to={`/rooms/${id}`}>
        <div className='SidebarChat'>
            <CgProfile className='icon' />
            <div className="sidebarchat__info">
                <h2>{name}</h2>
                <p>new message....</p>
            </div>
        </div>
     </Link>
    ) : (
        <div className="SidebarChat" onClick={createChat}>
            <h2>Add New Chat</h2>

        </div>
    )

}

export default Sidebarchat