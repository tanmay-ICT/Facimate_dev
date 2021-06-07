import React from 'react';
import "./NavFooter.css";
import { Link } from "react-router-dom";

function LogoHead() {

return (

    //BEM
    <div className="logoHead">
        <Link to ="/">
        <img className="nav-footer__logo"
        src="https://i.ibb.co/Sf7JSDG/Logo-2-No-border-1.png" 
        alt="our logo"/>
        </Link>
    </div>    
    );
}

export default LogoHead;