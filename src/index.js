import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';

const mytheme = createMuiTheme({
    palette: {
        primary: green,
        secondary: {
          main: purple[50] //'#ffc333', 
        },
        type : 'dark'
      },
  });
console.log(green);
ReactDOM.render(
<MuiThemeProvider theme = {mytheme}>  
    <App />
</MuiThemeProvider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
