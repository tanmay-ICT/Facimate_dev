import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';

function Header() {

return (

    //BEM
    <div className="header">
        <IconButton>
            <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>

        <img className="header__logo"
        src="https://icons.iconarchive.com/icons/sonya/swarm/128/Fire-icon.png" 
        alt="our logo"/>

        <IconButton>
            <ChatIcon className="header__icon" fontSize="large" />
        </IconButton>
    </div>

    );
}

export default Header