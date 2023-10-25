import styled from 'styled-components';
import tw from 'twin.macro';
import { Container, Heading4, NavText, Body1, Body2 } from '..';

export const AboutBox = styled.div`
  ${tw`
    flex
    flex-row
    text-lg
    w-[851px]
    m-4
    p-5
    `}
    background: #080822;
    ;
`;

export const Para = styled.p`
    ${tw`
    flex
    flex-col
    mx-5
    
    `}
`;
export const Content = styled.p`
    ${tw`
    my-5
    text-neutral-white-600
    `}
`;

export const LogoCont = styled.span`
  ${tw`
  w-[250px]
`}
`;

export const LogoImg = styled.img`
    ${tw`
    w-full
    `}
`;