import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { HighlightBody } from '..';

export const SponsorContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, minmax(300px, 1fr));
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  @media (max-width: 639px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
  @media (min-width: 639px) and (max-width: 1023px) {
    grid-template-columns: repeat(5, minmax(200px, 1fr));
  }
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
    /* ${tw` lg:w-40 md:w-36 sm:w-28`} */
  }
`;

export const SponsorIcon = ({ pic, alt, size, link }) => (
  <SponsorLogo>
    <a href={link} target='_blank' rel='noopener noreferrer'>
      <img src={pic} alt={alt} style={{ width: size }} />
    </a>
  </SponsorLogo>
);
