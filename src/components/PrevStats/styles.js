import styled from 'styled-components';

import tw from 'twin.macro';
import { Heading1 } from '../shared';

export const Heading = styled(Heading1)`
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  margin: 0 auto;

  @media (max-width: 1145px) {
    font-size: 24px;
    font-style: normal;
  }
`;

export const SectionContainer = styled.div`
  margin: 10px auto;
  max-width: 1540px;
  width: 100%;
  height: auto;
  margin-bottom: 50px;
`;

export const SectionStats = styled.div`
  margin: 20px auto;
  height: 24rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-left: 5rem;
  margin-right: 5rem;
  gap: 10rem;

  @media (max-width: 968px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 1rem;
    margin-right: 1rem;
    height: auto;
    gap: 0px;
  }
`;

export const SectionCard = styled.div`
  position: relative;
  align-content: end;

  @media (max-width: 1000px) {
    height: 20rem;
    &:nth-child(1) {
      order: 3;
    }
    &:nth-child(2) {
      order: 1;
    }
    &:nth-child(3) {
      order: 2;
    }
  }
`;

export const Circle = styled.div`
  position: absolute;
  z-index: -10;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  right: 40px;
  bottom: 0;
  border-radius: 50%;
  background: ${(props) => `linear-gradient(0deg, #0e0812, ${props.color})`};

  @media (max-width: 1000px) {
    right: 55%;
    transform: translateX(50%);
  }
`;

export const StatValue = styled.div`
  font-size: ${(props) => (props.main ? '70px' : '64px')};
  color: ${(props) => props.color};
  ${tw`
  font-Prompt
  lg:text-right
  text-center
  mb-1
  ml-20
  lg:ml-auto
  `}
`;

export const StatCaption = styled.div`
  font-size: ${(props) => (props.main ? '24px' : '20px')};
  ${tw`
    text-white
    lg:text-right
    text-center
    font-Prompt
    lg:mr-10
    ml-10
    `}
`;
