import styled from 'styled-components';

import { Caption, Heading4, Body1, Heading1, Heading3 } from '../shared';

export const Heading = styled(Heading1)`
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  margin: 0 auto;

  @media (max-width: 1023px) {
    font-size: 32px;
    font-style: normal;
    line-height: 96px;
  }
`;

export const SectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  align-items: center;

  @media (max-width: 1023px) {
    opacity: 0;
  }
`;

export const SectionImage = styled.img`
  width: 100%;
  max-width: 700px;
  max-height: 500px;
  position: relative;
  left: 75px;
`;

export const SectionCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-card;
  justify-content: flex-start;
  gap: 33px;
  position: relative;
  right: 103px;
`;

export const SectionBox = styled.div`
  display: flex;
  width: 440px;
  height: 205px;
  padding: 12px 24px 12px 6px;
  gap: 16px;
  border-radius: 12px;
  background: var(--Bg, linear-gradient(180deg, #464646 0%, rgba(58, 58, 58, 0.15) 100%));
  transition: width 1s ease;

  ${(props) =>
    props.expanded
      ? `
    width:600px;
   ${ProgressNumber} {
      opacity: 1;
    }
    `
      : ''}
`;

export const BoxSubDetail = styled(Body1)`
  width: 23px;
  height: 19px;
  flex-shrink: 0;
  border-radius: 20px;
  margin-bottom: 2px;
  transition: width 1s ease;
  background: ${(props) => props.background || '#02daff'};
  width: ${(props) => (props.expanded ? props.width : '23px')};
`;

export const ProgressNumber = styled.div`
  opacity: 0;
  color: #ffffff;
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  font-weight: bold;
  transition: opacity 0.3s ease-in-out;
  margin-right: 10px;
  position: relative;
  bottom: 20%;
`;

export const BoxContent = styled.div`
  flex-shrink: 0;
  gap: 19px;
  padding: 10px;
`;

export const BoxSubContent = styled(Caption)`
  line-height: 16px;
`;

export const BoxHeader = styled(Heading3)`
  font-weight: bold;
  color: ${(props) => props.color || '#02daff'};
`;

export const BoxDetail = styled(Heading4)``;

export const BoxSubHeader = styled(Caption)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #c7c7c7;
  margin-bottom: 3px;
`;

export const BoxText = styled.div`
  display: flex;
  padding: 32px 16px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
  border-radius: 8px;
`;

export const SectionContainer = styled.div`
  margin: 10px auto;
  max-width: 1540px;
  width: 100%;
  height: auto;
`;

export const MobileBox1 = styled.div`
  height: 390px;
  width: auto;
  flex-direction: column;
  gap: 20px;
  border-radius: 12px;
  background: linear-gradient(179deg, #464646 0.74%, rgba(58, 58, 58, 0.15) 185.9%);
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 20px;
  overflow: visible;
`;

export const MobileBoxHeader = styled(Heading3)`
  font-weight: bold;
  color: var(--primary-blue-3, #02daff);
  color: ${(props) => props.color || '#02daff'};
`;

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
  font-family: Prompt;
`;

export const MobileBoxContent = styled.div`
  display: flex;
  height: 193px;
  padding: 0px 8px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 13px;
  flex-shrink: 0;
`;

export const MobileDetail = styled(Heading4)`
  color: #fff;
`;

export const MobileHead = styled.div`
  display: flex;
  padding: 12px 16px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  align-self: stretch;
  border-radius: 8px;
`;

export const MobileSubContent = styled.div`
  color: #c7c7c7;
  font-size: 14px;
`;

export const MobileSubBar = styled.div`
  width: 228px;
  font-size: 14px;
  height: 15.95px;
  flex-shrink: 0;
  border-radius: 14.4px;
  width: ${(props) => props.width || '228px'};
  background: ${(props) => props.background || '#02daff'};

  @media (max-width: 319px) {
    width: ${(props) => props.width1 || '228px'};
  }
`;

export const StatNumber = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 8px;
  color: #fff;
  font-size: 14px;
  padding-top: 2px;
`;
