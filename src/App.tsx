import React from 'react';
import ButtonTooltip from './components/ButtonTooltip';

function App() {

  return (
    <div className="App" style={
      // center of the screen
      {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }
    }>
      <ButtonTooltip tooltipText="Tooltip text" >
        Hover me
      </ButtonTooltip>
    </div>
  );
}

export default App;
