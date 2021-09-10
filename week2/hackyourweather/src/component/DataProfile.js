import React from "react";

function DataProfile({ weather }) {
  return (
    <div>
      <div className="list">
        <p>
          {weather.country} {weather.name}
        </p>
        <p>Population: {weather.population}</p>
        <p>Timezone : {weather.timezone}</p>
        <p>Sunset: {weather.sunset}</p>
        <p>Sunrise:{weather.sunrise}</p>
      </div>
    </div>
  );
}

export default DataProfile;
