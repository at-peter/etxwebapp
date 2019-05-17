import React from 'react';
import * as d3 from 'd3';

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
              <div className='chart'></div>
              {this.testfunction()}
        </div>
      
        
        )
    
    }
    
}