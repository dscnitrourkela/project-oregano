import React from 'react';

// Libraries
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  background: transparent;
  min-width: 640px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;

  min-height: 300px;
  height: auto;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlippingPrizeCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.6s ease;
  transform-style: preserve-3d;
  min-height: 200px;
`;

export const FlippingPrizeContainer = styled.div`
  width: 88%;
  height: 100%;
  background: transparent;

  display: inline-block;
  margin: 0 auto;
  padding: 0px;
  perspective: 900px;
  text-align: center;

  &:hover ${FlippingPrizeCard} {
    transform: rotateY(180deg);
  }
`;

const common = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  backface-visibility: hidden;
`;

export const FlippingPrizeFront = styled(common)`
  font-size: 30px;
`;

export const FlippingPrizeBack = styled(common)`
  font-size: 18px;
  transform: rotateY(180deg);
`;

export const FlippingCard = ({ children }) => (
  <FlippingPrizeContainer>
    <FlippingPrizeCard>{children}</FlippingPrizeCard>
  </FlippingPrizeContainer>
);
