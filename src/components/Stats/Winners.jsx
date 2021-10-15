import React from 'react';
import { stats } from '../../../config/content/index';
import { CardContainer, Cards } from './styles';

export const CardContainers = () => (
  <CardContainer>
    {stats.winners.map(({ id, img, name, competition, rank, color }) => (
      <Cards key={id} style={{ backgroundColor: color, color: 'white' }}>
        <img src={img} alt='winners' />
        <div>
          <h1 style={{ fontSize: '25px' }}>{name}</h1>
          <h2 style={{ marginTop: '4px', marginBottom: '2px' }}>{competition}</h2>
          <h2>{rank}</h2>
        </div>
      </Cards>
    ))}
  </CardContainer>
);
