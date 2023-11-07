import React from 'react';
import { Body2, Heading3 } from '../shared';
import {
  Container,
  BoxWrapper,
  MobileContainer,
  LineWrapper,
  RightLineWrapper,
  VerticalBox,
  WheelWrapper,
  ArrowWrapper,
  EllipseWrapper,
  CircledLineWrapper,
  MobileView,
  DesktopView,
  Date,
  Month,
  EllipseContent,
} from './styles';

export const Box = ({ node }) => (
  <BoxWrapper color={node.boxcolor}>
    <Heading3 semibold>{node.title}</Heading3>
    <img
      src='https://res.cloudinary.com/dgjzygzgx/image/upload/v1698431749/Line_3_o1ztvt.svg'
      alt='line'
    />
    <Body2>Duration - {node.duration}</Body2>
  </BoxWrapper>
);
export const Line = ({ color }) => (
  <LineWrapper>
    <svg xmlns='http://www.w3.org/2000/svg' width='202' height='2' viewBox='0 0 202 2' fill='none'>
      <path
        d='M1 0.5C0.723858 0.5 0.5 0.723858 0.5 1C0.5 1.27614 0.723858 1.5 1 1.5L1 0.5ZM1 1.5L202
        1.49998L202 0.499982L1 0.5L1 1.5Z'
        fill={color}
      />
    </svg>
  </LineWrapper>
);
export const RightLine = ({ color }) => (
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
export const VerticalLine = () => (
  <VerticalBox>
    <div />
  </VerticalBox>
);
export const Wheel = ({ node }) => (
  <WheelWrapper>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='134'
      height='134'
      viewBox='0 0 134 134'
      fill='none'
    >
      <circle cx='67' cy='67' r='65' stroke={node.wheelcolor} strokeWidth='4' />
      <circle
        cx='67.0002'
        cy='67'
        r='48.8524'
        stroke={node.wheelcolor}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeDasharray='10 10'
      />
    </svg>
    <div>
      <Date>{node.date}</Date>
      <Month>{node.month}</Month>
    </div>
  </WheelWrapper>
);
export const Arrow = () => (
  <ArrowWrapper>
    <img
      id='desktop'
      src='https://res.cloudinary.com/dgjzygzgx/image/upload/v1698111649/Group_762_ijeczd.svg'
      alt='arrow'
    />
    <img
      id='mobile'
      src='https://res.cloudinary.com/dgjzygzgx/image/upload/v1698244205/Group_762_1_my98zs.svg'
      alt='arrow'
    />
  </ArrowWrapper>
);
export const Ellipse = ({ node }) => (
  <EllipseWrapper>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='276'
      height='247'
      viewBox='0 0 276 247'
      fill='none'
    >
      <path
        d='M276 122.838C276 190.971 221.054 246.205 153.275 246.205C123.396 246.205 80.5943 219.613
        52.6718 195.905C17.252 165.831 0 133.933 0 95.8345C0 58.2022 51.5256 51.5085 77.9542 
        28.8803C99.3749 10.5398 122.932 0 153.275 0C183.618 0 216.656 24.5467 238.076
        42.8872C264.505 65.5155 276 85.2053 276 122.838Z'
        fill={node.ellipsecolor}
      />
    </svg>
    <div>
      <EllipseContent medium>{node.ellipsecontent}</EllipseContent>
    </div>
  </EllipseWrapper>
);
export const Circledline = () => (
  <CircledLineWrapper>
    <svg
      id='line'
      xmlns='http://www.w3.org/2000/svg'
      width='4'
      height='158'
      viewBox='0 0 4 158'
      fill='none'
    >
      <line x1='2' x2='2' y2='158' stroke='#FED954' strokeWidth='4' />
    </svg>
    <svg
      id='circle1'
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
    >
      <circle cx='8' cy='8' r='7' fill='#0E0812' stroke='#EDEDED' strokeWidth='2' />
      <circle
        cx='8.00022'
        cy='7.99998'
        r='5.30476'
        fill='#0E0812'
        stroke='#EDEDED'
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeDasharray='5 5'
      />
    </svg>
    <svg
      id='circle2'
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
    >
      <circle cx='8' cy='8' r='7' fill='#0E0812' stroke='#EDEDED' strokeWidth='2' />
      <circle
        cx='8.00022'
        cy='7.99998'
        r='5.30476'
        fill='#0E0812'
        stroke='#EDEDED'
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeDasharray='5 5'
      />
    </svg>
  </CircledLineWrapper>
);
export default function ExtensionBoth({ position, node }) {
  return (
    <>
      <DesktopView>
        {position !== 'end' ? (
          <Container>
            <Box node={node} />
            <Line color={node.boxcolor} />
            <Wheel node={node} />
            <Arrow />
            <Ellipse node={node} />
            <div />
            <div />
            <VerticalLine />
            <div />
            <div />
          </Container>
        ) : (
          <Container>
            <Box node={node} />
            <Line color={node.boxcolor} />
            <Wheel node={node} />
            <Arrow />
            <Ellipse node={node} />
          </Container>
        )}
      </DesktopView>
      <MobileView>
        <MobileContainer>
          <Line color={node.boxcolor} />
          <Wheel node={node} />
          <Arrow />
          <Box node={node} />
          <Circledline />
          <Ellipse node={node} />
        </MobileContainer>
      </MobileView>
    </>
  );
}
