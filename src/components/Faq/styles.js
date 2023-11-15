import styled, { keyframes } from 'styled-components';
import { Caption, Heading4, Body1, Heading1 } from '../shared';

const rotateOut = keyframes`
  from { transform: rotate(-45deg);
  }to {transform: rotate(0deg);
  }
`;
export const FAQHeading = styled(Heading1)`
  @media (max-width: 335px) {
    text-align: center;
    font-size: 10px;
    font-weight: 600;
    line-height: 64px;
  }
  @media (max-width: 396px) and (min-width: 336px) {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    line-height: 64px;
  }
  @media (max-width: 768px) and (min-width: 397px) {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    line-height: 64px;
  }
`;
export const FAQContainer = styled.div`
  width: 90%;
  margin: 2% auto 70% auto;
  gap: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;
export const FAQCaption = styled(Heading4)`
  margin-top: -30px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;
export const FAQQuestionContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  transition: max-height 1s ease-in-out;
  @media (max-width: 768px) {
    gap: 16px;
    padding: 8px;
    align-items: center;
  }
`;
export const FAQQuestion = styled(Body1)`
  display: flex;
  flex-direction: column;
  padding: 16px 36px;
  align-items: flex-start;
  gap: 404px;
  border-radius: 16px;
  border: 2px solid var(--neutral-3, #d9d9d9);
  gap: 36px;
  cursor: pointer;
  &.opened {
    border: 2px solid var(--color-primary-blue);
    background: rgba(0, 0, 255, 0.1);
  }
  @media (max-width: 768px) {
    font-size: 16px;
    border-radius: 12px;
    border: 2px solid var(--neutral-3, #d9d9d9);
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    padding: 16px 24px;
  }
`;
export const FAQIcon = styled.div`
  transition: transform 0.5s;
  display: flex;
  align-items: center;
  &.closing {
    animation: ${rotateOut} 0.25s;
  }
  &.opened {
    transform: rotate(45deg);
  }
`;
export const FAQAnswer = styled(Caption)`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  margin-top: -25px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  height: auto;
  position: relative;
  transition: 0.5s;
`;
export const FAQQuestionText = styled.div`
  height: auto;
  position: relative;
`;
export const FAQDiv = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;
