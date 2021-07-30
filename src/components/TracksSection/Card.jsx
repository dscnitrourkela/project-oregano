import React from 'react';

// Components
import { Head2, Text, Tracks1, Cards } from './styles';
import { Body, Heading4 } from '..';

// Assets
import { tracks } from '../../../config/content';

export default function Card() {
  return (
    <Tracks1>
      {tracks.tracks.map(({ id, title, img, content }) => (
        <Cards key={id}>
          <Head2>
            <img alt={img.alt} src={img.src} />
            <Text>
              <Heading4>{title}</Heading4>
            </Text>
          </Head2>
          <Body>{content}</Body>
        </Cards>
      ))}
    </Tracks1>
  );
}
