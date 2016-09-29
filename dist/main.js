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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY2FyeW5iYXJyeS9wZXJzb25hbC9wcm9qZWN0cy9kYXRhVml6L2FwcC9zY3JpcHRzL2VudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsa0NBQWtDO0FBQ2xDLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNoQixJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUM7O0FBRWpCLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO0dBQy9CLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNsQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDOztFQUVuQixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtLQUNoQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDcEIsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzs7QUFFdkIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7R0FDMUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2xCLEdBQUcsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7O0FBRTFCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO0dBQ3JCLEtBQUssQ0FBQyxVQUFVLENBQUM7QUFDcEIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRVosaUNBQWlDO0FBQ2pDLG1CQUFtQjtBQUNuQiwwQkFBMEI7QUFDMUIsNkJBQTZCO0FBQzdCLEVBQUU7QUFDRixxQkFBcUI7QUFDckIsMkNBQTJDO0FB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O0FBRUwsa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixLQUFLO0FBQ0wsRUFBRTtBQUNGLGlDQUFpQztBQUNqQyxxQkFBcUI7QUFDckIsMEJBQTBCO0FBQzFCLDRCQUE0QjtBQUM1QixFQUFFO0FBQ0YsaUNBQWlDO0FBQ2pDLDhDQUE4QztBQUM5QyxFQUFFO0FBQ0YsMkJBQTJCO0FBQzNCLGlDQUFpQztBQUNqQyxpQ0FBaUM7QUFDakMsRUFBRTtBQUNGLDBCQUEwQjtBQUMxQixrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIsMEJBQTBCO0FBQzFCLDRCQUE0QjtBQUM1Qiw2QkFBNkIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gdmFyIGRhdGFBcnJheT0gWzUsIDQwLCA1MCwgNjBdO1xudmFyIHdpZHRoID0gNTAwO1xudmFyIGhlaWdodCA9IDUwMDtcblxudmFyIHdpZHRoU2NhbGUgPSBkMy5zY2FsZS5saW5lYXIoKVxuICAuZG9tYWluKFswLCA4MF0pXG4gIC5yYW5nZShbMCwgd2lkdGhdKTtcblxuICB2YXIgcmFkaXVzU2NhbGUgPSBkMy5zY2FsZS5saW5lYXIoKVxuICAgIC5kb21haW4oWzAsIDgwXSlcbiAgICAucmFuZ2UoWzAsIHdpZHRoXSk7XG5cbnZhciBjb2xvciA9IGQzLnNjYWxlLmxpbmVhcigpXG4gIC5kb21haW4oWzAsIDYwXSlcbiAgLnJhbmdlKFsncmVkJywgJ2JsdWUnXSk7XG5cbnZhciBheGlzID0gZDMuc3ZnLmF4aXMoKVxuICAuc2NhbGUod2lkdGhTY2FsZSlcbiAgLnRpY2tzKDUpO1xuXG4vLyB2YXIgY2FudmFzID0gZDMuc2VsZWN0KCdib2R5Jylcbi8vICAgLmFwcGVuZCgnc3ZnJylcbi8vICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4vLyAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpO1xuLy9cbi8vIGNhbnZhcy5hcHBlbmQoJ2cnKVxuLy8gICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLDQwMCknKVxuLy8gICAuY2FsbChheGlzKTtcbi8vXG4vLyB2YXIgYmFycyA9IGNhbnZhcy5zZWxlY3RBbGwoJ3JlY3QnKVxuLy8gICAuZGF0YShkYXRhQXJyYXkpXG4vLyAgIC5lbnRlcigpXG4vLyAgICAgLmFwcGVuZCgncmVjdCcpXG4vLyAgICAgLmF0dHIoJ3dpZHRoJywgMClcbi8vICAgICAuYXR0cignaGVpZ2h0JywgNTApXG4vLyAgICAgLmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbihkKSB7XG4vLyAgICAgICByZXR1cm4gY29sb3IoZCk7XG4vLyAgICAgfSlcbi8vICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQsaSkge1xuLy8gICAgICAgcmV0dXJuIGkgKiAxMDA7XG4vLyAgICAgfSk7XG4vL1xuLy8gYmFycy50cmFuc2l0aW9uKClcbi8vICAgLmR1cmF0aW9uKDE1MDApXG4vLyAgIC5hdHRyKCd3aWR0aCcsIGZ1bmN0aW9uKGQpIHtcbi8vICAgICByZXR1cm4gd2lkdGhTY2FsZShkKTtcbi8vICAgfSk7XG5cbmQzLmpzb24oJ2RhdGEvTW9zdCtSZWNlbnQrQ29ob3J0cysoU2NvcmVjYXJkK0VsZW1lbnRzKS5qc29uJywgZnVuY3Rpb24oZGF0YSkge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgdmFyIGNhbnZhcyA9IGQzLnNlbGVjdCgnYm9keScpXG4gICAgLmFwcGVuZCgnc3ZnJylcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KTtcblxuICBjYW52YXMuYXBwZW5kKCdnJylcbiAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLDQwMCknKVxuICAgIC5jYWxsKGF4aXMpO1xuXG4gIHZhciBiYXJzID0gY2FudmFzLnNlbGVjdEFsbCgncmVjdCcpXG4gICAgLmRhdGEoZGF0YSlcbiAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cignd2lkdGgnLCAwKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDUwKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBjb2xvcihkLmFnZSk7XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkLGkpIHtcbiAgICAgICAgcmV0dXJuIGkgKiA2NztcbiAgICAgIH0pO1xuXG4gIGJhcnMudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDE1MDApXG4gICAgLmF0dHIoJ3dpZHRoJywgZnVuY3Rpb24oZCkge1xuICAgICAgcmV0dXJuIHdpZHRoU2NhbGUoZC5hZ2UpO1xuICAgIH0pO1xuXG4vLyB2YXIgdGV4dCA9IGNhbnZhcy5zZWxlY3RBbGwoJ3RleHQnKVxuLy8gICAuZGF0YShkYXRhKVxuLy8gICAuZW50ZXIoKVxuLy8gICAgIC5hcHBlbmQoJ3RleHQnKVxuLy8gICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcbi8vICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQsaSkge1xuLy8gICAgICAgcmV0dXJuIGkgKiA2NyArIDI3O1xuLy8gICAgIH0pXG4vLyAgICAgLmF0dHIoJ3gnLCAxMClcbi8vICAgICAudGV4dChmdW5jdGlvbihkKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhkKTtcbi8vICAgICAgIHJldHVybiBkLm5hbWU7XG4vLyAgICAgfSk7XG59KVxuXG4vLyBkMy5qc29uKCdkYXRhL01vc3QrUmVjZW50K0NvaG9ydHMrKFNjb3JlY2FyZCtFbGVtZW50cykuanNvbicsIGZ1bmN0aW9uKGRhdGEpIHtcbi8vICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgIHZhciBjYW52YXMgPSBkMy5zZWxlY3QoJ2JvZHknKVxuLy8gICAgIC5hcHBlbmQoJ3N2ZycpXG4vLyAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4vLyAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodCk7XG4vL1xuLy8gICBjYW52YXMuYXBwZW5kKCdnJylcbi8vICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLDQwMCknKVxuLy8gICAgIC5jYWxsKGF4aXMpO1xuLy9cbi8vICAgdmFyIGNpcmNsZXMgPSBjYW52YXMuc2VsZWN0QWxsKCdjaXJjbGUnKVxuLy8gICAgIC5kYXRhKGRhdGEpXG4vLyAgICAgLmVudGVyKClcbi8vICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4vLyAgICAgICAuYXR0cignY3gnLCA1MClcbi8vICAgICAgIC5hdHRyKCdjeScsIDUwKVxuLy8gICAgICAgLmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbihkKSB7XG4vLyAgICAgICAgIHJldHVybiBjb2xvcihkLmFnZSk7XG4vLyAgICAgICB9KVxuLy8gICAgICAgLmF0dHIoJ3InLCAwKVxuLy8gICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkLGkpIHtcbi8vICAgICAgICAgcmV0dXJuIGkgKiA2Nztcbi8vICAgICAgIH0pO1xuLy9cbi8vICAgY2lyY2xlcy50cmFuc2l0aW9uKClcbi8vICAgICAuZHVyYXRpb24oMTUwMClcbi8vICAgICAuYXR0cignd2lkdGgnLCBmdW5jdGlvbihkKSB7XG4vLyAgICAgICByZXR1cm4gcmFkaXVzU2NhbGUoZC5hZ2UpO1xuLy8gICAgIH0pO1xuLy9cbi8vIHZhciB0ZXh0ID0gY2FudmFzLnNlbGVjdEFsbCgndGV4dCcpXG4vLyAgIC5kYXRhKGRhdGEpXG4vLyAgIC5lbnRlcigpXG4vLyAgICAgLmFwcGVuZCgndGV4dCcpXG4vLyAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxuLy8gICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCxpKSB7XG4vLyAgICAgICByZXR1cm4gaSAqIDY3ICsgMjc7XG4vLyAgICAgfSlcbi8vICAgICAuYXR0cigneCcsIDEwKVxuLy8gICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKGQpO1xuLy8gICAgICAgcmV0dXJuIGQubmFtZTtcbi8vICAgICB9KTtcbi8vIH0pXG5cbi8vIGNyZWF0aW5nIGEgcGF0aFxuLy8gdmFyIGRhdGEgPSBbXG4vLyAgIHt4OiAzNCwgeTo2N30sXG4vLyAgIHt4OiAxNCwgeToyNH0sXG4vLyAgIHt4OiA4OSwgeTo0fVxuLy8gXTtcbi8vXG4vLyB2YXIgY2FudmFzID0gZDMuc2VsZWN0KCdib2R5Jylcbi8vICAgICAuYXBwZW5kKCdzdmcnKVxuLy8gICAgIC5hdHRyKCd3aWR0aCcsIDUwMClcbi8vICAgICAuYXR0cignaGVpZ2h0JywgNTAwKTtcbi8vXG4vLyB2YXIgZ3JvdXAgPSBjYW52YXMuYXBwZW5kKCdnJylcbi8vICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMTAwLDEwMCknKTtcbi8vXG4vLyB2YXIgbGluZSA9IGQzLnN2Zy5saW5lKClcbi8vICAgLngoZnVuY3Rpb24oZCkge3JldHVybiBkLnh9KVxuLy8gICAueShmdW5jdGlvbihkKSB7cmV0dXJuIGQueX0pXG4vL1xuLy8gZ3JvdXAuc2VsZWN0QWxsKCdwYXRoJylcbi8vICAgLmRhdGEoW2RhdGFdKVxuLy8gICAuZW50ZXIoKVxuLy8gICAuYXBwZW5kKCdwYXRoJylcbi8vICAgLmF0dHIoJ2QnLCBsaW5lKVxuLy8gICAuYXR0cignZmlsbCcsICdub25lJylcbi8vICAgLmF0dHIoJ3N0cm9rZScsICcjMDAwJylcbi8vICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDUpXG4iXX0=
