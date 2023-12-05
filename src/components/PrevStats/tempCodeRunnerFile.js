import styled from 'styled-components';

import { Caption, Heading4, Body1, Heading1, Heading3, Body2 } from '../shared';

export const Heading = styled(Heading1)`
  font-weight: bold;
  display: flex;
  align-text: center;
  justify-content: center;
  padding-bottom: 30px;
  margin: 0 auto;
`;

export const SectionContent = styled.div`
  display: flex;
  padding-right: 49vw;

  @media (max-width: 1270px) {
    padding-right: 60vw;
  }

  @media (max-width: 1123px) {
    opacity: 0;
  }
`;

export const SectionImage = styled.img`
  max-width: 998 px;
  height: auto;
  aspect-ratio: 4 / 3;

  @media (max-width: 1007px) {
    visibility: hidden;
  }
`;

export const SectionCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Add this line to center vertically */
  gap: 33px;
`;

export const BoxSubDetail = styled(Body1)`
  width: 23px;
  height: 19px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--primary-pink-2, #ff65cd);
  margin-bottom: 2px;
  transition: width 0.5s ease-in-out;
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
  top: -5%;
`;

export const SectionBox = styled.div`
  display: flex;
  position: relative;
  width: 486px;
  padding: 12px 24px 12px 6px;
  align-items: flex-start;
  gap: 16px;
  border-radius: 12px;
  background: var(--Bg, linear-gradient(180deg, #464646 0%, rgba(58, 58, 58, 0.15) 100%));
  transition: width 0.5s ease-in-out;

  &:hover {
    width: 90%;

    ${BoxSubDetail} {
      width: 70%;
    }

    ${ProgressNumber} {
      opacity: 1;
    }
  }
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

export const BoxContent = styled.div`
  flex-shrink: 0;
  gap: 19px;
  padding: 10px;
`;

export const BoxSubContent = styled(Caption)`
  width: 399px;
  height: 39px;
  top: 12px;
  left: 339px;
  border-radius: 20px;
`;

export const SectionContainer = styled.div`
  margin: 10px auto;
  max-width: 1440px;
  width: 100%;
  height: auto;
`;

export const MobileBox1 = styled.div`
  display: inline-flex;
  height: 352px;
  padding: 12px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 12px;
  background: linear-gradient(179deg, #464646 0.74%, rgba(58, 58, 58, 0.15) 185.9%);
  padding-left: 40px;
  padding-right: 40px;
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
  justify-content: center; /* Add this line to center vertically */
  gap: 20px;
`;

export const MobileBoxContent = styled.div`
  display: flex;
  height: 183px;
  padding: 0px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex-shrink: 0;
`;

export const MobileDetail = styled(Body2)`
  color: white;
`;

export const MobileHead = styled.div`
  display: flex;
  padding: 12px 16px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
`;

export const MobileSubContent = styled.div``;

export const MobileSubBar = styled.div`
  width: 228px;
  height: 15.95px;
  flex-shrink: 0;
  border-radius: 14.4px;
  background: var(--primary-blue-2, #35e1ff);
`;

export const StatNumber = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 8px;
`;
