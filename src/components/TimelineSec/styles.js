import styled from 'styled-components';
import { Heading3, Heading4, Body2, Heading1 } from '../shared';

export const ProgressBar = styled.div`
  display: none;
  width: 39px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #191919;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const Progress = styled(ProgressBar)`
  position: relative;
  background: #14f195;
  height: ${(props) => `${props.height}%`};
`;

export const Branch = styled.div`
  display: none;
  width: 135px;
  height: 4px;
  flex-shrink: 0;
  background: var(--Primary-Yellow-2, #fed954);
  @media (min-width: 768px) {
    display: block;
  }
`;
export const MobileBranch = styled.div`
  display: block;
  height: 57px;
  width: 4px;
  flex-shrink: 0;
  background: var(--Primary-Yellow-2, #fed954);
  @media (min-width: 768px) {
    display: none;
  }
`;
export const Box = styled.div`
  display: flex;
  padding: 26px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-radius: 20px;
  border: 0.4px solid ${(props) => props.color};
  @media (min-width: 768px) {
    gap: 16px;
  }
`;
export const BoxHeading = styled(Heading3)`
  color: ${(props) => props.color};
`;
export const Duration = styled(Heading4)`
  color: var(--Neutral-2, #ededed);
`;
export const Description = styled(Body2)`
  color: var(--Neutral-4, #c3c3c3);
`;
export const TimelineHead = styled(Heading1)`
  font-weight: 700;
  margin: 0 auto 24px auto;
  @media (max-width: 640px) {
    font-size: 32px;
    line-height: 96px;
    margin: 0 auto;
  }
`;
