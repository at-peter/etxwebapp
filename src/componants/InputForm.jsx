import React from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const MyField = (props) => (
    <form> 
        <TextField
        label={props.name}
        value={props.value}
        variant="filled"
        margin='normal'
        onChange = {props.onChange}
        />
    </form>
);

export default MyField;

