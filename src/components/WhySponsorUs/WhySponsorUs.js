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

import Title from '../shared/Typography/Heading2';
import Caption from '../shared/Typography/Caption';
import Body from '../shared/Typography/Body2';

export default function Grid() {
  return (
    <SponsorGrid>
      <TitleTextSm>
        <Title>{Sponsor.Title.TitleText}</Title>
      </TitleTextSm>
      <ContentTextSm>
        <Caption>{Sponsor.Caption.CaptionText}</Caption>
      </ContentTextSm>
      <GridBox>
        <ContentContainer>
          <TitleTextlg>
            <Title>{Sponsor.Title.TitleText}</Title>
          </TitleTextlg>
          <ContentTextlg>
            <Caption>{Sponsor.Caption.CaptionText}</Caption>
          </ContentTextlg>
          <DescText>
            <Body>{Sponsor.Description.Desc}</Body>
          </DescText>
          <Buttons>
            <SponsorBtn>{Sponsor.Buttons.SponsorButton}</SponsorBtn>
            <BrochureBtn>{Sponsor.Buttons.ViewBrochureButton}</BrochureBtn>
          </Buttons>
        </ContentContainer>
      </GridBox>
      <VidBlock>
        <img className='rounded-3xl' src={Sponsor.img.src} alt={Sponsor.img.alt} />
      </VidBlock>
    </SponsorGrid>
  );
}
