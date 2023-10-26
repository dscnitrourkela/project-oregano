import React from 'react'
import { Box, Wheel, Line, MobileContainer, Mobile, Desktop, Rightline} from './Extensionboth'
import styled from 'styled-components'

const Rightcontainer = styled.div`
display: grid;
grid-template-columns: 352px 201px 134px 201px 1fr;
grid-template-rows: 141px 103px;
width: 1240px;
margin: auto;
color:#FFF;
`
const Verticalwrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .line1 {
      width: 4px;
      height: 165.242px;
      background: #FED954;
      transform: translateY(27px);
  }
  @media(max-width:640px){
    .line1{
      height: 114px;
      transform: translateY(0px);
    }
  }
`
export const Vertical = () => {
  return (
    <Verticalwrapper>
      <div className="line1"></div>
    </Verticalwrapper>
  )
}
export default function Extensionright(props) {
  return (
    <>
    <Desktop>
    <Rightcontainer>
        <div></div>
        <div></div>
        <Wheel color={props.wheelcolor} node={props.node}></Wheel>
        <Line color={props.boxcolor} ></Line>
        <Box color={props.boxcolor} node={props.node}></Box>
        <div></div>
        <div></div>
        <Vertical></Vertical>
    </Rightcontainer>
    </Desktop>
    <Mobile>
      <MobileContainer>
        <div></div>
        <Wheel color={props.wheelcolor} node={props.node}></Wheel>
        <Rightline color={props.boxcolor} ></Rightline>
        <div></div>
        <Vertical></Vertical>
        <Box color={props.boxcolor} node={props.node}></Box>
      </MobileContainer>
    </Mobile>
    </>
  )
};

Extensionright.defaultProps={
    boxcolor:"#FEE27F",
    wheelcolor:"#C4C4C4"
  }
