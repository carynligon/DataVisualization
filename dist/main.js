(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// var dataArray= [5, 40, 50, 60];
var width = 500;
var height = 500;

var widthScale = d3.scale.linear()
  .domain([0, 80])
  .range([0, width]);

  var radiusScale = d3.scale.linear()
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

// var text = canvas.selectAll('text')
//   .data(data)
//   .enter()
//     .append('text')
//     .attr('fill', 'white')
//     .attr('y', function(d,i) {
//       return i * 67 + 27;
//     })
//     .attr('x', 10)
//     .text(function(d) {
//       console.log(d);
//       return d.name;
//     });
})

// d3.json('data/Most+Recent+Cohorts+(Scorecard+Elements).json', function(data) {
//   console.log(data);
//   var canvas = d3.select('body')
//     .append('svg')
//     .attr('width', width)
//     .attr('height', height);
//
//   canvas.append('g')
//     .attr('transform', 'translate(0,400)')
//     .call(axis);
//
//   var circles = canvas.selectAll('circle')
//     .data(data)
//     .enter()
//       .append('circle')
//       .attr('cx', 50)
//       .attr('cy', 50)
//       .attr('fill', function(d) {
//         return color(d.age);
//       })
//       .attr('r', 0)
//       .attr('y', function(d,i) {
//         return i * 67;
//       });
//
//   circles.transition()
//     .duration(1500)
//     .attr('width', function(d) {
//       return radiusScale(d.age);
//     });
//
// var text = canvas.selectAll('text')
//   .data(data)
//   .enter()
//     .append('text')
//     .attr('fill', 'white')
//     .attr('y', function(d,i) {
//       return i * 67 + 27;
//     })
//     .attr('x', 10)
//     .text(function(d) {
//       console.log(d);
//       return d.name;
//     });
// })

// creating a path
// var data = [
//   {x: 34, y:67},
//   {x: 14, y:24},
//   {x: 89, y:4}
// ];
//
// var canvas = d3.select('body')
//     .append('svg')
//     .attr('width', 500)
//     .attr('height', 500);
//
// var group = canvas.append('g')
//   .attr('transform', 'translate(100,100)');
//
// var line = d3.svg.line()
//   .x(function(d) {return d.x})
//   .y(function(d) {return d.y})
//
// group.selectAll('path')
//   .data([data])
//   .enter()
//   .append('path')
//   .attr('d', line)
//   .attr('fill', 'none')
//   .attr('stroke', '#000')
//   .attr('stroke-width', 5)

// creating a circle
var canvas = d3.select('body')
    .append('svg')
    .attr('width', 500)
    .attr('height', 500);

var group = canvas.append('g')
  .attr('transform', 'translate(100,100)');

var r = 100;
var p = Math.PI * 2;

var arc = d3.svg.arc()
  .innerRadius(r-20)
  .outerRadius(r)
  .startAngle(0)
  .endAngle(p)

