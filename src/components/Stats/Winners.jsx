import React from 'react';
import { stats } from '../../../config/content/index';
import { CardContainer, Cards, Name } from './styles';

export const CardContainers = () => (
  <CardContainer>
    {stats.winners.map(({ id, name, competition, color }) => (
      <Cards key={id} style={{ backgroundColor: color, color: 'white' }}>
        <div>
          <Name>{name}</Name>
          <h2 style={{ marginTop: '4px', marginBottom: '2px', fontSize: '100%' }}>{competition}</h2>
        </div>
      </Cards>
    ))}
  </CardContainer>
);
