import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { Heading1, Body, HighlightBody } from '../shared';
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 542px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

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
      <Wrapper>
        <DevfolioButton />
        <DiscordButton />
        <DiscordMobile />
      </Wrapper>
    </ContentContainer>
  );
}

export default HeroContent;
