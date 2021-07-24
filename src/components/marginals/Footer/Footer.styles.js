import styled from 'styled-components';
import tw from 'twin.macro';

const Grid = styled.div`
  ${tw`
    grid 
    grid-cols-12
    min-w-full
    bg-secondary
    p-4
`}
`;

const SectionLogo = styled.div`
  ${tw`
  col-start-2
  text-white
  col-span-3
  mid:col-start-1
  text-left
  md:hidden
  grid
  lg:grid-cols-6
  grid-cols-9
  
`}
`;

const SectionLogoImg = styled.div`
  ${tw`
  inline-block
  text-left
`}
`;

const SectionLogoText = styled.div`
  ${tw`
  inline-block
  m-0
  lg:col-span-4
  col-span-7
  col-start-2
  mx-1
  lg:my-1

`}
`;

const SectionIcon = styled.div`
  ${tw`
  col-start-8
  col-span-4
  mid:col-start-8
  mid:col-span-5
  text-color-secondary
  
  md:col-start-1
  md:col-span-12
  my-auto
  mx-auto
  
`}
`;

const SectionIcons = styled.div`
  ${tw`
  text-white
  text-right
  md:text-center
  grid
  grid-cols-5
  gap-4
`}
`;

const SectionIconText = styled.div`
  ${tw`
  text-white
  text-right
  md:text-left
  md:m-2
`}
`;

const SectionCard1 = styled.div`
  ${tw`
  col-start-2
  col-span-4
  md:col-span-12
  mid:col-start-1
  row-span-2
  md:row-span-1
  m-4
  my-auto
  mx-auto
`}
`;

const SectionCard2 = styled.div`
  ${tw`
  md:col-start-1
  col-start-7
  col-span-6
  lg:col-start-7
  md:col-span-12
  row-span-2
  md:row-span-1
  m-4
  my-auto
  mx-auto
`}
`;

const SectionText = styled.div`
  ${tw`
  col-start-2 
  col-span-5
  mid:col-start-1
  row-span-1 
  text-color-secondary 
  lg:col-span-12
  lg:mx-auto
  my-auto
  text-left
  lg:row-start-5
  lg:py-4
`}
`;

const SectionOrganiser = styled.div`
  ${tw`
  col-start-7
  md:col-start-1
  col-span-5
  lg:col-span-5  
  lg:col-span-12
  md:mx-auto
  my-auto
  px-4
  grid
  gap-4
  grid-flow-col-dense
  grid
  sm:grid-rows-2
  sm:grid-cols-2
  justify-items-center
  md:my-4
  lg:pt-4
`}
`;

export {
  Grid,
  SectionLogo,
  SectionLogoImg,
  SectionLogoText,
  SectionIcon,
  SectionIcons,
  SectionIconText,
  SectionText,
  SectionOrganiser,
  SectionCard1,
  SectionCard2,
};

const FooterCardContainer = styled.div`
  ${tw`
  grid
  grid-cols-21 
  lg:w-315 
  md:w-420
  xl:w-360
  w-420 
  bg-black 
  p-4 
  pb-4
  rounded-xl
  sm:w-315
  mobile:w-270
  my-4
`}
`;

const FooterCardImg = styled.div`
  ${tw`
  col-start-2
  col-span-3
  pr-4
  mobile:col-start-1
`}
`;

const FooterCardText = styled.div`
  ${tw`
  px-2 
  text-white 
  col-start-6 
  col-span-15
  lg:col-start-7
  mobile:col-start-6
  `}
`;

const FooterCardTextSmall = styled.div`
  ${tw`
  text-color-secondary
  lg:text-sm
  text-base
  md:text-base
  sm:text-sm
  font-roboto
  my-4
  `}
`;

export { FooterCardContainer, FooterCardText, FooterCardImg, FooterCardTextSmall };
