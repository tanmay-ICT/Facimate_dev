 import React from 'react';
import {Reject, Like} from "./components/matching/Matching";
import IconButton from "@material-ui/core/IconButton";
import { HiOutlineX, HiOutlineHeart, HiOutlineChat } from "react-icons/hi";
import { CgUndo } from "react-icons/cg";
import TinderCard from 'react-tinder-card';

import "./SwipeButtons.css"

const SwipeButtons = ({onRightClick}) => {

    return (
        <div className="swipeButtons">

            <IconButton className="swipeButtons__repeat">
                 <CgUndo className="icon_repeat" />
            </IconButton>

            <IconButton  className="swipeButtons__left">
                <HiOutlineX className="icon_left" />
            </IconButton>

            <IconButton onClick={onRightClick} className="swipeButtons__right">
                <HiOutlineHeart className="icon_right" />
            </IconButton>

            <IconButton className="swipeButtons__msg">
                <HiOutlineChat className="icon_msg" />
            </IconButton>

        </div>
    );
};

export default SwipeButtons;