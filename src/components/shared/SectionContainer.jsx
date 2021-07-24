import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.section`
  ${tw`
    min-h-screen
    w-full
    h-auto
    overflow-x-hidden
    overflow-y-auto
    flex
    flex-col
    items-start
    justify-center
  `}
`;

function Layout({ children }) {
  return <Container>{children}</Container>;
}

export default Layout;
