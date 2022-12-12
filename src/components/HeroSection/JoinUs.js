import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { Popup } from 'react-typeform-embed';
// import { Body, ButtonLight, SectionLayout, Container, Heading2 } from '..';
import { Body2, ButtonMeta, ButtonMetaLarge, Heading3, Heading4 } from '../shared';
import { Button } from '../shared';
import { SectionLayout } from '../shared';
import { Container } from '../shared/SectionContainer';
import { Heading2 } from '../shared';
// import { ButtonMeta } from '../shared/Typography/ButtonMeta'
// Assets
import { join } from '../../../config';
import { website } from '../../../config'

const GridContainer = styled.div`
  ${tw`
    w-full
    overflow-x-hidden
    overflow-y-hidden
    grid
    //xl:grid-cols-2
    lg:grid-cols-3
    sm:grid-cols-1
    
    gap-6
    md:p-36
    p-1
    `}
`;

const JoinUsDiv = styled.div`
  ${tw`
    lg:col-span-2
    sm:col-span-1
    grid
    lg:grid-cols-5
    sm:grid-cols-1
    sm:grid-rows-3
    md:grid-rows-1
    //xl:grid-cols-1
    w-full
    h-full
    bg-background-dark
    overflow-x-hidden
    overflow-y-hidden
    rounded-lg
    `}
`;

const JoinUsImg = styled.img`
  ${tw`
    lg:col-span-3
    sm:col-span-1
    sm:row-span-1
    w-full
    h-auto
    rounded-lg
    md:p-8
    p-2
    `}
`;

const JoinUsText = styled.div`
  ${tw`
    lg:col-span-2
    sm:col-span-1
    sm:row-span-2
    md:p-5
    p-2
    `}
`;

const SponsorDiv = styled.div`
  ${tw`
    col-span-1
    //xl:col-span-2
    bg-background-dark
    rounded-lg
    w-full
    md:p-5
    p-2
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

const ButtonContainer = styled.div`
${tw`
  flex 
  pt-7 
  pb-2 
  justify-center
`}`;

function JoinUs() {
  return (
    <SectionLayout id='joinUs'>
      <Container>
        <GridContainer>
          <JoinUsDiv>
            <JoinUsImg src={join.JoinUs.img.src} alt={join.JoinUs.img.alt} />
            <JoinUsText>
              <Heading2 style={{ marginTop: 15, textAlign: 'center' }}>{join.JoinUs.heading}</Heading2>
              <Body2 style={{ marginTop: 10, textAlign: 'center', color: '#A3A3A3' }}>{join.JoinUs.head}</Body2>
              <Body2 style={{ marginTop: 10, textAlign: 'center', color: '#A3A3A3' }}>{join.JoinUs.description}</Body2>
              <ButtonContainer>
                <Popup id='di6YLmdD' hideHeaders hideFooter autoOpen={false} autoClose={100000000}>
                  <Button small filled text='JOIN US'></Button>
                </Popup> 
              </ButtonContainer>              
                                      
            </JoinUsText>
          </JoinUsDiv>

          <SponsorDiv>
            <Heading2 style={{ marginTop: 15, textAlign: 'center' }}>
              {join.SponsorUs.heading}
            </Heading2>
            <Body2 style={{ marginTop: 10, textAlign: 'center', color: '#A3A3A3' }}>{join.SponsorUs.description}</Body2>

            <SponsorImg src={join.SponsorUs.img.src} alt={join.SponsorUs.img.alt} />
            
            <a href={website.communityPartners} target='_blank' rel='noopener noreferrer'>
              <Button small arrowed text='Become a Community Partner'>
              
                {/* Become a <span style={{ display: 'grid' }}>Community Partner</span> */}
              
              </Button>
              </a>
            
          </SponsorDiv>
        </GridContainer>
      </Container>
    </SectionLayout>
  );
}

export default JoinUs;