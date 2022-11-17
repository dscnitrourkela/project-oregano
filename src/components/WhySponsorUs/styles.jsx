import styled from 'styled-components';
import tw from 'twin.macro';

import { Heading3, ButtonMeta, Body2 } from '../shared';

export const Wrapper = styled.section`
  ${tw`
   flex-col
   self-center
   max-w-mid
   lg:max-w-none
 `}
`;
export const SponsorGrid = styled.section`
  ${tw`
  lg:m-auto
  rounded-3xl
  bg-color-back
  px-6
  mx-4
  break-words 
  flex
  flex-col-reverse
  self-center
  lg:bg-transparent
  lg:grid
  lg:gap-6
  lg:grid-cols-10
  // lg:pr-6 
  // lg:pl-0
 `}
`;
export const ContentContainer = styled.div`
  ${tw`
  m-auto
  row-span-1 
  col-span-4
  pt-6
  flex-col
  justify-center
  lg:pr-32
  `}
`;
export const VidBlock = styled.div`
  ${tw`
  pt-5
  m-auto 
  row-span-1 
  row-start-3 
  // sm:max-w-mid
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
  lg:pt-6 
  // max-w-mid
  // lg:max-w-md
  lg:w-80
`}
`;

export const ContentTextSm = styled.div`
  ${tw`
  text-justify 
  px-6
  lg:px-0
  m-auto 
  // lg:ml-0
  // lg:max-w-xs
  lg:hidden
  row-start-2
  block
  `}
`;
export const ContentTextlg = styled(ButtonMeta)`
  ${tw`
  text-justify 
  // lg:max-w-xs
  hidden 
  lg:block
  // w-auto
  lg:w-80
  `}
  color: #8c8c8c;
`;
export const Heading = styled(Heading3)`
  ${tw`
  pb-2
  px-6
  // text-center
  // items-center
  block
  row-start-1
  lg:hidden
  // sm:pl-0
  // sm:m-auto
`}
`;

export const Tagline = styled(ButtonMeta)`
  ${tw`
  text-justify 
  px-6
  pb-4
  lg:px-0
  // m-auto 
  // lg:ml-0
  // lg:max-w-xs
  lg:hidden
  row-start-2
  block
  // sm:pl-0
  // sm:m-auto

  `}
  color: #a3a3a3;
`;

export const TitleTextlg = styled(Heading3)`
  ${tw`
  tracking-wide
  pb-2
  row-start-1 
  hidden 
  lg:block
  `}
`;
export const Buttons = styled.div`
  ${tw`
  flex 
  flex-row 
  mt-10
  // px-2
  pb-5
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
