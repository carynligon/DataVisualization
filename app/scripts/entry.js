
"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var LineChart = require('react-d3-basic').LineChart;

(function() {

  var chartData = [
    {
  name: "Lavon Hilll I",
  BMI: 20.57,
  age: 12,
  birthday: "1994-10-26T00:00:00.000Z",
  city: "Annatown",
  married: true,
  index: 1
},
{
  name: "Clovis Pagac",
  BMI: 24.28,
  age: 26,
  birthday: "1995-11-10T00:00:00.000Z",
  city: "South Eldredtown",
  married: false,
  index: 3
},
{
  name: "Gaylord Paucek",
  BMI: 24.41,
  age: 30,
  birthday: "1975-06-12T00:00:00.000Z",
  city: "Koeppchester",
  married: true,
  index: 5
},
{
  name: "Ashlynn Kuhn MD",
  BMI: 23.77,
  age: 32,
  birthday: "1985-08-09T00:00:00.000Z",
  city: "West Josiemouth",
  married: false,
  index: 6
},
  ]

  var showData = function(e) {
    console.log(e);
  }

  var chartSeries = [
      {
        field: 'age',
        name: 'Age',
        color: '#2445dc',
        style: {
          "strokeWidth": 4,
          "strokeOpacity": .6,
          "fillOpacity": 1
        }
      },
       {
         field: 'BMI',
         name: 'BMI',
         color: '#08eacb',
         style: {
           "strokeWidth": 4,
           "strokeOpacity": .6,
           "fillOpacity": 1
         }
       }
    ],
    x = function(d) {
      return d.index;
    }

  ReactDOM.render(
    <LineChart
      width= {700}
      height= {300}
      data= {chartData}
      chartSeries= {chartSeries}
      x= {x} onClick={showData}
    />
  , document.getElementById('container')
  )
})()
