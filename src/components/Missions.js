import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Mission extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missions-section">
        <Title headline="Missões" />
        {
          missions.map((missao) => {
            const { name, year, country, destination } = missao;
            return (
              <MissionCard
                key={ name }
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            );
          })
        }
      </div>
    );
  }
}

export default Mission;
