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
      <div className="chart-container">
        <XYPlot height={250} width={100} className ="charts">
          <LineSeries data={data} />
        </XYPlot>
      </div>
    );
  }
}

export default Chart;