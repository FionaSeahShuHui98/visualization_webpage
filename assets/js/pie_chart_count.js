const start = 0
const end = 12333

d3.select("#hospitalized_count").transition()
    .tween("text", () => {
        const interpolator = d3.interpolateNumber(0, end);
        return function(t) {
            d3.select(this).text(Math.round(interpolator(t))) 
        }
    })
    .duration(1000);
