import React from "react";

function DataProfile({
  country,
  stad,
  timezone,
  population,
  location,
  tmep_max,
  tmep_min,
}) {
  return (
    <div>
      <div className="list">
        <p>
          {stad} {country}
        </p>
        <p>Timezone :{timezone}</p>
        <p>Population:{population}</p>
        <p>Location:{location}</p>
        <p>
          Temp_max:
          {Object.entries(tmep_max).map((e) => [e[1].main.temp_max])}
        </p>
        <p>
          Temp_min:
          {Object.entries(tmep_min).map((e) => [e[1].main.temp_min])}
        </p>
      </div>
    </div>
  );
}

export default DataProfile;
