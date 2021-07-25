import React from 'react';

// Components
import { Body, Heading1, SectionContainer } from '..';
import { Heading, Sub } from './styles';
import Card from './Card';

// Assets
import { tracks } from '../../../config/content';

function Tracks() {
  return (
    <SectionContainer>
      <Heading>
        <Heading1>{tracks.title}</Heading1>
        <Sub>
          <Body>{tracks.content}</Body>
        </Sub>
      </Heading>
      <Card />
    </SectionContainer>
  );
}

export default Tracks;
