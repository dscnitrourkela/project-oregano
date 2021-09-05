import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import {
  Heading1,
  Body,
  // eslint-disable-next-line no-unused-vars
  ButtonDark,
  HighlightBody,
} from '../shared';
import DevfolioButton from '../shared/DevfolioButton';

// Assets
import { hero } from '../../../config/content';
// import config from '../../../config/website';

const ContentContainer = styled.div`
  ${tw`
  col-span-5
  md:col-span-12
  md:mt-6
  ml-3
  `}
`;

const TimeLine = styled(Body)`
  /* color: black; */
  /* font-size: 1rem; */
  /* background-color: #ffffff; */
  /* padding: 10px 15px; */
  border-radius: 25px;
  width: fit-content;
  margin-bottom: 24px;
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
const TimeImg = styled.img`
  ${tw`
  max-w-xs
  `}
`;

// const SponsorInvite = styled.div`
//   ${tw`my-6
//   gap-1
//   inline-flex
//   lg:block
//   md:inline-flex
//   `}
// `;

// const InlineWrapper = styled.div`
//   ${tw`flex mr-10 sm:mr-0 sm:justify-between sm:items-center sm:mt-4`}
// `;

// const HighlightLink = styled.a`
//   ${tw`
//   font-normal
//   text-base
//   2xl:text-base
//   lg:text-base
//   md:text-base
//   sm:text-sm
//   text-color-primary
//   font-roboto
//   no-underline
//   ml-2
//   `}
// `;

// const NonStyledLink = styled.a`
//   ${tw`
//     no-underline
//   `}
// `;

function HeroContent() {
  return (
    <ContentContainer>
      <TagLine>{hero.title}</TagLine>
      <Slogan style={{ marginBottom: '20px' }}>{hero.tagline}</Slogan>
      <TimeLine>
        <TimeImg src={hero.dates.src} alt={hero.dates.alt} />
      </TimeLine>
      {hero.content.split(' \n ').map((data) => (
        <Description key={data}>{data}</Description>
      ))}
      <DevfolioButton />
      {/* <InlineWrapper>
        <NonStyledLink href={config.discord} target='_blank' rel='noreferrer'>
          <ButtonDark>Join Discord</ButtonDark>
        </NonStyledLink>
      </InlineWrapper> */}
      {/* <SponsorInvite>
        <Body>Want to join the HackNITR family? </Body>
        <HighlightLink href={config.join} target='_blank' rel='noreferrer'>
          Join Us
        </HighlightLink>
      </SponsorInvite> */}
    </ContentContainer>
  );
}

export default HeroContent;
