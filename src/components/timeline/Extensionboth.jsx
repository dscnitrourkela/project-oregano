import React from 'react';
import styled from 'styled-components';
import { Body1, Body2, Heading3, Heading4 } from '../shared';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 201px 134px 243px 1fr;
  grid-template-rows: 248px 135px;
  width: 1240px;
  margin: auto;
  color: #fff;
`;
export const MobileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 24px 1fr;
  grid-template-rows: 90.9px;
  width: 362.885px;
  margin: auto;
`;
const Boxwrapper = styled.div`
  display: inline-flex;
  padding: 26px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 20px;
  border: 0.4px solid ${(props) => props.color};
  place-self: center;
  white-space: nowrap;
  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    h3 {
      color: ${(props) => props.color};
    }
  }
  p {
    color: var(--neutral-5, #a1a1a1);
  }
  @media (max-width: 640px) {
    display: inline-flex;
    padding: 13px 18px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    background: #0e0812;
    place-self: center;

    div {
      h3 {
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
      }
      #dotted-line {
        height: 2px;
        width: 132px;
        align-self: stretch;
      }
    }
    p {
      font-size: 10px;
      font-style: normal;
      font-weight: 300;
      line-height: 18px;
    }
  }
`;
export const Box = ({ color, node }) => (
  <Boxwrapper color={color}>
    <div>
      <Heading3 semibold>{node.title}</Heading3>
      <img
        id='dotted-line'
        src='https://res.cloudinary.com/dgjzygzgx/image/upload/v1698431749/Line_3_o1ztvt.svg'
        alt=''
      />
    </div>
    <Body2>Duration - {node.duration}</Body2>
  </Boxwrapper>
);

const Linewrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 640px) {
    svg {
      width: 86.267px;
      height: 1px;
      transform: rotate(-45deg) translate(-15px, 60px);
      flex-shrink: 0;
    }
  }
`;
export const Line = ({ color }) => (
  <Linewrapper>
    <svg xmlns='http://www.w3.org/2000/svg' width='202' height='2' viewBox='0 0 202 2' fill='none'>
      <path
        d='M1 0.5C0.723858 0.5 0.5 0.723858 0.5 1C0.5 1.27614 0.723858 1.5 1 1.5L1 0.5ZM1 1.5L202
        1.49998L202 0.499982L1 0.5L1 1.5Z'
        fill={color}
      />
    </svg>
  </Linewrapper>
);
const Rightlinewrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 640px) {
    svg {
      width: 86.267px;
      height: 1px;
      transform: rotate(44deg) translate(5px, 39px);
      flex-shrink: 0;
    }
  }
`;
export const Rightline = ({ color }) => (
  <Rightlinewrapper>
    <svg xmlns='http://www.w3.org/2000/svg' width='202' height='2' viewBox='0 0 202 2' fill='none'>
      <path
        d='M1 0.5C0.723858 0.5 0.5 0.723858 0.5 1C0.5 1.27614 0.723858 1.5 1 1.5L1 0.5ZM1 1.5L202
        1.49998L202 0.499982L1 0.5L1 1.5Z'
        fill={color}
      />
    </svg>
  </Rightlinewrapper>
);
const Verticalwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .line1 {
    width: 4px;
    height: 197px;
    background: #fed954;
    transform: translateY(-27px);
  }
`;
export const Vertical = () => (
  <Verticalwrapper>
    <div className='line1' />
  </Verticalwrapper>
);

const Wheelwrapper = styled.div`
  position: relative;
  height: 134px;
  place-self: center;
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }
  #date {
    color: #fff;
    font-family: Prompt;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 42px;
    /* 116.667% */
    margin: 0;
  }
  @media (max-width: 640px) {
    width: 90.9px;
    height: 90.9px;
    svg {
      width: 90.9px;
      height: 90.9px;
    }
    .content {
      display: flex;
      width: 43.2px;
      height: 39.6px;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;
      #date {
        color: #fff;
        font-family: Prompt;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 21.6px; /* 120% */
      }
      #month {
        font-size: 10.8px;
        font-style: normal;
        font-weight: 300;
        line-height: 18px; /* 166.667% */
      }
    }
  }
