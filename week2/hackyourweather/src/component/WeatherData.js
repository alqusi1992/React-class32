import React, { useState, useEffect } from "react";
import axios from "axios";
import DataProfile from "./DataProfile";

function WeatherData() {
  const [country, setCountry] = useState("");
  const [stad, setStad] = useState("");
  const [city, setCity] = useState("");
  const [timezone, setTimezone] = useState("");
  const [population, setPopulation] = useState("");
  const [location, setLocation] = useState("");
  const [tmep_max, setTmep_max] = useState("");
  const [tmep_min, setTmep_min] = useState("");

  const getWeatherData = (city) => {
    axios(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
    )
      .then((response) => {
        setStad(response.data.city.name);
        setCountry(response.data.city.country);
        setTimezone(response.data.city.timezone);
        setPopulation(response.data.city.population);
        setLocation(response.data.city.sunset);
        setTmep_max({ response: response.data.list[0] });
        setTmep_min({ response: response.data.list[0] });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getWeatherData();
  }, []);
  return (
    <>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="btn"
        onClick={() => {
          getWeatherData(city);
        }}
      >
        Search
      </button>
      <DataProfile
        country={country}
        stad={stad}
        timezone={timezone}
        population={population}
        location={location}
        tmep_max={tmep_max}
        tmep_min={tmep_min}
      />
    </>
  );
}

export default WeatherData;
