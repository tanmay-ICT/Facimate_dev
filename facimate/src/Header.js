import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link, useHistory} from "react-router-dom";

function Header({backButton}) {
    const history = useHistory();

    return (

        //BEM
        <div className="header">

            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon className="header__icon" fontSize="large"/>
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large"/>
                </IconButton>
            )}

            <Link to="/">
                <img className="header__logo"
                     src="https://icons.iconarchive.com/icons/sonya/swarm/128/Fire-icon.png"
                     alt="our logo"/>
            </Link>

            <Link to="/chat">
                <IconButton>
                    <ChatIcon className="header__icon" fontSize="large"/>
                </IconButton>
            </Link>

        </div>

    );
}

export default Header;