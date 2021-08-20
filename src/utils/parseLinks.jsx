/* eslint-disable max-len */
import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

const NonStyledLink = styled.a`
  ${tw`
    no-underline
    font-medium
    text-gray-400
  `}
`;

export const renderData = (contentNext, isDark) => {
  const render = (key, index) => {
    switch (key.split('-')[0]) {
      case 'body':
        return contentNext[key];
      case 'link':
        return (
          <NonStyledLink
            style={{ color: isDark ? '#17171D' : '' }}
            key={index}
            href={contentNext[key].href}
          >
            {contentNext[key].text}
          </NonStyledLink>
        );
      default:
        return contentNext[key];
    }
  };

  return Object.keys(contentNext).map((key, index) => render(key, index));
};
