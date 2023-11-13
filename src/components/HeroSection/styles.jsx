import styled from 'styled-components';
import tw from 'twin.macro';
import { Body1 } from '../shared';

export const SectionContainer = styled.div`
  ${tw`
    w-full
    h-auto
    min-h-screen
    overflow-x-hidden
    overflow-y-hidden
    flex
    flex-row
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
    gap-2
    items-center
    flex-col
    px-36
    md:px-12
    mx-10
    mt-32
  `}
`;

export const HeroInside = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    flex-row
    px-0
    gap-0
    sm:gap-0
    w-full
  `}
`;

export const ContentBlock = styled.div`
  ${tw`
    sm:max-w-sm
    md:max-w-xl
    lg:max-w-3xl
  `}
`;

export const HACKimg = styled.img`
  ${tw`
    flex
    justify-center
    items-center
    w-40
    sm:w-48
    md:w-72
    lg:w-96
    flex-row
    px-2
    gap-3
  `}
  @media (max-width: 320px) {
    ${tw`w-32`}
  }
`;

export const NITRimg = styled.img`
  ${tw`
    w-40
    sm:w-48
    md:w-72
    lg:w-96
 `}
  @media (max-width: 320px) {
    ${tw`w-32`}
  }
`;

export const HeroHeadingBase = styled.div`
  ${tw`
      flex
      justify-end
      w-full
  `}
`;

export const FIVEimg = styled.img`
  ${tw`
    w-12
    sm:w-12
    md:w-24
    lg:w-28
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

export const TaglineText = styled(Body1)`
  ${tw`
    mt-4
    text-left
    md:text-center
    lg:text-center
    text-xs
    leading-6
    md:text-base
    lg:text-lg
    px-4
  `}
`;

export const HeroButtons = styled.div`
  ${tw`
    flex
    sm:flex-row
    flex-row
    justify-center
    items-center
    mt-4
 `}
`;
