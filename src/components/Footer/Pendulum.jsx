import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Pendulums_codepen = () => {
  return (
    <>
      <MainWrapper>
        <NewtonCradle>
          <Cradle_bar />
          <Cradle_balls>
            <Cradle_ball></Cradle_ball>
            <Cradle_ball_span />
            <Cradle_ball></Cradle_ball>
            <Cradle_ball_span />
            <Cradle_ball></Cradle_ball>
            <Cradle_ball_span />
            <Cradle_ball></Cradle_ball>
            <Cradle_ball_span />
            <Cradle_ball></Cradle_ball>
            <Cradle_ball_span />
          </Cradle_balls>
          <Cradle_base />
        </NewtonCradle>
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

const NewtonCradle = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
`;

const Pendulum = styled.div`
  @keyframes movesecond {
    25% {
      transform: rotate(-25deg);
    }
    50% {
      transform: rotate(0deg);
    }
  }
`;

const Cradle_bar = styled.div`
  border: var(--barwidth) solid var(--barcolor);
  border-bottom: none;
  height: 87%;
  width: 80%;
  margin: 0 auto;
  border-radius: 44px 44px 0 0;
`;

const Cradle_base = styled.div`
  height: 13%;
  background-color: var(--basecolor);
  border-radius: 18px 18px 0 0;
`;

const Cradle_balls = styled.div`
  position: absolute;
  display: flex;
  top: var(--barwidth);
  width: 100%;
  height: 47%;
  justify-content: center;
`;

const Cradle_ball = styled.div`
  transform-origin: top;

  &:first-child {
    transform: rotate(0deg);
    animation: movefirst 1s ease-in-out infinite 2s;
  }

  &:last-child {
    transform: rotate(0deg);
    animation: movesecond 1s ease-in-out infinite 2.45s;
  }

  &:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 1px;
    height: 100%;
    background-color: var(--barcolor);
  }
`;

const Cradle_ball_span = styled.div`
  position: relative;
  display: block;
  background-color: var(--ballcolor);
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

export default Pendulums_codepen;
