import React from 'react';
import Header from './components/Header';
import SolarSytem from './components/SolarSystem';
import Title from './components/Title';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSytem />
        <Title headline="Renan test" />
      </div>
    );
  }
}

export default App;
