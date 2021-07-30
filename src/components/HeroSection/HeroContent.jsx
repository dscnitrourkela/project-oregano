import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { Heading1, Body, HighlightBody, ButtonDark, ButtonLight } from '../shared';

// Assets
import { hero } from '../../../config/content';

const ContentContainer = styled.div`
  ${tw`
  col-span-5
  sm:col-span-12
  sm:mt-6
  `}
`;

const TimeLine = styled(Body)`
  color: #fff;
  background-color: #e78967;
  border-radius: 25px;
  padding: 10px 15px;
  width: fit-content;
  margin-bottom: 24px;
`;

const TagLine = styled(Heading1)`
  ${tw`leading-tight`}
`;

const Description = styled(Body)`
  ${tw`my-7
  mr-14
  md:mr-0
  sm:mr-0
  sm:text-justify
  `}
`;

const RegisterBtn = styled(ButtonLight)`
  ${tw`
    sm:m-0
    sm:mr-4
sm:bg-white
  `}
`;

const SponsorInvite = styled.div`
  ${tw`my-6
  gap-1
  inline-flex
  lg:block
  md:inline-flex
  `}
`;

const InlineWrapper = styled.div`
  ${tw`flex mr-10 sm:mr-0 sm:justify-center sm:items-center`}
`;

function HeroContent() {
  return (
    <ContentContainer>
      <TimeLine>{hero.dates}</TimeLine>
      <TagLine>{hero.title}</TagLine>
      <TagLine>{hero.subtitle}</TagLine>
      <Description>{hero.content}</Description>
      <InlineWrapper>
        <RegisterBtn>Register Now!</RegisterBtn>
        <ButtonDark>Join Discord</ButtonDark>
      </InlineWrapper>
      <SponsorInvite>
        <Body>Want to join the HackNITR family? </Body>
        <HighlightBody>Sponsor Us</HighlightBody>
      </SponsorInvite>
    </ContentContainer>
  );
}

export default HeroContent;
