import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';
import { Box, Container, Flex } from 'theme-ui';
import ScrollLock from 'react-scrolllock';
import theme from '../lib/theme';

import Icon from './icon';
import Flag from './flag';
import Navigation from './navigation';

const rgbaBgColor = (props, opacity) =>
  `rgba(
    ${props.bgColor[0]},
    ${props.bgColor[1]},
    ${props.bgColor[2]},
    ${opacity}
  )`;

const unfixed = (props) =>
  !props.unfixed &&
  css`
    position: absolute;
    top: 0;
  `;
// const bg = (props) =>
//   props.dark
//     ? css`
//         -webkit-backdrop-filter: saturate(90%) blur(20px);
//         backdrop-filter: saturate(90%) blur(20px);
//       `
//     : css`
//         -webkit-backdrop-filter: saturate(180%) blur(20px);
//         backdrop-filter: saturate(180%) blur(20px);
//       `
const fixed = (props) =>
  (props.scrolled || props.toggled || props.fixed) &&
  css`
    position: fixed;
    background-color: ${rgbaBgColor(props, 0.96875)};
    border-bottom: 1px solid rgba(48, 48, 48, 0.125);
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      background-color: ${props.transparent
        ? 'transparent'
        : rgbaBgColor(props, 0.75)};
      -webkit-backdrop-filter: saturate(180%) blur(20px);
      backdrop-filter: saturate(180%) blur(20px);
      /* {bg}; to support dark mode later */
    }
  `;

const Root = styled(Box)`
  ${unfixed};
  width: 100%;
  z-index: 1000;
  ${fixed};
  @media print {
    display: none;
  }
`;

export const Content = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  padding-left: ${theme.space[3]}px;
  @media (min-width: ${theme.breakpoints[2]}em) {
    padding: 0 ${theme.space[4]}px;
  }
`;

const ToggleContainer = styled(Flex)`
  align-items: center;
  justify-content: center;
  min-width: 64px;
  min-height: 44px;
  cursor: pointer;
  user-select: none;
  margin-left: auto;
  z-index: 1000;
  @media (min-width: 56em) {
    display: none;
  }
`;

const Header = ({ color, dark, bgColor, ...props }) => {
  const [scrolled, setScrolled] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [muted, setMuted] = useState(false);
  const [mobile, setMobile] = useState(false);

  const baseColor = dark
    ? color || 'white'
    : color === 'white' && scrolled
    ? 'black'
    : color;
  const toggleColor = dark
    ? color || 'snow'
    : toggled || (color === 'white' && scrolled)
    ? 'slate'
    : color;

  useEffect(() => {
    bindScroll(true);
    if (typeof window !== 'undefined') {
      const mobileQuery = window.matchMedia('(max-width: 48em)');
      mobileQuery.addListener(() => {
        setMobile(true);
        setToggled(false);
      });
    }
    return () => {
      bindScroll(false);
    };
  }, []);

  useEffect(() => {}, [scrolled]);

  const bindScroll = (add) => {
    if (typeof window !== 'undefined' && !props.unfixed) {
      window[add ? 'addEventListener' : 'removeEventListener'](
        'scroll',
        onScroll
      );
    }
  };

  const onScroll = () => {
    const newState = window.scrollY >= 16;
    const oldState = scrolled;

    if (newState !== oldState) {
      setScrolled(newState);
    }

    if (window.scrollY >= 16) {
      setScrolled(() => true);
    } else {
      setScrolled(() => false);
    }
  };

  const handleToggleMenu = () => {
    setToggled(!toggled);
  };

  const handleMute = () => {
    setMuted(!muted);
  };

  return (
    <Root
      {...props}
      key="nav"
      fixed={fixed}
      scrolled={scrolled}
      toggled={toggled}
      dark={dark}
      bgColor={bgColor || (dark ? [32, 34, 36] : [255, 255, 255])}
      as="header"
    >
      <Content>
        <Flag scrolled={scrolled || fixed} />
        <Navigation
          as="nav"
          aria-hidden={!!mobile}
          color={baseColor}
          dark={dark}
          muted={muted}
          handleMute={handleMute}
          music={true}
        />
        <ToggleContainer color={toggleColor} onClick={handleToggleMenu}>
          <Icon glyph={toggled ? 'view-close' : 'menu'} />
        </ToggleContainer>
      </Content>
      <Navigation
        as="nav"
        aria-hidden={!mobile}
        isMobile
        toggled={toggled}
        color={baseColor}
        dark={dark}
        music={false}
      />
      {toggled && <ScrollLock />}
    </Root>
  );
};

export default Header;
