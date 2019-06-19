import React from 'react';
import UiContainer from './componants/UiContainer'
import ETXDataDisplay from './componants/DataContainer';
import SimpleAppBar from './componants/appbar'
import Form from './componants/SimpleForm';

import io from 'socket.io-client';

class App extends React.Component{

  constructor(props){
    super(props);
    // socket connection
    this.socket = io('http://localhost:5000');
    this.socket.emit('message', {"weeb" : "connect"});
    console.log('Constructor did mount');
    // data section 
    // initializing the arrays for the data 

    this.state = {
      x : [0],
      y : [0],
      counter : 0

    };
  }



  // componentDidMount(){
  //   const socket = io('http://localhost:5000');
  //   socket.emit('message',{"Web" : "Connect"})
  //   console.log('App did mount')
  //   console.log(socket)
  // }

  onSubmit = (fields) => {
    console.log('App got: ', fields);
    this.socket.emit('message', fields);
// TODO: These 2 lines need to be put into a set state statement otherwise they do not update:
    // this.x.push(fields.buyvalue) ;
    // this.y.push(fields.askvalue);

    console.log('Buyvalues', this.state.x);
    console.log('Askvalues', this.state.y);
    var buy = parseInt(fields.buyvalue);
    var ask = parseInt(fields.askvalue)
    this.setState((state) => ({
      x : state.x.concat([buy]),
      y : state.y.concat([ask]),  
      counter : this.counter + 1
    }));
  }
  // the internet suggests to use concat as it creates a new array rather than mutating the previous value. 


  render() {
  return (
      <div>
        <SimpleAppBar></SimpleAppBar>
       {/*TODO: set this   */}
        <ETXDataDisplay buy= {this.state.x} ask={this.state.y} counter={this.counter}>
        </ETXDataDisplay>
        {/* <UiContainer/>  */}
        <Form onSubmit={fields => this.onSubmit(fields) }></Form>

      </div>
  );
}
}
export default App;
