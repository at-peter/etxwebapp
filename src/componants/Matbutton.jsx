import React from 'react';
import Button from '@material-ui/core/Button';
import { tsPropertySignature } from '@babel/types';

const Mybutton = (props) => (
  <Button variant={props.variant} color="primary" size='large' onClick={props.onClick}>
    {props.text}
  </Button>
);

export default  Mybutton;
