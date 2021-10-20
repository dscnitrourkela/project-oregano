// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { Heading4 } from '..';

export const SpeakersContainer = styled.div`
  ${tw`
       flex
       gap-5
       mt-10
   `}
   overflow-y: hidden;
   overflow-x: auto;
   white-space: nowrap;
   width: 100%;
`;

export const Card = styled.div`
  ${tw`
      w-full
      h-full
      rounded-xl
      bg-background-darker

      flex
      flex-col
      justify-start

      pb-2
      m-0
      mb-4
      relative
  `};
  width: 380px;
  height: 550px;

  @media (max-width: 560px) {
    width: 340px;
    height: 500px;
  }
`;

export const Name = styled(Heading4)`
  ${tw`
    uppercase
    text-7xl
    text-left
    z-20
    p-2
    px-4
    mt-16
    pt-72
  `}
  font-family: 'Six Caps', sans-serif;

  @media (max-width: 560px) {
    margin-top: 0;
  }
`;

export const Designation = styled(Heading4)`
  ${tw`
    z-20
    pb-2
  `}
  border-bottom: 4px solid white;
  width: 350px;
  margin-left: 15px;

  @media (max-width: 560px) {
    width: 310px;
  }
`;

export const Topic = styled.div`
  ${tw`
    text-left
    mt-2
    p-2
    px-4
    text-2xl
    font-normal
    font-roboto
    flex-col
    z-20
  `}
  overflow-wrap: break-word;
  word-wrap: break-word;
  width: 380px;
  color: white;
  white-space: normal;

  @media (max-width: 560px) {
    width: 340px;
  }
`;

export const Img = styled.img`
  ${tw`
    object-center
    absolute
    rounded-xl
    overflow-hidden
  `}
  width: ${({ width }) => width}
  object-fit: cover;
`;

export const Time = styled(Heading4)`
  ${tw`
    text-xl
    text-left
    font-roboto
    p-2
    pt-2
  `}
  @media (max-width: 560px) {
    font-size: 18px;
  }
`;

export const Date = styled(Heading4)`
  ${tw`
    text-xl
    text-right
    font-roboto
    p-2
    px-4
    pt-2
  `}
  @media (max-width: 560px) {
    font-size: 18px;
  }
`;

export const Timings = styled.div`
  ${tw`
    flex
    p-2
  `}
`;