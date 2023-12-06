import styled from 'styled-components';
import tw from 'twin.macro';
import { Body1, Heading1 } from '../shared';

export const AboutContainer = styled.div`
  ${tw`
    w-11/12
    h-auto
    flex
    flex-col
    items-center
    justify-center
    min-h-screen
  `}
  height: fit-content;
  margin: 2% auto 3%;
`;
export const AboutContent = styled(Body1)`
  ${tw`
    mt-5
    mb-12
    w-[80%]
    text-base	 
    `}
  @media (max-width: 800px) {
    text-align: justify;
  }
`;
export const Heading = styled(Heading1)`
  ${tw`
  text-center
  mt-5
  m-auto
  leading-[96px]
  text-[64px]
`}
  font-weight: 700;
  @media (max-width: 761px) {
    color: var(--neutral-1, #fff);
    font-size: 32px;
    font-style: normal;
    line-height: 96px;
  }
`;
