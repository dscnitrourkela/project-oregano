import React, { useEffect } from 'react';

// Libraries
import styled from 'styled-components';

const PrimeContainer = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: auto;
  min-height: calc(100vh - 100px);
  padding-top: 100px;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 3.5fr 2fr;
  grid-gap: 1rem;

  @media (max-width: 700px) {
    width: 95%;
  }
`;

const Box1 = styled.div`
  grid-column: 1/2;
  border-radius: 8px;
  background: #17171d;
  min-height: 600px;
  overflow: hidden;
`;

const Box2 = styled.div`
  grid-column: 2/3;
  border-radius: 8px;
  background: #17171d;
  min-height: 600px;
`;

const LiveSection = () => {
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
            src='https://www.youtube.com/embed/5eO0IUj7sjU'
            title='YouTube video player'
            frameBorder='0'
            // eslint-disable-next-line max-len
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            id='idIframe'
          />
        </Box1>
        <Box2 id='chat-embed-wrapper' />
      </Container>
    </PrimeContainer>
  );
};

export default LiveSection;
