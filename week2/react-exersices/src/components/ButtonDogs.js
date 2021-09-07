import React from "react";

function ButtonDogs({ getDogPhoto }) {
  return (
    <div>
      <button onClick={getDogPhoto}>Get a dog!</button>
    </div>
  );
}

export default ButtonDogs;
