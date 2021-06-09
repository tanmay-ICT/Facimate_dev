import React, { useState, useEffect } from "react";
import database, { auth } from "./firebase";
import TinderCard from "react-tinder-card";

const FMCard = ({ person }) => {
  const [userData, setUserData] = useState();
  const [userId, setUserId] = useState();
  const currentCardHobbies = [person.hobby1, person.hobby2, person.hobby3];
  const [currentUserHobbies, setCurrentUserHobbies] = useState([]);

  const checkMatch = (arr1, arr2) => arr1.some((el) => arr2.includes(el));

  const onSwipe = (direction) => {
    if (direction === "right") {
      // check match
      const isAMatch = checkMatch(currentCardHobbies, currentUserHobbies);
    }
  };

  useEffect(() => {
    const docRef = database.collection("people").doc(auth.currentUser.uid);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const docData = doc.data();
          setCurrentUserHobbies([
            docData.hobby1,
            docData.hobby2,
            docData.hobby3,
          ]);
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  useEffect(() => {
    console.log('currentCardHobbies', currentCardHobbies);
    console.log('currentUserHobbies', currentUserHobbies);

    const isMatch = currentUserHobbies.some((hobby) =>
      currentCardHobbies.includes(hobby)
    );
    console.log(isMatch);

    if (isMatch) {
      //write to the new collection
    }
  }, [currentUserHobbies]);

  return (
    <TinderCard
      onSwipe={onSwipe}
      className="swipe"
      key={
        person.displayName &&
        person.distance &&
        person.age &&
        person.location &&
        person.onelineTagline
      }
    >
      <div className="unique_card">
        <div className="pro_info">
          <div
            style={{ backgroundImage: `url(${person.profilePicture})` }}
            className="pro_image"
          ></div>
          <div className="top_details">
            <h2 className="details_h2">{person.displayName}</h2>
            <h3 className="details_h3">{person.distance} km away</h3>
            <h4 className="details_h4">{person.age} years old</h4>
            <h4 className="details_h4">{person.location}</h4>
            <p className="likelyMatch">Likely Match</p>
          </div>
          <div className="bottom_details">
            <p className="onelineTagline text-center">
              ❝ {person.onelineTagline} ❞
            </p>
            <h2>{person.displayName}'s interests</h2>
          </div>
          <div className="interests">
            <div className="interest_img">
              <p className="interest_text">{person.hobby1}</p>
            </div>
            <div className="interest_img">
              <p className="interest_text">{person.hobby2}</p>
            </div>
            <div className="interest_img">
              <p className="interest_text">{person.hobby3}</p>
            </div>
            <p className="more_interest">
              🏸 &nbsp;&nbsp;🏎 &nbsp;&nbsp;🎸&nbsp;&nbsp; and more interests
            </p>
          </div>
        </div>
      </div>
    </TinderCard>
  );
};

export default FMCard;
