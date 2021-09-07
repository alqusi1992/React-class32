import React from "react";

function Joke({ joke }) {
  return (
    <div>
      <p>{joke.punchline}</p>
      <p>{joke.setup}</p>
    </div>
  );
}

export default Joke;
