import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  bob: {
    flexGrow: 3,
    palette: {
      colorprimary: 'red',
      colorsecondary: '#ffc333'}
  },
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.bob}>
      <AppBar 
      position="relative"
      width={1/4}>
        
        <Toolbar>
          <Typography 
          variant="h6" 
          color="inherit">
          ETX Market Participant Demo 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);