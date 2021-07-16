import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.section`
  ${tw`
    min-h-screen
    min-w-full
    h-auto
  `}
`;

function Layout({ children }) {
  return <Container>{children}</Container>;
}

export default Layout;
