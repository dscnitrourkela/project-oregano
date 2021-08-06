import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import TickerItem from './TickerItem';

// Assets
import { sponsors } from '../../../config/content';
import '../../styles/styles.css';

const TickerContainer = styled.div`
  ${tw`
    bg-background-darker
    w-full overflow-hidden
    absolute
    bottom-0
  `}
`;

const TickerWrapper = styled.div`
  ${tw`w-full`}
`;

const TickerMover = styled.div`
  ${tw`
    inline-block
    whitespace-nowrap
  `}
`;

function Ticker() {
  return (
    <TickerContainer className='TickerContainer'>
      <TickerWrapper className='TickerWrapper'>
        <TickerMover className='TickerMover'>
          {[...sponsors.alpha, ...sponsors.beta, ...sponsors['authentication-partner']].map(
            ({ name, src, width }) => (
              <TickerItem key={name} source={src} alt={name} size={width} />
            ),
          )}
        </TickerMover>
      </TickerWrapper>
    </TickerContainer>
  );
}

export default Ticker;
