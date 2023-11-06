import styled from 'styled-components';
import { Heading1, Heading4 } from '../shared';

const smallScreen = '768px';
const mediumScreen = '1024px';

export const PrizesContainerWrapper = styled.div`
  padding-left: 0;
  height: 100vh;

  @media (max-width: ${smallScreen}) {
    padding: 0 20px;
  }
`;

export const PrizesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0;

  @media (max-width: ${smallScreen}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PrizeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  color: #000;
  visibility: hidden;
  transition: visibility 0.7s ease-in-out 0.6s;
`;

export const TotalPrizes = styled(Heading1)`
  font-family: 'Prompt';
  font-size: 40px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;
  background: transparent;
  visibility: hidden;
  transition: visibility 0.9s ease-in-out 0.8s;
`;

export const Box = styled.div`
  width: 400px;
  height: ${(props) => (props.expanded ? '546px' : '360px')};
  border-radius: 10px;
  background: #272727;
  margin: 10px;
  transition: height 1s, box-shadow 3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
  box-shadow: 0 4px 24px 0 rgba(39, 39, 39, 0.6);
  margin-bottom: 24px;

  &:hover {
    box-shadow: 0 8px 24px 0 ${(props) => props.shadowColor || '#272727'};
  }
  &:hover ${PrizeText} {
    visibility: visible;
    transition-delay: 0.3s;
  }
  &:hover ${TotalPrizes} {
    visibility: visible;
    transition-delay: 0.3s;
  }
  @media (max-width: ${mediumScreen}) {
    width: 100%;
    height: ${(props) => (props.expanded ? '500px' : '380px')};
  }
  @media (max-width: ${smallScreen}) {
    width: 90%;
    height: ${(props) => (props.expanded ? '280px' : '340px')};
  }
`;

export const PrizesTitle = styled(Heading1)`
  text-align: center;
`;

export const ExpandedHeader = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const PrizeDescriptions = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 18px;
  font-weight: 400;
`;

export const CashPrize = styled(Heading4)`
  color: aqua;
  white-space: nowrap;
  font-size: 18px;
  font-weight: 500;
  &::after {
    content: '+';
    color: white;
  }
`;

export const Swags = styled(Heading4)`
  color: #c600ff;
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;

  &::after {
    content: '+';
    color: white;
  }
`;

export const Merchandise = styled(Heading4)`
  color: #00ff91;
  font-size: 18px;
  font-weight: 500;
`;
