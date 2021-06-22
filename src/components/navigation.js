import React from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';
import { Box, Link } from 'theme-ui';
import theme from '../lib/theme';
import { Link as ScrollLink } from 'react-scroll';
import Music from './music';

const layout = (props) =>
  props.isMobile
    ? css`
        display: ${props.toggled ? 'flex' : 'none'};
        flex-direction: column;
        overflow-y: auto;
        text-align: left;
        height: 100vh;
        @media (prefers-reduced-motion: no-preference) {
          animation: ${slide} 0.25s ease-in;
        }
        a {
          color: ${theme.colors[props.dark ? 'white' : 'black']} !important;
          margin: 0 auto;
          height: 64px;
          font-weight: bold;
          font-size: ${theme.fontSizes[2]}px;
          width: 100%;
          max-width: 18rem;
          &:not(:last-child) {
            border-bottom: 1px solid rgba(48, 48, 48, 0.125);
          }
          @media screen and (max-width: 22em) {
            max-width: 16rem;
          }
        }
      `
    : css`
        @media (min-width: 56em) {
          display: flex;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        a {
          font-size: ${theme.fontSizes[1]}px;
          text-transform: uppercase;
          &:hover {
            color: #777777};
          }
        }
      `;

const hoverColor = (name) =>
  ({
    white: 'smoke',
    smoke: 'muted',
    muted: 'slate',
    slate: 'black',
    black: 'slate',
    primary: 'error'
  }[name] || 'black');

const slide = keyframes({
  from: { transform: 'translateY(-25%)', opacity: 0 },
  to: { transform: 'translateY(0)', opacity: 1 }
});

const NavBar = styled(Box)`
  display: none;
  ${layout};
  a {
    margin-left: ${theme.space[3]}px;
    padding: ${theme.space[3]}px;
    text-decoration: none;
    align-items: center;
    @media (min-width: 56em) {
      color: ${(props) => theme.colors[props.color] || props.color};
    }
  }
`;

const Navigation = ({ muted, music, handleMute, ...props }) => {
  return (
    <NavBar role="navigation" {...props}>
      <ScrollLink
        offset={-50}
        to="about-section"
        smooth
        children="About"
        style={{ cursor: 'pointer' }}
        className="navLink"
      />

      <ScrollLink
        offset={-50}
        to="themes-section"
        smooth
        children="Participate"
        style={{ cursor: 'pointer' }}
        className="navLink"
      />

      <ScrollLink
        offset={-50}
        to="faq-section"
        smooth
        children="FAQ"
        style={{ cursor: 'pointer' }}
        className="navLink"
      />

      <ScrollLink
        offset={-50}
        to="sponsors-section"
        smooth
        children="Sponsors"
        style={{ cursor: 'pointer' }}
        className="navLink"
      />

      {/* <ScrollLink
        offset={-50}
        to="contact-section"
        smooth
        children="Contact"
        style={{ cursor: 'pointer' }}
        className="navLink"
      /> */}
      {music && (
        <Link style={{ color: '#fafafa', cursor: 'pointer' }}>
          <Music muted={muted} handleMute={handleMute} />
        </Link>
      )}
    </NavBar>
  );
};

export default Navigation;
