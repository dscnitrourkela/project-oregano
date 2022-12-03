import React from 'react';

import {
  SponsorGrid,
  ContentContainer,
  Buttons,
  VidBlock,
  DescText,
  SponsorBtn,
  BrochureBtn,
  ContentTextlg,
  Wrapper,
  HeadContainer,
  HeadContainerMob,
} from './styles';

import { Caption, Heading2, SectionLayout } from '../shared';
import { whySponsor } from '../../../config';

export default function SponsorUs() {
  return (
    <SectionLayout>
      <Wrapper>
        <HeadContainerMob>
          <Heading2>{whySponsor.Title.TitleText}</Heading2>
          <Caption className='text-color-tertiary'>{whySponsor.Caption.CaptionText}</Caption>
        </HeadContainerMob>
        <SponsorGrid>
          <ContentContainer>
            <HeadContainer>
              <Heading2 semibold>{whySponsor.Title.TitleText}</Heading2>
              <ContentTextlg>{whySponsor.Caption.CaptionText}</ContentTextlg>
            </HeadContainer>
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
