/* eslint-disable max-len */
import styled from 'styled-components';
import { Body1, Heading1 } from '../shared';

const smallScreen = '768px';

export const PrizesContainerWrapper = styled.div`
  padding-left: 0;
  height: auto;
  @media (max-width: ${smallScreen}) {
    padding: 0 20px;
  }
`;

export const PrizesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
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
  margin-top: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 12px;
  }
`;

export const TotalPrizes = styled(Heading1)`
  font-family: 'Prompt';
  font-size: 28px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  background: transparent;
  visibility: ${(props) => (props.expanded ? 'visible' : 'hidden')};
  transition: visibility 0.5s ease-in-out;
  margin-top: 16px;
  @media (max-width: 768px) {
    font-size: 24px;
    margin-top: 12px;
  }
`;

export const Box = styled.div`
  max-width: 400px;
  height: ${(props) => (props.expanded ? '546px' : '360px')};
  border-radius: 10px;
  background: #272727;
  margin: 20px;
  transition: height 0.5s, box-shadow 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    height: ${(props) => (props.expanded ? '460px' : '350px')};
  }
`;

export const PrizesTitle = styled(Heading1)`
  text-align: center;
  margin-top: 20px;
  @media (max-width: 768px) {
    margin-top: 16px;
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
  font-size: 16px;
  &::after {
    content: '+';
    color: white;
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
