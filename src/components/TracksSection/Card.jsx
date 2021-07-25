import React from 'react';

// Components
import { Tracks2, Head, Head2, Text, Tracks1, Cards } from './styles';
import { Body, Heading4 } from '..';

// Assets
import TracksData from './data';

export default function Card() {
  return (
    <Tracks1>
      {TracksData.map((props) => (
        <Cards key={props.id}>
          <Tracks2>
            <Head2>
              <img alt='trc' src={props.image} />
              <Text>
                <Heading4>{props.title}</Heading4>
              </Text>
            </Head2>
            <Head>
              <Body>{props.description}</Body>
            </Head>
          </Tracks2>
        </Cards>
      ))}
    </Tracks1>
  );
}
