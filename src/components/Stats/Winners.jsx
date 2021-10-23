import React from 'react';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { stats } from '../../../config/content/index';
import { CardContainer, Cards, Name, Img, Topic } from './styles';

export const CardContainers = () => (
  <CardContainer>
    {stats.winners.map(({ id, name, competition, color, img }) => (
      <Cards key={id} style={{ backgroundColor: color, color: 'white' }}>
        <Img>
          <FontAwesomeIcon icon={faTrophy} />
        </Img>
        <div>
          <Name>{name}</Name>
          <Topic>{competition}</Topic>
        </div>
      </Cards>
    ))}
  </CardContainer>
);
