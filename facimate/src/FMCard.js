import React, { useEffect, useState, useMemo } from "react";
import TinderCard from "react-tinder-card";
import SwipeButtons from "./SwipeButtons";

const checkMatch = (arr1, arr2) => arr1.some((el) => arr2.includes(el));
// const alreadyRemoved = []

const FMCard = ({ person, currentUserHobbies }) => {

  const currentCardHobbies = useMemo(()=> [person.hobby1, person.hobby2, person.hobby3], [])
  const [_currentUserHobbies, setCurrentHobbies] = useState(currentUserHobbies);

  useEffect(() => {
    setCurrentHobbies(currentUserHobbies);
  }, [currentUserHobbies]);

  console.log("currentUserHobbies after update", _currentUserHobbies);

  // const onSwipe = (direction) => {
  //   // console.log("currentUserHobbies in swipe fnc", _currentUserHobbies);

  //   if (direction === 'right') {
  //     // console.log("currentUserHobbies on swipe", _currentUserHobbies);
  //     // // check match
  //     // const isAMatch = checkMatch(currentCardHobbies, _currentUserHobbies);
  //     console.log("You swiped right");
  //   }
  // }
  
  // const [lastDirection, setLastDirection] = useState()

  // const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  // const swiped = (direction, nameToDelete) => {
  //   console.log('removing: ' + nameToDelete)
  //   setLastDirection(direction)
  //   alreadyRemoved.push(nameToDelete)
  // }

  // const outOfFrame = (name) => {
  //   console.log(name + ' left the screen!')
  //   peopleState = peopleState.filter(person => person.displayName !== displayName)
  //   setPeople(peopleState)
  // }

  // const swipe = (dir) => {
  //   const cardsLeft = people.filter(person => !alreadyRemoved.includes(person.displayName))
  //   if (cardsLeft.length) {
  //     const alreadyRemoved = []
  //     const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
  //     const index = people.map((person => person.displayName).indexOf(toBeRemoved) // Find the index of which to make the reference to
  //     alreadyRemoved.push(toBeRemoved)  // Make sure the next card gets removed next time if this card do not have time to exit the screen
  //     childRefs[idx].current.swipe(dir) // Swipe the card!
  //   }
  // }

  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }

  const onRightClick = () => {
      console.log("currentUserHobbies on swipe", _currentUserHobbies);
      // check match
      const isAMatch = checkMatch(currentCardHobbies, _currentUserHobbies);
      console.log(isAMatch);
  };
 

  return (
    <>
      <TinderCard
      //  ref={childRefs[idx]}
      //   onSwipe={(dir) => swiped (dir, person.displayName &&
      //     person.distance &&
      //     person.age &&
      //     person.location &&
      //     person.onelineTagline)}

      //   onCardLeftScreen={() => outOfFrame(person.displayName &&
      //     person.distance &&
      //     person.age &&
      //     person.location &&
      //     person.onelineTagline)}
      //   onSwipe={onSwipe}
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
      <SwipeButtons onRightClick={onRightClick} />
      {/* <div className='buttons'>
        <button onClick={() => swipe('left')}>Swipe left!</button>
        <button onClick={() => swipe('right')}>Swipe right!</button>
      </div> */}
    </>
  );
};

export default FMCard;