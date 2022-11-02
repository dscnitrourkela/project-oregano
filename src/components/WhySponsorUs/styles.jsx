import styled from 'styled-components';
import tw from 'twin.macro';

export const SponsorGrid = styled.section`
  ${tw`
  rounded-3xl
  bg-color-back
  md:bg-black
  py-4
  grid
  break-words 
  overflow-hidden
  lg:grid-cols-10
 `}
`;
export const GridBox = styled.div`
  ${tw`
  flex
  m-auto
  p-4 
  text-6xl 
  row-span-1 
  // justify-center
  lg:col-start-2 
  lg:col-end-5 
  `}
`;
export const VidBlock = styled.image`
  ${tw`
  px-4 
  pt-2
  max-w-lg 
  text-6xl 
  row-span-1 
  row-start-3 
  m-auto

  rounded-3xl
  lg:row-start-1
  lg:px-0 
  lg:pt-0
  lg:m-auto 
  lg:col-start-5 
  lg:col-end-12 
  `}// @media only screen and (min-width: 1200px) {
  //   height: 430px;
  // }
`;
export const ContentContainer = styled.div`
  ${tw`
  p-0
  text-white
  flex-col
  justify-center
  items-start
  `}
`;

export const Buttons = styled.div`
  ${tw`
  flex 
  flex-row 
  // justify-evenly
  mt-10 
  lg:place-items-center 
  lg:mx-auto
  `}
`;
export const DescText = styled.p`
  ${tw`
  // m-auto
  text-sm 
  text-white 
  lg:pt-9 
  pt-4
  lg:max-w-xs
  max-w-md
`}
`;
export const ContentTextSm = styled.div`
  ${tw`
  text-color-primary
  text-xs 
  text-justify 
  sm:m-auto 
  lg:ml-0
  lg:max-w-xs
  lg:hidden
  row-start-2
  block
  `}
`;
export const ContentTextlg = styled.div`
  ${tw`
  text-xs 
  text-justify 
  // sm:m-auto 
  lg:max-w-xs
  hidden 
  lg:block
  `}
`;
export const TitleTextSm = styled.div`
  ${tw`
  text-3xl
  pb-4
  text-white
  text-center
  items-center
  block
  row-start-1
  lg:hidden
  `}
`;
export const TitleTextlg = styled.div`
  ${tw`
  // text-3xl 
  pb-4
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
// export const TagLine = styled.p`
//   ${tw`
//   text-sm
//   text-white
//   pt-8
//   max-w-none
//   md:max-w-xs
//   `}
// `;
