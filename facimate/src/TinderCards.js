import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";

function TinderCards() {
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
  <div className="tinderCards__cardContainer">
      {people.map((person) => (
        <TinderCard className="swipe" key={person.name && person.distance && person.age && person.location}>
          <div className="card">
            <div className="pro_info">
              <div
                 style={{ backgroundImage: `url(${person.url})` }}
                 className="image">
                </div>
                  <div className="details">
                  <h2 className="details_h2">{person.name}</h2>
                  <h3 className="details_h3">{person.distance} km away</h3>
                  <h4 className="details_h4">{person.age} years old</h4>
                  <h4 className="details_h4">{person.location}</h4>
                  <p className=
                  "likelyMatch">Likely Match</p>

                </div>
            </div>
            
            <div className="interests"></div>
          </div>
        </TinderCard>
      ))}
      </div>
    </div>
    );

}

export default TinderCards;