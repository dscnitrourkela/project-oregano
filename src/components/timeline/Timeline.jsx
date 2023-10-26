import React from 'react'
import styled from 'styled-components'
import Extensionboth from './Extensionboth'
import Extensionright from './Extensionright'
import {timelinecontent} from '../../../config/content/Timelinecontent'
const Wrapper = styled.div`
    width:1240px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      color: #FFF;
      font-family: Prompt;
      font-size: 64px;
      font-style: normal;
      font-weight: 700;
      line-height: 96px;
      margin: 0;
      margin-bottom: 24px;
    }
    @media (max-width: 640px) {
    width: 362.885px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* gap: 24px; */
    h1{
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 96px;
      margin-top: 32px;
      margin-bottom:32px;
    }
  }
`;
export default function timeline() {
  return (
    <section>
      <Wrapper>
        <h1>{timelinecontent.title}</h1>
        {timelinecontent.nodes.length===0? "":  
            timelinecontent.nodes.map((node)=>{
                if (node && node.ellipsecontent){
                return (<Extensionboth key ={node.sno} boxcolor={node.boxcolor} wheelcolor={node.wheelcolor} ellipsecolor={node.ellipsecolor} node={node}></Extensionboth>   
                );}
                else{
                  return(<Extensionright key ={node.sno} boxcolor="#C48DFF" node={node}></Extensionright>);
                }
            })}
      </Wrapper>

    </section>
  )
}
