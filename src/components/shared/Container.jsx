import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Wrapper = styled.div`
  ${tw`
        w-11/12
        max-w-7xl
        my-0
        mx-auto
        p-2.5
        sm:p-0
        overflow-y-hidden
    `}
`;

export const ContainerWrapper = styled.div`
  ${tw`
    w-11/12
    flex
    flex-col
    gap-4
    items-center
    content-center
    m-auto
  `}
`;

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Container;