group.append('path')
  .attr('d', arc)

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY2FyeW5iYXJyeS9wZXJzb25hbC9wcm9qZWN0cy9kYXRhVml6L2FwcC9zY3JpcHRzL2VudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsa0NBQWtDO0FBQ2xDLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNoQixJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUM7O0FBRWpCLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO0dBQy9CLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNsQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDOztFQUVuQixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtLQUNoQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDcEIsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzs7QUFFdkIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7R0FDMUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2xCLEdBQUcsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7O0FBRTFCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO0dBQ3JCLEtBQUssQ0FBQyxVQUFVLENBQUM7QUFDcEIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRVosaUNBQWlDO0FBQ2pDLG1CQUFtQjtBQUNuQiwwQkFBMEI7QUFDMUIsNkJBQTZCO0FBQzdCLEVBQUU7QUFDRixxQkFBcUI7QUFDckIsMkNBQTJDO0FB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LENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyB2YXIgZGF0YUFycmF5PSBbNSwgNDAsIDUwLCA2MF07XG52YXIgd2lkdGggPSA1MDA7XG52YXIgaGVpZ2h0ID0gNTAwO1xuXG52YXIgd2lkdGhTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpXG4gIC5kb21haW4oWzAsIDgwXSlcbiAgLnJhbmdlKFswLCB3aWR0aF0pO1xuXG4gIHZhciByYWRpdXNTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpXG4gICAgLmRvbWFpbihbMCwgODBdKVxuICAgIC5yYW5nZShbMCwgd2lkdGhdKTtcblxudmFyIGNvbG9yID0gZDMuc2NhbGUubGluZWFyKClcbiAgLmRvbWFpbihbMCwgNjBdKVxuICAucmFuZ2UoWydyZWQnLCAnYmx1ZSddKTtcblxudmFyIGF4aXMgPSBkMy5zdmcuYXhpcygpXG4gIC5zY2FsZSh3aWR0aFNjYWxlKVxuICAudGlja3MoNSk7XG5cbi8vIHZhciBjYW52YXMgPSBkMy5zZWxlY3QoJ2JvZHknKVxuLy8gICAuYXBwZW5kKCdzdmcnKVxuLy8gICAuYXR0cignd2lkdGgnLCB3aWR0aClcbi8vICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodCk7XG4vL1xuLy8gY2FudmFzLmFwcGVuZCgnZycpXG4vLyAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsNDAwKScpXG4vLyAgIC5jYWxsKGF4aXMpO1xuLy9cbi8vIHZhciBiYXJzID0gY2FudmFzLnNlbGVjdEFsbCgncmVjdCcpXG4vLyAgIC5kYXRhKGRhdGFBcnJheSlcbi8vICAgLmVudGVyKClcbi8vICAgICAuYXBwZW5kKCdyZWN0Jylcbi8vICAgICAuYXR0cignd2lkdGgnLCAwKVxuLy8gICAgIC5hdHRyKCdoZWlnaHQnLCA1MClcbi8vICAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uKGQpIHtcbi8vICAgICAgIHJldHVybiBjb2xvcihkKTtcbi8vICAgICB9KVxuLy8gICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCxpKSB7XG4vLyAgICAgICByZXR1cm4gaSAqIDEwMDtcbi8vICAgICB9KTtcbi8vXG4vLyBiYXJzLnRyYW5zaXRpb24oKVxuLy8gICAuZHVyYXRpb24oMTUwMClcbi8vICAgLmF0dHIoJ3dpZHRoJywgZnVuY3Rpb24oZCkge1xuLy8gICAgIHJldHVybiB3aWR0aFNjYWxlKGQpO1xuLy8gICB9KTtcblxuZDMuanNvbignZGF0YS9Nb3N0K1JlY2VudCtDb2hvcnRzKyhTY29yZWNhcmQrRWxlbWVudHMpLmpzb24nLCBmdW5jdGlvbihkYXRhKSB7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICB2YXIgY2FudmFzID0gZDMuc2VsZWN0KCdib2R5JylcbiAgICAuYXBwZW5kKCdzdmcnKVxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpO1xuXG4gIGNhbnZhcy5hcHBlbmQoJ2cnKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsNDAwKScpXG4gICAgLmNhbGwoYXhpcyk7XG5cbiAgdmFyIGJhcnMgPSBjYW52YXMuc2VsZWN0QWxsKCdyZWN0JylcbiAgICAuZGF0YShkYXRhKVxuICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDApXG4gICAgICAuYXR0cignaGVpZ2h0JywgNTApXG4gICAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yKGQuYWdlKTtcbiAgICAgIH0pXG4gICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQsaSkge1xuICAgICAgICByZXR1cm4gaSAqIDY3O1xuICAgICAgfSk7XG5cbiAgYmFycy50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oMTUwMClcbiAgICAuYXR0cignd2lkdGgnLCBmdW5jdGlvbihkKSB7XG4gICAgICByZXR1cm4gd2lkdGhTY2FsZShkLmFnZSk7XG4gICAgfSk7XG5cbi8vIHZhciB0ZXh0ID0gY2FudmFzLnNlbGVjdEFsbCgndGV4dCcpXG4vLyAgIC5kYXRhKGRhdGEpXG4vLyAgIC5lbnRlcigpXG4vLyAgICAgLmFwcGVuZCgndGV4dCcpXG4vLyAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxuLy8gICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCxpKSB7XG4vLyAgICAgICByZXR1cm4gaSAqIDY3ICsgMjc7XG4vLyAgICAgfSlcbi8vICAgICAuYXR0cigneCcsIDEwKVxuLy8gICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKGQpO1xuLy8gICAgICAgcmV0dXJuIGQubmFtZTtcbi8vICAgICB9KTtcbn0pXG5cbi8vIGQzLmpzb24oJ2RhdGEvTW9zdCtSZWNlbnQrQ29ob3J0cysoU2NvcmVjYXJkK0VsZW1lbnRzKS5qc29uJywgZnVuY3Rpb24oZGF0YSkge1xuLy8gICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgdmFyIGNhbnZhcyA9IGQzLnNlbGVjdCgnYm9keScpXG4vLyAgICAgLmFwcGVuZCgnc3ZnJylcbi8vICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbi8vICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KTtcbi8vXG4vLyAgIGNhbnZhcy5hcHBlbmQoJ2cnKVxuLy8gICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsNDAwKScpXG4vLyAgICAgLmNhbGwoYXhpcyk7XG4vL1xuLy8gICB2YXIgY2lyY2xlcyA9IGNhbnZhcy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4vLyAgICAgLmRhdGEoZGF0YSlcbi8vICAgICAuZW50ZXIoKVxuLy8gICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbi8vICAgICAgIC5hdHRyKCdjeCcsIDUwKVxuLy8gICAgICAgLmF0dHIoJ2N5JywgNTApXG4vLyAgICAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uKGQpIHtcbi8vICAgICAgICAgcmV0dXJuIGNvbG9yKGQuYWdlKTtcbi8vICAgICAgIH0pXG4vLyAgICAgICAuYXR0cigncicsIDApXG4vLyAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQsaSkge1xuLy8gICAgICAgICByZXR1cm4gaSAqIDY3O1xuLy8gICAgICAgfSk7XG4vL1xuLy8gICBjaXJjbGVzLnRyYW5zaXRpb24oKVxuLy8gICAgIC5kdXJhdGlvbigxNTAwKVxuLy8gICAgIC5hdHRyKCd3aWR0aCcsIGZ1bmN0aW9uKGQpIHtcbi8vICAgICAgIHJldHVybiByYWRpdXNTY2FsZShkLmFnZSk7XG4vLyAgICAgfSk7XG4vL1xuLy8gdmFyIHRleHQgPSBjYW52YXMuc2VsZWN0QWxsKCd0ZXh0Jylcbi8vICAgLmRhdGEoZGF0YSlcbi8vICAgLmVudGVyKClcbi8vICAgICAuYXBwZW5kKCd0ZXh0Jylcbi8vICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXG4vLyAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkLGkpIHtcbi8vICAgICAgIHJldHVybiBpICogNjcgKyAyNztcbi8vICAgICB9KVxuLy8gICAgIC5hdHRyKCd4JywgMTApXG4vLyAgICAgLnRleHQoZnVuY3Rpb24oZCkge1xuLy8gICAgICAgY29uc29sZS5sb2coZCk7XG4vLyAgICAgICByZXR1cm4gZC5uYW1lO1xuLy8gICAgIH0pO1xuLy8gfSlcblxuLy8gY3JlYXRpbmcgYSBwYXRoXG4vLyB2YXIgZGF0YSA9IFtcbi8vICAge3g6IDM0LCB5OjY3fSxcbi8vICAge3g6IDE0LCB5OjI0fSxcbi8vICAge3g6IDg5LCB5OjR9XG4vLyBdO1xuLy9cbi8vIHZhciBjYW52YXMgPSBkMy5zZWxlY3QoJ2JvZHknKVxuLy8gICAgIC5hcHBlbmQoJ3N2ZycpXG4vLyAgICAgLmF0dHIoJ3dpZHRoJywgNTAwKVxuLy8gICAgIC5hdHRyKCdoZWlnaHQnLCA1MDApO1xuLy9cbi8vIHZhciBncm91cCA9IGNhbnZhcy5hcHBlbmQoJ2cnKVxuLy8gICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgxMDAsMTAwKScpO1xuLy9cbi8vIHZhciBsaW5lID0gZDMuc3ZnLmxpbmUoKVxuLy8gICAueChmdW5jdGlvbihkKSB7cmV0dXJuIGQueH0pXG4vLyAgIC55KGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC55fSlcbi8vXG4vLyBncm91cC5zZWxlY3RBbGwoJ3BhdGgnKVxuLy8gICAuZGF0YShbZGF0YV0pXG4vLyAgIC5lbnRlcigpXG4vLyAgIC5hcHBlbmQoJ3BhdGgnKVxuLy8gICAuYXR0cignZCcsIGxpbmUpXG4vLyAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxuLy8gICAuYXR0cignc3Ryb2tlJywgJyMwMDAnKVxuLy8gICAuYXR0cignc3Ryb2tlLXdpZHRoJywgNSlcblxuLy8gY3JlYXRpbmcgYSBjaXJjbGVcbnZhciBjYW52YXMgPSBkMy5zZWxlY3QoJ2JvZHknKVxuICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgLmF0dHIoJ3dpZHRoJywgNTAwKVxuICAgIC5hdHRyKCdoZWlnaHQnLCA1MDApO1xuXG52YXIgZ3JvdXAgPSBjYW52YXMuYXBwZW5kKCdnJylcbiAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMTAwLDEwMCknKTtcblxudmFyIHIgPSAxMDA7XG52YXIgcCA9IE1hdGguUEkgKiAyO1xuXG52YXIgYXJjID0gZDMuc3ZnLmFyYygpXG4gIC5pbm5lclJhZGl1cyhyLTIwKVxuICAub3V0ZXJSYWRpdXMocilcbiAgLnN0YXJ0QW5nbGUoMClcbiAgLmVuZEFuZ2xlKHApXG5cbmdyb3VwLmFwcGVuZCgncGF0aCcpXG4gIC5hdHRyKCdkJywgYXJjKVxuIl19
