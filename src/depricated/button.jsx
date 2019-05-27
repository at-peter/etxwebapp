import React from 'react'
//import styles from'./button.css' 
import Button from '@material-ui/core/Button';
// This is the button from the laptop. 
export default class MyButton extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            istoggled: true,
            counter: 0
         };
        this.handleClick = this.handleClick.bind(this);
    }
     
    handleClick() {
        // this.setState(prevstate => ({
        //     istoggled : !prevstate.istoggled
        // }));
        this.setState(prevstate => ({
            counter : prevstate.counter + 1
        }));
    }

    counterReset(){
        // this.setState({counter : 0}); TODO: this does not reset the counter. 
    }
    render(){
        // at the moment this code shows the counter on the button. 
        return(
        <div>
            <button onClick={this.handleClick}>
                {/* {this.state.istoggled ? 'ON':'Off'} */}
                {/* {this.state.counter}  */}
                press me
            </button>
            <Button variant="contained" color="primary" onClick={this.counterReset}>
                {this.state.counter}
            </Button>
        </div>
        );
    }
}