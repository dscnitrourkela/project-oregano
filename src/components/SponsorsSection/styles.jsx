import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { HighlightBody } from '..';

export const SponsorContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
  justify-content: center;
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr; */
  /* grid-template-columns: repeat(4, minmax(300px, 1fr)); */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  @media (max-width: 1380px) {
    grid-template-columns: repeat(3, minmax(80px, 1fr));
  }
  @media (max-width: 639px) {
    grid-template-columns: repeat(2, minmax(50px, 1fr));
  }
`;

export const HeadingSection = styled.div`
  @media (max-width: 1200px) {
    max-width: 100vw;
  }
  max-width: 50vw;
  ${tw`pl-0 py-0 pr-8 pt-0`}
`;

export const HeadText = styled(HighlightBody)`
  ${tw`text-gray-400 mt-1`}
  & >* {
    ${tw`text-color-primary cursor-pointer no-underline`}
  }
`;

const SponsorLogo = styled.div`
  ${tw`p-4 pl-0 m-auto justify-center align-middle`}
  & >* {
    /* ${tw` lg:w-40 md:w-36 sm:w-28`} */
  }
`;

export const SponsorIcon = ({ pic, alt, size, link, margin }) => (
  <SponsorLogo style={{ margin: margin }}>
    {pic ? (
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img src={pic} alt={alt} style={{ width: size }} />
      </a>
    ) : (
      <div />
    )}
  </SponsorLogo>
);

export const Wrapper = styled.div`
  ${tw`border-2
       border-solid
       rounded-lg
       p-5
       bg-secondary
       /* grid */
     `}
  @media (max-width: 900px) {
    grid-column: span 7;
  }
`;
