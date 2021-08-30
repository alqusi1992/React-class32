import React from "react";
import Hobby from "./Hobby";

function HobbyList() {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  const hobbiesList = hobbies.map((hobby) => (
    <Hobby key={hobby} hobby={hobby} />
  ));
  return <div>{hobbiesList}</div>;
}

export default HobbyList;
