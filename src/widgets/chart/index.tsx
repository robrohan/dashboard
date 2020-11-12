import * as React from "react";
import { Http } from "../../common/http";
import { VictoryChart, VictoryLine, VictoryBar, VictoryTheme } from "victory";

const getData = (url) => {
  const http = new Http();
  const request_url = url;

  return http.fetch(request_url).then(data => {
    if (typeof data === 'string') {
      data = JSON.parse(data)
    }
    return data;
  });
};

export class ChartWidget<WidgetProps> extends React.Component {

  constructor(props: WidgetProps) {
    super(props);
    this.state = {
      title: 'Chart Widget',
      data: []
    };
  }

  componentDidMount() {
    const ns = this.props.store.getState().dashboard.widgets.chart;
    const title = ns.title;
    const url = ns.data_url;

    this.mounted = true;
    if (this.mounted) {
      getData(url).then(d => {
        this.setState({
          title: title,
          data: d
        });
      })
        .catch(error => {
          console.log(`Encountered error: `, error);
        });
    }
  }


  render() {
    return (
      <div className="widget spending">
        <div className="heading">{this.state.title}</div>
        <VictoryChart
          maxDomain={{ y: 200 }}
          theme={VictoryTheme.material}>
          <VictoryLine
            style={{
              data: { stroke: "#cf0000" },
              size: "1em"
            }}
            data={this.state.data}
            y={(d) => (d.sst < 0) ? 0 : d.sst}
            // x={(d) => {
            //   if(d.date && d.date !== "") {
            //     const s = d.date.split('-');
            //     return s[2]; // + "/" + s[1];
            //   }
            //   return '';
            // }}
            interpolation="natural"
            labelPlacement="vertical"
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 }
            }}
          />
          <VictoryBar
            style={{
              data: { stroke: "#00fc00" },
              size: "2em"
            }}
            data={this.state.data}
            labels={(d) => d.dist}
            y={(d) => (d.dist < 0) ? 0 : d.dist}
          />
        </VictoryChart>
      </div>
    );
  }
}
