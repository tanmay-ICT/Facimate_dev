import React from "react"
import FMCards from "./FMCards";
import NavFooter from "./NavFooter";
import SwipeButtons from "./SwipeButtons";
import "./Explore.css";
import LogoHead from "./LogoHead";

export default function Explore() {

    return (
        <>
            <h1 className="explore"> Explore </h1>
            <LogoHead/>
            <FMCards/>
            <NavFooter/>
        </>
    )
}