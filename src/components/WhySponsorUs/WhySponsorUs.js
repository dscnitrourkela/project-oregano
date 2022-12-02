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

import { SectionLayout } from '../shared';
import { whySponsor } from '../../../config';

export default function SponsorUs() {
  return (
    <SectionLayout>
      <Wrapper>
        <Heading>{whySponsor.Title.TitleText}</Heading>
        <Tagline>{whySponsor.Caption.CaptionText}</Tagline>
        <SponsorGrid>
          <ContentContainer>
            <TitleTextlg semibold>{whySponsor.Title.TitleText}</TitleTextlg>
            <ContentTextlg>{whySponsor.Caption.CaptionText}</ContentTextlg>
            <DescText>{whySponsor.Description.Desc}</DescText>
            <Buttons>
              <SponsorBtn>{whySponsor.Buttons.SponsorButton}</SponsorBtn>
              <BrochureBtn>{whySponsor.Buttons.ViewBrochureButton}</BrochureBtn>
            </Buttons>
          </ContentContainer>
          <VidBlock>
            <img className='rounded-large' src={whySponsor.img.src} alt={whySponsor.img.alt} />
          </VidBlock>
        </SponsorGrid>
      </Wrapper>
    </SectionLayout>
  );
}
