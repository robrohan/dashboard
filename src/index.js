import * as React from "react";
import { render } from "react-dom";
import background from "./assets/background.jpeg";
import { createStore, rootReducer } from "./common/robdux";
import Config from './config';

// import { MoneyWidget } from "./widgets/money";
// import { InvestmentWidget } from "./widgets/investments";
// import { SoundcloudWidget } from "./widgets/soundcloud";
import { WeatherWidget } from "./widgets/weather";
// import { CalendarWidget } from "./widgets/calendar";
import { CountdownWidget } from "./widgets/countdown";
import { DateTimeWidget } from "./widgets/datetime";
import { ChartWidget } from "./widgets/chart";
import { ScheduleWidget, ScheduleDayWidget } from "./widgets/schedule";


const App = () => {
  const store = createStore(rootReducer, Config);

  return (
    <div className="dashboard">
      
      <img className="background" src={background} />
      <DateTimeWidget />

      <div className="row">
        <ScheduleWidget store={store} />
      </div>

      <div className="row">
        <div className="column">
          <ChartWidget store={store} />
        </div>

        <div className="column">
          <div className="row">
            <div className="column">
              <WeatherWidget store={store} />
            </div>
            <div className="column">
              <ScheduleDayWidget store={store} />
              <CountdownWidget store={store} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
