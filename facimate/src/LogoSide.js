import React from 'react';
import "./NavFooter.css";
import { Link } from "react-router-dom";

function LogoSide() {

return (

    //BEM
    <div className="logoSide">
        <Link to ="/">
        <img className="nav-footer__logo"
        src="https://i.ibb.co/Sf7JSDG/Logo-2-No-border-1.png" 
        alt="our logo"/>
        </Link>
    </div>    
    );
}

export default LogoSide;