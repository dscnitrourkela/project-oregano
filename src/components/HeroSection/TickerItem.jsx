import React from 'react';

// Libraries
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: inline-block;
  margin: 0.5rem 3rem;
  height: 60px;
  width: auto;
`;

const TickerIcon = styled.img`
  display: inline-block;
  vertical-align: middle;
  padding: auto 3rem;
  transform: scale(0.8);
`;
function TickerItem({ source, alt, size }) {
  return (
    <ItemContainer>
      <TickerIcon src={source} alt={alt} style={{ width: size }} />
    </ItemContainer>
  );
}

export default TickerItem;
