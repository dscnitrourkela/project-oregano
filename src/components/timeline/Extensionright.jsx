import React from 'react'
import { Box, Wheel, Vertical, Line, MobileContainer, Mobile, Desktop} from './Extensionboth'
import './timeline.css'
import styled from 'styled-components'

const Rightcontainer = styled.div`
display: grid;
grid-template-columns: 352px 201px 134px 201px 1fr;
grid-template-rows: 134px;
width: 1240px;
margin: auto;
color:#FFF;
`
export default function Extensionright(props) {
  return (
    <>
    <Desktop>
    <Rightcontainer>
        <div></div>
        <div></div>
        <Wheel color={props.wheelcolor}></Wheel>
        <Line color={props.boxcolor}></Line>
        <Box color={props.boxcolor}></Box>
        <div></div>
        <div></div>
        <Vertical></Vertical>
    </Rightcontainer>
    </Desktop>
    <Mobile>
      <MobileContainer>
        <div></div>
        <Wheel color={props.wheelcolor}></Wheel>
        <Line color={props.boxcolor} className="right-line"></Line>
        <div></div>
        <Vertical></Vertical>
        <Box color={props.boxcolor}></Box>
      </MobileContainer>
    </Mobile>
    </>
  )
};

Extensionright.defaultProps={
    boxcolor:"#FEE27F",
    wheelcolor:"#C4C4C4"
  }
