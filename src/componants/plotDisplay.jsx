import React from 'react';
import * as d3 from 'd3';
import Plot from 'react-plotly.js';

export default class PlotContainer extends React.Component{

    constructor(props){
        super(props);

        this.state = {}
    }
    
    testfunction() {
        var data = [30, 86, 168, 281, 303, 365];
        d3.select('.chart')
            .selectAll("div")
            .data(data)
            .enter()
            .append("div")
            .style("width", function(d) {return d + "px";})
            .text(function(d) {return d;});

    }
   

    render() {
        return(
        <div>
              <div className='chart'>
              <Plot
                data={[
                {
                    // this is the 
                    x: [1, 2, 3, 4],
                    y: [2, 6, 3, 10],
                    type: 'scatter',
                    mode: 'lines+points',
                    marker: {color: 'red'},
                },
                // this is the bar plot 
                {type: 'bar', 
                x: [1, 2, 3, 5], 
                y: [2, 3, 3, 8],
                marker: {color: 'blue'}}
                ]}
                layout={ {width: 400, height: 240, title: 'My Fancy Plot'} }
            ></Plot>
              </div>
              
        </div>
      
        
        )
    
    }
    
}