import styled from 'styled-components';
import tw from 'twin.macro';

// First Row Styles
export const FooterContainer = styled.div`
  ${tw`
    w-full
    bg-secondary
    mt-40
    overflow-x-hidden
`}
`;

export const SecondaryContainer = styled.div`
  ${tw`
    flex
    flex-row
    sm:flex-col
    justify-between
    items-start
    sm:items-center
    w-full
    mt-8
  `}
`;

export const Logo = styled.img`
  ${tw`
    w-10
    h-auto
    sm:hidden
  `}
`;

export const IconContainer = styled.div`
  ${tw`
    flex
    flex-row
    flex-wrap
    justify-end
    mb-2
    sm:w-full
    sm:justify-between
  `}
`;

// Grid Styles (Row 2)
export const Grid = styled.div`
  ${tw`
    grid
    grid-cols-track
    bg-secondary
    gap-4
    overflow-x-hidden
    mt-4
  `}
`;

export const EmptyDiv = styled.div`
  ${tw`
    bg-transparent
    h-auto
    lg:hidden
  `}

  min-height: 175px;
`;

// Final Row Styles
export const LogoContainer = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 30px;

  @media (max-width: 640px) {
    margin-top: 20px;
    width: 70%;
  }
`;

// Check css from here onwards.
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
  pr-2
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
