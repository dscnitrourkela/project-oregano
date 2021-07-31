import React from 'react';

// Components
import { Head2, Text, Tracks1, Cards, Background, TrackIcon } from './styles';
import { Body, Heading4 } from '..';

// Assets
import { tracks } from '../../../config/content';

export default function Card() {
  return (
    <Tracks1>
      {tracks.tracks.map(({ id, title, icon, alt, content, hex }) => (
        <Cards key={id}>
          <Head2>
            {/* <img alt={img.alt} src={img.src} /> */}
            <Background color={hex}>
              <TrackIcon src={icon} alt={alt} />
            </Background>
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
