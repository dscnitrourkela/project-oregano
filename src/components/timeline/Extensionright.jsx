import React from 'react';
import styled from 'styled-components';
import { Box, Wheel, Line, MobileContainer, Mobile, Desktop, Rightline } from './Extensionboth';

const Rightcontainer = styled.div`
  display: grid;
  grid-template-columns: 352px 201px 134px 201px 1fr;
  grid-template-rows: 141px 103px;
  width: 1240px;
  margin: auto;
  color: #fff;
  @media (max-width: 768px) {
    grid-template-columns: 330px 201px 134px 201px 352px;
  }
`;
const Verticalwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .line1 {
    width: 4px;
    height: 165.242px;
    background: #fed954;
    transform: translateY(27px);
  }
  @media (max-width: 640px) {
    .line1 {
      height: 114px;
      transform: translateY(0px);
    }
  }
`;
export const Vertical = () => (
  <Verticalwrapper>
    <div className='line1' />
  </Verticalwrapper>
);
export default function Extensionright({ position, wheelcolor, node, boxcolor }) {
  return (
    <>
      <Desktop>
        {position !== 'end' ? (
          <Rightcontainer>
            <div />
            <div />
            <Wheel color={wheelcolor} node={node} />
            <Line color={boxcolor} />
            <Box color={boxcolor} node={node} />
            <div />
            <div />
            <Vertical />
          </Rightcontainer>
        ) : (
          <Rightcontainer>
            <div />
            <div />
            <Wheel color={wheelcolor} node={node} />
            <Line color={boxcolor} />
            <Box color={boxcolor} node={node} />
          </Rightcontainer>
        )}
      </Desktop>
      <Mobile>
        <MobileContainer>
          <div />
          <Wheel color={wheelcolor} node={node} />
          <Rightline color={boxcolor} />
          <div />
          <Vertical />
          <Box color={boxcolor} node={node} />
        </MobileContainer>
      </Mobile>
    </>
  );
}

Extensionright.defaultProps = {
  boxcolor: '#FEE27F',
  wheelcolor: '#C4C4C4',
};
