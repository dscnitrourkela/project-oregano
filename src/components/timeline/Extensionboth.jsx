import React from 'react'
import styled from 'styled-components';
import { Body1, Body2, Heading3, Heading4 } from '../shared';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 201px 134px 243px 1fr;
    grid-template-rows: 248px 135px;
    width: 1240px;
    margin: auto;
    color:#FFF;
    @media (max-width: 640px) {
  }
`
export const MobileContainer = styled.div`
  display:grid;
  grid-template-columns: 1fr 24px 1fr;
  grid-template-rows: 90.9px;
  width: 362.885px;
  margin:auto;
`
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
div{
  display: flex;
  flex-direction: column;
  gap: 8px;
  h3{
    color: ${(props) => props.color};
  }
}
p{
  color: var(--neutral-5, #A1A1A1);
}
@media (max-width: 640px) {
  display: inline-flex;
  padding: 13px 18px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  background: #0E0812;
  place-self:center;

  div{
    h3 {
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
    }
    svg {
      height: 2px;
      width:132px;
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
`
export const Box = (props) => {
  return (
    <Boxwrapper color={props.color}>
      <div>
        <Heading3 semibold>{props.node.title}</Heading3>
        <svg xmlns="http://www.w3.org/2000/svg" width="305" height="2" viewBox="0 0 305 2" fill="none">
          <path d="M1 0.6C0.779086 0.6 0.6 0.779086 0.6 1C0.6 1.22091 0.779086 1.4 1 1.4V0.6ZM5 1.4C5.22091 1.4 5.4 1.22091 5.4 1C5.4 0.779086 5.22091 0.6 5 0.6V1.4ZM13 0.6C12.7791 0.6 12.6 0.779086 12.6 1C12.6 1.22091 12.7791 1.4 13 1.4V0.6ZM21 1.4C21.2209 1.4 21.4 1.22091 21.4 1C21.4 0.779086 21.2209 0.6 21 0.6V1.4ZM29 0.6C28.7791 0.6 28.6 0.779086 28.6 1C28.6 1.22091 28.7791 1.4 29 1.4V0.6ZM37 1.4C37.2209 1.4 37.4 1.22091 37.4 1C37.4 0.779086 37.2209 0.6 37 0.6V1.4ZM45 0.6C44.7791 0.6 44.6 0.779086 44.6 1C44.6 1.22091 44.7791 1.4 45 1.4V0.6ZM53 1.4C53.2209 1.4 53.4 1.22091 53.4 1C53.4 0.779086 53.2209 0.6 53 0.6V1.4ZM61 0.6C60.7791 0.6 60.6 0.779086 60.6 1C60.6 1.22091 60.7791 1.4 61 1.4V0.6ZM69 1.4C69.2209 1.4 69.4 1.22091 69.4 1C69.4 0.779086 69.2209 0.6 69 0.6V1.4ZM77 0.6C76.7791 0.6 76.6 0.779086 76.6 1C76.6 1.22091 76.7791 1.4 77 1.4V0.6ZM85 1.4C85.2209 1.4 85.4 1.22091 85.4 1C85.4 0.779086 85.2209 0.6 85 0.6V1.4ZM93 0.6C92.7791 0.6 92.6 0.779086 92.6 1C92.6 1.22091 92.7791 1.4 93 1.4V0.6ZM101 1.4C101.221 1.4 101.4 1.22091 101.4 1C101.4 0.779086 101.221 0.6 101 0.6V1.4ZM109 0.6C108.779 0.6 108.6 0.779086 108.6 1C108.6 1.22091 108.779 1.4 109 1.4V0.6ZM117 1.4C117.221 1.4 117.4 1.22091 117.4 1C117.4 0.779086 117.221 0.6 117 0.6V1.4ZM125 0.6C124.779 0.6 124.6 0.779086 124.6 1C124.6 1.22091 124.779 1.4 125 1.4V0.6ZM133 1.4C133.221 1.4 133.4 1.22091 133.4 1C133.4 0.779086 133.221 0.6 133 0.6V1.4ZM141 0.6C140.779 0.6 140.6 0.779086 140.6 1C140.6 1.22091 140.779 1.4 141 1.4V0.6ZM149 1.4C149.221 1.4 149.4 1.22091 149.4 1C149.4 0.779086 149.221 0.6 149 0.6V1.4ZM157 0.6C156.779 0.6 156.6 0.779086 156.6 1C156.6 1.22091 156.779 1.4 157 1.4V0.6ZM165 1.4C165.221 1.4 165.4 1.22091 165.4 1C165.4 0.779086 165.221 0.6 165 0.6V1.4ZM173 0.6C172.779 0.6 172.6 0.779086 172.6 1C172.6 1.22091 172.779 1.4 173 1.4V0.6ZM181 1.4C181.221 1.4 181.4 1.22091 181.4 1C181.4 0.779086 181.221 0.6 181 0.6V1.4ZM189 0.6C188.779 0.6 188.6 0.779086 188.6 1C188.6 1.22091 188.779 1.4 189 1.4V0.6ZM197 1.4C197.221 1.4 197.4 1.22091 197.4 1C197.4 0.779086 197.221 0.6 197 0.6V1.4ZM205 0.6C204.779 0.6 204.6 0.779086 204.6 1C204.6 1.22091 204.779 1.4 205 1.4V0.6ZM213 1.4C213.221 1.4 213.4 1.22091 213.4 1C213.4 0.779086 213.221 0.6 213 0.6V1.4ZM221 0.6C220.779 0.6 220.6 0.779086 220.6 1C220.6 1.22091 220.779 1.4 221 1.4V0.6ZM229 1.4C229.221 1.4 229.4 1.22091 229.4 1C229.4 0.779086 229.221 0.6 229 0.6V1.4ZM237 0.6C236.779 0.6 236.6 0.779086 236.6 1C236.6 1.22091 236.779 1.4 237 1.4V0.6ZM245 1.4C245.221 1.4 245.4 1.22091 245.4 1C245.4 0.779086 245.221 0.6 245 0.6V1.4ZM253 0.6C252.779 0.6 252.6 0.779086 252.6 1C252.6 1.22091 252.779 1.4 253 1.4V0.6ZM261 1.4C261.221 1.4 261.4 1.22091 261.4 1C261.4 0.779086 261.221 0.6 261 0.6V1.4ZM269 0.6C268.779 0.6 268.6 0.779086 268.6 1C268.6 1.22091 268.779 1.4 269 1.4V0.6ZM277 1.4C277.221 1.4 277.4 1.22091 277.4 1C277.4 0.779086 277.221 0.6 277 0.6V1.4ZM285 0.6C284.779 0.6 284.6 0.779086 284.6 1C284.6 1.22091 284.779 1.4 285 1.4V0.6ZM293 1.4C293.221 1.4 293.4 1.22091 293.4 1C293.4 0.779086 293.221 0.6 293 0.6V1.4ZM301 0.6C300.779 0.6 300.6 0.779086 300.6 1C300.6 1.22091 300.779 1.4 301 1.4V0.6ZM1 1.4H5V0.6H1V1.4ZM13 1.4H21V0.6H13V1.4ZM29 1.4H37V0.6H29V1.4ZM45 1.4H53V0.6H45V1.4ZM61 1.4H69V0.6H61V1.4ZM77 1.4H85V0.6H77V1.4ZM93 1.4H101V0.6H93V1.4ZM109 1.4H117V0.6H109V1.4ZM125 1.4H133V0.6H125V1.4ZM141 1.4H149V0.6H141V1.4ZM157 1.4H165V0.6H157V1.4ZM173 1.4H181V0.6H173V1.4ZM189 1.4H197V0.6H189V1.4ZM205 1.4H213V0.6H205V1.4ZM221 1.4H229V0.6H221V1.4ZM237 1.4H245V0.6H237V1.4ZM253 1.4H261V0.6H253V1.4ZM269 1.4H277V0.6H269V1.4ZM285 1.4H293V0.6H285V1.4ZM301 1.4H305V0.6H301V1.4Z" fill="#C4C4C4" />
        </svg>
      </div>
      <Body2>Duration - {props.node.duration}</Body2>
    </Boxwrapper>
  )
}


const Linewrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  @media (max-width: 640px) {
    svg{
      width: 86.267px;
      height: 1px;
      transform:rotate(-45deg) translate(-15px, 60px);
      flex-shrink: 0;
    }
}
`
export const Line = (props) => {
  return (
    <Linewrapper>
      <svg xmlns="http://www.w3.org/2000/svg" width="202" height="2" viewBox="0 0 202 2" fill="none">
        <path
          d="M1 0.5C0.723858 0.5 0.5 0.723858 0.5 1C0.5 1.27614 0.723858 1.5 1 1.5L1 0.5ZM1 1.5L202 1.49998L202 0.499982L1 0.5L1 1.5Z"
          fill={props.color} />
      </svg>
    </Linewrapper>
  )
}
const Rightlinewrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  @media (max-width: 640px) {
    svg{
      width: 86.267px;
      height: 1px;
      transform:rotate(44deg) translate(5px, 39px);
      flex-shrink: 0;
    }
}
`
export const Rightline = (props) => {
  return (
    <Rightlinewrapper>
      <svg xmlns="http://www.w3.org/2000/svg" width="202" height="2" viewBox="0 0 202 2" fill="none">
        <path
          d="M1 0.5C0.723858 0.5 0.5 0.723858 0.5 1C0.5 1.27614 0.723858 1.5 1 1.5L1 0.5ZM1 1.5L202 1.49998L202 0.499982L1 0.5L1 1.5Z"
          fill={props.color} />
      </svg>
    </Rightlinewrapper>
  )
}


const Verticalwrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .line1 {
      width: 4px;
      height: 197px;
      background: #FED954;
      transform: translateY(-27px);
  }
  @media(max-width:640px){
      /* display:none; */
  }
`
export const Vertical = () => {
  return (
    <Verticalwrapper>
      <div className="line1"></div>
    </Verticalwrapper>
  )
}


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
  color: #FFF;
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
  svg{
  width: 90.9px;
  height: 90.9px;}
  .content{
    display: flex;
    width: 43.2px;
    height: 39.6px;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    #date{
      color: #FFF;
      font-family: Prompt;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 21.6px; /* 120% */
    }
    #month{
      color: #FFF;
      font-family: Prompt;
      font-size: 10.8px;
      font-style: normal;
      font-weight: 300;
      line-height: 18px; /* 166.667% */
    }
  }
}
`
export const Wheel = (props) => {
  return (
    <Wheelwrapper>
      <svg xmlns="http://www.w3.org/2000/svg" width="134" height="134" viewBox="0 0 134 134" fill="none">
        <circle cx="67" cy="67" r="65" stroke={props.color} strokeWidth="4" />
        <circle cx="67.0002" cy="67" r="48.8524" stroke={props.color} strokeWidth="1.2"
          strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10 10" />
      </svg>
      <div className="content">
        <p id="date">{props.node.date}</p>
        <Body1 id="month">{props.node.month}</Body1>
      </div>
    </Wheelwrapper>
  )
}


