import React from 'react';
import MyButton from './Matbutton';
import MyField from './InputForm';
import Plot from 'react-plotly.js';

export default class InputField extends React.Component{

    constructor(props){
        super(props);
        // state is set here and includes the state for all the children 
        this.state = {
            buttontoggle : 0,
            buyfield : 0, 
            askfield : 0,
            displayValue : null
        };
        
    }
    
    handleSubmit() {
        // this.setState({buttontoggle: !this.prevstate})
        console.log('Click happened');
        // this.setState(state => ({buyfield :state.buyfield + 1
        // }));
        alert(this.state.displayValue);
    }

    onSubmit = () => {
        console.log(this.state);
        
    };


    handleDisplay() {
        this.setState(state => ({displayValue : this.state.buyfield}));
       
    }
    handleChange(event){ 
        // This 
        // this.setState({buyfield : event.target.value })

        this.setState({
            [event.target.name] : event.target.value
        });
    }

    render() {
        // this needs to render all three componants: submit button, ask and buy fields. 
        return (
            <div>
                <MyButton 
                    text='Alert' 
                    variant='fab' 
                    onClick= {() => this.handleSubmit()}>
                </MyButton>
                <MyButton 
                    variant='contained' 
                    onClick={() => this.handleDisplay()} 
                    text='Display' 
                ></MyButton>
                {this.state.buyfield}
                <br></br>
                <MyField 
                    value={this.state.buyfield}
                    onChange={this.handleChange}
                ></MyField>
                <br></br>
                <form>
                <input
                value={this.state.buyfield}
                name="buyfield"
                onChange={(event) => this.handleChange(event)}
                />
                </form>
                <br/>
                <button 
                onClick={this.onSubmit}>
                submit
                </button>
                <Plot
                data={[
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+points',
                    marker: {color: 'red'},
                },
                {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                ]}
                layout={ {width: 400, height: 240, title: 'My Fancy Plot'} }
            ></Plot>;
            </div>
        );
        }


} 