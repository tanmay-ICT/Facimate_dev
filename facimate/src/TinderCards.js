import React, { useState } from "react";
import { render } from "react-dom";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Steve Jobs",
      url:
        "https://www.mac-history.de/wp-content/uploads/2011/10/steve_jobs_1955_2011.jpg",
    },
    {
      name: "Darth Vader",
      url: "http://www.globalo.com/content/uploads/2015/12/darth-vader.jpg",
    },
  ]);

  return
  (
    <div>
      <h1>Cards</h1>
  
      {people.map((person) => (
        <TinderCard className="swipe" key={person.name}>
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
    );

}

export default TinderCards;