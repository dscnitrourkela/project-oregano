import styled from 'styled-components';
import tw from 'twin.macro';
import { Body1, Heading1 } from '../shared';

export const AboutContainer = styled.div`
  ${tw`
    flex 
    flex-col 
    items-center 
    text-center 
    mt-0 
    overflow-y-hidden 
    w-full 
    mb-12
    `}
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
    font-bold	
  `}
`;
