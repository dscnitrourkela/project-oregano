import React from 'react';

// Libraries
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

// Components
import TickerItem from './TickerItem';
import { Heading2 } from '..';

// Assets
import { sponsors } from '../../../config/content';

const TickerContainer = styled.div`
  ${tw`
    bg-background-darker
    w-full overflow-hidden
    absolute
    bottom-0
  `}
`;

const ticker = keyframes`
  0% {
    transform: translate(100vw, 0);
  }
  100% {
    transform: translate(-100%, 0);
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

const ItemContainer = styled.div`
  display: inline-block;
  margin: 0.5rem 3rem;
  height: 60px;
  width: auto;
`;

function Ticker() {
  return (
    <TickerContainer className='TickerContainer'>
      <TickerMover className='TickerMover'>
        <ItemContainer>
          <Heading2 style={{ marginBottom: 0 }}>HackNITR is now live!</Heading2>
        </ItemContainer>
        {[...sponsors.alpha, ...sponsors.beta, ...sponsors['authentication-partner']].map(
          ({ name, src, width }) => (
            <TickerItem key={name} source={src} alt={name} size={width} />
          ),
        )}
      </TickerMover>
    </TickerContainer>
  );
}

export default Ticker;
