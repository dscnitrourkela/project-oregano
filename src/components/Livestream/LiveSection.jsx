import React, { useEffect } from 'react';

// Libraries
import styled from 'styled-components';

// Components
import { Heading4, Heading3, Body } from '..';
import SessionList from './SessionList';

const PrimeContainer = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: auto;
  min-height: calc(100vh - 100px);
  padding-top: 100px;
  overflow-x: hidden;
  /* max-height: calc(100vh - 150px); */
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  overflow-x: hidden;

  display: grid;
  grid-template-columns: 3.5fr 2fr;
  grid-gap: 1rem;
  align-items: start;

  @media (max-width: 700px) {
    width: 95%;
  }
`;

const Box1 = styled.div`
  grid-column: 1/2;
  border-radius: 8px;
  background: #17171d;
  overflow: hidden;
`;

const DetailsContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 1.5rem 1.5rem;
`;

const SpeakerDetails = styled.div`
  width: 100%;
  height: auto;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  object-position: center;
  margin-right: 0.6rem;
  border-radius: 100%;
`;

const LiveSection = ({ youtubeLiveLink, title, img, speaker, designation }) => {
  useEffect(() => {
    function iframeLoaded() {
      const iFrameID = document.getElementById('idIframe');
      if (iFrameID) {
        const { width } = iFrameID.getBoundingClientRect();
        iFrameID.height = '';
        iFrameID.height = `${(9 * width) / 16}px`;
      }
    }

    iframeLoaded();
  }, []);

  return (
    <PrimeContainer>
      <Container>
        <Box1>
          <iframe
            width='100%'
            height='500'
            src={youtubeLiveLink}
            title='YouTube video player'
            frameBorder='0'
            // eslint-disable-next-line max-len
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            id='idIframe'
          />

          <DetailsContainer>
            <Heading3>{title}</Heading3>

            <SpeakerDetails>
              <Img src={img} />
              <div>
                <Heading4>{speaker}</Heading4>
                <Body>{designation}</Body>
              </div>
            </SpeakerDetails>
          </DetailsContainer>
        </Box1>

        <SessionList />
      </Container>
    </PrimeContainer>
  );
};

export default LiveSection;
