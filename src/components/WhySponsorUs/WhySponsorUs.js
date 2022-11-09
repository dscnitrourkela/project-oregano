import React from 'react';
import styled from 'styled-components';
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

const Caption = styled(ButtonMeta)`
  text-[#A3A3A3];
`;

export default function SponsorUs() {
  return (
    <SponsorGrid>
      <TitleTextSm>
        <Heading3>{Sponsor.Title.TitleText}</Heading3>
      </TitleTextSm>
      <ContentTextSm>
        <Caption>{Sponsor.Caption.CaptionText}</Caption>
      </ContentTextSm>
      <GridBox>
        <ContentContainer>
          <TitleTextlg>
            <Heading3>{Sponsor.Title.TitleText}</Heading3>
          </TitleTextlg>
          <ContentTextlg>
            <Caption>{Sponsor.Caption.CaptionText}</Caption>
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
