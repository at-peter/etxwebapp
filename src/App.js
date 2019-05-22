import React from 'react';
import InputField from './componants/InputField';
import PlotContainer from './componants/plotDisplay';
import SimpleAppBar from './componants/appbar'

function App() {
  return (<div>
    <SimpleAppBar></SimpleAppBar>
    <PlotContainer>
    </PlotContainer>
    <InputField>
    </InputField>
    </div> 
  );
}

export default App;
