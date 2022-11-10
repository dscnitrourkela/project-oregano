import styled from 'styled-components';
import tw from 'twin.macro';

export const SponsorGrid = styled.section`
  ${tw`
  m-auto
  grid
  lg:gap-2
  break-words 
  lg:grid-cols-10
 `}
`;
export const GridBox = styled.div`
  ${tw`
  m-auto
  text-6xl 
  row-span-1 
  lg:col-start-1 
  lg:col-end-5 
  `}
`;
export const VidBlock = styled.div`
  ${tw`
  px-4 
  pt-8
  lg:max-w-2xl 
  // // w-max
  // lg:w-max
  m-auto 
  row-span-1 
  row-start-3 
   max-w-md
  rounded-t-3xl
  lg:rounded-3xl
  lg:row-start-1
  lg:px-0 
  lg:pt-0
  lg:m-auto 
  lg:col-start-5 
  lg:col-end-10 
  `}
`;
export const ContentContainer = styled.div`
  ${tw`
  pt-6
  max-w-md
  text-white
  flex-col
  justify-center
  items-start
  px-2
  lg:px-0
  `}
`;

export const Buttons = styled.div`
  ${tw`
  flex 
  flex-row 
  mt-10
  px-2
  lg:px-0 
  lg:place-items-center
  lg:mx-auto
  `}
`;
export const DescText = styled.p`
  ${tw`
  text-justify
  lg:pt-4 
  lg:max-w-xs
  max-w-md
  px-2
  lg:px-0
`}
`;
export const ContentTextSm = styled.div`
  ${tw`
  text-justify 
  px-6
  lg:px-0
  m-auto 
  // lg:ml-0
  lg:max-w-xs
  lg:hidden
  row-start-2
  block
  `}
`;
export const ContentTextlg = styled.div`
  ${tw`
  text-justify 
  lg:max-w-xs
  hidden 
  lg:block
  `}
`;
export const TitleTextSm = styled.div`
  ${tw`
  // tracking-wide
  text-3xl
  pb-2
  text-center
  items-center
  block
  row-start-1
  lg:hidden
  `}
`;
export const TitleTextlg = styled.div`
  ${tw`
  tracking-wide
  pb-2
  row-start-1 
  hidden 
  lg:block
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
