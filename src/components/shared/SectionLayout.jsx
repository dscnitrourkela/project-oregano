import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';
import { Heading1, Body } from '.';

const SectionContainer = styled.div`
  ${tw`
    w-full
    h-auto
    overflow-x-hidden
    overflow-y-hidden
    flex
    flex-col
    items-start
    justify-center
    mt-40
  `}
`;

const Description = styled(Body)`
  ${tw`
    mt-2
    w-1/2
    md:w-full
  `}
`;

const HighlightLink = styled.a`
  ${tw`
    font-normal
    text-base
    2xl:text-base
    lg:text-base
    md:text-base
    sm:text-sm
    text-color-primary
    font-roboto
    ml-2
    no-underline
  `}
`;

function Section({ children, title, description, link }) {
  return (
    <SectionContainer>
      <Heading1>{title}</Heading1>
      <Description>
        {description}
        {link && (
          <HighlightLink href={link.link} target='_blank' rel='noreferrer'>
            {link.text}
          </HighlightLink>
        )}
      </Description>
      {children}
    </SectionContainer>
  );
}

export default Section;
