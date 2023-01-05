import styled from 'styled-components';
import tw from 'twin.macro';

export const Header = styled.h1`
  font-weight: 590;
  ${tw`
    text-white
    text-4xl
    `}
`;

export const Wrapper = styled.div`
  border: 2px solid transparent;
  transition: 0.8s;
  .saber-img {
    & > .fix {
      opacity: 0;
      ${tw`right-0`}
    }

    & > .movable {
      opacity: 0;
      right: 10px;
      transform: translateX(-70%);
    }
  }
  &:hover {
    border: 2px solid ${(props) => props.brcol};

    .saber-img {
      & > .fix {
        opacity: 1;
      }

      & > .movable {
        opacity: 1;
        transform: translateX(0%);
      }
    }
  }

  @media (max-width: 720px) {
    border: 2px solid ${(props) => props.brcol};
    .saber-img {
      & > .fix {
        opacity: 1;
        ${tw`right-0`}
      }
      & > .movable {
        opacity: 1;
        transform: translateX(2%);
        ${tw`right-2`}
      }
    }
  }
  ${tw`
    flex
    flex-col
    gap-0
    md:gap-7
  bg-background-dark
    rounded-xl
    md:rounded-3xl
    p-5
    md:py-12
    md:px-9
    `}
  @media (max-width: 900px) {
    grid-column: span 7;
  }
`;

export const SectionContainer = styled.div`
  ${tw`
    flex
    flex-col
    gap-3
  `}
`;

export const Saber = styled.div`
  ${tw`
    flex
    // gap-2
    overflow-hidden
  `}
  &>img {
    ${tw`
      relative 
      right-full
      opacity-0
      md:h-auto
      h-4
      object-contain
    `}
    @media (min-width: 768px) {
      margin-left: -10px;
    }
    transition: all 0.5s linear;
  }
  & > .fix {
    margin-left: -4px;
  }
  & > .movable {
    margin-left: -2px;
  }
`;

export const SponsorContainer = styled.div`
  ${tw`
    w-full
    grid
    gap-[10px]
    justify-center
  `}
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  @media (max-width: 1380px) {
    grid-template-columns: repeat(auto-fit, minmax(85px, 1fr));
  }
  @media (max-width: 639px) {
    grid-template-columns: repeat(2, minmax(50px, 1fr));
  }
`;

export const SponsorLogo = styled.div`
  ${tw`
    p-3 
    m-auto
    justify-center
    align-middle
  `}
`;