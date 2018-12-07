import React, { Component } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries} from 'react-vis';

class Chart extends Component {
  render() {
    const data = this.props.chart.map(each => {
        return {
            x: new Date(each.date), 
            y: each.close
        }
    });
    return (
      <div className="chart">
        <XYPlot height={300} width={300}>
          <LineSeries data={data} />
        </XYPlot>
      </div>
    );
  }
}

export default Chart;