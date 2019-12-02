import React from "react";
import { Http } from "../../common/http";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

const getData = (url) => {
  const http = new Http();
  const request_url = url;

  return http.fetch(request_url).then(data => {
    if(typeof data === 'string') {
      data = JSON.parse(data)
    }
    return data;
  });
};

export class ChartWidget extends React.Component {

  constructor(props) {
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
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc"}
            }}
            data={this.state.data}
          />
        </VictoryChart>
      </div>
    );
  }
}
