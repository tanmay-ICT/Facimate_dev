import React from 'react';
import Chat from "./Chat";
import "./Chats.css";
import LogoSide from './LogoSide';
import Matches from './Matches';
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BsPencil } from "react-icons/bs";

function Chats() {
    return (
        <div>
            <LogoSide/>
            <h1 className="newMatch"> New Matches </h1>
            <div className="matches-row">

                <Matches
                   profilePic="https://images.pexels.com/photos/3762798/pexels-photo-3762798.jpeg"
                    name="Jiah"/>
                <Matches
                    profilePic="https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg" name="Samuel"/>
                <Matches
                    profilePic="https://i.guim.co.uk/img/media/ae14333615408ab5d5ba6c23810be683e0d6f631/389_282_1481_889/master/1481.jpg?width=620&quality=85&auto=format&fit=max&s=876f72ee27628cdad5717621f5826ce4" name="Joey"/>
                <Matches
                    profilePic="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg" name="Claire"/>
            </div>


            <h2 className="conversations"> Conversations </h2>
            <div className="chats">
            
                <IoPaperPlaneOutline className="unread1"/>
                <Chat
                    name="Edna"
                    message= "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I know right! Since ..."
                    timestamp="40 sec ago"
                    profilePic="https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg"
                />
                <IoPaperPlaneOutline className="unread2"/>
                <Chat
                    name="Gjiorgi"
                    message="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sup!"
                    timestamp="6 mins ago"
                    profilePic="https://images.pexels.com/photos/3764180/pexels-photo-3764180.jpeg"
                />
                <div className="dot"></div>
                <Chat
                    name="Kim"  
                    message="Whats up? 😄"
                    timestamp="19 mins ago"
                    profilePic="https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg"
                />
                <BsPencil className="typing"/>
                <Chat
                    name="Zion"
                    message="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Typing..."
                    timestamp="47 mins ago"
                    profilePic="https://images.pexels.com/photos/1484810/pexels-photo-1484810.jpeg"
                />
            </div>
        </div>
    )
}

export default Chats

