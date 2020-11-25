import * as React from "react";

export class TidesWidget<WidgetProps> extends React.Component {
  constructor(props: WidgetProps) {
    super(props);

    this.state = {
      location: ''
    };
  }

  componentDidMount() {
    const ns = this.props.store.getState().dashboard.widgets.tides;
    // Who needs error handling?
    this.setState({ location: ns.location });
  }

  render() {
    const s = this.state.location;
    return (
      <div className="widget tides">
        <div className="heading">Tides</div>
        <div className="graph">
          <img src={`https://www.tide-forecast.com/system/charts-png/${s}/tides.png`} />
        </div>
      </div>
    );
  }
}
