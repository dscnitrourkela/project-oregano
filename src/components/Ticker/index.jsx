import React from 'react';

// Libraries
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

// Components
import TickerItem from './TickerItem';

// Assets
import sponsors from '../../../config/content/Sponsors';

const TickerContainer = styled.div`
  ${tw`
    bg-background-dark
    w-full 
    overflow-hidden
    py-10
  `}
`;

const ticker = keyframes`
  0% {
    transform: translate(50vw, 0);
  }
  100% {
    transform: translate(-200%, 0);
  }
`;

const TickerMover = styled.div`
  ${tw`
    inline-block
    whitespace-nowrap
  `}

  animation: ${ticker} 20s linear 0s infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

function Ticker() {
  return (
    <TickerContainer className='TickerContainer'>
      <TickerMover className='TickerMover'>
        {[...sponsors.alpha, ...sponsors.beta].map(({ name, src, width }) => (
          <TickerItem key={name} source={src} alt={name} size={width} />
        ))}

        <div style={{ margin: '0 20vw', display: 'inline-block' }} />

        {[...sponsors.alpha, ...sponsors.beta].map(({ name, src, width }) => (
          <TickerItem key={name} source={src} alt={name} size={width} />
        ))}

        <div style={{ margin: '0 20vw', display: 'inline-block' }} />

        {[...sponsors.alpha, ...sponsors.beta].map(({ name, src, width }) => (
          <TickerItem key={name} source={src} alt={name} size={width} />
        ))}
      </TickerMover>
    </TickerContainer>
  );
}

export default Ticker;
