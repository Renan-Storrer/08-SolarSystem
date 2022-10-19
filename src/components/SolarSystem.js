import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSytem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system-section">
        <Title headline="Planetas" className="planetas" />
        <div className="planetas">
          {
            Planets.map((planeta) => {
              const { name, image } = planeta;
              return (
                <PlanetCard
                  key={name}
                  planetName={name}
                  planetImage={image}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default SolarSytem;
