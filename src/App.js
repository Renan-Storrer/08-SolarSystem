import React from 'react';
import Header from './components/Header';
import SolarSytem from './components/SolarSystem';
import Mission from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header className="header" />
          <SolarSytem />
          <Mission />
        </div>
      </div>
    );
  }
}

export default App;
