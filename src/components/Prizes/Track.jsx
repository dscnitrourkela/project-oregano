/* eslint-disable max-len */
import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import { Container, Wrapper, FlippingCard, FlippingPrizeFront, FlippingPrizeBack } from './Common';
import { Body, Heading4 } from '..';

// Assets
import TRACK_DETAILS from '../../../config/content/Tracks';

const Front = styled(FlippingPrizeFront)`
  width: 100%;
  height: 100%;
  background: ${({ deg, color1, color2 }) => `linear-gradient(${deg}, ${color1}, ${color2})`};

  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const Back = styled(FlippingPrizeBack)`
  background: ${({ deg, color1, color2 }) => `linear-gradient(${deg}, ${color1}, ${color2})`};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: auto;
  height: 80%;
`;

const List = styled(Body)`
  color: white;
`;

const TRACKS = [...TRACK_DETAILS.tracks, ...TRACK_DETAILS.additionalTracks];

const Tracks = () => (
  <Container>
    {TRACKS.map(({ title, id, color1, color2, img, prizes }) => (
      <Wrapper key={id}>
        <FlippingCard>
          <Front color1={color1} color2={color2} deg='135deg'>
            <Img src={img.src} alt={title} />
            <Heading4 style={{ marginTop: 10, fontWeight: '600' }}>{title}</Heading4>
          </Front>
          <Back color1={color1} color2={color2} deg='135deg'>
            {prizes.map((item) => (
              <List key={item}>{item}</List>
            ))}
          </Back>
        </FlippingCard>
      </Wrapper>
    ))}
  </Container>
);

export default Tracks;
