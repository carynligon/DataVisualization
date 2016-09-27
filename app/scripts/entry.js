// var dataArray= [5, 40, 50, 60];
var width = 500;
var height = 500;

var widthScale = d3.scale.linear()
  .domain([0, 80])
  .range([0, width]);

var color = d3.scale.linear()
  .domain([0, 60])
  .range(['red', 'blue']);

var axis = d3.svg.axis()
  .scale(widthScale)
  .ticks(5);

// var canvas = d3.select('body')
//   .append('svg')
//   .attr('width', width)
//   .attr('height', height);
//
// canvas.append('g')
//   .attr('transform', 'translate(0,400)')
//   .call(axis);
//
// var bars = canvas.selectAll('rect')
//   .data(dataArray)
//   .enter()
//     .append('rect')
//     .attr('width', 0)
//     .attr('height', 50)
//     .attr('fill', function(d) {
//       return color(d);
//     })
//     .attr('y', function(d,i) {
//       return i * 100;
//     });
//
// bars.transition()
//   .duration(1500)
//   .attr('width', function(d) {
//     return widthScale(d);
//   });

d3.json('data/Most+Recent+Cohorts+(Scorecard+Elements).json', function(data) {
  console.log(data);
  var canvas = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  canvas.append('g')
    .attr('transform', 'translate(0,400)')
    .call(axis);

  var bars = canvas.selectAll('rect')
    .data(data)
    .enter()
      .append('rect')
      .attr('width', 0)
      .attr('height', 50)
      .attr('fill', function(d) {
        return color(d.age);
      })
      .attr('y', function(d,i) {
        return i * 67;
      });

  bars.transition()
    .duration(1500)
    .attr('width', function(d) {
      return widthScale(d.age);
    });

var text = canvas.selectAll('text')
  .data(data)
  .enter()
    .append('text')
    .attr('fill', 'white')
    .attr('y', function(d,i) {
      return i * 67 + 27;
    })
    .attr('x', 10)
    .text(function(d) {
      console.log(d);
      return d.name;
    });
})
