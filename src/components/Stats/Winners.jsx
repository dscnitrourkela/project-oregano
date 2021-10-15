import React from 'react';
import { stats } from '../../../config/content/index';
import { CardContainer, Cards, Img } from './styles';

export const CardContainers = () => (
  <CardContainer>
    {stats.winners.map(({ id, img, name, competition, rank, color }) => (
      <Cards key={id} style={{ backgroundColor: color, color: 'white' }}>
        <Img src={img} alt='winners' />
        <div>
          <h1 style={{ fontSize: '140%' }}>{name}</h1>
          <h2 style={{ marginTop: '4px', marginBottom: '2px', fontSize: '100%' }}>{competition}</h2>
          <h2 style={{ fontSize: '100%' }}>{rank}</h2>
        </div>
      </Cards>
    ))}
  </CardContainer>
);
