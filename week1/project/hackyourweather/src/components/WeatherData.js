import React from "react";

function WeatherData({
  name,
  country,
  weatherMain,
  minTemp,
  maxTemp,
  lon,
  lat,
  main,
}) {
  return (
    <>
      <section className="list">
        <h1>
          {name}, {country}
        </h1>
        <p>{weatherMain}</p>
        <p>min temp : {minTemp}</p>
        <p>max temp : {maxTemp}</p>
        <p>
          location: {lon}, {lat}
        </p>
        <span>{main}</span>
      </section>
    </>
  );
}

export default WeatherData;
