import React, { useState } from "react";
import DataProfile from "./DataProfile";

function WeatherData() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${query},&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result.city);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    search();
    setWeather("");
  };
  return (
    <div>
      <main>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <DataProfile weather={weather} />
          <button className="btn" type="submit">
            Search
          </button>
        </form>
      </main>
    </div>
  );
}

export default WeatherData;
