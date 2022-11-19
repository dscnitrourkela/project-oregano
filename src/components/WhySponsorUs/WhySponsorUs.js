import React from 'react';

import {
  SponsorGrid,
  ContentContainer,
  Buttons,
  VidBlock,
  DescText,
  TitleTextlg,
  SponsorBtn,
  BrochureBtn,
  Heading,
  ContentTextlg,
  Tagline,
  Wrapper,
} from './styles';

import Sponsor from '../../../config/content/WhySponsor';

import { SectionLayout } from '../shared';

export default function SponsorUs() {
  return (
    <SectionLayout>
      <Wrapper>
        <Heading>{Sponsor.Title.TitleText}</Heading>
        <Tagline>{Sponsor.Caption.CaptionText}</Tagline>
        <SponsorGrid>
          <ContentContainer>
            <TitleTextlg semibold>{Sponsor.Title.TitleText}</TitleTextlg>
            <ContentTextlg>{Sponsor.Caption.CaptionText}</ContentTextlg>
            <DescText>{Sponsor.Description.Desc}</DescText>
            <Buttons>
              <SponsorBtn>{Sponsor.Buttons.SponsorButton}</SponsorBtn>
              <BrochureBtn>{Sponsor.Buttons.ViewBrochureButton}</BrochureBtn>
            </Buttons>
          </ContentContainer>
          <VidBlock>
            <img className='rounded-large' src={Sponsor.img.src} alt={Sponsor.img.alt} />
          </VidBlock>
        </SponsorGrid>
      </Wrapper>
    </SectionLayout>
  );
}
