import React, { useState, useEffect } from "react";
import DataProfile from "./DataProfile";

function WeatherData() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const getWeatherData = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${query},&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      const weatherData = await response.json();
      setWeather(weatherData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <main>
        <form onSubmit={getWeatherData}>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />

          {Object.entries(weather).length !== 0 ? (
            <DataProfile weather={weather} />
          ) : (
            <h3> Please Enter City Name </h3>
          )}
          <button className="btn">Search</button>
        </form>
      </main>
    </div>
  );
}

export default WeatherData;
