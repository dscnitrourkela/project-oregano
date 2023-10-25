import React from 'react'
import styled from 'styled-components'
import './timeline.css'
import Extensionboth from './Extensionboth'
import Extensionright from './Extensionright'
const Wrapper = styled.div`
    width: 1240px;
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
`
export default function timeline() {
  return (
    <section>

      <Wrapper>
        <h1>Timeline</h1>
        <Extensionboth boxcolor="#14F195" wheelcolor="#35E1FF" ellipsecolor="#B067FF"></Extensionboth>
        <Extensionright boxcolor="#C48DFF"></Extensionright>
        <Extensionboth></Extensionboth>
      </Wrapper>

    </section>
  )
}
