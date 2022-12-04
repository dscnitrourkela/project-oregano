import React from 'react';

import {
  SponsorGrid,
  ContentContainer,
  Buttons,
  VidBlock,
  DescText,
  ContentTextlg,
  Wrapper,
  HeadContainer,
  HeadContainerMob,
} from './styles';

import { Button, Caption, Heading2, SectionLayout } from '../shared';
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
              <Button filled text={whySponsor.Buttons.SponsorButton} />
              <Button small arrowed text={whySponsor.Buttons.ViewBrochureButton} />
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
