import styled from 'styled-components';
import tw from 'twin.macro';

const FooterContainer = styled.div`
  ${tw`
    w-full  
    bg-secondary
`}
`;

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
  col-start-1
  text-white
  col-span-3
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
  col-start-9
  col-span-4
  text-color-secondary
  md:col-start-1
  md:col-span-12
  my-auto
  mx-auto
  
`}
`;

const SectionIcons = styled.div`
  ${tw`
  text-color-secondary
  text-right
  md:text-center
  grid
  grid-cols-5
  gap-4
`}
`;

const SectionIconText = styled.div`
  ${tw`
  text-right
  md:text-left
  md:m-2
`}
`;

const SectionCard1 = styled.div`
  ${tw`
  w-full
  col-span-12
  mx-auto
  my-auto
  grid
  grid-cols-footer
  mid:grid-cols-footerMid
  md:grid-cols-footerMd
  gap-7
  place-items-center
  lg:justify-center
  my-4
  md:my-0
  `}
`;

const SectionText = styled.div`
  ${tw`
  col-start-1 
  col-span-5
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
  col-start-8
  col-span-5
  lg:col-span-12
  md:mx-auto
  my-auto
  px-4
  grid
  gap-4
  grid-flow-col-dense
  sm:grid-rows-2
  sm:grid-cols-2
  justify-items-center
  md:my-4
  lg:pt-4
`}
`;

export {
  FooterContainer,
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
};

const FooterCards = styled.div`
  ${tw`
  w-full
  h-auto
  rounded-xl
  mx-auto
`}
`;

const CardContainer = styled.div`
  ${tw`
  grid
  bg-black 
  py-4
  grid-flow-col
  rounded-xl
  auto-cols-auto
`}
`;

const FooterCardImg = styled.div`
  ${tw`
  px-4
  justify-center
`}
`;

const FooterCardText = styled.div`
  ${tw`
  px-2 
  `}
`;

const FooterCardTextSmall = styled.div`
  ${tw`
  font-normal
  text-base
  sm:text-sm
  text-color-secondary
  font-roboto
  justify-center
  my-4
  `}
`;

export { FooterCards, CardContainer, FooterCardText, FooterCardImg, FooterCardTextSmall };
