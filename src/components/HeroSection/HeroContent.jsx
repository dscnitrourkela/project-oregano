import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { Heading1, Body, ButtonDark, ButtonLight } from '../shared';

// Assets
import { hero } from '../../../config/content';

const ContentContainer = styled.div`
  ${tw`
  col-span-5
  md:col-span-12
  md:mt-6
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
  ${tw`
  leading-tight
    w-5/6
    md:w-full
  `}
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

const HighlightLink = styled.a`
  ${tw`
  font-normal
  text-base
  2xl:text-base
  lg:text-base
  md:text-base
  sm:text-sm
  text-color-primary
  font-roboto
  no-underline
  ml-2
  `}
`;

function HeroContent() {
  return (
    <ContentContainer>
      <TimeLine>{hero.dates}</TimeLine>
      <TagLine>{hero.title}</TagLine>
      {/* <TagLine>{hero.subtitle}</TagLine> */}
      <Description>{hero.content}</Description>
      <InlineWrapper>
        <RegisterBtn>Register Now!</RegisterBtn>
        <ButtonDark>Join Discord</ButtonDark>
      </InlineWrapper>
      <SponsorInvite>
        <Body>Want to join the HackNITR family? </Body>
        <HighlightLink href='/' target='_blank' rel='noreferrer'>
          Sponsor Us
        </HighlightLink>
      </SponsorInvite>
    </ContentContainer>
  );
}

export default HeroContent;
