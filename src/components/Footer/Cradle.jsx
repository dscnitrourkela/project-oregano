import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialLogo } from './styles';
import { insta, fb, twitter, gh, li } from './images';

const CradleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  padding-top: 100px;
`;

const CradleBefore = styled.div`
  content: '';
  display: block;
  position: absolute;
  width: 200px;
  height: 6px;
  top: 0;
  left: 0;
  border-radius: 3px;
  background: #bdc3c7;
`;

const Ball = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  color: black;
  top: 100px;
  float: left;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  transform-origin: 50% -200px;
  &:before {
    content: '';
    color: black;
    background: black;
    display: block;
    position: absolute;
    height: 200px;
    width: 3px;
    top: -200px;
    left: 19px;
    background: #575757;
  }
`;

// Define keyframes
const ball1Animation = keyframes`
  0%, 50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(30deg);
  }
`;

const ball5Animation = keyframes`
  0%, 50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-30deg);
  }
`;

// Apply animations to specific elements
const Ball1 = styled(Ball)`
  animation: ${ball1Animation} 0.8s ease-out infinite alternate;
`;

const Ball5 = styled(Ball)`
  animation: ${ball5Animation} 0.8s ease-out 0.8s infinite alternate;
`;

const Cradle = ({ socials }) => {
  return (
    <CradleContainer>
      <Ball1>
        <a href={''}>
          <SocialLogo src={fb} />
        </a>
      </Ball1>
      {socials.slice(1, -1).map((s) => (
        <Ball>
          <a href={s.link}>
            <SocialLogo src={s.name} />
          </a>
        </Ball>
      ))}
      <Ball5>
        <SocialLogo src={twitter} />
      </Ball5>
    </CradleContainer>
  );
};

export default Cradle;
