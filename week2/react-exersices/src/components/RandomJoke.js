import React, { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke";

function RandomJoke() {
  const [joke, setJoke] = useState({});

  const getJoke = async () => {
    try {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_joke"
      );
      setJoke(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);
  return (
    <div>
      <Joke joke={joke} />
    </div>
  );
}

export default RandomJoke;
