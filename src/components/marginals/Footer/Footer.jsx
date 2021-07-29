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
} from './styles';

// import Heading4 from '../../shared/Typography/Heading4';
import FooterCard from './FooterCard';
import { OrganiserData, SocialLogos } from './Data';
import { Container, Body } from '../../shared';

library.add(faInstagram, faTwitterSquare, faDiscord, faLinkedin, faGithubSquare);

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
    <FooterContainer>
      <Container>
        <SecondaryContainer>
          <Logo
            src='https://res.cloudinary.com/dalqfvowk/image/upload/project-oregano/assets/hkmogkgvx6kpf07xbln8.png'
            alt='HackNITR Logo'
          />

          <div style={{ width: '100%' }}>
            <IconContainer>
              {SocialLogos.map(({ icon, link }) => (
                <a key={icon} href={link} target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon
                    style={{ marginLeft: 20 }}
                    icon={icon}
                    color=' rgba(255, 255, 255, 0.4)'
                    size='2x'
                  />
                </a>
              ))}
            </IconContainer>
            <NewBody>Sit mi, porttitor sapien, morbi id. Arcu,</NewBody>
            <NewBody> nibh In nec pulvinar praesen</NewBody>
          </div>
        </SecondaryContainer>

        <Grid>
          <FooterCard
            img='https://res.cloudinary.com/dalqfvowk/image/upload/project-oregano/assets/j1hylhwi5lv6kyaksvbj.png'
            Title='About NIT Rourkela'
            Text='Sit mi, porttitor sapien, morbi id. Arcu, nibh facilisis
           ac nec. In nec pulvinar praesent neque eget velit nunc sit potenti. Diam dignissim.'
          />
          <FooterCard
            img='https://res.cloudinary.com/dalqfvowk/image/upload/project-oregano/assets/qevwkbokfctprtujrfhs.png'
            Title='About Diamond Jubilee'
            Text='Sit mi, porttitor sapien, morbi id. Arcu, nibh facilisis ac nec. In nec pulvinar praesent neque eget velit nunc sit potenti. Diam dignissim.'
          />
          <EmptyDiv />
        </Grid>

        <SecondaryContainer style={{ marginTop: '2rem' }}>
          <Body>Lorem ipsum dolor sit amet consectetur adipisicing.</Body>

          <LogoContainer>
            {OrganiserData.map(({ id, link, image, span }) => (
              <LogoImgLink span={span} key={id} to={link} target='_blank'>
                <img src={image} alt='' />
              </LogoImgLink>
            ))}
          </LogoContainer>
        </SecondaryContainer>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
