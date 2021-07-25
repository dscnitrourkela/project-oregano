import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import TickerItem from './TickerItem';
import { IconsList } from './IconsList';
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
          {IconsList.map((item) => (
            <TickerItem key={item.id} source={item.src} alt={item.alt} />
          ))}
        </TickerMover>
      </TickerWrapper>
    </TickerContainer>
  );
}

export default Ticker;
