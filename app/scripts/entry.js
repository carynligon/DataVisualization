// "use strict";
// var $ = require('jquery');
//
//   d3.select('body').selectAll('div')
//   .data([ 5, 10, 15, 20, 25])
//   // whenever it finds a data element that doesn't have a ui element
//   .enter().append('div')
//   .attr('class', 'bar')
//   .style('height', function(d) {
//     return d * 5 + 'px';
//   });
//
// $('.bar').hover((e) => {
//   $('.showValue').remove();
//   let value = (parseFloat(e.target.style.height) / 5);
//   $(e.target).append("<div class=showValue>" + value + "</div>");
// })

// Set the dimensions of the canvas / graph
var margin = {top: 30, right: 20, bottom: 30, left: 50},
    width = 600 - margin.left - margin.right,
    height = 270 - margin.top - margin.bottom;

// Set the ranges
var x = d3.time.scale().range([0, width]);
var y = d3.scale.linear().range([height, 0]);

// Define the axes
var xAxis = d3.svg.axis().scale(x)
    .orient("bottom").ticks(5);

var yAxis = d3.svg.axis().scale(y)
    .orient("left").ticks(5);

// Define the line
var valueline = d3.svg.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.close); });

// Adds the svg canvas
var svg = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.csv("https://s3.amazonaws.com/ed-college-choice-public/Most+Recent+Cohorts+(Scorecard+Elements).csv", function(error, data) {
    data.forEach(function(d) {
        d.name = d.INSTNM;
        d.SATAVG = +d.SAT_AVG;
    });

    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.name; }));
    y.domain([0, d3.max(data, function(d) { return d.SATAVG; })]);

    // Add the valueline path.
    svg.append("path")
        .attr("class", "line")
        .attr("d", valueline(data));

    // Add the X Axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // Add the Y Axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

});


// Using D3:
// "use strict";
//
// var React = require('react');
// var ReactDOM = require('react-dom');
// var LineChart = require('react-d3-basic').LineChart;
//
// (function() {
//
//   var chartData = [
//     {
//   name: "Lavon Hilll I",
//   BMI: 20.57,
//   age: 12,
//   birthday: "1994-10-26T00:00:00.000Z",
//   city: "Annatown",
//   married: true,
//   index: 1
// },
// {
//   name: "Clovis Pagac",
//   BMI: 24.28,
//   age: 26,
//   birthday: "1995-11-10T00:00:00.000Z",
//   city: "South Eldredtown",
//   married: false,
//   index: 3
// },
// {
//   name: "Gaylord Paucek",
//   BMI: 24.41,
//   age: 30,
//   birthday: "1975-06-12T00:00:00.000Z",
//   city: "Koeppchester",
//   married: true,
//   index: 5
// },
// {
//   name: "Ashlynn Kuhn MD",
//   BMI: 23.77,
//   age: 32,
//   birthday: "1985-08-09T00:00:00.000Z",
//   city: "West Josiemouth",
//   married: false,
//   index: 6
// },
//   ]
//
//   var chartSeries = [
//       {
//         field: 'age',
//         name: 'Age',
//         color: '#2445dc',
//         style: {
//           "strokeWidth": 4,
//           "strokeOpacity": .6,
//           "fillOpacity": 1
//         }
//       },
//        {
//          field: 'BMI',
//          name: 'BMI',
//          color: '#08eacb',
//          style: {
//            "strokeWidth": 4,
//            "strokeOpacity": .6,
//            "fillOpacity": 1
//          }
//        }
//     ],
//     x = function(d) {
//       return d.index;
//     }
//
//   ReactDOM.render(
//     <LineChart
//       width= {700}
//       height= {300}
//       data= {chartData}
//       chartSeries= {chartSeries}
//       x= {x}
//     />
//   , document.getElementById('container')
//   )
//
//   window.addEventListener('click', (e) => {
//     console.dir(e.target);
//   })
// })()
