import React from 'react';
import { SocialLogo, SocialText, SocialsCont, CradleContainer, Ball, Ball1, Ball5 } from './styles';

const Cradle = ({ socials, text }) => (
  <SocialsCont>
    <CradleContainer>
      <a href='https://facebook.com/hacknitr'>
        <Ball1>
          <SocialLogo src={socials[0].imgLink} />
        </Ball1>
      </a>
      {socials.slice(1, -1).map((s) => (
        <a key={socials.indexOf(s)} href={s.link}>
          <Ball>
            <SocialLogo src={s.imgLink} />
          </Ball>
        </a>
      ))}
      <a href='https://twitter.com/hacknitr'>
        <Ball5>
          <SocialLogo src={socials[socials.length - 1].imgLink} />
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

export default Cradle;
