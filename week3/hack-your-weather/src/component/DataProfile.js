import { Link } from "react-router-dom";

function DataProfile({ weather, setWeather }) {
  const removeCity = () => {
    setWeather({});
  };

  return (
    <div>
      {weather.map((item) => {
        return (
          <div className="list">
            <span onClick={removeCity} className="remove-city">
              x
            </span>
            <p>
              <Link to={`/${item.city.id}`}>
                {item.city.name} {item.city.country}
              </Link>
            </p>
            <p>MaxTemp : {item.list[0].main.temp_max}</p>
            <p>MinTemp: {item.list[0].main.temp_min}</p>
            <p>Description: {item.list[0].weather[0].description}</p>
            <p>WeatherMain:{item.list[0].weather[0].main}</p>
          </div>
        );
      })}
      <main></main>
    </div>
  );
}

export default DataProfile;
