/* eslint-disable max-len */
import styled from 'styled-components';
import tw from 'twin.macro';
import { Body1, Heading1 } from '../shared';

const smallScreen = '768px';

export const PrizesContainerWrapper = styled.div`
  margin-top: 0px;
  padding-left: 0;
  width: 100%;
  @media (max-width: ${smallScreen}) {
    padding: 0 20px;
  }
`;

export const PrizesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: ${smallScreen}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const PrizeText = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #000;
  visibility: ${(props) => (props.expanded ? 'visible' : 'hidden')};
  transition: visibility 0.5s ease-in-out;
  bottom: 20px;
  margin-top: 32px;
  gap: 5px;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 12px;
  }
`;

export const TotalPrizes = styled(Heading1)`
  font-family: 'Prompt';
  font-size: 40px;
  line-height: 40px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: center;
  background: transparent;
  visibility: ${(props) => (props.expanded ? 'visible' : 'hidden')};
  transition: visibility 0.5s ease-in-out;
  margin-top: 16px;
  @media (max-width: 768px) {
    font-size: 24px;
    margin-top: 12px;
    line-height: 100px;
  }
`;

export const Box = styled.div`
  max-width: 400px;
 
  height: ${(props) => (props.expanded ? '546px' : '360px')};
  border-radius: 10px;
  background: #272727;
  margin: 20px ;
  align-items:center;

  transition: height 0.5s, box-shadow 0.5s;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
  margin-bottom: 20px;
  box-shadow: 0 4px 16px 0 rgba(39, 39, 39, 0.6);
  ${(props) =>
    props.expanded
      ? `
      box-shadow: 0 4px 24px 0 rgba(39, 39, 39, 0.6);
      padding:10px;
      &:hover {
        box-shadow: 0 8px 16px 0 ${props.shadowColor || '#272727'};
      }
       &:hover ${TotalPrizes} {
          visibility: visible;
           transition-delay: 0.5s;
         }
          &:hover ${PrizeText} {
            visibility: visible;
             transition-delay: 0.5s;
           }
           &:clicked
    `
      : ''}
  @media (max-width: ${smallScreen}) {
    align-items:center;
    justify-content:center;
    height: ${(props) => (props.expanded ? '460px' : '350px')};
    j
  }
  
  &:not(:hover) {
    height: 360px;
    padding: 20px;
    box-shadow: 0 4px 16px 0 rgba(39, 39, 39, 0.6);
    ${TotalPrizes}, ${PrizeText} {
      visibility: hidden;
      opacity: 0;
      transition-delay: 0.5s;
    }
`;

export const PrizesTitle = styled(Heading1)`
  ${tw`
  text-center
  mt-5
  m-auto
  leading-[96px]
  text-[64px]
`}
  font-weight: 700;
  @media (max-width: 761px) {
    color: var(--neutral-1, #fff);
    font-size: 32px;
    font-style: normal;
    line-height: 96px;
  }
`;

export const ExpandedHeader = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  font-size: 24px;
  font-weight: 600;
  @media (max-width: ${smallScreen}) {
    top: 10px;
    left: 10px;
    font-size: 20px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  @media (max-width: ${smallScreen}) {
    margin-top: 10px;
  }
`;

export const PrizeDescriptions = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CashPrize = styled(Body1)`
  color: var(--color-primary-blue);
  white-space: nowrap;
  font-size: 18px;
  line-height: 24px;
  &::after {
    content: '+';
    color: white;
    margin-left: 5px;
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Swags = styled(Body1)`
  color: var(--color-primary-purple);
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  &::after {
    content: '+';
    color: white;
    margin-left: 5px;
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Merchandise = styled(Body1)`
  color: var(--color-primary-green);
  text-align: center;
  font-size: 16px;
  @media (max-width: ${smallScreen}) {
    font-size: 14px;
  }
`;
