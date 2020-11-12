import * as React from "react";

const calcCount = (goal) => {
  const today = new Date();
  const count = Math.abs(
    Math.round((today - goal) / (1000 * 60 * 60 * 24))
  );

  return count;
}

export class CountdownWidget<WidgetProps> extends React.Component {
  constructor(props: WidgetProps) {
    super(props);
    const s = this.props.store.getState();
    const ns = s.dashboard.widgets.countdown;
    const goal = ns.date;

    const count = calcCount(goal);

    this.state = {
      title: ns.event,
      count: count
    };
  }

  componentDidMount() {
    setInterval(() => {
      const count = calcCount(goal);

      this.setState({
        count: count
      });
    }, 3600000);
  }

  render() {
    return (
      <div className="widget countdown">
        <div className="heading">{this.state.title}</div>
        <div className="count">{this.state.count}</div>
        <div className="meta">Days</div>
      </div>
    );
  }
}
