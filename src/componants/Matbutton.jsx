import React from 'react';
import Button from '@material-ui/core/Button';


const Mybutton = (props) => (
  <Button 
  variant={props.variant} 
  color={props.color} 
  size='large' 
  onClick={props.onClick}
  >
    {props.text}
  </Button>
);

export default  Mybutton;
