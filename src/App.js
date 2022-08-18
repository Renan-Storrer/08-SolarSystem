import React from 'react';
import Header from './components/Header';
import SolarSytem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSytem />
      </div>
    );
  }
}

export default App;
