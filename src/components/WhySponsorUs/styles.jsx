import styled from 'styled-components';
import tw from 'twin.macro';

import { Heading2, ButtonMeta, Body2 } from '../shared';

export const Wrapper = styled.section`
  ${tw`
   flex-col
   self-center
   max-w-2xl
   lg:max-w-none
 `}
`;
export const SponsorGrid = styled.section`
  ${tw`
  lg:m-auto
  rounded-large
  bg-color-back
  px-4
  break-words 
  flex
  flex-col-reverse
  self-center
  lg:space-x-6
  lg:bg-transparent
  lg:grid
  lg:gap-6
  lg:grid-cols-10
  overflow-hidden
 `}
`;
export const ContentContainer = styled.div`
  ${tw`
  m-auto
  row-span-1 
  col-start-1
  col-end-4
  pt-side
  flex-col
  `}
`;
export const VidBlock = styled.div`
  ${tw`
  pt-4
  self-center
  row-span-1 
  row-start-3 
  lg:max-w-none
  lg:row-start-1
  lg:px-0 
  lg:pt-0
  lg:m-auto 
  lg:col-start-5 
  lg:col-end-11 
  `}
`;

export const DescText = styled(Body2)`
  ${tw`
  text-justify
  lg:pt-8 
  lg:w-96
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
export const Heading = styled(Heading2)`
  ${tw`
  pb-3
  px-1
  lg:px-6
  block
  row-start-1
  lg:hidden
`}
`;

export const Tagline = styled(ButtonMeta)`
  ${tw`
  text-justify 
  px-2
  lg:px-6
  pb-8
  lg:px-0
  lg:hidden
  row-start-2
  block
  `}
  color: #a3a3a3;
`;

export const TitleTextlg = styled(Heading2)`
  ${tw`
  pb-2
  row-start-1 
  hidden 
  lg:block
  `}
`;
export const Buttons = styled.div`
  ${tw`
  space-x-6
  flex 
  flex-row 
  mt-7
  pb-side
  lg:px-0 
  lg:place-items-center
  lg:mx-auto
  `}
`;
export const SponsorBtn = styled.button`
  ${tw`
  inline-block 
  px-3 
  py-0 
  bg-yellow-400 
  text-white 
  font-medium 
  text-xs 
  rounded-full 
  shadow-md 
  hover:bg-yellow-500 
  hover:shadow-lg 
  focus:bg-yellow-600 
  focus:shadow-lg 
  active:bg-yellow-700 
  active:shadow-lg 
  sm:px-8 
  sm:py-3
  `}
`;
export const BrochureBtn = styled.button`
  ${tw`
  inline-block 
  p-2 
  bg-transparent 
  text-yellow-500 
  hover:text-yellow-600 
  underline 
  font-medium 
  text-xs 
  sm:px-6 
  sm:py-3
  `}
`;
