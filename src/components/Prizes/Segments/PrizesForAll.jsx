/* eslint-disable max-len */
import React from 'react';

// Libraries
import styled from 'styled-components';

// Content
import content from '../../../../config/content/Prizes';

// Components
import { Body1 } from '../../shared';

const Container = styled.div`
  margin: 0;
  background: transparent;
  min-width: 640px;
  min-height: 300px;
  height: auto;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  margin-bottom: 1rem;
  max-width: 20%;
`;

const Img = styled.img`
  width: ${({ width }) => width};
  height: auto;
`;

const { ALL_PRIZES } = content;

const PrizesForAll = () => (
  <Container>
    {ALL_PRIZES.map(({ img, title }) => (
      <Wrapper key={title}>
        <Img src={img.src} alt={title} width={img.width} />
        <Body1 style={{ marginTop: '0.5rem' }}>{title}</Body1>
      </Wrapper>
    ))}
  </Container>
);

export default PrizesForAll;
