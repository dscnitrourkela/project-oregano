import React from 'react';

// Libraries
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  background: transparent;
  min-width: 640px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 1rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Prize = styled.div`
  width: 80%;
  height: 90%;

  background: ${({ deg, color1, color2 }) => `linear-gradient(${deg}, ${color1}, ${color2})`};
`;

export const FlippingPrizeContainer = styled.div`
  width: 80%;
  height: 90%;
  background: transparent;

  display: inline-block;
  margin: 0 auto;
  padding: 0 12px;
  perspective: 900px;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const FlippingPrizeCard = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  transition: all 0.6s ease;
  transform-style: preserve-3d;
  transform: rotateY(180deg);
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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;

export const FlippingPrizeBack = styled(common)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transform: rotateY(180deg);
`;

export const FlippingCard = ({ front, back }) => (
  <FlippingPrizeContainer>
    <FlippingPrizeCard>
      <FlippingPrizeFront className={front.className}>{front.content}</FlippingPrizeFront>

      <FlippingPrizeBack className={back.className}>{back.content}</FlippingPrizeBack>
    </FlippingPrizeCard>
  </FlippingPrizeContainer>
);
