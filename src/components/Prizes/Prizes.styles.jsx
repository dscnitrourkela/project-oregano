import styled from 'styled-components';

const smallScreen = '768px';
const mediumScreen = '1024px';
const largeScreen = '1280px';

export const PrizesContainerWrapper = styled.div`
  padding-left: 0;

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
  align-items: center;
  font-size: 20px;
  color: #000;
`;

export const TotalPrizes = styled.div`
  font-family: 'Prompt';
  font-size: 40px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;
  background: transparent;
  
`;

export const Box = styled.div`
  width: 400px;
  height: ${(props) => (props.expanded ? '546px' : '360px')};
  border-radius: 12px;
  background: #272727;
  margin: 10px;
  transition: height 1s, box-shadow 1s;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
  box-shadow: 0 8px 16px 0 #272727;
  margin-bottom: 24px;

  &:hover {
    box-shadow: 0 16px 32px 0 ${(props) => props.shadowColor || '#272727'};
  }

  @media (max-width: ${mediumScreen}) {
    width: 100%;
    height: ${(props) => (props.expanded ? '500px' : '380px')};
  }

  @media (max-width: ${smallScreen}) {
    width: 90%;
    height: ${(props) => (props.expanded ? '480px' : '360px')};
  }
`;
export const PrizesTitle = styled.h1`
  font-family: Prompt;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 96px;
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

export const CashPrize = styled.div`
  color: aqua;
  font-size: 18px;
  font-weight: 400;
`;

export const Swags = styled.div`
  color: #c600ff;
  font-size: 18px;
  font-weight: 400;
`;

export const Merchandise = styled.div`
  color: #00ff91;
  font-size: 18px;
  font-weight: 400;
`;