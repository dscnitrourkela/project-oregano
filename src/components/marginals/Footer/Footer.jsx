/* eslint-disable max-len */
import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  SectionCard2,
  SectionIcons,
} from './Footer.styles';

import Heading4 from '../../shared/Typography/Heading4';
import FooterCard from './FooterCard';
import Body from '../../shared/Typography/Body';
import OrganiserData from './OrganiserData';
import { SectionContainer } from '../../shared';

function Footer() {
  return (
    <SectionContainer>
      <Grid>
        <SectionLogo>
          <SectionLogoImg>
            <img
              src='https://res.cloudinary.com/dalqfvowk/image/upload/project-oregano/assets/hkmogkgvx6kpf07xbln8.png'
              alt=''
            />
          </SectionLogoImg>
          <SectionLogoText>
            <Heading4>HackNITR 3.0</Heading4>
          </SectionLogoText>
        </SectionLogo>
        <SectionIcon>
          <SectionIcons>
            <Link to='https://www.instagram.com/hacknitr/'>
              <FontAwesomeIcon icon={faInstagram} opacity='40' color='#ffffff' size='2x' />
            </Link>
            <Link to='https://www.linkedin.com/company/hacknitr/'>
              <FontAwesomeIcon icon={faLinkedin} opacity='40' color='#ffffff' size='2x' />
            </Link>
            <Link to='https://www.facebook.com/hacknitr/'>
              <FontAwesomeIcon icon={faDiscord} color='#ffffff' size='2x' />
            </Link>
            <Link to='https://github.com/dscnitrourkela/project-oregano'>
              <FontAwesomeIcon icon={faGithubSquare} color='#ffffff' size='2x' />
            </Link>
            <Link to='https://twitter.com/hacknitr'>
              <FontAwesomeIcon icon={faTwitterSquare} color='#ffffff' size='2x' />
            </Link>
          </SectionIcons>
          <SectionIconText>
            <p className='text-right'>
              <Body>logo Lorem ipsum dolor sit amet consectetur adipisicing.</Body>
            </p>
          </SectionIconText>
        </SectionIcon>
        <SectionCard1>
          <FooterCard
            img='https://res.cloudinary.com/dalqfvowk/image/upload/project-oregano/assets/j1hylhwi5lv6kyaksvbj.png'
            Title='About NIT Rourkela'
            Text='Sit mi, porttitor sapien, morbi id. Arcu, nibh facilisis
           ac nec. In nec pulvinar praesent neque eget velit nunc sit potenti. Diam dignissim.'
          />
        </SectionCard1>
        <SectionCard2>
          <FooterCard
            img='https://res.cloudinary.com/dalqfvowk/image/upload/project-oregano/assets/qevwkbokfctprtujrfhs.png'
            Title='About Diamond Jubilee'
            Text='Sit mi, porttitor sapien, morbi id. Arcu, nibh facilisis ac nec. In nec pulvinar praesent neque eget velit nunc sit potenti. Diam dignissim.'
          />
        </SectionCard2>
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
    </SectionContainer>
  );
}

export default Footer;
