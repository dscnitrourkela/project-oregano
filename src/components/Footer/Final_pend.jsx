import React from 'react';
import styled, { keyframes } from 'styled-components';

const CradleContainer = styled.div`
  position: absolute;
  width: 200px;
  height: 40px;
  padding-top: 100px;
  color: white;
  position: absolute;
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
  position: relative;
  float: left;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  transform-origin: 50% -100px;
  &:before {
    content: '';
    display: block;
    position: absolute;
    height: 200px;
    width: 1px;
    top: -100px;
    left: 19px;
    background: #bdc3c7;
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

const Cradle = () => {
  return (
    <CradleContainer>
      <CradleBefore></CradleBefore>
      <Ball1></Ball1>
      <Ball></Ball>
      <Ball></Ball>
      <Ball></Ball>
      <Ball5></Ball5>
    </CradleContainer>
  );
};

export default Cradle;
