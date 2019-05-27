import React from 'react';
import MyButton from './Matbutton';
import MyField from './InputForm';

export default class UiContainer extends React.Component{

    constructor(props){
        super(props);
        // state is set here and includes the state for all the children 
        this.state = {
            buyfield : 0, 
            askfield : 0
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleDisplay = this.handleDisplay.bind(this);
    }
    

    onSubmit = () => {
        // Debugging tool 
        console.log(this.state);
    };

    _handleSubmit() {
        this.setState(state => ({displayValue :this.prevstate}))
        alert('A value was submitted: ' + this.state.buyfield);
    }

    handleDisplay() {
        this.setState(state => ({buyfield : this.state.buyfield}));
    }

    handleChange(event){ 
        // This is used for updating the values in the ask and buy fields
        this.setState({value : event.target.value })

        // this.setState({
        //     [event.target.name] : event.target.value
        // });
    }

    render() {
        // this needs to render all three componants: submit button, ask and buy fields. 
        return (
            <div>
                {/* <Pallet> */}
                <MyField 
                    value={this.state.buyfield}
                    onChange={this.handleDisplay}
                    name="buyfield"
                ></MyField>
                <MyField
                    value={this.state.askfield}
                    onChange={this.handleChange}
                    name="Ask Price">
                </MyField>
                <br></br>
                {/* <MyButton 
                    text='Alert' 
                    variant='fab' 
                    onClick= {() => this.handleSubmit()}
                    type="submit"
                    >
                </MyButton> */}
                <MyButton 
                    variant='contained' 
                    onClick={() => this.onSubmit()} 
                    text='Post Bids' 
                    color='primary'
                ></MyButton>
                <p>
                    Current buy value is:
                {this.state.buyfield}</p>
                <br></br>
                {/* </Pallet> */}
            </div>
        );
        }


} 