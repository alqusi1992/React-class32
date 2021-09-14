import { useState } from "react";
import { Link } from "react-router-dom";

function DataProfile({ weather, setWeather, item }) {
  const id = weather.city.id;
  const cityName = weather.city.name;
  const countryName = weather.city.country;
  const minTemp = weather.list[0].main.temp_min;
  const maxTemp = weather.list[0].main.temp_max;
  const weatherDesc = weather.list[0].weather[0].description;
  const weatherMain = weather.list[0].weather[0].main;

  const removeCity = () => {
    setWeather({});
  };

  return (
    <div>
      <div className="list">
        <span onClick={removeCity} className="remove-city">
          x
        </span>
        <p>
          <Link to={`/${id}`}>
            {cityName} {countryName}
          </Link>
        </p>
        <p>MaxTemp : {maxTemp}</p>
        <p>MinTemp: {minTemp}</p>
        <p>Description: {weatherDesc}</p>
        <p>WeatherMain:{weatherMain}</p>
      </div>
    </div>
  );
}

export default DataProfile;
