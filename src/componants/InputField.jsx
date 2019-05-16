import React from 'react';
import MyButton from './Matbutton';
import MyField from './InputForm';

export default class InputField extends React.Component{

    constructor(props){
        super(props);
        // state is set here and includes the state for all the children 
        this.state = {
            buttontoggle : 0,
            buyfield : 0, 
            askfield : 0
        };
        
    }
    
    handleClick() {
        // this.setState({buttontoggle: !this.prevstate})
        console.log('Click happened');
        this.setState(state => ({buyfield :state.buyfield + 1
        }));

    }

    render() {
        // this needs to render all three componants: submit button, ask and buy fields. 
        return (
            <div>
                <MyButton text='me' variant='fab' onClick= {() => this.handleClick()}>
                </MyButton>
                <MyButton variant='contained' onClick={() => this.handleClick()}>
                Another me 
                </MyButton>
                {this.state.buyfield}
                <br></br>
                <MyField text='Nani'></MyField>
            </div>
        );
        }


} 