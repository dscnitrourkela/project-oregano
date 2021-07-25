import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { Heading1, Body, HighlightBody, Button } from '../shared';

const ContentContainer = styled.div`
  ${tw`
  col-span-5
  sm:col-span-12
  sm:mt-6
  `}
`;

const TimeLine = styled(Body)`
  ${tw`
  mb-2
  text-xl
  sm:text-base`}
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

const RegisterBtn = styled(Button)`
  ${tw`
    sm:m-0
    sm:mr-4
  `}
`;

const DiscordBtn = styled(Button)`
  ${tw`
  bg-background-dark
  text-color-primary
  border-color-primary
  border-2
  sm:m-0
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
      <TimeLine>20th to 31st October 2021</TimeLine>
      <TagLine> Hack to make this world a better place.</TagLine>
      <Description>
        Molestie diam eget enim, ac dui lectus cursus. Condimentum ac ut vitae praesent. Morbi eget
        mauris arcu ultrices. Arcu, feugiat egestas sit fames tortor, rhoncus ut. Gravida et blandit
        vulputate sapien. In quis vitae vestibulum at sit mauris tortor nulla molestie.
      </Description>
      <InlineWrapper>
        <RegisterBtn>Register Now!</RegisterBtn>
        <DiscordBtn>Join Discord</DiscordBtn>
      </InlineWrapper>
      <SponsorInvite>
        <Body>Want to join the HackNITR family? </Body>
        <HighlightBody>Sponsor Us</HighlightBody>
      </SponsorInvite>
    </ContentContainer>
  );
}

export default HeroContent;
