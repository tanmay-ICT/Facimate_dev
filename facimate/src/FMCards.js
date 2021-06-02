 import React, {useState, useEffect} from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./FMCards.css";

function FMCards() {
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
                    <TinderCard className="swipe" key={person.displayName && person.distance && person.age && person.location && person.onelineTagline}>
                        <div className="unique_card">
                            <div className="pro_info">
                                <div
                                    style={{backgroundImage: `url(${person.profilePicture})`}}
                                    className="pro_image">
                                </div>
                                <div className="top_details">
                                    <h2 className="details_h2">{person.displayName}</h2>
                                    <h3 className="details_h3">{person.distance} km away</h3>
                                    <h4 className="details_h4">{person.age} years old</h4>
                                    <h4 className="details_h4">{person.location}</h4>
                                    <p className=
                                           "likelyMatch">Likely Match</p>
                                </div>
                                <div className="bottom_details">
                                    <p className="onelineTagline text-center">❝ {person.onelineTagline} ❞</p>
                                    <h2>{person.displayName}'s interests</h2>
                                </div>
                                <div className="interests">
                                <div className="interest_img"><p className="interest_text">{person.hobby1}</p></div>
                                <div className="interest_img"><p className="interest_text">{person.hobby2}</p></div>
                                <div className="interest_img"><p className="interest_text">{person.hobby3}</p></div>
                                <p className="more_interest">and more interests</p>
                                </div>
                            </div>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );

}

export default FMCards;