`;
export const Wheel = ({ color, node }) => (
  <Wheelwrapper>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='134'
      height='134'
      viewBox='0 0 134 134'
      fill='none'
    >
      <circle cx='67' cy='67' r='65' stroke={color} strokeWidth='4' />
      <circle
        cx='67.0002'
        cy='67'
        r='48.8524'
        stroke={color}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeDasharray='10 10'
      />
    </svg>
    <div className='content'>
      <p id='date'>{node.date}</p>
      <Body1 id='month'>{node.month}</Body1>
    </div>
  </Wheelwrapper>
);

const Arrowwrapper = styled.div`
  position: relative;
  place-self: center;
  #mobile {
    display: none;
  }
  @media (max-width: 640px) {
    #desktop {
      display: none;
    }
    #mobile {
      display: block;
    }
    width: 106.262px;
    height: 20.251px;
  }
`;
export const Arrow = () => (
  <Arrowwrapper>
    <img
      id='desktop'
      src='https://res.cloudinary.com/dgjzygzgx/image/upload/v1698111649/Group_762_ijeczd.svg'
      alt=''
    />
    <img
      id='mobile'
      src='https://res.cloudinary.com/dgjzygzgx/image/upload/v1698244205/Group_762_1_my98zs.svg'
      alt=''
    />
  </Arrowwrapper>
);

const Ellipsewrapper = styled.div`
  place-self: center;
  position: relative;
  #ellipse {
    line-height: 32px;
    width: 202px;
    margin: 0;
    margin-left: 25px;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 640px) {
    svg {
      width: 137.885px;
      height: 123px;
    }
    #ellipse {
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 20px;
      width: 112.75px;
      height: 55.909px;
      margin-left: 11.43px;
    }
  }
`;
export const Ellipse = ({ color, node }) => (
  <Ellipsewrapper>
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
        fill={color}
      />
    </svg>
    <div>
      <Heading4 id='ellipse' className='content' medium>
        {node.ellipsecontent}
      </Heading4>
    </div>
  </Ellipsewrapper>
);

const Mvwrapper = styled.div`
  position: relative;
  place-self: center;
  #line {
    width: 4px;
    height: 158px;
    flex-shrink: 0;
  }
  #circle1 {
    position: absolute;
    top: 39px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  #circle2 {
    position: absolute;
    bottom: 26px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (min-width: 640px) {
    display: none;
  }
`;
export const Circledline = () => (
  <Mvwrapper>
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
  </Mvwrapper>
);

export const Desktop = styled.div`
  @media (max-width: 640px) {
    display: none;
  }
`;
export const Mobile = styled.div`
  @media (min-width: 640px) {
    display: none;
  }
`;
export default function Extensionboth({ position, boxcolor, node, wheelcolor, ellipsecolor }) {
  return (
    <>
      <Desktop>
        {position !== 'end' ? (
          <Container>
            <Box color={boxcolor} node={node} />
            <Line color={boxcolor} right={false} />
            <Wheel color={wheelcolor} node={node} />
            <Arrow />
            <Ellipse color={ellipsecolor} node={node} />
            <div />
            <div />
            <Vertical />
            <div />
            <div />
          </Container>
        ) : (
          <Container>
            <Box color={boxcolor} node={node} />
            <Line color={boxcolor} right={false} />
            <Wheel color={wheelcolor} node={node} />
            <Arrow />
            <Ellipse color={ellipsecolor} node={node} />
          </Container>
        )}
      </Desktop>
      <Mobile>
        <MobileContainer>
          <Line color={boxcolor} />
          <Wheel color={wheelcolor} node={node} />
          <Arrow />
          <Box color={boxcolor} node={node} />
          <Circledline />
          <Ellipse color={ellipsecolor} node={node} />
        </MobileContainer>
      </Mobile>
    </>
  );
}
