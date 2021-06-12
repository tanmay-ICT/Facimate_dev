import React, { useCallback, useEffect, useState, useMemo } from "react";
import TinderCard from "react-tinder-card";

const checkMatch = (arr1, arr2) => arr1.some((el) => arr2.includes(el));

const FMCard = ({ person, currentUserHobbies }) => {
  const currentCardHobbies = useMemo(()=> [person.hobby1, person.hobby2, person.hobby3], [])
  const [_currentUserHobbies, setCurrentHobbies] = useState(currentUserHobbies);

  // useEffect(() => {
  //   console.log("has rerendered");
  //   setCurrentHobbies(currentUserHobbies); 
  // }, []);

  useEffect(() => {
    setCurrentHobbies(currentUserHobbies);
  }, [currentUserHobbies]);

  console.log("currentUserHobbies after update", _currentUserHobbies);

  const onSwipe = (direction) => {
    console.log("currentUserHobbies in swipe fnc", _currentUserHobbies);

    if (direction === 'right') {
      console.log("currentUserHobbies on swipe", _currentUserHobbies);
      // check match
      const isAMatch = checkMatch(currentCardHobbies, _currentUserHobbies);
      console.log(isAMatch);
    }
};

  return (
    <>
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
            <p className="details_name">{person.displayName}</p>
            <p className="details_distance">{person.distance} km away</p>
            <p className="details_age">{person.age} years old</p>
            <p className="details_location">{person.location}</p>
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
    </>
  );
};

export default FMCard;