import React from "react";

function DataProfile({ weather }) {
  const cityName = weather.city.name;
  const countryName = weather.city.country;
  const minTemp = weather.list[0].main.temp_min;
  const maxTemp = weather.list[0].main.temp_max;
  const weatherDesc = weather.list[0].weather[0].description;
  const weatherMain = weather.list[0].weather[0].main;

  return (
    <div>
      <div className="list">
        <p>
          {cityName} {countryName}
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
