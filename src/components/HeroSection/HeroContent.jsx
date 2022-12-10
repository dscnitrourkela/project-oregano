import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { Heading1, Body, HighlightBody, Heading4 } from '../shared';
import DevfolioButton from '../shared/DevfolioButton';
import DiscordButton from '../shared/DiscordButton';
import DiscordMobile from '../shared/DiscordMobile';
// Assets
import { hero } from '../../../config/content';

const ContentContainer = styled.div`
  ${tw`
  col-span-5
  md:col-span-12
  md:mt-6
  ${'' /* ml-3 */}
  `}
`;

const TimeLine = styled(Body)`
  border-radius: 25px;
  width: fit-content;
  margin-bottom: 24px;

  gap: 10px;
  flex-direction: column;
`;

const TimeComp = styled(Body)`
  gap: 10px;
  align-items: center;
`;

const TagLine = styled(Heading1)`
  ${tw`
  leading-tight
    w-5/6
    md:w-full
  `}
`;

const Description = styled(Body)`
  ${tw`
  mr-14
  md:mr-0
  sm:mr-0
  sm:text-justify
  `}
`;
const Slogan = styled(HighlightBody)`
  ${tw`
  mr-14
  md:mr-0
  sm:mr-0
  sm:text-justify
  `}
`;

// const TimeImg = styled.img`
//   ${tw`
//   max-w-xs
//   `}
// `;

const Wrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 20px;
  @media (min-width: 640px) {
    margin-top: 36px;
  }
  ${tw`
    1xsm:flex-col
  `}
`;

// const ButtonWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #fff;
//   padding: 9px 14px;
//   border-radius: 4px;
//   margin-top: 14px;
// `;

// const PreRegisterButton = styled.a`
//   font-family: 'Nunito Sans', sans-serif;
//   height: 44px;
//   /* min-width: 280px; */
//   text-decoration: none;
//   ${tw`
//     flex
//     justify-center
//     items-center
//     w-40
//     mt-6
//     mr-4
//     border-0
//     cursor-pointer
//     sm:m-0
//     rounded
//     sm:text-lg
//     md:text-xl
//     font-semibold
//     bg-white
//     text-black
// `}
//   :hover {
//     background-color: #f8f0e3;
//   }
// `;

// const SponsorButton = styled(PreRegisterButton)`
//   ${tw`
//     bg-transparent
//     text-[#c4c4c4]
//   `}
//   border: 2px solid #c4c4c4;
//   :hover {
//     ${tw`
//       bg-transparent
//       text-white
//       border-white
//     `}
//   }
// `;

function HeroContent() {
  return (
    <ContentContainer>
      <TagLine>{hero.title}</TagLine>
      <Slogan style={{ marginBottom: '24px' }}>{hero.tagline}</Slogan>
      <TimeLine>
        <TimeComp>
          <Heading4>Round 1: 6th - 8th Jan 2023</Heading4>
          <Heading4>Round 2: 28th - 29th Jan 2023</Heading4>
        </TimeComp>
      </TimeLine>
      {hero.content.split(' \n ').map((data) => (
        <Description key={data}>{data}</Description>
      ))}
      <Wrapper>
        <DevfolioButton />
        <DiscordButton />
        <DiscordMobile />
      </Wrapper>
    </ContentContainer>
  );
}

export default HeroContent;
