import React from 'react';
import {
  CardContainer,
  FooterCardImg,
  FooterCards,
  FooterCardText,
  FooterCardTextSmall,
} from './styles';
import Heading4 from '../../shared/Typography/Heading4';

function FooterCard({ img, Title, Text }) {
  return (
    <FooterCards>
      <CardContainer>
        <FooterCardImg>
          <img style={{ height: '80px', width: 'auto' }} src={img} alt='' />
        </FooterCardImg>
        <FooterCardText>
          <Heading4>{Title}</Heading4>
          <FooterCardTextSmall>{Text}</FooterCardTextSmall>
        </FooterCardText>
      </CardContainer>
    </FooterCards>
  );
}

export default FooterCard;
