import styled from 'styled-components';

import { Caption, Heading4, Heading1, Heading3 } from '../shared';

export const Heading = styled(Heading1)`
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  margin: 0 auto;

  @media (max-width: 1145px) {
    font-size: 24px;
    font-style: normal;
  }
`;

export const SectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
`;

export const SectionImage = styled.img`
  width: 100%;
  max-width: 700px;
  max-height: 500px;
  position: relative;
  right: 50px;

  @media (max-width: 1145px) {
    display: none;
  }
`;

export const SectionCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 67px 30px;
  position: relative;
  left: -200px;

  width: 100%;

  @media (max-width: 1145px) {
    left: 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SectionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 355px;
  height: 442px;
  padding-right: 9px;
  padding-top: 30px;

  padding-bottom: 70px;
  gap: 16px;
  border-radius: 12px;
  background: var(--Bg, linear-gradient(180deg, #464646 0%, rgba(58, 58, 58, 0.15) 100%));

  @media (max-width: 1145px) {
    width: 320px;
  }
`;

export const ProgressNumber = styled.div`

width: 94px
height: 42px
font-family: Prompt;
font-size: 28px;
font-weight: 500;
line-height: 42px;
color: ${(props) => props.color || '#02daff'};
text-align: center;


`;

export const BoxContent = styled.div`
  gap: 21px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`;

export const BoxSubContent = styled(Caption)`
  line-height: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin-bottom: 3px;
  color: var(--Neutral-2, #ededed);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 200% */
`;

export const BoxText = styled.div`
  display: flex;
  padding: 32px 16px;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
  border-radius: 8px;
`;

export const SectionContainer = styled.div`
  margin: 10px auto;
  max-width: 1540px;
  width: 100%;
  height: auto;
`;
