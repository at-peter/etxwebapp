import React from 'react';
import UiContainer from './componants/UiContainer'
import ETXDataDisplay from './componants/DataContainer';
import SimpleAppBar from './componants/appbar'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Form from './componants/SimpleForm';

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

  onSubmit = (fields) => {
    console.log('App got: ', fields);
  }

  render() {
  return (
    <ThemeProvider theme={this.theme}> 
      <div>
        <SimpleAppBar></SimpleAppBar>
      {/* <ETXDataDisplay>
      </ETXDataDisplay>
        <UiContainer/>  */}
        <Form onSubmit={fields => this.onSubmit(fields) }></Form>

      </div> 
    </ThemeProvider>
  );
}
}
export default App;
