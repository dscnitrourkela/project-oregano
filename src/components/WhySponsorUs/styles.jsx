import styled from 'styled-components';
import tw from 'twin.macro';

import { ButtonMeta, Body2 } from '../shared';

export const Wrapper = styled.section`
  ${tw`
  flex
  flex-col
  gap-6
  max-w-2xl
  w-full
  lg:max-w-none
 `}
`;
export const SponsorGrid = styled.section`
  ${tw`
  rounded-4xl
  bg-background-dark
  p-3
  pb-4
  lg:p-0
  flex
  flex-col-reverse
  gap-4
  lg:bg-transparent
  lg:grid
  lg:gap-6
  lg:grid-cols-10
 `}
`;
export const ContentContainer = styled.div`
  ${tw`
  h-auto
  flex
  flex-col
  gap-5
  lg:gap-9
  items-start
  justify-center
  col-span-4
  lg:py-6
  lg:max-w-[384px]
  `}
`;
export const VidBlock = styled.div`
  ${tw`
  lg:max-w-[690px]
  w-full
  lg:m-auto 
  lg:col-span-6
  `}
`;

export const HeadContainer = styled.div`
  ${tw`
  hidden
  lg:flex
  flex-col
  gap-3
  `}
`;

export const DescText = styled(Body2)`
  ${tw`
  text-left
`}
`;

export const ContentTextSm = styled.div`
  ${tw`
  text-justify 
  px-6
  lg:px-0
  m-auto 
  lg:hidden
  row-start-2
  block
  `}
`;

export const ContentTextlg = styled(ButtonMeta)`
  ${tw`
  text-justify 
  hidden 
  lg:block
  lg:w-96
  `}
  color: #8c8c8c;
`;

export const HeadContainerMob = styled(HeadContainer)`
  ${tw`
  flex
  lg:hidden
  `}
`;

export const Buttons = styled.div`
  ${tw`
  flex
  gap-3
  lg:gap-6
  flex-row 
  `}
`;
