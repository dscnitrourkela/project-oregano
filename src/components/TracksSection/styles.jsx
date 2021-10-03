// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { Body, Heading4 } from '..';

export const TracksContainer = styled.div`
  ${tw`
       grid
       grid-cols-track
       gap-5
       mt-10
   `}
`;

export const Card = styled.div`
  ${tw`
      w-full
      h-full
      rounded-lg

      flex
      flex-col
      items-center
      justify-start

      pt-6
      px-4
      pb-0
      m-0
      relative
  `};
  background: ${({ color1, color2 }) => `linear-gradient(135deg, ${color1}, ${color2})`};
  height: 430px;

  @media (max-width: 560px) {
    height: 370px;
  }
`;

export const Heading = styled(Heading4)`
  ${tw`
    uppercase
    font-bold
  `}
`;

export const Para = styled(Body)`
  ${tw`
    text-left
    mt-3
  `}
  color: white;
`;

export const Img = styled.img`
  ${tw`
    w-auto
    h-auto
    absolute
    bottom-0
  `}

  width: ${({ width }) => width}
`;
