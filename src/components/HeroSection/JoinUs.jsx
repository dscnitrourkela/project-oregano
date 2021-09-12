import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Body, ButtonLight, SectionLayout, Container, Heading2 } from '..';
import { join } from '../../../config/content';
import config from '../../../config/website';

const Wrapper = styled.div`
  ${tw`
    items-center
    justify-center
    w-full
    overflow-x-hidden
    overflow-y-hidden
    grid
    xl:grid-cols-2
    grid-cols-3
    gap-6
    `}
`;
const Description = styled(Body)`
  ${tw`
    pt-5
    pb-5
    `}
`;
const JoinUsDiv = styled.div`
  ${tw`
    col-span-2
    grid
    grid-cols-5
    bg-secondary
    rounded-lg
    w-full
    h-full
    lg:grid-cols-1
    overflow-x-hidden
    overflow-y-hidden
    `}
`;
const JoinUsImg = styled.img`
  ${tw`
    col-span-3
    w-auto
    max-w-full
    overflow-x-hidden
    overflow-y-hidden
    h-full
    `}
`;
const JoinUsText = styled.div`
  ${tw`
    col-span-2
    grid
    p-5
    h-full
    justify-center
    items-center
    justify-items-center
    `}
  grid-template-rows: repeat(10, minmax(0, 1fr));
`;
const Head = styled(Body)`
  ${tw`
    row-span-1
    lg:justify-self-center
    justify-self-start
    `}
`;
const JoinHeading = styled(Heading2)`
  ${tw`
    row-span-3
    lg:text-center
    `}
`;
const SponsorHeading = styled(Heading2)`
  ${tw`
    row-span-2
    lg:text-center
    `}
`;
const SponsorDiv = styled.div`
  ${tw`
    xl:hidden
    col-span-1
    bg-secondary
    rounded-lg
    w-full
    h-full
    p-5
    grid
    justify-center
    items-center
    justify-items-center
    `}
  grid-template-rows: repeat(10, minmax(0, 1fr));
`;

const JoinDescription = styled(Description)`
  ${tw`
    row-span-4
    justify-center
    lg:text-center
    `}
`;
const SponsorDescription = styled(Description)`
  ${tw`
    row-span-3
    lg:text-center
    `}
`;
const ButtonContainer = styled(ButtonLight)`
  ${tw`
    row-span-2
    `}
`;
const SponsorImg = styled.img`
  ${tw`
    h-28
    justify-items-center
    row-span-3
    `}
`;

const JoinUsHandler = () => {
  window.open(config.join, '_blank', 'noreferrer');
};

const SponsorUsHandler = () => {
  window.open(config.sponsor, '_blank', 'noreferrer');
};

function JoinUs() {
  return (
    <SectionLayout id='joinUs'>
      <Container>
        <Wrapper>
          <JoinUsDiv>
            <JoinUsImg src={join.JoinUs.img.src} alt={join.JoinUs.img.alt} />
            <JoinUsText>
              <Head>{join.JoinUs.head}</Head>
              <JoinHeading>{join.JoinUs.heading}</JoinHeading>
              <JoinDescription>{join.JoinUs.description}</JoinDescription>
              <ButtonContainer
                onClick={() => {
                  JoinUsHandler();
                }}
              >
                Join Us
              </ButtonContainer>
            </JoinUsText>
          </JoinUsDiv>
          <SponsorDiv>
            <SponsorHeading>{join.SponsorUs.heading}</SponsorHeading>
            <SponsorDescription>{join.SponsorUs.description}</SponsorDescription>
            <SponsorImg src={join.SponsorUs.img.src} alt={join.SponsorUs.img.alt} />
            <ButtonContainer
              onClick={() => {
                SponsorUsHandler();
              }}
            >
              Sponsor Us
            </ButtonContainer>
          </SponsorDiv>
        </Wrapper>
      </Container>
    </SectionLayout>
  );
}

export default JoinUs;
