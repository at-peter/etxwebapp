import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default class Form extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            buyvalue : '',
            askvalue : '', 
    
        };
        
    }
    
    _change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    _onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        // console.log(this.state)
    };


    render() {
        return(
            <form>
                <label>
                    {/* Buy Price : */}
                    <TextField
                    name = 'buyvalue'
                    placeholder = 'Buy Price'
                    value = {this.state.buyvalue}
                    onChange = {e => this._change(e)}
                    variant="filled"
                    margin='normal'
                    >
                    </TextField>
                </label>
                <br/>
                <label>
                    {/* Ask Price:   */}
                    <TextField
                    name = 'askvalue'
                    placeholder = 'Ask Price'
                    value = {this.state.askvalue}
                    onChange = {e => this._change(e)}
                    variant="filled"
                    margin='normal'
                    >
                    </TextField>
                </label>
                <br />
                <Button 
                onClick={e => this._onSubmit(e)}
                color = 'primary'
                size = 'large'
                variant = 'contained'
                >Submit Bids</Button>
            </form>                
        )
    }
}