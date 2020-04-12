// ===========================================================
// SET MARGINS
// ===========================================================
var svgWidth = 900;
var svgHeight = 1000;

var margin = {
    top: 40,
    right: 0,
    bottom: 0,
    left: 0
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var innerRadius = 220;
var outerRadius = Math.min(width, height) / 2; // middle of svg area to border

// ===========================================================
// SVG WRAPPER
// ===========================================================

var svg = d3.select('#circular_bar')
    .classed('chart', true)
    .append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)

var chartGroup = svg.append('g')
    .attr('transform', `translate(${(width/2 + margin.left)}, ${(height/2 + margin.top)})`);

// ===========================================================
// INITIAL PARAMETERS
// ===========================================================
var chosenXAxis = "Country";
var chosenYAxis = "Score";

// ===========================================================
// RETRIEVE DATA
// ===========================================================
// url = "/api/circular";
// d3.json(url).then(function(happyData) {
d3.csv('assets/data/2019_world_happy_rankings.csv').then(function(happyData) {
    console.log(happyData);

    // =======================================================
    // SCALES
    // =======================================================
    var x = d3.scaleBand()
        .range([0, 2*Math.PI]) // x-axis range from 0 to 2pi
        .align(0)
        .domain(happyData.map(function(d) {return d.Country;}));
    console.log(x);

    var y = d3.scaleRadial()
        .range([innerRadius, outerRadius])
        .domain([0, 10]);
    console.log(y);

    var ybis = d3.scaleRadial()
        .range([innerRadius, 5])
        .domain([0, 2])

    var scalesGroup = chartGroup.append('g')
        .selectAll('path')
        .data(happyData)
        .enter()
        .append('path')
        .attr("fill", "#34e89e")
        .attr('class', 'yo')
        .attr("d", d3.arc()   
            .innerRadius(innerRadius)
            .outerRadius(d => {return y(d.Score); })
            .startAngle(d => {return x(d.Country); })
            .endAngle(d => {return x(d.Country) + x.bandwidth(); })
            .padAngle(0.01));
    console.log(scalesGroup);

    // =======================================================
    // LABELS
    // =======================================================
    var labelsGroup = chartGroup.append('g')
        .selectAll('g')
        .data(happyData)
        .enter()
        .append('g')
        .attr("text-anchor", d => {return (x(d.Country) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "end":"start"; })
        .attr("transform", d => {return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (y(d['GDP per capita'])+73) + ", 0)"; })
        .append("text")
        .text(d => {return(d.Country)})
        .attr("transform", d => {return (x(d.Country) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "rotate(180)" : "rotate(0)"; })
        .style("font-size", "11px")
        .attr("alignment-baseline", "middle")
    console.log(labelsGroup);

    var secondSeries = chartGroup.append('g')
        .selectAll('path')
        .data(happyData)
        .enter()
        .append('path')
        .attr('fill', '#0f3443')
        .attr('d', d3.arc()
            .innerRadius(d => {return ybis(0)})
            .outerRadius(d => {return ybis(d['GDP per capita']); })
            .startAngle(d => {return x(d.Country); })
            .endAngle(d => {return x(d.Country) + x.bandwidth(); })
            .padAngle(0.01)
            .padRadius(innerRadius));
    
    // =======================================================
    // TITLE & LEGEND
    // =======================================================
    svg.append("text")
        .attr('x', 250)
        .attr('y', 60)
        .text("2019 Happiness Rankings: Score vs GDP")
        .style("font-size", "24px")
        .attr("alignment-baseline", "middle")

    svg.append("circle").attr("cx",400).attr("cy",500).attr("r", 6).style("fill", "#34e89e")
    svg.append("circle").attr("cx",400).attr("cy",530).attr("r", 6).style("fill", "#0f3443")
    svg.append("text").attr("x", 410).attr("y", 500).text("Score").style("font-size", "15px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 410).attr("y", 530).text("GDP Per Capita").style("font-size", "15px").attr("alignment-baseline","middle")
});
