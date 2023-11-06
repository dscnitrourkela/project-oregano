import styled from 'styled-components';
import tw from 'twin.macro';
import { Heading1, Heading3, Heading4 } from '../shared';

export const SponsorLogo = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    `}
`;

export const AlphaLogoContainer = styled.div`
  ${tw`
    grid
    md:grid-cols-3
    grid-cols-1
    md:gap-[120px]
    gap-[24px]
    `}
`;

export const AlphaContainer = styled.div`
  ${tw`
    flex
    flex-col
    text-center
    md:gap-[48px]
    gap-[32px]
    `}
`;

export const AlphaSponsors = styled.div`
  padding: 26px 60px;
  width: 90%;
  margin: 82px auto 64px auto;
  border-radius: 12px;
  background: linear-gradient(182deg, #464646 -65%, rgba(70, 70, 70, 0.15) 98.55%);
  position: relative;
  &:hover {
    background: linear-gradient(
      180deg,
      rgba(53, 225, 255, 0.4) -6.4%,
      rgba(58, 58, 58, 0.15) 99.89%
    );
  }

  @media (max-width: 761px) {
    background: linear-gradient(
      180deg,
      rgba(53, 225, 255, 0.4) -6.4%,
      rgba(58, 58, 58, 0.15) 99.89%
    );
    padding: 12px 24px;
    margin: 24px auto;
  }
  &::before {
    content: '';
    position: absolute; /* Position the pseudo-element absolutely */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(
      180deg,
      rgba(53, 225, 255, 0.4) -6.4%,
      rgba(58, 58, 58, 0.15) 99.89%
    );
    transition: opacity 0.5s linear;
    z-index: -1;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const SponsorHeader = styled(Heading1)`
  ${tw`
    text-center
    leading-[96px]
    text-[64px]
    `}
    font-weight: 700;
  @media (max-width: 761px) {
    color: var(--neutral-1, #FFF);
    font-size: 32px;
    font-style: normal;
    line-height: 96px; /* 300% */
`;

export const AlphaHeader = styled(Heading3)`
  ${tw`
text-center
leading-[48px]
text-[32px]
`}
  font-weight: 600;
  @media (max-width: 761px) {
    color: var(--neutral-1, #fff);
    font-size: 20px;
    font-style: normal;
    line-height: 48px; /* 240% */
    text-transform: capitalize;
  }
`;

export const SmallHeader = styled(Heading4)`
  ${tw`
text-center
leading-[36px]
text-[24px]
`}
  font-weight: 600;
  @media (max-width: 761px) {
    color: var(--neutral-1, #fff);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px; /* 200% */
  }
`;

export const BetaLogoContainer = styled.div`
  ${tw`
    grid
    md:grid-cols-6
    md:grid-rows-1
    grid-cols-2
    grid-rows-3
    md:gap-x-[24px]
    gap-x-[24px]
    gap-y-[16px]
    `}
`;

export const BetaContainer = styled.div`
  ${tw`
    flex
    flex-col
    text-center
    md:gap-[48px]
    gap-[32px]
    `}
`;

export const BetaSponsors = styled.div`
  padding: 32px 42px;
  width: 90%;
  margin: 64px auto 64px auto;
  border-radius: 12px;
  background: linear-gradient(182deg, #464646 -65%, rgba(70, 70, 70, 0.15) 98.55%);
  position: relative;
  &:hover {
    background: linear-gradient(180deg, rgba(20, 241, 149, 0.4) 0%, rgba(58, 58, 58, 0.15) 100%);
  }

  @media (max-width: 761px) {
    background: linear-gradient(180deg, rgba(20, 241, 149, 0.4) 0%, rgba(58, 58, 58, 0.15) 100%);
    padding: 12px 24px;
    margin: 24px auto;
  }
  &::before {
    content: '';
    position: absolute; /* Position the pseudo-element absolutely */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(180deg, rgba(20, 241, 149, 0.4) 0%, rgba(58, 58, 58, 0.15) 100%);
    transition: opacity 0.5s linear;
    z-index: -1;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const BottomContainer = styled.div`
  ${tw`
    flex
    md:flex-row
    flex-col
    w-[90%]
    mx-auto
    text-center
    md:gap-x-[21px]
    gap-y-[24px]
    `}
`;

export const GammaLogoContainer = styled.div`
  ${tw`
    grid
    md:grid-cols-5
    md:grid-rows-1
    grid-cols-4
    grid-rows-2
    md:gap-x-[28px]
    gap-x-[24px]
    gap-y-[16px]
    `}
`;

export const GammaContainer = styled.div`
  ${tw`
    flex
    flex-col
    text-center
    md:gap-[32px]
    gap-[16px]
    `}
`;

export const GammaSponsors = styled.div`
  padding: 16px 32px;
  width: 90%;
  margin: 0px auto;
  border-radius: 12px;
  background: linear-gradient(182deg, #464646 -65%, rgba(70, 70, 70, 0.15) 98.55%);
  position: relative;
  &:hover {
    background: linear-gradient(180deg, rgba(176, 103, 255, 0.6) 0%, rgba(58, 58, 58, 0.15) 100%);
  }

  @media (max-width: 761px) {
    background: linear-gradient(180deg, rgba(176, 103, 255, 0.6) 0%, rgba(58, 58, 58, 0.15) 100%);
    padding: 12px 24px;
  }
  &::before {
    content: '';
    position: absolute; /* Position the pseudo-element absolutely */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(180deg, rgba(176, 103, 255, 0.6) 0%, rgba(58, 58, 58, 0.15) 100%);
    transition: opacity 0.5s linear;
    z-index: -1;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const DeltaLogoFirst = styled.div`
  ${tw`
      flex
      flex-row
      md:gap-[48px]
      gap-[24px]
  `}
`;

export const DeltaLogoSecond = styled.div`
  ${tw`
      flex
      flex-row
      md:gap-[78px]
      gap-[24px]
  `}
`;

export const DeltaLogoContainer = styled.div`
  ${tw`
      flex
      flex-col
      md:gap-[32px]
      gap-[16px]
      items-center
      justify-center
      `}
`;

export const DeltaContainer = styled.div`
  ${tw`
      flex
      flex-col
      text-center
      md:gap-[32px]
      gap-[16px]
      `}
`;

export const DeltaSponsors = styled.div`
  padding: 16px 32px;
  width: 90%;
  margin: 0px auto;
  border-radius: 12px;
  background: linear-gradient(182deg, #464646 -65%, rgba(70, 70, 70, 0.15) 98.55%);
  position: relative;
  &:hover {
    background: linear-gradient(180deg, rgba(255, 63, 192, 0.6) 0%, rgba(58, 58, 58, 0.15) 100%);
  }

  @media (max-width: 761px) {
    background: linear-gradient(180deg, rgba(255, 63, 192, 0.6) 0%, rgba(58, 58, 58, 0.15) 100%);
    padding: 12px 24px;
  }
  &::before {
    content: '';
    position: absolute; /* Position the pseudo-element absolutely */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(180deg, rgba(255, 63, 192, 0.6) 0%, rgba(58, 58, 58, 0.15) 100%);
    transition: opacity 0.5s linear;
    z-index: -1;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
`;
