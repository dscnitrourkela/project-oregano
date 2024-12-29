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
  ${tw`
      my-5
      mx-auto
      max-w-[1540px]
      w-full
      mb-12
  `}
`;

export const CanvasContainer = styled.div`
  height: 100vh;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;
