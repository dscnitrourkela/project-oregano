import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

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
  /* flex-direction: column; */
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 20px;
  ${tw`
  1xsm:flex-col
`}
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 9px 14px;
  border-radius: 4px;
  margin-top: 14px;
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
        {/* <Link to='/live' style={{ textDecoration: 'none', color: '#27333F' }}>
          <ButtonWrapper>
            <Heading4 style={{ color: '#27333F', fontWeight: 'bold' }}>Watch Live</Heading4>
          </ButtonWrapper>
        </Link> */}
        <DiscordMobile />
      </Wrapper>
    </ContentContainer>
  );
}

export default HeroContent;
