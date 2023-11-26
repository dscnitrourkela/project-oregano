import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.section`
  ${tw`
    w-full
    h-auto
    overflow-x-hidden
    overflow-y-hidden
    flex
    flex-col
    items-start
    justify-center
    min-h-screen
  `}
  height: fit-content;
  margin: 2% auto 3%;
`;

function Layout({ children }) {
  return <Container>{children}</Container>;
}

export default Layout;
