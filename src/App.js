import React from 'react';
import Header from './components/Header';
import SolarSytem from './components/SolarSystem';
import Mission from './components/Missions';
import MissionCard from './components/MissionCard';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSytem />
        <Mission />
        <MissionCard />
      </div>
    );
  }
}

export default App;
