import React from 'react';

// Components
import { Body, Heading1, SectionContainer } from '..';
import { Heading, Sub } from './styles';
import Card from './Card';

function Tracks() {
  return (
    <SectionContainer>
      <Heading>
        <Heading1>Tracks</Heading1>
        <Sub>
          <Body>
            Mattis suscipit dignissim libero, neque, diam, sed. Cursus nibh non sit nulla. Quam
            venenatis, imperdiet sed vulputate fames nibh. Natoque lectus neque vitae at.
          </Body>
        </Sub>
      </Heading>
      <Card />
    </SectionContainer>
  );
}

export default Tracks;
