import styled from 'styled-components';
import tw from 'twin.macro';
import { Heading3 } from '../shared';

export const SectionContainer = styled.div`
  ${tw`
    w-full
    h-auto
    min-h-screen
    overflow-x-hidden
    overflow-y-hidden
    flex
    flex-col
    items-start
    justify-center
  `}
`;

export const HeroBody = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    text-white
    flex-col
    overflow-x-hidden
    overflow-y-hidden
    w-full
    `}
`;

export const HeroTitle = styled.div`
  ${tw`
    flex
    justify-center
    gap-3
    items-center
    flex-col
    px-5
    `}
`;

export const HeroHeading = styled.img`
  ${tw`
    object-contain
    h-16
    sm:h-28
    `}
`;

export const SubTitle = styled.p`
  ${tw`
    tracking-[0.26em]
    text-lg
    text-center
    sm:tracking-wider
    sm:text-2xl
    font-Inter
    font-bold
    `}
`;

export const Tagline = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
    font-Inter
    mt-9
    sm:mt-16
    `}
`;

export const TagHead = styled(Heading3)`
  font-weight: 590;
  ${tw`
    font-Inter
  `}
`;

export const TaglineText = styled.p`
  ${tw`
    mt-5
    text-center
    text-color-secondary
    font-Inter
    px-5
    text-sm
    sm:text-lg
    `}
`;

export const HeroButtons = styled.div`
  ${tw`
    flex
    sm:flex-row
    flex-col
    justify-center
    items-center
    mt-9
    sm:mt-16
    `}
`;