const Arrowwrapper = styled.div`
position: relative;
place-self: center;
#mobile{
  display:none;
}
@media (max-width: 640px) {
  #desktop{
    display:none;
  }
  #mobile{
    display:block;
  }
  width: 106.262px;
  height: 20.251px;
}
`
export const Arrow = () => {
  return (
    <Arrowwrapper>
      <img id="desktop" src="https://res.cloudinary.com/dgjzygzgx/image/upload/v1698111649/Group_762_ijeczd.svg" alt="" />
      <img id="mobile" src="https://res.cloudinary.com/dgjzygzgx/image/upload/v1698244205/Group_762_1_my98zs.svg" alt="" />
    </Arrowwrapper>
  )
}


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
@media(max-width:640px){
  svg{
      width: 137.885px;
      height: 123px;
  }
  #ellipse{
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 20px;
    width: 112.75px;
    height: 55.909px;
    margin-left:11.43px;
  }
}
`
export const Ellipse = (props) => {
  return (
    <Ellipsewrapper>
      <svg xmlns="http://www.w3.org/2000/svg" width="276" height="247" viewBox="0 0 276 247" fill="none">
        <path d="M276 122.838C276 190.971 221.054 246.205 153.275 246.205C123.396 246.205 80.5943 219.613 52.6718 195.905C17.252 165.831 0 133.933 0 95.8345C0 58.2022 51.5256 51.5085 77.9542 28.8803C99.3749 10.5398 122.932 0 153.275 0C183.618 0 216.656 24.5467 238.076 42.8872C264.505 65.5155 276 85.2053 276 122.838Z" fill={props.color} />
      </svg>
      <div>
        <Heading4 id="ellipse" className="content" medium>{props.node.ellipsecontent}</Heading4>
      </div>
    </Ellipsewrapper>
  )
}


const Mvwrapper = styled.div`
    position: relative;
    place-self:center;
  #line{
    width: 4px;
    height: 158px;
    flex-shrink: 0;
  }
  #circle1{
    position: absolute;
    top: 39px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  #circle2{
    position: absolute;
    bottom: 26px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media(min-width:640px){
    display:none;
  }
  `
export const Circledline = () => {
  return (
    <Mvwrapper>
      <svg id="line" xmlns="http://www.w3.org/2000/svg" width="4" height="158" viewBox="0 0 4 158" fill="none">
        <line x1="2" x2="2" y2="158" stroke="#FED954" strokeWidth="4" />
      </svg>
      <svg id="circle1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7" fill="#0E0812" stroke="#EDEDED" strokeWidth="2" />
        <circle cx="8.00022" cy="7.99998" r="5.30476" fill="#0E0812" stroke="#EDEDED" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 5" />
      </svg>
      <svg id="circle2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7" fill="#0E0812" stroke="#EDEDED" strokeWidth="2" />
        <circle cx="8.00022" cy="7.99998" r="5.30476" fill="#0E0812" stroke="#EDEDED" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 5" />
      </svg>
    </Mvwrapper>
  )
}


export const Desktop = styled.div`
  @media(max-width:640px){
      display:none;
  }
`
export const Mobile = styled.div`
  @media(min-width:640px){
      display:none;
  }
`
export default function Extensionboth(props) {
  return (
    <>
      <Desktop>
        {props.position!=="end"?(
        <Container>
        <Box color={props.boxcolor} node={props.node}></Box>
        <Line color={props.boxcolor} right={false}></Line>
        <Wheel color={props.wheelcolor} node={props.node}></Wheel>
        <Arrow></Arrow>
        <Ellipse color={props.ellipsecolor} node={props.node}></Ellipse>
        <div></div>
        <div></div>
        <Vertical></Vertical>
        <div></div>
        <div></div>
      </Container>
        ):(
          <Container>
        <Box color={props.boxcolor} node={props.node}></Box>
        <Line color={props.boxcolor} right={false}></Line>
        <Wheel color={props.wheelcolor} node={props.node}></Wheel>
        <Arrow></Arrow>
        <Ellipse color={props.ellipsecolor} node={props.node}></Ellipse>
      </Container>
        )}
        
      </Desktop>
      <Mobile>
        <MobileContainer>
          <Line color={props.boxcolor}></Line>
          <Wheel color={props.wheelcolor} node={props.node}></Wheel>
          <Arrow></Arrow>
          <Box color={props.boxcolor} node={props.node}></Box>
          <Circledline></Circledline>
          <Ellipse color={props.ellipsecolor} node={props.node}></Ellipse>
        </MobileContainer>
      </Mobile>
    </>
  )
};

