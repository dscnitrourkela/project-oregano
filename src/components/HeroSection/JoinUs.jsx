import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { Popup } from 'react-typeform-embed';
import { Body, ButtonLight, SectionLayout, Container, Heading2 } from '..';

// Assets
import { join } from '../../../config/content';
import website from '../../../config/website';

const Wrapper = styled.div`
  ${tw`
    w-full
    overflow-x-hidden
    overflow-y-hidden
    grid
    xl:grid-cols-2
    grid-cols-3
    sm:grid-cols-1
    gap-6
    `}
`;

const JoinUsDiv = styled.div`
  ${tw`
    col-span-2
    grid
    grid-cols-5
    lg:grid-cols-1
    w-full
    bg-secondary
    overflow-x-hidden
    overflow-y-hidden
    `}
`;

const JoinUsImg = styled.img`
  ${tw`
    col-span-3
    w-full
    rounded-lg
    `}
`;

const JoinUsText = styled.div`
  ${tw`
    col-span-2
    p-5
    `}
`;

const SponsorDiv = styled.div`
  ${tw`
    col-span-1
    lg:col-span-2
    bg-secondary
    rounded-lg
    w-full
    p-5
    flex
    flex-col
    items-center
    `}
`;

const SponsorImg = styled.img`
  ${tw`
    w-1/2
    h-auto
    `}
`;

function JoinUs() {
  return (
    <SectionLayout id='joinUs'>
      <Container>
        <Wrapper>
          <JoinUsDiv>
            <JoinUsImg src={join.JoinUs.img.src} alt={join.JoinUs.img.alt} />
            <JoinUsText>
              <Body>{join.JoinUs.head}</Body>
              <Heading2 style={{ marginTop: 15 }}>{join.JoinUs.heading}</Heading2>
              <Body style={{ marginTop: 10 }}>{join.JoinUs.description}</Body>
              <Popup id='o2X7YSNf' hideHeaders hideFooter autoOpen={false} autoClose={100000000}>
                <ButtonLight style={{ marginTop: 15 }}>Join Us</ButtonLight>
              </Popup>
            </JoinUsText>
          </JoinUsDiv>
          <SponsorDiv>
            <SponsorImg src={join.SponsorUs.img.src} alt={join.SponsorUs.img.alt} />
            <a href={website.communityPartners} target='_blank' rel='noopener noreferrer'>
              <ButtonLight style={{ margin: 0 }}>
                Become a <span style={{ display: 'grid' }}>Community Partner</span>
              </ButtonLight>
            </a>
            <Heading2 style={{ marginTop: 15, textAlign: 'center' }}>
              {join.SponsorUs.heading}
            </Heading2>
            <Body style={{ marginTop: 10, textAlign: 'center' }}>{join.SponsorUs.description}</Body>
          </SponsorDiv>
        </Wrapper>
      </Container>
    </SectionLayout>
  );
}

export default JoinUs;
