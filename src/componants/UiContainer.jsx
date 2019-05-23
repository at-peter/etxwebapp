import React from 'react';
import MyButton from './Matbutton';
import MyField from './InputForm';
import Plot from 'react-plotly.js';


export default class UiContainer extends React.Component{

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
                <MyField 
                    value={this.state.buyfield}
                    onChange={this.handleChange}
                    name="Buy Price"
                ></MyField>
                <br></br>
                <MyField
                    value={this.state.askfield}
                    onChange={this.handleChange}
                    name="Ask Price"></MyField>
                <br></br>
                <MyButton 
                    text='Alert' 
                    variant='fab' 
                    onClick= {() => this.handleSubmit()}>
                </MyButton>
                <MyButton 
                    variant='contained' 
                    onClick={() => this.handleDisplay()} 
                    text='Update' 
                    color='primary'
                ></MyButton>
                <p>
                {this.state.buyfield}</p>
                <br></br>
            </div>
        );
        }


} 