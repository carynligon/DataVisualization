import React from 'react';
import Chart from 'react-d3-core';
import LineChart from 'react-d3-basic';

import data from '../data';

export default React.createClass({
  render() {
    var width = '700';
    var height = '300';
    var margins = {left: '100', right: '100', top: '50', bottom: '50'};
    var title = "User sample";
    var chartSeries = [
      {
        field: 'BMI',
        name: 'BMI',
        color: '#ff7f0e'
      }
    ];
    var x = data.index
    return (
      <Chart
      title={title}
      width={width}
      height={height}
      margins= {margins}
      >
      <LineChart
        showXGrid= {false}
        showYGrid= {false}
        margins= {margins}
        title={title}
        data={data}
        width={width}
        height={height}
        chartSeries={chartSeries}
        x={x}
      />
    </Chart>
    )
  }
})
