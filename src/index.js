import * as React from "react";
import { render } from "react-dom";
import Backgrounds from "./backgrounds";
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

  const bg = React.createRef();

  React.useEffect( () => {
    const rnd = Math.round(Backgrounds.length * Math.random()) - 1;
    bg.current.style.backgroundImage = ["url(", Backgrounds[rnd].url, ")"].join('');
  },[])

  return (
    <div className="dashboard">
      
      <div className="background" ref={bg} ></div>

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
