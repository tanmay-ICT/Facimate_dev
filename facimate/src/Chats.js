import React from 'react';
import Chat from "./Chat";
import "./Chats.css";
import LogoHead from './Logo';

function Chats() {
    return (
        <div>
            <LogoHead className ="chatLogo"/>
            <h1 className="newMatch"> New Matches </h1>
            <h2 className ="conversations"> Conversations </h2>
            <div className="chats">
                <Chat
                    name="Darth"
                    message="Your name is Luke, innit?"
                    timestamp="40 seconds ago"
                    profilePic="http://www.globalo.com/content/uploads/2015/12/darth-vader.jpg%22"
                />
                <Chat
                    name="Rambo"
                    message="Sup!"
                    timestamp="6 minutes ago"
                    profilePic="https://i.ytimg.com/an/-T39_xJo9iA/a90a1f89-6fe6-470c-aec6-2fa41c7fc1ab_mq.jpg?v=5ef6178d"
                />
                <Chat
                    name="Lizzy"
                    message="Whats up 💖"
                    timestamp="19 minutes ago"
                    profilePic="https://s3-eu-west-1.amazonaws.com/uploads.playbaamboozle.com/uploads/images/12299/1572591182_97366"
                />
                <Chat
                    name="Bob"
                    message="Wagwan?!"
                    timestamp="47 minutes ago"
                    profilePic="https://i.pinimg.com/474x/6e/0b/aa/6e0baa1355cf0d1cb0961572032b0f1f.jpg"
                />
            </div>
        </div>
    )
}

export default Chats

