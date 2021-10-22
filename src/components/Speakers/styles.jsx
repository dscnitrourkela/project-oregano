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

      m-0
      relative
  `};
  width: 305px;
  height: 435px;

  @media (max-width: 560px) {
    width: 330px;
    height: 450px;
  }
`;

export const Name = styled(Heading4)`
  ${tw`
    uppercase
    text-6xl
    text-left
    font-sixcaps
    z-20
    p-1
    px-2
    pt-64
  `}

  @media (max-width: 560px) {
    font-size: 55px;
  }
`;

export const Designation = styled(Heading4)`
  ${tw`
    z-20
    pb-1
    text-base
  `}
  border-bottom: 4px solid white;
  width: 285px;
  margin-left: 8px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: normal;

  @media (max-width: 560px) {
    width: 310px;
    font-size: 18px;
    line-height: 1.2;
  }
`;

export const Topic = styled.div`
  ${tw`
    text-left
    p-1
    px-2
    text-xl
    font-normal
    font-roboto
    flex-col
    z-20
  `}
  line-height: 1.3;
  overflow-wrap: break-word;
  word-wrap: break-word;
  width: 290px;
  color: white;
  white-space: normal;

  @media (max-width: 560px) {
    width: 340px;
    font-size: 24px;
    line-height: 1.2;
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
    text-lg
    text-left
    font-roboto
    pt-2
    px-2
  `}
  @media (max-width: 560px) {
    font-size: 18px;
    margin-right: 35px;
  }
`;

export const Date = styled(Heading4)`
  ${tw`
    text-lg
    text-right
    font-roboto
    p-1
    px-3
    pt-2
  `}
  @media (max-width: 560px) {
    font-size: 18px;
  }
`;

export const Timings = styled.div`
  ${tw`
    flex
    pb-2
  `}
`;
