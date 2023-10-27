import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Wrapper = styled.div`
  ${tw`
    w-full
    relative
  `}
`;

function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Layout;
