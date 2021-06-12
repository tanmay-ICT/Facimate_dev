import React from 'react';
import "./NavFooter.css";
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';
import ExploreIcon from '@material-ui/icons/Explore';
import { Link } from "react-router-dom";
import { IoMdCompass, IoMdPerson } from "react-icons/io";
import { IoChatbubblesSharp } from "react-icons/io5";

function NavFooter() {


return (

    //BEM
    <div className="nav-footer">

        <Link to ="/">
            <IconButton>
                <IoMdCompass className="nav-footer__icon" fontSize="large" />
            </IconButton>
        </Link> 

        <Link to ="/chat">
        <IconButton>
            <IoChatbubblesSharp className="nav-footer__icon" fontSize="large" />
        </IconButton>
        </Link>

        <Link to ="/profile">
        <IconButton>
            <IoMdPerson className="nav-footer__icon" fontSize="large" />
        </IconButton>
        </Link>

        

    </div>

    );
}

export default NavFooter;

// return (

//     //BEM
//     <div className="nav-footer">

//         { backButton ? (
//             <IconButton onClick ={() => history.replace(backButton)}>
//                 <ArrowBackIosIcon className="nav-footer__icon" fontSize="large" />
//             </IconButton>
//         ) : (
//             <Link to ="/profile">
//             <IconButton>
//                 <PersonIcon className="nav-footer__icon" fontSize="large" />
//             </IconButton>
//             </Link>
//         )}

//         <Link to ="/chat">
//         <IconButton>
//             <ChatIcon className="nav-footer__icon" fontSize="large" />
//         </IconButton>
//         </Link>

//     </div>

//     );