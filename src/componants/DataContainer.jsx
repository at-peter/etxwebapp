import React from 'react';

import Plot from 'react-plotly.js';

export default class ETXDataDisplay extends React.Component{

    constructor(props){
        super(props);

        this.state = {}
    }
    
    render() {
        return(
        <div>
              <div className='chart'>
              <Plot
                data={[
                {
                    // this is the scatter plot. 
                    x: [1, 2, 3, 4],
                    y: [2, 6, 3, 10],
                    type: 'scatter',
                    mode: 'lines+points',
                    marker: {color: 'red'}
                }]}
                // this is the bar plot 
                // {type: 'bar', 
                // x: [1, 2, 3, 5], 
                // y: [2, 3, 3, 8],
                // marker: {color: 'blue'}}
                // ]}
                layout={ {width: 400, height: 240, title: 'ETX Bid Prices'} }
            ></Plot>
              </div>
              
        </div>
      
        
        )
    
    }
    
}