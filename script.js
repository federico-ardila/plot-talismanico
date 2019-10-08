const D = [{ src: "cloud.svg", x: 10, y: 20 },
{ src: "sun.svg", x: 20, y: 40 },
{ src: "sun.svg", x: 28, y: 40 },
{ src: "sun.svg", x: 38, y: 40 },
{ src: "cloud.svg", x: 58, y: 22 },
{ src: "cloud.svg", x: 68, y: 30 },
{ src: "cloud.svg", x: 72, y: 33 }

];

//Width and height
var w = 800;
var h = 400;
var padding = 20;
var border = 1;
var bordercolor = 'black';


document.addEventListener("DOMContentLoaded", () => {
    var svg = d3.select('body')
        .append('svg')
        .attr("width", w)
        .attr("height", h)
        .attr("border", border);

    var borderPath = svg.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("height", h)
        .attr("width", w)
        .style("stroke", bordercolor)
        .style("fill", "none")
        .style("stroke-width", border);


    svg.append('g').selectAll('.myPoint')
        .data(D)
        .enter()
        .append('image')
        .attr("xlink:href", function (d) { return d.src })
        .attr("x", function (d) { return d.x })
        .attr("y", function (d) { return d.y })
        .attr("width", 16)
        .attr("height", 16);


});