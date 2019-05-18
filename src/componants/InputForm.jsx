import React from 'react';
import TextField from '@material-ui/core/TextField';

const MyField = (props) => (
    <TextField
    label={props.name}
    value={props.text}
    />
);

export default MyField;

