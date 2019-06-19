import React from 'react';

import Plot from 'react-plotly.js';

export default class ETXDataDisplay extends React.Component{
    
    render() {
        return(
        <div>
              <div className='chart'>
              <Plot
                data={[
                {
                    // this is the scatter plot. 
                    // x: [1, 2, 3, 4], //
                    x: this.props.counter,
                    // y: [2, 6, 3, 10], //
                    y: this.props.buy,
                    mode: 'points',
                    marker: {color: 'red'}
                },//]}
                // this is the bar plot 
                {type: 'scatter', 
                x: this.props.counter, 
                y: this.props.ask,
                marker: {color: 'blue'}}
                ]}
                
                layout={ {width: 500, height: 300, title: 'ETX Bid & Ask Prices', showlegend:false} }
                config={ {'displayModeBar' : false}}
            ></Plot>
              </div>
              
        </div>
      
        
        )
    
    }
    
}