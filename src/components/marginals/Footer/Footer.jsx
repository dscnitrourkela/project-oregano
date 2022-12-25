/* eslint-disable max-len */
import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitterSquare,
  faInstagram,
  faLinkedin,
  faGithubSquare,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

// Components
import {
  Grid,
  FooterContainer,
  SecondaryContainer,
  Logo,
  IconContainer,
  LogoContainer,
  CardImage,
  EmptyDiv,
  NoStyleNav,
  LinksContainer,
} from './styles';
import FooterCard from './FooterCard';
import { Container, Body2 } from '../../shared';

// Assets
import { footer } from '../../../../config';

library.add(faInstagram, faTwitterSquare, faDiscord, faLinkedin, faGithubSquare);

const LINKS = footer.impLinks;

const NewBody2 = styled(Body2)`
  ${tw`
    text-right
    text-color-tertiary
    leading-5
    sm:leading-6
  `}

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const LinkBody2 = styled(Body2)`
  color: inherit;
`;

const LogoImgLink = styled.a`
  margin-top: 10px;
`;

function Footer() {
  return (
    <FooterContainer id='contact'>
      <Container>
        <SecondaryContainer>
          <Logo src={footer.hacknitr.img} alt={footer.hacknitr.alt} />

          <div style={{ width: '100%' }}>
            <IconContainer>
              {footer.socials.map(({ icon, link }) => (
                <a key={link} href={link} target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon
                    style={{ marginLeft: 20 }}
                    icon={icon}
                    color=' rgba(255, 255, 255, 0.4)'
                    size='2x'
                  />
                </a>
              ))}
            </IconContainer>
            <NewBody2>{footer.icons.content1}</NewBody2>
            <NewBody2>{footer.icons.content2}</NewBody2>
          </div>
        </SecondaryContainer>

        <Grid>
          {footer.cards.map(({ title, text, id, img }) => (
            <FooterCard key={id} img={img.src} Title={title} Text={text} />
          ))}
          <EmptyDiv>
            {LINKS.map(({ text, href }) => (
              <NoStyleNav key={href} href={href} target='_blank' rel='noreferrer'>
                <Body2>{text}</Body2>
              </NoStyleNav>
            ))}
          </EmptyDiv>
        </Grid>

        <LinksContainer>
          {LINKS.map(({ text, href }) => (
            <NoStyleNav key={href} href={href} target='_blank' rel='noreferrer'>
              <LinkBody2>{text}</LinkBody2>
            </NoStyleNav>
          ))}
        </LinksContainer>

        <SecondaryContainer style={{ marginTop: '2rem', alignItems: 'center' }}>
          <Body2 className='text-color-tertiary'>
            {footer.copyright.content.split('\n').map((data) => (
              <span key={data} style={{ marginRight: '5px' }}>
                {data}
              </span>
            ))}
          </Body2>

          <LogoContainer>
            {footer.organisers.map(({ id, link, image, column }) => (
              <LogoImgLink
                style={{ marginLeft: '5px', marginRight: '5px', gridColumn: column }}
                key={id}
                href={link}
                target='_blank'
                rel='noreferrer noopener'
              >
                <CardImage src={image.src} alt={image.alt} />
              </LogoImgLink>
            ))}
          </LogoContainer>
        </SecondaryContainer>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
