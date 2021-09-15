import React, { useState, useEffect } from "react";
import DataProfile from "./DataProfile";

function WeatherData() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  useEffect(() => {}, [weather]);

  const getWeatherData = async (e) => {
    e.preventDefault();
    validation();
    setQuery("");

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${query},&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      const weatherData = await response.json();

      setWeather({ ...weatherData });
    } catch (err) {
      console.log(err);
    }
  };
  const validation = () => {
    if (query === "") {
      alert("Should input field has at least 1 character");
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
          <button className="btn">Search</button>

         {weather.cod === "200" ? (
            <DataProfile weather={weather} setWeather={setWeather} />
          ) : (
            <p> Please Enter City Name</p>
          )}
        </form>
      </main>
      <pre></pre>
    </div>
  );
}

export default WeatherData;
