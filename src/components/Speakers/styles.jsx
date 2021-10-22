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
  width: 250px;
  height: 350px;

  @media (max-width: 560px) {
    width: 330px;
    height: 450px;
  }
`;

export const Name = styled(Heading4)`
  ${tw`
    uppercase
    text-5xl
    text-left
    font-sixcaps
    z-20
    p-1
    px-2
    pt-48
  `}

  @media (max-width: 560px) {
    font-size: 55px;
    margin-top: 70px;
  }
`;

export const Designation = styled(Heading4)`
  ${tw`
    z-20
    pb-1
    text-sm
  `}
  border-bottom: 3px solid white;
  width: 235px;
  margin-left: 6px;
  line-height: 1;
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
    text-lg
    font-normal
    font-roboto
    flex-col
    z-20
  `}
  line-height: 1.2;
  overflow-wrap: break-word;
  word-wrap: break-word;
  width: 240px;
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
    text-base
    text-left
    font-roboto
    pt-2
    px-1
  `}
  @media (max-width: 560px) {
    font-size: 20px;
    margin-right: 20px;
    margin-left: 5px;
  }
`;

export const Date = styled(Heading4)`
  ${tw`
    text-base
    text-right
    font-roboto
    p-1
    px-2
    pt-2
  `}
  @media (max-width: 560px) {
    font-size: 20px;
  }
`;

export const Timings = styled.div`
  ${tw`
    flex
    pb-2
  `}
`;
