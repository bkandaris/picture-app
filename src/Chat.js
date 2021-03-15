import React from 'react';
import "./Chat.css";
import Avatar from "@material-ui/core/Avatar";

function Chat({id, username, timestamp, read, imageUrl, profilePic}){
    return (
        <div>
            <Avatar src={profilePic} />
            <div className="Chat__info">
                <h4>{username}</h4>
                <p>Tap to View - {new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
        </div>
    )
}

export default Chat;