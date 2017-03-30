var svg = d3.selectAll("#footerSvg"),
          margin = {top: 20, right: 0, bottom: 20, left: 0},
          width = 1000 - margin.left - margin.right,
          height = 300 - margin.top - margin.bottom,
          g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var randomX = d3.randomNormal(width / 2, 150), //default 225
    randomY = d3.randomNormal(height / 2, 35), //default 40
    points = d3.range(1000).map(function()
      { return [randomX(), randomY()]; });

var color = d3.scaleSequential(d3.interpolateLab
            ("white", "yellowgreen")).domain([0, 18]);

var hexbin = d3.hexbin().radius(15).extent([[0, 0], [width, height]]);
var x = d3.scaleLinear().domain([0, width]).range([0, width]);
var y = d3.scaleLinear().domain([0, height]).range([height, 0]);

g.append("clipPath")
  .attr("id", "clip")
  .append("rect")
    .attr("width", width)
    .attr("height", height);

g.append("g")
    .attr("class", "hexagon")
    .attr("clip-path", "url(#clip)").selectAll("path")
    .data(hexbin(points))
    .enter().append("path")
      .attr("d", hexbin.hexagon())
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
      .attr("fill", function(d) { return color(d.length); });

/*
g.append("g").attr("class", "axis axis--y")
   .call(d3.axisLeft(y).tickSizeOuter(-width));

g.append("g").attr("class", "axis axis--x")
 .attr("transform", "translate(0," + height + ")")
 .call(d3.axisBottom(x).tickSizeOuter(-height));
*/

var svg = d3.selectAll("#headerSvg"),
          margin = {top: 0, right: 0, bottom: 0, left: 0},
          width = 1000 - margin.left - margin.right,
          height = 400 - margin.top - margin.bottom,
          g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var randomX = d3.randomNormal(width / 8, 400), //default 225
    randomY = d3.randomNormal(height / 6, 120), //default 40
    points = d3.range(3000).map(function()
      { return [randomX(), randomY()]; });

var color = d3.scaleSequential(d3.interpolateLab
            ("white", "yellowgreen")).domain([0, 18]);

var hexbin = d3.hexbin().radius(20).extent([[0, 0], [width, height]]);
var x = d3.scaleLinear().domain([0, width]).range([0, width]);
var y = d3.scaleLinear().domain([0, height]).range([height, 0]);

g.append("clipPath")
  .attr("id", "clip")
  .append("rect")
    .attr("width", width)
    .attr("height", height);

g.append("g")
    .attr("class", "hexagon")
    .attr("clip-path", "url(#clip)").selectAll("path")
    .data(hexbin(points))
    .enter().append("path")
      .attr("d", hexbin.hexagon())
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
      .attr("fill", function(d) { return color(d.length); });

