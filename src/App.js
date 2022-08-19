import React from 'react';
import Header from './components/Header';
import SolarSytem from './components/SolarSystem';
import Mission from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSytem />
        <Mission />
      </div>
    );
  }
}

export default App;
