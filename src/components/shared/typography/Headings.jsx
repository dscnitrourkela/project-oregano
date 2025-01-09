import styled from 'styled-components';
import tw from 'twin.macro';

export const H1 = styled.h1`
  ${tw`text-4xl font-poppins py-[0.45rem] md:py-2 font-semibold leading-tight tracking-tighter sm:text-5xl md:text-6xl`}
  background: linear-gradient(91deg, #E84B7D 0.34%, #B02753 99.81%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const H2 = styled.h2`
  ${tw`text-2xl font-satoshi font-semibold leading-snug tracking-normal sm:text-3xl md:text-4xl`}
`;

export const H3 = styled.h3`
  ${tw`text-xl font-prompt font-medium leading-snug tracking-normal sm:text-2xl md:text-3xl`}
`;

export const Paragraph = styled.p`
  ${tw`text-white font-inter text-base font-normal leading-relaxed text-justify sm:text-lg md:text-xl`}
`;
