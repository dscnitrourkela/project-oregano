/* eslint-disable max-len */
import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import { Container, Wrapper, FlippingCard, FlippingPrizeFront, FlippingPrizeBack } from '../Styles';
import { Body1, Heading4 } from '../..';

// Content
import content from '../../../../config/content/Prizes';

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
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const Img = styled.img`
  width: 70%;
  height: auto;
  margin: auto;
`;

const List = styled(Body1)`
  color: white;
  font-size: small;
`;

const Tracks = () => {
  const { TRACK_DETAILS } = content;
  const TRACKS = [...TRACK_DETAILS.tracks, ...TRACK_DETAILS.additionalTracks];

  return (
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
};

export default Tracks;
