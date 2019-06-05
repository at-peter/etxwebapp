import React from 'react';
import UiContainer from './componants/UiContainer'
import ETXDataDisplay from './componants/DataContainer';
import SimpleAppBar from './componants/appbar'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Form from './componants/SimpleForm';
import Plot from 'react-plotly.js';
import io from 'socket.io';
import server from 'http';

class App extends React.Component{
  
  theme = createMuiTheme({
  palette: {
      palette: {
        primary: green,
        secondary: {
          main: '#ffc333',
        },
      },
  }});

  componentDidMount(){
    const socket = io.connect('http://localhost');
    socket.emit()
  }

  onSubmit = (fields) => {
    console.log('App got: ', fields);
  }

  render() {
  return (
    <ThemeProvider theme={this.theme}> 
      <div>
        <SimpleAppBar></SimpleAppBar>
      <ETXDataDisplay>
      </ETXDataDisplay>
        {/* <UiContainer/>  */}
        <Form onSubmit={fields => this.onSubmit(fields) }></Form>

      </div> 
    </ThemeProvider>
  );
}
}
export default App;
