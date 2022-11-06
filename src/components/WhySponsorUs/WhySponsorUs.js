import React from 'react';

import {
  SponsorGrid,
  ContentContainer,
  Buttons,
  GridBox,
  VidBlock,
  DescText,
  TitleTextlg,
  SponsorBtn,
  BrochureBtn,
  TitleTextSm,
  ContentTextSm,
  ContentTextlg,
} from './styles';

import Sponsor from '../../../config/content/WhySponsor';

import { Heading3, ButtonMeta, Body2 } from '../shared';

export default function SponsorUs() {
  return (
    <SponsorGrid>
      <TitleTextSm>
        <Heading3>{Sponsor.Title.TitleText}</Heading3>
      </TitleTextSm>
      <ContentTextSm>
        <ButtonMeta>{Sponsor.Caption.CaptionText}</ButtonMeta>
      </ContentTextSm>
      <GridBox>
        <ContentContainer>
          <TitleTextlg>
            <Heading3>{Sponsor.Title.TitleText}</Heading3>
          </TitleTextlg>
          <ContentTextlg>
            <ButtonMeta>{Sponsor.Caption.CaptionText}</ButtonMeta>
          </ContentTextlg>
          <DescText>
            <Body2>{Sponsor.Description.Desc}</Body2>
          </DescText>
          <Buttons>
            <SponsorBtn>{Sponsor.Buttons.SponsorButton}</SponsorBtn>
            <BrochureBtn>{Sponsor.Buttons.ViewBrochureButton}</BrochureBtn>
          </Buttons>
        </ContentContainer>
      </GridBox>
      <VidBlock>
        <img className='lg:rounded-3xl rounded-t-3xl' src={Sponsor.img.src} alt={Sponsor.img.alt} />
      </VidBlock>
    </SponsorGrid>
  );
}
