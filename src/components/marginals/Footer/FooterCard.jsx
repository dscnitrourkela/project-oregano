import React from 'react';
import {
  FooterCardContainer,
  FooterCardImg,
  FooterCardText,
  FooterCardTextSmall,
} from './Footer.styles';
import Heading4 from '../../shared/Typography/Heading4';

function FooterCard({ img, Title, Text }) {
  return (
    <FooterCardContainer>
      <FooterCardImg>
        <img src={img} alt='' />
      </FooterCardImg>
      <FooterCardText>
        <Heading4>{Title}</Heading4>
        <FooterCardTextSmall>{Text}</FooterCardTextSmall>
      </FooterCardText>
    </FooterCardContainer>
  );
}

export default FooterCard;
