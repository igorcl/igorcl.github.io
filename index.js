d3.select();
d3.selectAll();

/*d3.select('h1').style('color', 'red')
.attr('class', 'heading')
.text('Updated h1 tag');

d3.select('body').append('p').text('First Paragraph');
d3.select('body').append('p').text('Second Paragraph');
d3.select('body').append('p').text('Third Paragraph');

d3.selectAll('p').style('color', 'blue');*/

var svgWidth = 600, svgHeight = 600;
var svg = d3.select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "svg-container");

    var circle = svg.append("circle")
        .attr("cx", 100)
        .attr("cy", 100)
        .attr("r", 40)
        .attr("fill", "blue");

d3.select("body").transition()
.duration(2000)
.style("background-color", "black");

d3.select("circle").transition()
.duration(2000)
.attr("cx", 300)
.attr("fill", "yellow");

