import "./App.css";
import WeatherData from "./components/WeatherData";
import Data from "./city-weather.json";

function App() {
  return (
    <div className="App">
      <h1>Weather</h1>
      <div className="container">
        {Data.map((city) => {
          return (
            <WeatherData
              key={city.id}
              name={city.name}
              weatherMain={city.weather[0].main}
              main={city.main.temp}
              minTemp={city.main.temp_min}
              maxTemp={city.main.temp_max}
              lon={city.coord.lon}
              lat={city.coord.lat}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
