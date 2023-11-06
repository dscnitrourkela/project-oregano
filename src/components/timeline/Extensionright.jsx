import React from 'react';
import { Box, Wheel, Line, RightLine } from './Extensionboth';
import { MobileContainer, Mobile, Desktop, RightContainer, VerticalWrapper } from './styles';

export const VerticalLine = () => (
  <VerticalWrapper>
    <div />
  </VerticalWrapper>
);
export default function ExtensionRight({ position, wheelcolor, node, boxcolor }) {
  return (
    <>
      <Desktop>
        {position !== 'end' ? (
          <RightContainer>
            <div />
            <div />
            <Wheel color={wheelcolor} node={node} />
            <Line color={boxcolor} />
            <Box color={boxcolor} node={node} />
            <div />
            <div />
            <VerticalLine />
          </RightContainer>
        ) : (
          <RightContainer>
            <div />
            <div />
            <Wheel color={wheelcolor} node={node} />
            <Line color={boxcolor} />
            <Box color={boxcolor} node={node} />
          </RightContainer>
        )}
      </Desktop>
      <Mobile>
        <MobileContainer>
          <div />
          <Wheel color={wheelcolor} node={node} />
          <RightLine color={boxcolor} />
          <div />
          <VerticalLine />
          <Box color={boxcolor} node={node} />
        </MobileContainer>
      </Mobile>
    </>
  );
}

ExtensionRight.defaultProps = {
  boxcolor: '#FEE27F',
  wheelcolor: '#C4C4C4',
};
