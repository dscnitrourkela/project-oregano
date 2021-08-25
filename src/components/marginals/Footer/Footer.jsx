/* eslint-disable max-len */
import React from 'react';

// Libraries
import styled from 'styled-components';
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
  EmptyDiv,
  FooterContainer,
  SecondaryContainer,
  Logo,
  IconContainer,
  LogoContainer,
  CardImage,
  NoStyleNav,
  LinksContainer,
} from './styles';
import FooterCard from './FooterCard';
import { Container, Body } from '../../shared';

// Assets
import { footer } from '../../../../config/content';

library.add(faInstagram, faTwitterSquare, faDiscord, faLinkedin, faGithubSquare);

const LINKS = [
  {
    text: 'MLH Code of Conduct',
    href: 'https://static.mlh.io/docs/mlh-code-of-conduct.pdf',
  },
  {
    text: 'Terms and Conditions',
    href: 'https://static.mlh.io/docs/mlh-code-of-conduct.pdf',
  },
  {
    text: 'Privacy Policy',
    href: 'https://static.mlh.io/docs/mlh-code-of-conduct.pdf',
  },
  {
    text: 'Sponsor Us',
    href: 'https://static.mlh.io/docs/mlh-code-of-conduct.pdf',
  },
  {
    text: 'Join Us',
    href: 'https://static.mlh.io/docs/mlh-code-of-conduct.pdf',
  },
];

const NewBody = styled(Body)`
  text-align: right;

  @media (max-width: 600px) {
    text-align: center;
  }
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
            <NewBody>{footer.icons.content1}</NewBody>
            <NewBody>{footer.icons.content2}</NewBody>
          </div>
        </SecondaryContainer>

        <Grid>
          {footer.cards.map(({ title, text, id, img }) => (
            <FooterCard key={id} img={img.src} Title={title} Text={text} />
          ))}
          <EmptyDiv>
            {LINKS.map(({ text, href }) => (
              <NoStyleNav key={href} href={href} target='_blank' rel='noreferrer'>
                <Body style={{ color: '#ffffffbc' }}>{text}</Body>
              </NoStyleNav>
            ))}
          </EmptyDiv>
        </Grid>

        <LinksContainer>
          {LINKS.map(({ text, href }) => (
            <NoStyleNav key={href} href={href} target='_blank' rel='noreferrer'>
              <Body style={{ color: '#ffffffbc' }}>{text}</Body>
            </NoStyleNav>
          ))}
        </LinksContainer>

        <SecondaryContainer style={{ marginTop: '2rem', alignItems: 'center' }}>
          <Body>
            {footer.copyright.content.split('\n').map((data) => (
              <span key={data} style={{ marginRight: '5px' }}>
                {data}
              </span>
            ))}
          </Body>

          <LogoContainer>
            {footer.organisers.map(({ id, link, image }) => (
              <LogoImgLink
                style={{ marginLeft: '5px', marginRight: '5px' }}
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
