/* eslint-disable max-len */
import React from 'react';

// Libraries
import styled from 'styled-components';

// Content
import content from '../../../../config/content/Prizes';

const Container = styled.div`
  margin: 0;
  background: transparent;
  min-width: 640px;
  min-height: 300px;
  padding: 1rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const Img = styled.img`
  width: ${({ width }) => width};
  height: auto;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
`;

const { SWAGS } = content;

const MLHPrizes = () => (
  <Container>
    {SWAGS.map(({ src, alt, width }) => (
      <Img src={src} alt={alt} width={width} key={alt} />
    ))}
  </Container>
);

export default MLHPrizes;
