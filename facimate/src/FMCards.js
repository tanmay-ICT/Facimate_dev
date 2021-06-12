import React, {useState, useEffect} from "react";
import database, {auth} from "./firebase";
import "./FMCards.css";
import FMCard from "./FMCard";

const FMCards = () => {
    const [people, setPeople] = useState([]);
    const [currentUserHobbies, setCurrentUserHobbies] = useState([]);

//Piece of code which runs based on a condition

    useEffect(() => {
        //this is where the code runs..

        async function fetchPeople() {
          const snapshot = await database.collection("people").get();     
          let response = snapshot.docs.map(doc => doc.data());
          setPeople(response);
        }

        fetchPeople();

        async function fetchCurrentUser() {
          const snapshot = await database
            .collection("people")
            .doc(auth.currentUser.uid)
            .get();
          const currentUser = snapshot.data();
            setCurrentUserHobbies([
              currentUser.hobby1,
              currentUser.hobby2,
              currentUser.hobby3,
            ]);
        }

        fetchCurrentUser();

        //this will run ONCE when the component loads, and never again.
    }, []);

    return (
        <div>
            <div className="FMCard__cardContainer">
                {people.map((person, idx) => (
                    <FMCard key={idx} person={person} currentUserHobbies={currentUserHobbies}/>
                ))}
            </div>
        </div>
    );

}

export default FMCards;