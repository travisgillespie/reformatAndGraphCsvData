//define chart margins
function d3BarCharts(svgDistrict, districtManager){

	let svg = d3.select("#svg_"+regExUnderscore(svgDistrict, " ", "__")),
		margin = {top: 50, right: 50, bottom: 40, left: 110},
		width = svg.attr("width") - margin.left - margin.right,
		height = svg.attr("height") - margin.top - margin.bottom,
		g = svg.append("g").attr("transform", "translate(" + margin.left + "," +margin.top + ")"),
		addPoint5 = 0.5;
		addOne = 1;

	let colorBlack = 'black',
			colorDarkGray = "#26292C",
			colorRed = '#a50026';

  var fullName = 'Full Name'

	//define scales
	let	x = d3.scaleLinear().rangeRound([0, width]),
		y = d3.scaleBand().rangeRound([height, 0]).padding(0.2);

	//load data using filename of csv created in ./parseWkst.js... I'm using an example file. The code below may change based on the contents of your file
  d3.csv("./data/dataCSV/exampleData.csv", function(d){

		//then add the data to this chart if the district found in this csv file matchest the district passed into this function as an argument
		if (d.District.toLowerCase() === svgDistrict){
			d.Sum = +d.Sum;
			return d;
		}
	}, function (error, data) {
		if(error) throw error;

	//sort data
	data.sort(function(a,b) { return b.Sum - a.Sum; });

	//define domains based on data
	x.domain([0, 10]);
	y.domain(data.map(function(d) { return d[fullName]; }))

	//append rects to svg based on data
	var bars = g.selectAll(".bar")
		.data(data)
		.enter()

     //append rects
		bars.append("rect")
		.attr("id", function(d) { return "bar_"+d.ID })
		.attr("class", function(d) { return d.ID+" "+"toggleOff" })
		.attr("x", 0)
		.attr("y", function(d) { return y(d[fullName]); })
		.attr("height", y.bandwidth())
		.attr("width", function(d) { return x(d.Sum); })
		.attr("fill", function(d) { return d3.schemeRdYlGn[10][d.Sum - 1]})
		.attr("value", function(d) { return d3.schemeRdYlGn[10][d.Sum - 1]})
		// .attr("fill", function(d) { return d3.schemeRdYlBu[10][d.Sum - 1]})
		// .attr("value", function(d) { return d3.schemeRdYlBu[10][d.Sum - 1]})
		// .attr("class", function(d,i) { return 'bar_'+i+'_'+d.District})
		.on("mouseover", function(d) {
					d3.select(this)
					.attr("y", function(d) { return y(d[fullName]) - addPoint5; })
					.attr("height", y.bandwidth() + addOne)
					.attr("width", function(d) { return x(d.Sum) + addOne; })

					d3.selectAll('.'+d.ID)
					.attr("class", function(d) { return d.ID+" "+"toggleOn" })

		})
		.on("mouseout", function(d, i) {
					d3.select(this)
					.attr("y", function(d) { return y(d[fullName]); })
					.attr("height", y.bandwidth())
					.attr("width", function(d) { return x(d.Sum); })

					d3.selectAll('.'+d.ID)
					.attr("class", function(d) { return d.ID+" "+"toggleOff" })
		});

		g.append("g")
			.attr("class", "x-axis")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x))

		//append y axis to svg
		g.append("g")
			.attr("class", "y-axis")
			.call(d3.axisLeft(y));

			g.selectAll("g.y-axis g.tick text")
			 .data(data)

			 .attr("class", function(d) { return d.ID+" "+"toggleOff" })
			 .attr("fill", function(d) {  if (d.Sum === 0){ return colorRed } else { return colorBlack }})
			 .on("mouseover", function(d) {
						 d3.selectAll("."+d.ID)
							 .attr("class", function(d) { return d.ID+" "+"toggleOn" })

						 d3.select("#bar_"+d.ID)
							 .attr("y", function(d) { return y(d[fullName]) - addPoint5; })
		 					 .attr("height", y.bandwidth() + addOne)
		 					 .attr("width", function(d) { return x(d.Sum) + addOne; })
			 })
			 .on("mouseout", function(d, i) {
						 d3.selectAll("."+d.ID)
							 .attr("class", function(d) { return d.ID+" "+"toggleOff" })

 						 d3.select("#bar_"+d.ID)
 							 .attr("y", function(d) { return y(d[fullName]) ; })
 		 					 .attr("height", y.bandwidth() )
 		 					 .attr("width", function(d) { return x(d.Sum) ; })
			 });

		//add a value label to the right of each bar
    bars.append('text')
		.attr("class", function(d) { return d.ID+" "+"toggleOff" })
		 //y position of the label is halfway down the bar
     .attr('y', function(d) { return y(d[fullName]) + y.bandwidth() / 2 + 4; })
		 .attr("fill", function(d) { if (d.Sum === 0){ return colorRed; }})
		 .style("font-weight", function(d) { if (d.Sum === 0){ return 'bold'; }})

     //x position is 3 pixels to the right of the bar
     .attr('x', function(d){ return x(d.Sum) + 3; })
     .text(function(d) { return d.Sum; })
		 .on("mouseover", function(d) {
					 d3.selectAll("."+d.ID)
						 .attr("class", function(d) { return d.ID+" "+"toggleOn" })

					 d3.select("#bar_"+d.ID)
						 .attr("y", function(d) { return y(d[fullName]) - addPoint5; })
	 					 .attr("height", y.bandwidth() + addOne)
	 					 .attr("width", function(d) { return x(d.Sum) + addOne; })

		 })
		 .on("mouseout", function(d, i) {
					 d3.selectAll("."+d.ID)
					 .attr("class", function(d) { return d.ID+" "+"toggleOff" })

					 d3.select("#bar_"+d.ID)
						 .attr("y", function(d) { return y(d[fullName]) ; })
						 .attr("height", y.bandwidth() )
						 .attr("width", function(d) { return x(d.Sum) ; })
		 });
	});

	//define chart title to svg
	var svgDistrictUpper = svgDistrict.toUpperCase()
	let title = svg.append("g")
				.attr("class", "title");

			title.append("text")
				.attr("x", (width/1.5))
					.attr("y", 40)
					.attr("text-anchor", "middle")
					.style("font", "12px sans-serif")
					.text(svgDistrictUpper + ': ' +  districtManager);

	//append source data to svg
	let source = svg.append("g")
			.attr("class", "source");

			source.append("text")
				.attr("x", 10)
				.attr("y", 2000)
				.attr("text-anchor", "left")
				.style("font", "12px monospace")
				.text('Source: Lyearn');
}
