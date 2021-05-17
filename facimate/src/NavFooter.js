import React from 'react';
import "./NavFooter.css";
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from "react-router-dom";

function NavFooter({ backButton }) {
const history = useHistory();

return (

    //BEM
    <div className="nav-footer">

        { backButton ? (
            <IconButton onClick ={() => history.replace(backButton)}>
                <ArrowBackIosIcon className="nav-footer__icon" fontSize="large" />
            </IconButton>
        ) : (
            <IconButton>
                <PersonIcon className="nav-footer__icon" fontSize="large" />
            </IconButton>
        )}

        <Link to ="/">
        <img className="nav-footer__logo"
        src="https://icons.iconarchive.com/icons/sonya/swarm/128/Fire-icon.png" 
        alt="our logo"/>
        </Link>

        <Link to ="/chat">
        <IconButton>
            <ChatIcon className="nav-footer__icon" fontSize="large" />
        </IconButton>
        </Link>

    </div>

    );
}

export default NavFooter;