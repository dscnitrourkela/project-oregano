import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 201px 134px 243px 1fr;
    grid-template-rows: 134px;
    width: 1240px;
    margin: auto;
    color:#FFF
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
width: 352px;
div{
  display: flex;
  flex-direction: column;
  gap: 8px;
  h3{
    color: ${(props) => props.color};
    font-family: Prompt;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
    text-transform: capitalize;
    margin: 0;
  }
}
p{
  color: var(--neutral-5, #A1A1A1);
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    margin: 0;
}
`
const Linewrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .line1 {
      width: 4px;
      height: 165.242px;
      background: #FED954;
  }
`
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
#month {
  color: #FFF;
  /* Desktop/Body/B1/Regular */
  font-family: Prompt;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px;
  /* 155.556% */
  margin: 0;
}
`
const Arrowwrapper = styled.div`
position: relative;
place-self: center;
`
const Ellipsewrapper = styled.div`
place-self: center;
position: relative;
#ellipse {
  color: #FFF;
  font-family: Prompt;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
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
`
export const Box = (props) => {
  return (
    <Boxwrapper color={props.color}>
      <div>
        <h3>Registration Opens</h3>
        <img src="https://res.cloudinary.com/dgjzygzgx/image/upload/v1698111663/Line_3_tque7e.png" alt="" />
      </div>
      <p>Duration - 15 oct to 15 dec</p>
    </Boxwrapper>
  )
}
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
export const Wheel = (props) => {
  return (
    <Wheelwrapper>
      <svg xmlns="http://www.w3.org/2000/svg" width="134" height="134" viewBox="0 0 134 134" fill="none">
        <circle cx="67" cy="67" r="65" stroke={props.color} strokeWidth="4" />
        <circle cx="67.0002" cy="67" r="48.8524" stroke={props.color} strokeWidth="1.2"
          strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10 10" />
      </svg>
      <div className="content">
        <p id="date">15</p>
        <p id="month">October</p>
      </div>
    </Wheelwrapper>
  )
}
export const Arrow = () => {
  return (
    <Arrowwrapper>
      <img src="https://res.cloudinary.com/dgjzygzgx/image/upload/v1698111649/Group_762_ijeczd.svg" alt="" />
    </Arrowwrapper>
  )
}
export const Ellipse = (props) => {
  return (
    <Ellipsewrapper>
        <svg xmlns="http://www.w3.org/2000/svg" width="276" height="247" viewBox="0 0 276 247" fill="none">
          <path d="M276 122.838C276 190.971 221.054 246.205 153.275 246.205C123.396 246.205 80.5943 219.613 52.6718 195.905C17.252 165.831 0 133.933 0 95.8345C0 58.2022 51.5256 51.5085 77.9542 28.8803C99.3749 10.5398 122.932 0 153.275 0C183.618 0 216.656 24.5467 238.076 42.8872C264.505 65.5155 276 85.2053 276 122.838Z" fill={props.color} />
        </svg>
        <div>
          <p id="ellipse" className="content">Get extra perks with early registration</p>
        </div>
    </Ellipsewrapper>
  )
}
export const Vertical =()=>{
  return(
    <Linewrapper>
      <div className="line1"></div>
    </Linewrapper>
  )
}
export default function Extensionboth(props) {
  return (
    <section>
      <Container>
        <Box color={props.boxcolor}></Box>
        <Line color={props.boxcolor}></Line>
        <Wheel color={props.wheelcolor}></Wheel>
        <Arrow></Arrow>
        <Ellipse color={props.ellipsecolor}></Ellipse>
        <div></div>
        <div></div>
        <Vertical></Vertical>
        <div></div>
        <div></div>
      </Container>
    </section>
  )
};

Extensionboth.defaultProps={
  boxcolor:"#FEE27F",
  wheelcolor:"#C4C4C4",
  ellipsecolor:"#FF65CD"
}
