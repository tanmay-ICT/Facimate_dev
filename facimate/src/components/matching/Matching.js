import React from 'react'
import FMCards from "../../FMCards";
import {TinderCard} from "react-tinder-card";
import database from "../../firebase";
import "firebase/firestore";
import "../../FMCards.css";


export function Reject(){
    
    alert("No match");
   
    // <p className="alert alert-danger">No match</p>;
}

export function Like(){
    alert("It's a match");

    // <p className="alert alert-success">It's a match</p>;
}