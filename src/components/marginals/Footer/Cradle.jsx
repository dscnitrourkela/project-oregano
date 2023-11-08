import React from 'react';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialLogo, SocialText, SocialsCont, CradleContainer, Ball, Ball1, Ball5 } from './styles';
import { fb, twitter } from './images';

const Cradle = ({ socials, text }) => {
  return (
    <SocialsCont>
      <CradleContainer>
        <a href='https://facebook.com/hacknitr'>
          <Ball1>
            <SocialLogo src={fb} />
          </Ball1>
        </a>
        {socials.slice(1, -1).map((s) => (
          <a href={s.link}>
            <Ball>
              <SocialLogo src={s.name} />
            </Ball>
          </a>
        ))}
        <a href='https://twitter.com/hacknitr'>
          <Ball5>
            <SocialLogo src={twitter} />
          </Ball5>
        </a>
      </CradleContainer>

      <SocialText>
        {text.content1}
        <br />
        {text.content2}
      </SocialText>
    </SocialsCont>
  );
};

export default Cradle;
