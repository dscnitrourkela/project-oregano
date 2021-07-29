/* eslint-disable max-len */
import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitterSquare,
  faInstagram,
  faLinkedin,
  faGithubSquare,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

import {
  Grid,
  SectionLogo,
  SectionLogoImg,
  SectionLogoText,
  SectionIcon,
  SectionIconText,
  SectionText,
  SectionOrganiser,
  SectionCard1,
  SectionIcons,
  FooterContainer,
} from './Footer.styles';

import Heading4 from '../../shared/Typography/Heading4';
import FooterCard from './FooterCard';
import Body from '../../shared/Typography/Body';
import { OrganiserData, SocialLogos } from './Data';
import { Container } from '../../shared';

library.add(faInstagram, faTwitterSquare, faDiscord, faLinkedin, faGithubSquare);

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Grid>
          <SectionLogo>
            <SectionLogoImg>
              <Link to='/'>
                <img
                  src='https://res.cloudinary.com/dalqfvowk/image/upload/project-oregano/assets/hkmogkgvx6kpf07xbln8.png'
                  alt=''
                />
              </Link>
            </SectionLogoImg>
            <SectionLogoText>
              <Heading4>HackNITR 3.0</Heading4>
            </SectionLogoText>
          </SectionLogo>
          <SectionIcon>
            <SectionIcons>
              {SocialLogos.map(({ icon, link }) => (
                <Link key={icon} href={link} target='_blank'>
                  <FontAwesomeIcon icon={icon} color=' rgba(255, 255, 255, 0.4)' size='2x' />
                </Link>
              ))}
            </SectionIcons>
            <SectionIconText>
              <Body>logo Lorem ipsum dolor sit amet consectetur adipisicing.</Body>
            </SectionIconText>
          </SectionIcon>
          <SectionCard1>
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
          </SectionCard1>
          <SectionText>
            <Body>Lorem ipsum dolor sit amet consectetur adipisicing.</Body>
          </SectionText>
          <SectionOrganiser>
            {OrganiserData.map(({ id, link, image }) => (
              <Link key={id} to={link} target='_blank'>
                <img src={image} alt='' />
              </Link>
            ))}
          </SectionOrganiser>
        </Grid>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
