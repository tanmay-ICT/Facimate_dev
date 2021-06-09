import React, {useState, useEffect} from "react";
import TinderCard from "react-tinder-card";
import database, {auth} from "./firebase";
import "./FMCards.css";
import FMCard from "./FMCard";

const FMCards = () => {
    const [people, setPeople] = useState([]);

//Piece of code which runs based on a condition

    useEffect(() => {
        //this is where the code runs..

        const unsubscribe = database
            .collection("people")
            .onSnapshot((snapshot) =>
                setPeople(snapshot.docs.map((doc) => doc.data()))
            );

        return () => {

            //this is the cleanup...
            unsubscribe();

        };

        //this will run ONCE when the component loads, and never again.
    }, []);

    return (
        <div>
            <div className="FMCard__cardContainer">
                {people.map((person) => (
                    <FMCard person={person} />
                ))}
            </div>
        </div>
    );

}

export default FMCards;