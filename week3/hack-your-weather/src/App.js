import "./App.css";
import WeatherData from "./component/WeatherData";
import Chart from "./component/Chart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <h1>Weather</h1>
            <WeatherData />
          </Route>

          <Route
            path="/:cityId"
            component={(props) => <Chart cityId={props.match.params.cityId} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
