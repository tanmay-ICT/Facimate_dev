import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./Matches.css";

function Matches({ profilePic, name }) {
    
    return (
    
        <div className = "matches">
        <Avatar className="match__image" src = {profilePic} />
            <div className ="match__name">
                <p>{name}</p>
            </div>
        </div>

    );
}

export default Matches;