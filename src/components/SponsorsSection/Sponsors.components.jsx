import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { HighlightBody } from '..';

export const SponsorContainer = styled.div`
  display: grid;
  gap: 20px;
  @media (max-width: 870px) {
    grid-template-columns: repeat(2, minmax(85px, 1fr));
  }
  grid-template-columns: repeat(8, minmax(85px, 1fr));
`;

export const HeadingSection = styled.div`
  @media (max-width: 1200px) {
    max-width: 100vw;
  }
  max-width: 50vw;
  ${tw`p-8`}
`;

export const HeadText = styled(HighlightBody)`
  ${tw`text-gray-400 mt-1`}
  & >* {
    ${tw`text-color-primary cursor-pointer no-underline`}
  }
`;

const SponsorLogo = styled.div`
  ${tw`p-4 m-auto justify-center align-middle`}
  & >* {
    ${tw`h-20`}
  }
`;

export const SponsorIcon = ({ pic, alt }) => (
  <SponsorLogo>
    <img src={`${pic}.png`} alt={alt} />
  </SponsorLogo>
);
