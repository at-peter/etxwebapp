import React from 'react';
import UiContainer from './componants/UiContainer'
import ETXDataDisplay from './componants/DataContainer';
import SimpleAppBar from './componants/appbar'

function App() {
  return (<div>
    <SimpleAppBar></SimpleAppBar>
    {/* <ETXDataDisplay>
    </ETXDataDisplay> */}
    <UiContainer/> 
    </div> 
  );
}

export default App;
