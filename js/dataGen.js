var dataGen = (function() {

    var generateCpuUsage = function(numPoints) {
	    var dataset = [];
	    var numPoints = numPoints || 100;
	    var yIntercept = 20;
        for (var i = 0; i < numPoints; i++) {
            var newNumber = (Math.random() * 40) + yIntercept;
            dataset.push(newNumber);
        }
        return dataset;
    };

    var generateDiskCapacity = function(numPoints) {
	    var dataset = [];
	    var numPoints = numPoints || 100;
	    var yIntercept = 40;
        for (var i = 0; i < numPoints; i++) {
	        yIntercept += .25;
            var newNumber = (Math.random() * 2) + yIntercept;
            dataset.push(newNumber);
        }
        return dataset;
    };
    var generateMemoryUsage = function(numPoints) {
	    var dataset = [];
	    var numPoints = numPoints || 100;
	    var yIntercept = 0.1;
	    for (var i = 0; i < numPoints; i++) {
		    yIntercept += i / (i + 5);
            var newNumber = (Math.random() * 20) + yIntercept;
            dataset.push(newNumber);
        }
        return dataset;
    };
    var generateNetworkTraffic = function(numPoints) {
	    var dataset = [];
	    var numPoints = numPoints || 100;
	    var yIntercept = (Math.random() * 40);
        for (var i = 0; i < numPoints; i++) {
            var newNumber = (Math.random() * 15) + 15;
	        if(newNumber > 25) newNumber += yIntercept;
            dataset.push(newNumber);
        }
        return dataset;
    };

    return {
	    genCpuUsage: generateCpuUsage,
	    genDiskCapacity: generateDiskCapacity,
	    genMemoryUsage: generateMemoryUsage,
	    genNetworkTraffic: generateNetworkTraffic
    }

})();

var numPoints = 50;


// d3.select("#genCpuUsage")
//     .selectAll("div")
//     .data(dataGen.genCpuUsage(numPoints))
//     .enter()
//     .append("div")
//     .attr("class", "bar")
//     .style("height", function(d) {
//         var barHeight = d * 2;
//         return barHeight + "px";
//     });

// d3.select("#genDiskCapacity")
//     .selectAll("div")
//     .data(dataGen.genDiskCapacity(numPoints))
//     .enter()
//     .append("div")
//     .attr("class", "bar")
//     .style("height", function(d) {
//         var barHeight = d * 2;
//         return barHeight + "px";
//     });

// d3.select("#genMemoryUsage")
//     .selectAll("div")
//     .data(dataGen.genMemoryUsage(numPoints))
//     .enter()
//     .append("div")
//     .attr("class", "bar")
//     .style("height", function(d) {
//         var barHeight = d * 2;
//         return barHeight + "px";
//     });

// d3.select("#genNetworkTraffic")
//     .selectAll("div")
//     .data(dataGen.genNetworkTraffic(numPoints))
//     .enter()
//     .append("div")
//     .attr("class", "bar")
//     .style("height", function(d) {
//         var barHeight = d * 2;
//         return barHeight + "px";
//     });