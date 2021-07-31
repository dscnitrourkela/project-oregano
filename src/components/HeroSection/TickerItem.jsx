import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

const ItemContainer = styled.div`
  ${tw`inline-block px-8 py-4 `}
`;
const TickerIcon = styled.img`
  ${tw`py-2
  px-6
  transform scale-95
`}
`;
function TickerItem({ source, alt }) {
  return (
    <ItemContainer>
      <TickerIcon src={source} alt={alt} style={{ width: '150px' }} />
    </ItemContainer>
  );
}

export default TickerItem;
