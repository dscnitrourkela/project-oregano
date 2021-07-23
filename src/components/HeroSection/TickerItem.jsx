import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const ItemContainer = styled.div`
  ${tw`inline-block px-8 py-4`}
`;
// const TickerIcon = styled.img`
//   ${tw`
//   place-self-center`}
// `;
const TickerIcon = styled.img`
  ${tw`py-2
  px-6
  transform scale-95`}
`;
function TickerItem({ source, alt }) {
  return (
    <ItemContainer>
      {/* <TickerIcon>{source}</TickerIcon> */}
      <TickerIcon src={source} alt={alt} />
    </ItemContainer>
  );
}

export default TickerItem;
