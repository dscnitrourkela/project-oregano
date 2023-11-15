import React from 'react';
import { Box, Wheel, Line } from './Extensionboth';
import {
  MobileContainer,
  MobileView,
  DesktopView,
  RightContainer,
  VerticalWrapper,
  RightLineWrapper,
} from './styles';

export const VerticalLine = () => (
  <VerticalWrapper>
    <div />
  </VerticalWrapper>
);
const RightLine = ({ color }) => (
  <RightLineWrapper>
    <svg xmlns='http://www.w3.org/2000/svg' width='202' height='2' viewBox='0 0 202 2' fill='none'>
      <path
        d='M1 0.5C0.723858 0.5 0.5 0.723858 0.5 1C0.5 1.27614 0.723858 1.5 1 1.5L1 0.5ZM1 1.5L202
        1.49998L202 0.499982L1 0.5L1 1.5Z'
        fill={color}
      />
    </svg>
  </RightLineWrapper>
);
export default function ExtensionRight({ position, node }) {
  return (
    <>
      <DesktopView>
        {position !== 'end' ? (
          <RightContainer>
            <div />
            <div />
            <Wheel node={node} />
            <Line color={node.boxcolor} />
            <Box node={node} />
            <div />
            <div />
            <VerticalLine />
          </RightContainer>
        ) : (
          <RightContainer>
            <div />
            <div />
            <Wheel node={node} />
            <Line color={node.boxcolor} />
            <Box node={node} />
          </RightContainer>
        )}
      </DesktopView>
      <MobileView>
        <MobileContainer>
          <div />
          <Wheel node={node} />
          <RightLine color={node.boxcolor} />
          <div />
          <VerticalLine />
          <Box node={node} />
        </MobileContainer>
      </MobileView>
    </>
  );
}

ExtensionRight.defaultProps = {
  boxcolor: '#FEE27F',
  wheelcolor: '#C4C4C4',
};
